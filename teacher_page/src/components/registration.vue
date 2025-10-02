<!-- components/registration.vue -->
<template>
  <div class="register-container">
        <div class="logo">
            <h1>Образовательная система</h1>
            <p>Создайте новый аккаунт</p>
        </div>
        
        <form id="registerForm">
            <div class="form-group">
                <label for="firstName">Имя</label>
                <input type="text" id="firstName" name="firstName" placeholder="Введите ваше имя" required>
            </div>
            
            <div class="form-group">
                <label for="lastName">Фамилия</label>
                <input type="text" id="lastName" name="lastName" placeholder="Введите вашу фамилию" required>
            </div>
            
            <div class="form-group">
                <label for="middleName">Отчество</label>
                <input type="text" id="middleName" name="middleName" placeholder="Введите ваше отчество">
                <div class="checkbox-group">
                    <input type="checkbox" id="noMiddleName">
                    <label for="noMiddleName">У меня нет отчества</label>
                </div>
            </div>
            
            <div class="form-group">
                <label for="email">Электронная почта</label>
                <input type="email" id="email" name="email" placeholder="ваш@email.com" required>
            </div>
            
            <div class="form-group">
                <label for="password">Пароль</label>
                <div class="input-with-icon">
                    <input type="password" id="password" name="password" placeholder="Придумайте пароль" required>
                    <button type="button" class="password-toggle" id="togglePassword">👁️</button>
                </div>
            </div>
            
            <div class="form-group">
                <label for="confirmPassword">Подтверждение пароля</label>
                <div class="input-with-icon">
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Повторите пароль" required>
                    <button type="button" class="password-toggle" id="toggleConfirmPassword">👁️</button>
                </div>
                <div class="error-message" id="passwordError">Пароли не совпадают</div>
                <div class="success-message" id="passwordSuccess">Пароли совпадают</div>
            </div>
            
            <button type="submit" class="btn-register">Зарегистрироваться</button>
        </form>
        
        <div class="divider">
            <span>или</span>
        </div>
        
        <button class="btn-login" @click="GoToAutho">У меня уже есть аккаунт</button>
    </div>
</template>

<script>
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
      passwordsMatch: false
    }
  },
  computed: {
    isFormValid() {
      return this.formData.firstName && 
             this.formData.lastName && 
             this.formData.email && 
             this.formData.password && 
             this.formData.confirmPassword && 
             this.passwordsMatch;
    }
  },
  watch: {
    // Автоматически очищаем отчество при включении чекбокса
    'formData.noMiddleName': function(newVal) {
      if (newVal) {
        this.formData.middleName = '';
      }
    }
  },
  methods: {
    // Переключение видимости пароля
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    
    // Переключение видимости подтверждения пароля
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    
    // Проверка совпадения паролей
    checkPasswords() {
      if (this.formData.confirmPassword === '') {
        this.passwordsMatch = false;
        return;
      }
      
      this.passwordsMatch = this.formData.password === this.formData.confirmPassword;
    },
    GoToAutho() {
      // ПЕРЕХОД НА СТРАНИЦУ РЕГИСТРАЦИИ
      this.$router.push('/');
    },
    
    // Обработка формы регистрации
    handleRegister() {
      // Проверка совпадения паролей
      if (!this.passwordsMatch) {
        alert('Пароли не совпадают!');
        return;
      }
      
      // Логика регистрации через Vue
      console.log('Регистрационные данные:', this.formData);
      
      // Пример успешной регистрации
      alert('Регистрация прошла успешно! Добро пожаловать в систему!');
      
      // Очистка формы после отправки
      this.resetForm();
      
      // Переход на страницу авторизации (опционально)
      // this.$router.push('/');
    },
    
    // Сброс формы
    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        password: '',
        confirmPassword: '',
        noMiddleName: false
      };
      this.showPassword = false;
      this.showConfirmPassword = false;
      this.passwordsMatch = false;
    }
  }
}

</script>

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

.btn-register:hover {
    background: linear-gradient(135deg, #267349 0%, #32a162 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(46, 139, 87, 0.3);
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
    display: none;
}

.success-message {
    color: #2e8b57;
    font-size: 14px;
    margin-top: 5px;
    display: none;
}

@media (max-width: 480px) {
    .register-container {
        padding: 30px 20px;
    }
    
    .logo h1 {
        font-size: 24px;
    }
}
.password-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.password-input-wrapper input {
  padding-right: 50px;
  width: 100%;
}

.toggle-password {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.checkbox-group input[type="checkbox"] {
  margin-right: 8px;
  width: auto;
}

.password-message {
  margin-top: 8px;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
}

.success-message {
  color: #2e8b57;
  font-size: 14px;
}

.btn-register:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-register:disabled:hover {
  transform: none;
  box-shadow: none;
}
</style>