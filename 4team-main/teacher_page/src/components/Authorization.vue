<template>
  <body>
    <div class="login-container">
        <div class="logo">
            <h1>Образовательная система</h1>
            <p>Войдите в свой аккаунт</p>
        </div>
        
        <form id="loginForm" @submit="handleLogin">
            <div class="form-group">
                <label for="email">Электронная почта</label>
                <input 
                    v-model="email" 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="ваш@email.com" 
                    required
                >
            </div>
            
            <div class="form-group">
                <label for="password">Пароль</label>
                <input 
                    v-model="password" 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Введите пароль" 
                    required
                >
            </div>
            
            <button type="submit" class="btn-login" :disabled="loading">
                {{ loading ? 'Вход...' : 'Войти' }}
            </button>
        </form>
        
        <div class="divider">
            <span>или</span>
        </div>
        
       <button class="btn-register" @click="$router.push('/register')">Создать аккаунт</button>
        
        <div class="forgot-password">
            <a href="#">Забыли пароль?</a>
        </div>
    </div>
  </body> 
</template>

<style scoped>
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

.login-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 100%;
    max-width: 400px;
    transition: transform 0.3s ease;
    margin-left: 200%;
    margin-top: 10%;
}

.login-container:hover {
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

.btn-login {
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

.btn-login:hover {
    background: linear-gradient(135deg, #267349 0%, #32a162 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(46, 139, 87, 0.3);
}

.btn-register {
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

.btn-register:hover {
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

.forgot-password {
    text-align: center;
    margin-top: 20px;
}

.forgot-password a {
    color: #2e8b57;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.forgot-password a:hover {
    color: #267349;
    text-decoration: underline;
}

@media (max-width: 480px) {
    .login-container {
        padding: 30px 20px;
    }
    
    .logo h1 {
        font-size: 24px;
    }
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async handleLogin(e) {
      e.preventDefault()

      if (!this.email || !this.password) {
        alert('Пожалуйста, заполните все поля')
        return
      }

      this.loading = true

      try {
        console.log('📤 Отправка данных входа:', {
          email: this.email,
          password: this.password
        })

       
        const response = await axios.post('/api/User/Login', {
          email: this.email,
          password: this.password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const user = response.data

        // Сохраняем данные пользователя
        localStorage.setItem('currentUser', JSON.stringify(user))
        localStorage.setItem('isLoggedIn', 'true')

        alert(`Добро пожаловать, ${user.firstName}!`)
        this.$router.push('/main')
        
      } catch (error) {
        // 🔍 ДЕТАЛЬНЫЙ ВЫВОД ОШИБКИ
        console.group('❌ ДЕТАЛИ ОШИБКИ ВХОДА')
        console.log('Полная ошибка:', error)
        console.log('Статус:', error.response?.status)
        console.log('Данные ошибки:', error.response?.data)
        console.log('URL:', error.config?.url)
        console.log('Метод:', error.config?.method)
        console.log('Отправленные данные:', error.config?.data)
        console.groupEnd()

        if (error.response) {
          const status = error.response.status
          const data = error.response.data
          
          if (status === 404) {
            alert('❌ Пользователь не найден')
          } else if (status === 400) {
            alert('❌ Неверный пароль')
          } else if (status === 500) {
            alert('❌ Внутренняя ошибка сервера')
          } else {
            alert(`❌ Ошибка: ${data?.message || 'Неизвестная ошибка'}`)
          }
        } else if (error.request) {
          alert('❌ Нет соединения с сервером. Проверьте, запущен ли API')
        } else {
          alert('❌ Ошибка при отправке запроса: ' + error.message)
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>