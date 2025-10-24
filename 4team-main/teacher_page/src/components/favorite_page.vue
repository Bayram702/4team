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
    
    <!-- Основной контент -->
    <main>
        <h1 class="page-title">
            <i>★</i> Избранные задания
        </h1>
        
        <!-- Сетка заданий -->
        <div class="assignments-grid">

            <div class="assignment-card">
                <div class="card-header">
                    <span class="subject">Физика</span>
                    <button class="favorite-btn">★</button>
                </div>
                <div class="card-body">
                    <h3 class="assignment-title">Законы Ньютона</h3>
                    <p class="assignment-description">Проанализируйте движение тела под действием нескольких сил. Постройте диаграмму сил и рассчитайте ускорение.</p>
                    <div class="assignment-meta">
                        <span>Срок: 20.12.2023</span>
                        <span>Сложность: Высокая</span>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary">Перейти к заданию</button>
                    <button class="btn btn-outline">Удалить из избранного</button>
                </div>
            </div>
        
            <div class="assignment-card">
                <div class="card-header">
                    <span class="subject">История</span>
                    <button class="favorite-btn">★</button>
                </div>
                <div class="card-body">
                    <h3 class="assignment-title">Великая Отечественная война</h3>
                    <p class="assignment-description">Подготовьте презентацию о ключевых сражениях Великой Отечественной войны и их значении для общего хода войны.</p>
                    <div class="assignment-meta">
                        <span>Срок: 10.12.2023</span>
                        <span>Сложность: Средняя</span>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary">Перейти к заданию</button>
                    <button class="btn btn-outline">Удалить из избранного</button>
                </div>
            </div>
        </div>
        
        <!-- Сообщение, если избранных заданий нет (скрыто по умолчанию) -->
        <div class="empty-state">
            <i>★</i>
            <h3>В избранном пока нет заданий</h3>
            <p>Добавляйте сюда важные задания, чтобы не потерять их</p>
        </div>
    </main>
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

/* Зеленая цветовая палитра */
:root {
    --primary-green: #27ae60;
    --secondary-green: #2ecc71;
    --light-green: #d5f5e3;
    --dark-green: #229954;
    --accent-green: #58d68d;
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

/* Основной контент */
main {
    flex: 1;
    margin-left: 250px;
    padding: 30px;
}

.page-title {
    margin-bottom: 25px;
    color: var(--dark-green);
    font-size: 28px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.page-title i {
    font-size: 24px;
}

/* Карточки заданий */
.assignments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
}

.assignment-card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.assignment-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-header {
    background-color: var(--primary-green);
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.subject {
    font-weight: bold;
    font-size: 18px;
}

.favorite-btn {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.2s;
}

.favorite-btn:hover {
    transform: scale(1.2);
}

.card-body {
    padding: 20px;
}

.assignment-title {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--dark-green);
}

.assignment-description {
    color: #555;
    margin-bottom: 15px;
    font-size: 14px;
}

.assignment-meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #777;
    margin-bottom: 15px;
}

.card-footer {
    padding: 15px 20px;
    background-color: var(--light-green);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn {
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s;
}

.btn-primary {
    background-color: var(--secondary-green);
    color: white;
}

.btn-primary:hover {
    background-color: var(--dark-green);
}

.btn-outline {
    background-color: transparent;
    border: 1px solid var(--primary-green);
    color: var(--primary-green);
}

.btn-outline:hover {
    background-color: var(--primary-green);
    color: white;
}

/* Сообщение, если избранных заданий нет */
.empty-state {
    text-align: center;
    padding: 50px 20px;
    color: #777;
    display: none;
}

.empty-state i {
    font-size: 48px;
    color: var(--light-green);
    margin-bottom: 15px;
}

.empty-state h3 {
    margin-bottom: 10px;
    color: var(--dark-green);
}

/* Шапка */
header {
    display: none; /* Скрываем верхнюю шапку, так как у нас боковое меню */
}

/* Адаптивность */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }
    
    main {
        margin-left: 0;
    }
    
    .assignments-grid {
        grid-template-columns: 1fr;
    }
}
</style>