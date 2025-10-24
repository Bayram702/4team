<style>
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

.welcome-container {
background: white;
border-radius: 20px;
box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
padding: 40px;
max-width: 1000px;
margin: 0 auto;
transition: transform 0.3s ease;
}

.welcome-container:hover {
transform: translateY(-5px);
}

.hero-section {
text-align: center;
margin-bottom: 40px;
padding: 30px;
background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
border-radius: 15px;
color: white;
}

.hero-section h1 {
font-size: 36px;
margin-bottom: 15px;
}

.hero-section p {
font-size: 18px;
max-width: 700px;
margin: 0 auto;
line-height: 1.6;
}

.features-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 25px;
margin-bottom: 40px;
}

.feature-card {
background: #f9f9f9;
border-radius: 15px;
padding: 25px;
text-align: center;
transition: all 0.3s ease;
border-top: 4px solid #2e8b57;
}

.feature-card:hover {
transform: translateY(-5px);
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
font-size: 40px;
margin-bottom: 15px;
}

.feature-card h3 {
color: #2e8b57;
margin-bottom: 10px;
font-size: 20px;
}

.feature-card p {
color: #666;
line-height: 1.5;
}

.mission-section {
background: #f5f7fa;
border-radius: 15px;
padding: 30px;
margin-bottom: 30px;
}

.mission-section h2 {
color: #2e8b57;
text-align: center;
margin-bottom: 20px;
font-size: 26px;
}

.mission-section p {
color: #555;
line-height: 1.7;
text-align: center;
max-width: 800px;
margin: 0 auto 20px;
}

.stats-section {
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: 30px 0;
}

.stat {
text-align: center;
padding: 15px;
}

.stat-value {
font-size: 36px;
font-weight: bold;
color: #2e8b57;
}

.stat-label {
color: #666;
font-size: 16px;
}

.team-section {
margin-top: 40px;
}

.team-section h2 {
color: #2e8b57;
text-align: center;
margin-bottom: 25px;
font-size: 26px;
}

.team-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
}

.team-member {
background: #f9f9f9;
border-radius: 15px;
padding: 20px;
text-align: center;
transition: all 0.3s ease;
}

.team-member:hover {
transform: translateY(-5px);
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.member-avatar {
width: 80px;
height: 80px;
border-radius: 50%;
background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
margin: 0 auto 15px;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 30px;
font-weight: bold;
}

.member-name {
font-weight: 600;
color: #333;
margin-bottom: 5px;
}

.member-role {
color: #2e8b57;
font-size: 14px;
margin-bottom: 10px;
}

.cta-section {
text-align: center;
margin-top: 40px;
padding: 30px;
background: linear-gradient(135deg, #f5f7fa 0%, #e3e9f5 100%);
border-radius: 15px;
}

.cta-section h2 {
color: #2e8b57;
margin-bottom: 15px;
}

.cta-button {
display: inline-block;
background: linear-gradient(135deg, #2e8b57 0%, #3cb371 100%);
color: white;
padding: 12px 25px;
border-radius: 10px;
text-decoration: none;
font-weight: 600;
margin-top: 15px;
transition: all 0.3s ease;
}

.cta-button:hover {
transform: translateY(-3px);
box-shadow: 0 5px 15px rgba(46, 139, 87, 0.3);
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

.welcome-container {
    padding: 20px;
}

.hero-section h1 {
    font-size: 28px;
}

.hero-section p {
    font-size: 16px;
}
}

@media (max-width: 480px) {
.features-grid {
    grid-template-columns: 1fr;
}

.stats-section {
    flex-direction: column;
}
}
</style>
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
          <router-link to="/test_page" class="nav-link" :class="{ active: $route.name === 'Test_page' }">
            <i>📝</i>
            <span>Тесты</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Основное содержимое -->
    <div class="main-content">
        <div class="welcome-container">
            <div class="hero-section">
                <h1>Добро пожаловать в образовательную систему!</h1>
                <p>Инновационная платформа, созданная студентами для студентов, чтобы сделать обучение эффективным, доступным и увлекательным.</p>
            </div>

            <div class="mission-section">
                <h2>Наша миссия</h2>
                <p>Сайт создан при совместной работе студентов, которые стремятся повысить уровень знаний студентов. Мы верим, что современное образование должно быть интерактивным, персонализированным и доступным для каждого.</p>
                <p>Наша цель - создать сообщество, где студенты могут не только получать знания, но и делиться ими, помогая друг другу достигать академических успехов.</p>
            </div>

            <div class="stats-section">
                <div class="stat">
                    <div class="stat-value">5000+</div>
                    <div class="stat-label">Активных студентов</div>
                </div>
                <div class="stat">
                    <div class="stat-value">150+</div>
                    <div class="stat-label">Учебных материалов</div>
                </div>
                <div class="stat">
                    <div class="stat-value">98%</div>
                    <div class="stat-label">Довольных пользователей</div>
                </div>
            </div>

            <h2 style="text-align: center; color: #2e8b57; margin: 30px 0;">Наши преимущества</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h3>Персонализированное обучение</h3>
                    <p>Адаптивная система, которая подстраивается под ваш уровень знаний и темп обучения</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h3>Обширная библиотека</h3>
                    <p>Доступ к тысячам учебных материалов, тестов и практических заданий</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">👥</div>
                    <h3>Совместная работа</h3>
                    <p>Возможность учиться вместе с однокурсниками и обмениваться знаниями</p>
                </div>
            </div>

            <div class="team-section">
                <h2>Команда разработчиков</h2>
                <div class="team-grid">
                    <div class="team-member">
                        <div class="member-avatar">КР</div>
                        <div class="member-name">Руслан К.А</div>
                        <div class="member-role">Главный разработчик</div>
                        <p>Студент 4 курса Колледжа УКСИВТ</p>
                    </div>
                    <div class="team-member">
                        <div class="member-avatar">Р</div>
                        <div class="member-name">Ильнар</div>
                        <div class="member-role">Бэкэнд разработчик</div>
                        <p>Студент 4 курса Колледжа УКСИВТ</p>
                    </div>
                    <div class="team-member">
                        <div class="member-avatar">Л</div>
                        <div class="member-name">Лиана</div>
                        <div class="member-role">Дизайнер интерфейса</div>
                        <p>Студентка 4 курса Колледжа УКСИВТ</p>
                    </div>
                    <div class="team-member">
                        <div class="member-avatar">Р</div>
                        <div class="member-name">Роберт</div>
                        <div class="member-role">Контент-менеджер</div>
                        <p>Студент 4 курса Колледжа УКСИВТ</p>
                    </div>
                </div>
            </div>

            <div class="cta-section">
                <h2>Присоединяйтесь к нашему сообществу!</h2>
                <p>Начните свой путь к знаниям вместе с тысячами студентов по всей стране</p>
                <a href="#" class="cta-button">Начать обучение</a>
            </div>
        </div>
    </div>
</body>
</template>


<script>
export default {
  name: 'Main',
  mounted() {
    console.log('Главная страница загружена');
  }
}
</script>
