<template>
  <body>
    <!-- Боковое меню -->
    <div class="sidebar">
      <div class="logo">
        <h1>Образовательная система</h1>
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/main" class="nav-link" :class="{ active: $route.name === 'Main' }">
            <i>🏠</i>
            <span>Главное меню</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link active">
            <i>👤</i>
            <span>Профиль</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/history_page" class="nav-link" :class="{ active: $route.name === 'History_page' }">
            <i>📊</i>
            <span>История</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/favorite_page" class="nav-link" :class="{ active: $route.name === 'Favorite_page' }">
            <i>⭐</i>
            <span>Избранное</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/test_page" class="nav-link" :class="{ active: $route.name === 'Test_page' }">
            <i>📝</i>
            <span>Тесты</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Основное содержимое -->
    <div class="main-content">
      <div class="profile-container">
        <!-- Состояние загрузки -->
        <div v-if="loading" class="loading-state">
          <div class="spinner"></div>
          <p>Загрузка профиля...</p>
        </div>

        <!-- Состояние ошибки -->
        <div v-else-if="error" class="error-state">
          <i>⚠️</i>
          <h3>Ошибка загрузки</h3>
          <p>{{ error }}</p>
          <button @click="loadUserData" class="retry-btn">Попробовать снова</button>
        </div>

        <!-- Данные профиля -->
        <div v-else-if="user" class="profile-content">
          <div class="profile-header">
            <div class="avatar">{{ getInitials }}</div>
            <div class="user-info">
              <h2>{{ fullName }}</h2>
              <p>{{ userRole }} </p>
              <div class="user-id">ID: #{{ user.id }}</div>
            </div>
          </div>

          <div class="stats-container">
            <div class="stat-card">
              <div class="stat-value">{{ userStats.solvedTasks }}</div>
              <div class="stat-label">Решенных задач</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">{{ userStats.successRate }}%</div>
              <div class="stat-label">Успеваемость</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">{{ userStats.completedTests }}</div>
              <div class="stat-label">Пройденных тестов</div>
            </div>
          </div>
        
          <div class="contact-info">
            <h3>Контактная информация</h3>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div class="contact-details">
                <div class="contact-label">Электронная почта</div>
                <div class="contact-value">{{ user.email }}</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">👤</div>
              <div class="contact-details">
                <div class="contact-label">Роль</div>
                <div class="contact-value">{{ userRole }}</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📅</div>
              <div class="contact-details">
                <div class="contact-label">Дата регистрации</div>
                <div class="contact-value">{{ formatDate(user.createdAt) }}</div>
              </div>
            </div>
          </div>

          <!-- Кнопки действий -->
          <div class="action-buttons">
            <button @click="editProfile" class="btn-edit">Редактировать профиль</button>
            <button @click="changePassword" class="btn-change-password">Сменить пароль</button>
            <button @click="logout" class="btn-logout">Выйти</button>
          </div>
        </div>

        <!-- Состояние неавторизованного пользователя -->
        <div v-else class="not-authorized">
          <i>🔒</i>
          <h3>Не авторизован</h3>
          <p>Пожалуйста, войдите в систему</p>
          <router-link to="/" class="btn-login">Войти</router-link>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Profile',
  data() {
    return {
      user: null,
      userStats: {
        solvedTasks: 0,
        successRate: 0,
        completedTests: 0,
        learningProgress: 0
      },
      loading: false,
      error: null
    }
  },
  computed: {
    fullName() {
      if (!this.user) return ''
      return `${this.user.lastName} ${this.user.firstName} ${this.user.patronymic || ''}`.trim()
    },
    getInitials() {
      if (!this.user) return '??'
      const first = this.user.firstName ? this.user.firstName[0] : ''
      const last = this.user.lastName ? this.user.lastName[0] : ''
      return (first + last).toUpperCase() || 'US'
    },
    userRole() {
      if (!this.user) return 'Пользователь'
      const roles = {
        1: 'Администратор',
        2: 'Преподаватель',
        3: 'Студент'
      }
      return roles[this.user.roleId] || 'Студент'
    },
  },
  methods: {
    async loadUserData() {
      this.loading = true
      this.error = null

      try {
        // Получаем текущего пользователя из localStorage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        
        if (!currentUser || !currentUser.id) {
          throw new Error('Пользователь не авторизован')
        }

        console.log('Загрузка данных пользователя с ID:', currentUser.id)

        // Загружаем профиль пользователя
        const profileResponse = await axios.get(`/api/User/Profile/${currentUser.id}`)
        this.user = profileResponse.data

        console.log('Данные профиля загружены:', this.user)

        // Загружаем статистику пользователя
        await this.loadUserStats(currentUser.id)

      } catch (error) {
        console.error('Ошибка загрузки профиля:', error)
        
        if (error.response?.status === 401 || error.message.includes('не авторизован')) {
          this.error = 'Вы не авторизованы. Пожалуйста, войдите в систему.'
          // Перенаправляем на страницу входа
          setTimeout(() => {
            this.$router.push('/')
          }, 2000)
        } else if (error.response?.status === 404) {
          this.error = 'Профиль пользователя не найден'
        } else {
          this.error = 'Не удалось загрузить данные профиля. Проверьте подключение к серверу.'
        }
      } finally {
        this.loading = false
      }
    },

    async loadUserStats(userId) {
      try {
        // Загружаем результаты тестов пользователя
        const resultsResponse = await axios.get(`/api/User/MyResults/${userId}`)
        const results = resultsResponse.data || []

        // Вычисляем статистику
        this.userStats.completedTests = results.length
        this.userStats.solvedTasks = results.reduce((total, result) => {
          // Предполагаем, что каждый тест содержит в среднем 10 задач
          return total + 10
        }, 0)

        // Вычисляем успеваемость
        if (results.length > 0) {
          const totalScore = results.reduce((sum, result) => sum + (result.scoreAchieved || 0), 0)
          const maxScore = results.reduce((sum, result) => sum + (result.maxScore || 100), 0)
          this.userStats.successRate = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
        }

        // Прогресс обучения (можно настроить логику)
        this.userStats.learningProgress = Math.min(this.userStats.completedTests * 10, 100)

        console.log('📊 Статистика загружена:', this.userStats)

      } catch (error) {
        console.error('Ошибка загрузки статистики:', error)
        
      }
    },

    formatDate(dateString) {
      if (!dateString) return 'Не указана'
      try {
        const date = new Date(dateString)
        return date.toLocaleDateString('ru-RU')
      } catch {
        return 'Не указана'
      }
    },

    editProfile() {
      alert('Ошибка')
      // this.$router.push('/edit-profile')
    },

    changePassword() {
      alert('Ошибка')
      // this.$router.push('/change-password')
    },

    logout() {
      if (confirm('Вы уверены, что хотите выйти?')) {
        // Очищаем данные авторизации
        localStorage.removeItem('currentUser')
        localStorage.removeItem('isLoggedIn')
        
        // Перенаправляем на страницу входа
        this.$router.push('/')
        
        console.log('Пользователь вышел из системы')
      }
    }
  },
  mounted() {
    this.loadUserData()
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
}

/* Стили для бокового меню */
.sidebar {
    width: 250px;
    background: white;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
}

.logo {
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 20px;
}

.logo h1 {
    color: #2e8b57;
    font-size: 22px;
    font-weight: 600;
}

.nav-menu {
    list-style: none;
    padding: 0 15px;
}

.nav-item {
    margin-bottom: 5px;
}

.nav-link {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    color: #555;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.nav-link:hover, .nav-link.active {
    background: rgba(46, 139, 87, 0.1);
    color: #2e8b57;
}

.nav-link i {
    margin-right: 10px;
    font-size: 18px;
}

/* Основное содержимое */
.main-content {
    flex: 1;
    margin-left: 250px;
    padding: 30px;
}

.profile-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
    transition: transform 0.3s ease;
}

.profile-container:hover {
    transform: translateY(-5px);
}

.profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #f0f0f0;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 40px;
    font-weight: bold;
    margin-right: 25px;
}

.user-info h2 {
    color: #2e8b57;
    font-size: 28px;
    margin-bottom: 5px;
}

.user-info p {
    color: #666;
    font-size: 16px;
}

.user-id {
    background: #f5f7fa;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    color: #555;
    display: inline-block;
    margin-top: 5px;
}

.stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.stat-card {
    background: #f9f9f9;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    border-left: 4px solid #2e8b57;
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.stat-value {
    font-size: 32px;
    font-weight: bold;
    color: #2e8b57;
    margin-bottom: 5px;
}

.stat-label {
    color: #666;
    font-size: 14px;
}

.contact-info {
    background: #f9f9f9;
    border-radius: 15px;
    padding: 25px;
    margin-top: 30px;
}

.contact-info h3 {
    color: #2e8b57;
    margin-bottom: 15px;
    font-size: 20px;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.contact-item:last-child {
    margin-bottom: 0;
}

.contact-icon {
    width: 40px;
    height: 40px;
    background: #2e8b57;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 15px;
}

.contact-details {
    flex: 1;
}

.contact-label {
    font-size: 14px;
    color: #666;
}

.contact-value {
    font-size: 16px;
    color: #333;
    font-weight: 500;
}

.progress-section {
    margin-top: 30px;
}

.progress-section h3 {
    color: #2e8b57;
    margin-bottom: 15px;
    font-size: 20px;
}

.progress-bar {
    height: 10px;
    background: #e0e0e0;
    border-radius: 5px;
    margin-bottom: 30px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
    border-radius: 5px;
}

/* Адаптивность */
@media (max-width: 768px) {
    .sidebar {
        width: 70px;
        overflow: hidden;
    }
    
    .logo h1, .nav-link span {
        display: none;
    }
    
    .nav-link {
        justify-content: center;
        padding: 15px;
    }
    
    .nav-link i {
        margin-right: 0;
    }
    
    .main-content {
        margin-left: 70px;
    }
    
    .profile-header {
        flex-direction: column;
        text-align: center;
    }
    
    .avatar {
        margin-right: 0;
        margin-bottom: 15px;
    }
    
    .stats-container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .profile-container {
        padding: 20px;
    }
    
    .main-content {
        padding: 15px;
    }
}

/* Добавляем стили для состояний загрузки и ошибки */
.loading-state {
  text-align: center;
  padding: 40px;
  color: #666;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #2e8b57;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-state {
  text-align: center;
  padding: 40px;
  color: #d63031;
  background: #ffeaa7;
  border-radius: 15px;
  margin: 20px 0;
}

.error-state i {
  font-size: 50px;
  margin-bottom: 15px;
  display: block;
}

.retry-btn {
  background: #2e8b57;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  background: #3cb371;
  transform: translateY(-2px);
}

.not-authorized {
  text-align: center;
  padding: 40px;
  color: #666;
}

.not-authorized i {
  font-size: 50px;
  margin-bottom: 15px;
  display: block;
}

.btn-login {
  background: #2e8b57;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin-top: 15px;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background: #3cb371;
  transform: translateY(-2px);
}

.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.btn-edit, .btn-change-password, .btn-logout {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.btn-edit {
  background: #2e8b57;
  color: white;
}

.btn-change-password {
  background: #f39c12;
  color: white;
}

.btn-logout {
  background: #e74c3c;
  color: white;
}

.btn-edit:hover, .btn-change-password:hover, .btn-logout:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

/* Адаптивность для кнопок действий */
@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
  }
  
  .btn-edit, .btn-change-password, .btn-logout {
    width: 100%;
  }
}
</style>