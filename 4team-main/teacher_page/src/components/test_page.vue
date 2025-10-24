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
          <router-link to="/profile" class="nav-link" :class="{ active: $route.name === 'Profile' }">
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
          <router-link to="/test_page" class="nav-link active">
            <i>📝</i>
            <span>Тесты</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Основное содержимое -->
    <div class="main-content">
      <div class="tests-container">
        <div class="page-header">
          <h1>Тесты и проверка знаний</h1>
          <p>Вы попали на страницу тестов, где вы сможете проверить свой уровень и повысить свои навыки</p>
        </div>

        <div class="intro-section">
          <h2>Проверьте свои знания</h2>
          <p>Наша платформа предлагает широкий выбор тестов по различным предметам и темам. Регулярное прохождение тестов поможет вам:</p>
          <p>• Определить сильные и слабые стороны</p>
          <p>• Закрепить пройденный материал</p>
          <p>• Подготовиться к экзаменам и контрольным работам</p>
          <p>• Отслеживать свой прогресс в обучении</p>
        </div>

        <div class="filters">
          <button 
            class="filter-btn" 
            :class="{ active: currentFilter === 'all' }"
            @click="setFilter('all')"
          >
            Все тесты
          </button>
          <button 
            class="filter-btn"
            :class="{ active: currentFilter === 'programming' }"
            @click="setFilter('programming')"
          >
            Программирование
          </button>
          <button 
            class="filter-btn"
            :class="{ active: currentFilter === 'math' }"
            @click="setFilter('math')"
          >
            Математика
          </button>
          <button 
            class="filter-btn"
            :class="{ active: currentFilter === 'languages' }"
            @click="setFilter('languages')"
          >
            Языки
          </button>
          <button 
            class="filter-btn"
            :class="{ active: currentFilter === 'science' }"
            @click="setFilter('science')"
          >
            Наука
          </button>
        </div>

        <!-- Состояние загрузки -->
        <div v-if="loading" class="loading-state">
          <div class="spinner"></div>
          <p>Загрузка тестов...</p>
        </div>

        <!-- Состояние ошибки -->
        <div v-else-if="error" class="error-state">
          <i>⚠️</i>
          <h3>Ошибка загрузки</h3>
          <p>{{ error }}</p>
          <button @click="fetchTests" class="retry-btn">Попробовать снова</button>
        </div>

        <!-- Сетка тестов -->
        <div v-else class="tests-grid">
          <!-- Тест из базы данных -->
          <div 
            v-for="test in filteredTests" 
            :key="test.id" 
            class="test-card"
          >
            <div class="test-header">
              <div>
                <h3 class="test-title">{{ test.title }}</h3>
                <span 
                  class="test-difficulty" 
                  :class="getDifficultyClass(test.difficulty || 'medium')"
                >
                  {{ getDifficultyText(test.difficulty || 'medium') }}
                </span>
              </div>
              <button 
                class="favorite-btn" 
                :class="{ active: test.isFavorite }"
                @click="toggleFavorite(test.id)"
              >
                {{ test.isFavorite ? '★' : '☆' }}
              </button>
            </div>
            <p class="test-description">{{ test.description || 'Описание теста' }}</p>
            <div class="test-meta">
              <span>{{ getQuestionCountText(test.questionCount) }}</span>
              <span>{{ test.timeLimitMinutes || 30 }} минут</span>
            </div>
            <div class="test-progress">
              <div 
                class="progress-fill" 
                :style="{ width: getProgressWidth(test.progress) }"
              ></div>
            </div>
            <div class="test-footer">
              <span class="progress-text">{{ getProgressText(test.progress) }}</span>
              <button 
                class="btn-start" 
                @click="startTest(test.id)"
              >
                {{ getButtonText(test.progress) }}
              </button>
            </div>
          </div>

          <!-- Состояние пустого списка -->
          <div v-if="filteredTests.length === 0" class="empty-state">
            <i>📝</i>
            <h3>Тесты не найдены</h3>
            <p>По выбранному фильтру нет доступных тестов</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'TestPage',
  data() {
    return {
      tests: [],
      loading: false,
      error: null,
      currentFilter: 'all',
      favorites: new Set() // Для хранения избранных тестов
    }
  },
  computed: {
    filteredTests() {
      if (this.currentFilter === 'all') {
        return this.tests;
      }
      
      // Здесь можно добавить логику фильтрации по категориям
      // Пока возвращаем все тесты, так как у вас в API нет категорий
      return this.tests;
    }
  },
  methods: {
    async fetchTests() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await fetch('/api/Test');
        
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        const tests = await response.json();
        
        // Преобразуем данные из API в формат компонента
        this.tests = tests.map(test => ({
          id: test.id,
          title: test.title,
          description: test.description,
          timeLimitMinutes: test.timeLimitMinutes,
          passingScore: test.passingScore,
          difficulty: this.calculateDifficulty(test),
          questionCount: this.estimateQuestionCount(test),
          progress: this.getUserProgress(test.id), // Здесь нужно получить реальный прогресс пользователя
          isFavorite: this.favorites.has(test.id)
        }));
        
      } catch (error) {
        console.error('Ошибка загрузки тестов:', error);
        this.error = 'Не удалось загрузить тесты. Проверьте подключение к серверу.';
        
        // Для демонстрации, если API недоступно
        if (this.tests.length === 0) {
          this.loadSampleData();
        }
      } finally {
        this.loading = false;
      }
    },
 calculateDifficulty(test) {
      // Логика определения сложности на основе данных теста
      if (test.passingScore >= 80) return 'hard';
      if (test.passingScore >= 60) return 'medium';
      return 'easy';
    },

    estimateQuestionCount(test) {
      // Оценка количества вопросов на основе времени
      return Math.floor(test.timeLimitMinutes / 2);
    },

    getUserProgress(testId) {
      // Здесь должна быть логика получения прогресса пользователя
      // Временная реализация - случайный прогресс для демонстрации
      const progress = localStorage.getItem(`test_progress_${testId}`);
      return progress ? parseInt(progress) : 0;
    },

    setFilter(filter) {
      this.currentFilter = filter;
    },

    toggleFavorite(testId) {
      if (this.favorites.has(testId)) {
        this.favorites.delete(testId);
      } else {
        this.favorites.add(testId);
      }
      
      // Обновляем состояние в тестах
      const test = this.tests.find(t => t.id === testId);
      if (test) {
        test.isFavorite = this.favorites.has(testId);
      }
    },

    startTest(testId) {
      console.log(`Начинаем тест с ID: ${testId}`);
      // Здесь можно добавить логику для начала теста
      // Например, переход на страницу конкретного теста
      this.$router.push(`/test/${testId}`);
    },

    getDifficultyClass(difficulty) {
      switch (difficulty) {
        case 'easy': return 'difficulty-easy';
        case 'medium': return 'difficulty-medium';
        case 'hard': return 'difficulty-hard';
        default: return 'difficulty-medium';
      }
    },

    getDifficultyText(difficulty) {
      switch (difficulty) {
        case 'easy': return 'Лёгкий';
        case 'medium': return 'Средний';
        case 'hard': return 'Сложный';
        default: return 'Средний';
      }
    },

    getQuestionCountText(count) {
      if (!count) return 'Вопросы не указаны';
      const lastDigit = count % 10;
      const lastTwoDigits = count % 100;
      
      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${count} вопросов`;
      }
      
      if (lastDigit === 1) {
        return `${count} вопрос`;
      } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${count} вопроса`;
      } else {
        return `${count} вопросов`;
      }
    },

    getProgressWidth(progress) {
      return `${progress}%`;
    },

    getProgressText(progress) {
      if (progress === 0) return 'Не начат';
      if (progress === 100) return 'Завершено';
      return `${progress}% завершено`;
    },

    getButtonText(progress) {
      if (progress === 0) return 'Начать тест';
      if (progress === 100) return 'Повторить';
      return 'Продолжить';
    }
  },
  mounted() {
    this.fetchTests();
    console.log('Страница тестов загружена');
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

.tests-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    padding: 40px;
    max-width: 1000px;
    margin: 0 auto;
    transition: transform 0.3s ease;
}

.tests-container:hover {
    transform: translateY(-5px);
}

.page-header {
    text-align: center;
    margin-bottom: 40px;
}

.page-header h1 {
    color: #2e8b57;
    font-size: 32px;
    margin-bottom: 15px;
}

.page-header p {
    color: #666;
    font-size: 18px;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
}

.intro-section {
    background: #f9f9f9;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    border-left: 4px solid #2e8b57;
}

.intro-section h2 {
    color: #2e8b57;
    margin-bottom: 15px;
    font-size: 24px;
}

.intro-section p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
}

.filters {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 8px 16px;
    background: #f0f0f0;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
}

.filter-btn.active, .filter-btn:hover {
    background: #2e8b57;
    color: white;
}

.tests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
}

.test-card {
    background: #f9f9f9;
    border-radius: 15px;
    padding: 25px;
    transition: all 0.3s ease;
    position: relative;
    border: 1px solid #e0e0e0;
}

.test-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.test-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
}

.test-title {
    color: #2e8b57;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
}

.favorite-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #ccc;
    transition: all 0.3s ease;
    padding: 5px;
}

.favorite-btn.active {
    color: #ffd700;
}

.favorite-btn:hover {
    transform: scale(1.2);
}

.test-difficulty {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
}

.difficulty-easy {
    background: #e8f5e9;
    color: #2e7d32;
}

.difficulty-medium {
    background: #fff3e0;
    color: #ef6c00;
}

.difficulty-hard {
    background: #ffebee;
    color: #c62828;
}

.test-description {
    color: #666;
    margin-bottom: 15px;
    line-height: 1.5;
    font-size: 14px;
}

.test-meta {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #888;
    margin-bottom: 15px;
}

.test-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-start {
    background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-start:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(46, 139, 87, 0.3);
}

.test-progress {
    width: 100%;
    height: 5px;
    background: #e0e0e0;
    border-radius: 5px;
    margin: 10px 0;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
    border-radius: 5px;
}

.progress-text {
    font-size: 12px;
    color: #666;
    text-align: right;
}

.empty-state {
    text-align: center;
    padding: 40px;
    color: #666;
}

.empty-state i {
    font-size: 50px;
    margin-bottom: 15px;
    display: block;
    color: #ccc;
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
        padding: 15px;
    }
    
    .tests-container {
        padding: 20px;
    }
    
    .tests-grid {
        grid-template-columns: 1fr;
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

.empty-state {
  text-align: center;
  padding: 40px;
  color: #666;
  grid-column: 1 / -1;
}

.empty-state i {
  font-size: 50px;
  margin-bottom: 15px;
  display: block;
  color: #ccc;
}
}
</style>