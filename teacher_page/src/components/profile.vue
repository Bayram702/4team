<template>
   <body>
    <!-- Боковое меню -->
    <div class="sidebar">
        <div class="logo">
            <h1>Образовательная система</h1>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i>🏠</i>
                    <span>Главное меню</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link active">
                    <i>👤</i>
                    <span>Профиль</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i>📊</i>
                    <span>История</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i>⭐</i>
                    <span>Избранное</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i>📝</i>
                    <span>Тесты</span>
                </a>
            </li>
        </ul>
    </div>

    <!-- Основное содержимое -->
    <div class="main-content">
        <div class="profile-container">
            <div class="profile-header">
                <div class="avatar">ИИ</div>
                <div class="user-info">
                    <h2>Иванов Иван Иванович</h2>
                    <p>Студент | Группа: ИВТ-202</p>
                    <div class="user-id">ID: #STU-75842</div>
                </div>
            </div>

            <div class="stats-container">
                <div class="stat-card">
                    <div class="stat-value">142</div>
                    <div class="stat-label">Решенных задач</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">87%</div>
                    <div class="stat-label">Успеваемость</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">24</div>
                    <div class="stat-label">Пройденных тестов</div>
                </div>
               
            </div>

            <div class="progress-section">
                <h3>Прогресс обучения</h3>
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                
                <h3>Достижения</h3>
                <div class="achievements">
                    <div class="achievement">🥇</div>
                    <div class="achievement">📚</div>
                    <div class="achievement">⚡</div>
                    <div class="achievement">🏆</div>
                </div>
            </div>

            <div class="contact-info">
                <h3>Контактная информация</h3>
                <div class="contact-item">
                    <div class="contact-icon">📞</div>
                    <div class="contact-details">
                        <div class="contact-label">Телефон для связи</div>
                        <div class="contact-value">8-000-000-00-00</div>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">✉️</div>
                    <div class="contact-details">
                        <div class="contact-label">Электронная почта</div>
                        <div class="contact-value">Help@mail.ru</div>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div class="contact-details">
                        <div class="contact-label">Местоположение</div>
                        <div class="contact-value">г. Москва, ул. Образовательная, 15</div>
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
    width: 65%; /* Пример заполнения */
}

.achievements {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.achievement {
    width: 60px;
    height: 60px;
    background: #f5f7fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border: 2px solid #2e8b57;
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
</style>
