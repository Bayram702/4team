<!-- components/registration.vue -->
<template>
  <div class="register-container">
    <div class="logo">
      <h1>Образовательная система</h1>
      <p>Создайте новый аккаунт</p>
    </div>
    
    <form id="registerForm" @submit="handleRegister">
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input v-model="formData.firstName" type="text" id="firstName" name="firstName" placeholder="Введите ваше имя" required>
      </div>
      
      <div class="form-group">
        <label for="lastName">Фамилия</label>
        <input v-model="formData.lastName" type="text" id="lastName" name="lastName" placeholder="Введите вашу фамилию" required>
      </div>
      
      <div class="form-group">
        <label for="middleName">Отчество</label>
        <input v-model="formData.middleName" type="text" id="middleName" name="middleName" placeholder="Введите ваше отчество">
        <div class="checkbox-group">
          <input v-model="formData.noMiddleName" type="checkbox" id="noMiddleName">
          <label for="noMiddleName">У меня нет отчества</label>
        </div>
      </div>
      
      <div class="form-group">
        <label for="email">Электронная почта</label>
        <input v-model="formData.email" type="email" id="email" name="email" placeholder="ваш@email.com" required>
      </div>
      
      <div class="form-group">
        <label for="password">Пароль</label>
        <div class="input-with-icon">
          <input v-model="formData.password" :type="showPassword ? 'text' : 'password'" id="password" name="password" placeholder="Придумайте пароль" required>
          <button type="button" class="password-toggle" @click="togglePasswordVisibility">👁️</button>
        </div>
      </div>
      
      <div class="form-group">
        <label for="confirmPassword">Подтверждение пароля</label>
        <div class="input-with-icon">
          <input v-model="formData.confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword" name="confirmPassword" placeholder="Повторите пароль" required>
          <button type="button" class="password-toggle" @click="toggleConfirmPasswordVisibility">👁️</button>
        </div>
        <div v-if="formData.confirmPassword && !passwordsMatch" class="error-message">Пароли не совпадают</div>
        <div v-if="formData.confirmPassword && passwordsMatch" class="success-message">Пароли совпадают</div>
      </div>
      
      <button type="submit" class="btn-register" :disabled="loading || !isFormValid">
        {{ loading ? 'Регистрация...' : 'Зарегистрироваться' }}
      </button>
    </form>
    
    <div class="divider">
      <span>или</span>
    </div>
    
    <button class="btn-login" @click="GoToAutho">У меня уже есть аккаунт</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Registration',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        password: '',
        confirmPassword: '',
        noMiddleName: false
      },
      showPassword: false,
      showConfirmPassword: false,
      passwordsMatch: false,
      loading: false
    }
  },
  computed: {
    isFormValid() {
      return (
        this.formData.firstName &&
        this.formData.lastName &&
        this.formData.email &&
        this.formData.password &&
        this.formData.confirmPassword &&
        this.passwordsMatch
      )
    }
  },
  watch: {
    'formData.noMiddleName'(newVal) {
      if (newVal) {
        this.formData.middleName = ''
      }
    },
    'formData.password'() {
      this.checkPasswords()
    },
    'formData.confirmPassword'() {
      this.checkPasswords()
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword
    },
    checkPasswords() {
      this.passwordsMatch = this.formData.password === this.formData.confirmPassword
    },
    GoToAutho() {
      this.$router.push('/')
    },
    async handleRegister(e) {
      e.preventDefault()

      if (!this.isFormValid) {
        alert('Пожалуйста, заполните все поля и убедитесь, что пароли совпадают')
        return
      }

      this.loading = true

      try {
        const patronymic = this.formData.noMiddleName ? '' : this.formData.middleName

        console.log('📤 Отправка данных регистрации:', {
          email: this.formData.email,
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          patronymic: patronymic
        })

        // 🔍 ДЕТАЛЬНЫЙ ЗАПРОС С ОБРАБОТКОЙ ОШИБОК
        const response = await axios.post('/api/User/Register', {
          email: this.formData.email,
          password: this.formData.password,
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          patronymic: patronymic
        }, {
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json'
          }
        })

        console.log('✅ Ответ сервера:', response.data)
        alert('✅ Регистрация прошла успешно! Добро пожаловать в систему!')
        this.$router.push('/') // Перенаправляем на страницу входа
        
      } catch (error) {
        // 🔍 ДЕТАЛЬНЫЙ ВЫВОД ОШИБКИ
        console.group('❌ ДЕТАЛИ ОШИБКИ РЕГИСТРАЦИИ')
        console.log('Полная ошибка:', error)
        console.log('Статус:', error.response?.status)
        console.log('Данные ошибки:', error.response?.data)
        console.log('URL:', error.config?.url)
        console.log('Метод:', error.config?.method)
        console.log('Отправленные данные:', error.config?.data)
        console.groupEnd()

        if (error.response) {
          // Сервер ответил с ошибкой
          const status = error.response.status
          const data = error.response.data
          
          if (status === 400) {
            alert('❌ Ошибка валидации: ' + (data?.message || 'Проверьте введенные данные'))
          } else if (status === 409) {
            alert('❌ Пользователь с таким email уже существует')
          } else if (status === 404) {
            alert('❌ Endpoint не найден. Проверьте URL API')
          } else if (status === 500) {
            alert('❌ Внутренняя ошибка сервера')
          } else {
            alert(`❌ Ошибка сервера: ${status} - ${data?.message || 'Неизвестная ошибка'}`)
          }
        } else if (error.request) {
          // Запрос был сделан, но ответа нет
          console.error('❌ Нет ответа от сервера. Проверьте:')
          console.error('1. Запущен ли C# API на порту 5245')
          console.error('2. Доступен ли http://localhost:5245/api/User/Register')
          alert('❌ Нет соединения с сервером. Проверьте, запущен ли API')
        } else {
          // Ошибка настройки запроса
          alert('❌ Ошибка при отправке запроса: ' + error.message)
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
/* Стили остаются без изменений */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.register-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 100%;
    max-width: 450px;
    transition: transform 0.3s ease;
    margin-left: 40%;
    margin-top: 2%;
}

.register-container:hover {
    transform: translateY(-5px);
}

.logo {
    text-align: center;
    margin-bottom: 30px;
}

.logo h1 {
    color: #2e8b57;
    font-size: 28px;
    font-weight: 600;
}

.logo p {
    color: #666;
    margin-top: 5px;
    font-size: 14px;
}

.form-group {
    margin-bottom: 20px;
    position: relative;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #555;
    font-weight: 500;
}

.form-group input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
    outline: none;
}

.form-group input:focus {
    border-color: #2e8b57;
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
}

.checkbox-group {
    display: flex;
    align-items: center;
    margin-top: 5px;
}

.checkbox-group input {
    width: auto;
    margin-right: 8px;
}

.checkbox-group label {
    margin-bottom: 0;
    font-size: 14px;
    color: #666;
}

.input-with-icon {
    position: relative;
}

.password-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    font-size: 18px;
}

.password-toggle:hover {
    color: #2e8b57;
}

.btn-register {
    width: 100%;
    background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
    color: white;
    border: none;
    padding: 14px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.btn-register:hover:not(:disabled) {
    background: linear-gradient(135deg, #267349 0%, #32a162 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(46, 139, 87, 0.3);
}

.btn-register:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.btn-login {
    width: 100%;
    background: transparent;
    color: #2e8b57;
    border: 2px solid #2e8b57;
    padding: 12px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 15px;
}

.btn-login:hover {
    background: #2e8b57;
    color: white;
    transform: translateY(-2px);
}

.divider {
    text-align: center;
    margin: 25px 0;
    color: #999;
    font-size: 14px;
    position: relative;
}

.divider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e0e0e0;
}

.divider span {
    background: white;
    padding: 0 15px;
    position: relative;
}

.error-message {
    color: #e74c3c;
    font-size: 14px;
    margin-top: 5px;
}

.success-message {
    color: #2e8b57;
    font-size: 14px;
    margin-top: 5px;
}

@media (max-width: 480px) {
    .register-container {
        padding: 30px 20px;
        margin-left: 0;
        margin-top: 0;
    }
    
    .logo h1 {
        font-size: 24px;
    }
}
</style>