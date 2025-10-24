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
        <div class="history-container">
            <div class="page-header">
                <h1>История прохождения тестов</h1>
                <p>Здесь вы можете просмотреть все пройденные тесты, отслеживать свой прогресс и анализировать результаты</p>
            </div>

            <div class="stats-overview">
                <div class="stat-card">
                    <div class="stat-value">24</div>
                    <div class="stat-label">Пройденных теста</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">87%</div>
                    <div class="stat-label">Средний результат</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">15ч 42м</div>
                    <div class="stat-label">Общее время тестов</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">342</div>
                    <div class="stat-label">Правильных ответов</div>
                </div>
            </div>

            <div class="filters">
                <button class="filter-btn active">Все тесты</button>
                <button class="filter-btn">За последнюю неделю</button>
                <button class="filter-btn">За последний месяц</button>
                <button class="filter-btn">Высокий результат</button>
                <button class="filter-btn">Нужно повторить</button>
            </div>

            <div class="history-list">
                <!-- Тест 1 -->
                <div class="history-item">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Английский для IT-специалистов</h3>
                            <span class="test-date">Завершен: 15.12.2023 в 14:30</span>
                        </div>
                        <span class="test-score score-excellent">92%</span>
                    </div>
                    
                    <div class="test-details">
                        <div class="detail-item">
                            <span class="detail-label">Время прохождения</span>
                            <span class="detail-value">28:15</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Правильные ответы</span>
                            <span class="detail-value">23/25</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Сложность</span>
                            <span class="detail-value">Сложный</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Попытка</span>
                            <span class="detail-value">#1</span>
                        </div>
                    </div>
                    
                    <div class="test-actions">
                        <button class="action-btn btn-review" onclick="reviewTest(1)">Просмотреть ответы</button>
                        <button class="action-btn btn-retry" onclick="retryTest(1)">Повторить тест</button>
                    </div>
                </div>

                <!-- Тест 2 -->
                <div class="history-item">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Основы алгоритмов</h3>
                            <span class="test-date">Завершен: 12.12.2023 в 10:15</span>
                        </div>
                        <span class="test-score score-excellent">96%</span>
                    </div>
                    
                    <div class="test-details">
                        <div class="detail-item">
                            <span class="detail-label">Время прохождения</span>
                            <span class="detail-value">24:42</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Правильные ответы</span>
                            <span class="detail-value">15/16</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Сложность</span>
                            <span class="detail-value">Средний</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Попытка</span>
                            <span class="detail-value">#2</span>
                        </div>
                    </div>
                    
                    <div class="test-actions">
                        <button class="action-btn btn-review" onclick="reviewTest(2)">Просмотреть ответы</button>
                        <button class="action-btn btn-retry" onclick="retryTest(2)">Повторить тест</button>
                    </div>
                </div>

                <!-- Тест 3 -->
                <div class="history-item">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Введение в Python</h3>
                            <span class="test-date">Завершен: 08.12.2023 в 16:20</span>
                        </div>
                        <span class="test-score score-good">78%</span>
                    </div>
                    
                    <div class="test-details">
                        <div class="detail-item">
                            <span class="detail-label">Время прохождения</span>
                            <span class="detail-value">35:18</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Правильные ответы</span>
                            <span class="detail-value">14/18</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Сложность</span>
                            <span class="detail-value">Средний</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Попытка</span>
                            <span class="detail-value">#1</span>
                        </div>
                    </div>
                    
                    <div class="test-actions">
                        <button class="action-btn btn-review" onclick="reviewTest(3)">Просмотреть ответы</button>
                        <button class="action-btn btn-retry" onclick="retryTest(3)">Повторить тест</button>
                    </div>
                </div>

                <!-- Тест 4 -->
                <div class="history-item">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Основы базы данных</h3>
                            <span class="test-date">Завершен: 05.12.2023 в 11:45</span>
                        </div>
                        <span class="test-score score-average">65%</span>
                    </div>
                    
                    <div class="test-details">
                        <div class="detail-item">
                            <span class="detail-label">Время прохождения</span>
                            <span class="detail-value">42:05</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Правильные ответы</span>
                            <span class="detail-value">13/20</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Сложность</span>
                            <span class="detail-value">Сложный</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Попытка</span>
                            <span class="detail-value">#1</span>
                        </div>
                    </div>
                    
                    <div class="test-actions">
                        <button class="action-btn btn-review" onclick="reviewTest(4)">Просмотреть ответы</button>
                        <button class="action-btn btn-retry" onclick="retryTest(4)">Повторить тест</button>
                    </div>
                </div>

                <!-- Тест 5 -->
                <div class="history-item">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Основы веб-разработки</h3>
                            <span class="test-date">Завершен: 01.12.2023 в 09:30</span>
                        </div>
                        <span class="test-score score-excellent">88%</span>
                    </div>
                    
                    <div class="test-details">
                        <div class="detail-item">
                            <span class="detail-label">Время прохождения</span>
                            <span class="detail-value">22:50</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Правильные ответы</span>
                            <span class="detail-value">16/18</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Сложность</span>
                            <span class="detail-value">Средний</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Попытка</span>
                            <span class="detail-value">#1</span>
                        </div>
                    </div>
                    
                    <div class="test-actions">
                        <button class="action-btn btn-review" onclick="reviewTest(5)">Просмотреть ответы</button>
                        <button class="action-btn btn-retry" onclick="retryTest(5)">Повторить тест</button>
                    </div>
                </div>
            </div>
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

.history-container {
background: white;
border-radius: 20px;
box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
padding: 40px;
max-width: 1000px;
margin: 0 auto;
transition: transform 0.3s ease;
}

.history-container:hover {
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

.stats-overview {
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

.history-list {
display: flex;
flex-direction: column;
gap: 20px;
}

.history-item {
background: #f9f9f9;
border-radius: 15px;
padding: 25px;
transition: all 0.3s ease;
border: 1px solid #e0e0e0;
position: relative;
}

.history-item:hover {
transform: translateY(-3px);
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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

.test-date {
color: #888;
font-size: 14px;
}

.test-score {
display: inline-block;
padding: 5px 12px;
border-radius: 20px;
font-size: 14px;
font-weight: 600;
margin-bottom: 10px;
}

.score-excellent {
background: #e8f5e9;
color: #2e7d32;
}

.score-good {
background: #fff3e0;
color: #ef6c00;
}

.score-average {
background: #ffebee;
color: #c62828;
}

.test-details {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
gap: 15px;
margin-bottom: 15px;
}

.detail-item {
display: flex;
flex-direction: column;
}

.detail-label {
font-size: 12px;
color: #666;
margin-bottom: 5px;
}

.detail-value {
font-size: 16px;
font-weight: 600;
color: #333;
}

.test-actions {
display: flex;
gap: 10px;
margin-top: 15px;
}

.action-btn {
padding: 8px 16px;
border: none;
border-radius: 8px;
cursor: pointer;
font-size: 14px;
font-weight: 600;
transition: all 0.3s ease;
}

.btn-review {
background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
color: white;
}

.btn-review:hover {
transform: translateY(-2px);
box-shadow: 0 3px 8px rgba(46, 139, 87, 0.3);
}

.btn-retry {
background: #f0f0f0;
color: #555;
}

.btn-retry:hover {
background: #e0e0e0;
}

.empty-state {
text-align: center;
padding: 60px 20px;
color: #666;
}

.empty-state i {
font-size: 60px;
margin-bottom: 20px;
display: block;
color: #ccc;
}

.empty-state h3 {
margin-bottom: 10px;
color: #888;
}

.empty-state p {
margin-bottom: 20px;
}

.empty-state .btn {
display: inline-block;
background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
color: white;
padding: 10px 20px;
border-radius: 8px;
text-decoration: none;
font-weight: 600;
transition: all 0.3s ease;
}

.empty-state .btn:hover {
transform: translateY(-2px);
box-shadow: 0 5px 10px rgba(46, 139, 87, 0.3);
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

.history-container {
    padding: 20px;
}

.test-header {
    flex-direction: column;
    gap: 10px;
}

.test-details {
    grid-template-columns: 1fr;
}
}

@media (max-width: 480px) {
.stats-overview {
    grid-template-columns: 1fr;
}

.filters {
    justify-content: center;
}
}
</style>