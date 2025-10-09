<template>
  <body>
    <div class="login-container">
        <div class="logo">
            <h1>Образовательная система</h1>
            <p>Войдите в свой аккаунт</p>
        </div>
        
        <form id="loginForm">
            <div class="form-group">
                <label for="email">Электронная почта</label>
                <input type="email" id="email" name="email" placeholder="ваш@email.com" required>
            </div>
            
            <div class="form-group">
                <label for="password">Пароль</label>
                <input type="password" id="password" name="password" placeholder="Введите пароль" required>
            </div>
            
            <button type="submit" class="btn-login">Войти</button>
        </form>
        
        <div class="divider">
            <span>или</span>
        </div>
        
        <button class="btn-register" onclick="window.location.href='#'">Создать аккаунт</button>
        
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
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  mounted() {
    // Инициализируем базу данных 
    this.initDatabase();
    
    // Если пользователь уже авторизован, перенаправляем на главную
    if (this.isAuthenticated()) {
      this.redirectToMain();
    }
  },
  methods: {
    initDatabase() {
      if (!localStorage.getItem('users')) {
        const defaultUsers = [
          {
            id: 1,
            email: "admin@example.com",
            password: "admin123",
            name: "Администратор",
            role: "admin"
          },
          {
            id: 2,
            email: "user@example.com",
            password: "user123",
            name: "Обычный пользователь",
            role: "user"
          },
          {
            id: 3,
            email: "teacher@example.com", 
            password: "teacher123",
            name: "Преподаватель",
            role: "teacher"
          }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
        console.log('✅ База данных инициализирована с тестовыми пользователями');
      }
    },

    isAuthenticated() {
      return !!localStorage.getItem('currentUser');
    },

    redirectToMain() {
      this.$router.push('/main');
    },

    async handleLogin() {
      // Валидация полей
      if (!this.email || !this.password) {
        alert('Пожалуйста, заполните все поля');
        return;
      }

      this.loading = true;

      try {
        await new Promise(resolve => setTimeout(resolve, 500));

        // Получаем пользователей из localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Ищем пользователя
        const user = users.find(u => 
          u.email === this.email && u.password === this.password
        );

        if (user) {
          console.log('✅ Успешный вход:', user);
          
          // Сохраняем текущего пользователя
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('isLoggedIn', 'true');
          
          // Показываем сообщение об успехе
          alert(`Добро пожаловать, ${user.name}!`);
          
          // Переходим на главную страницу
          this.redirectToMain();
        } else {
          alert('❌ Неверный email или пароль!');
        }
      } catch (error) {
        console.error('Ошибка входа:', error);
        alert('⚠️ Произошла ошибка при входе в систему');
      } finally {
        this.loading = false;
        // Не очищаем поля при ошибке, чтобы пользователь видел что вводил
        if (!this.loading) {
          this.email = '';
          this.password = '';
        }
      }
    },

    goToRegister() {
      this.$router.push('/register');
    }
  }
}
</script>