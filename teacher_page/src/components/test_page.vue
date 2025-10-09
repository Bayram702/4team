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
                <a href="#" class="nav-link">
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
                <a href="#" class="nav-link active">
                    <i>📝</i>
                    <span>Тесты</span>
                </a>
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
                <button class="filter-btn active">Все тесты</button>
                <button class="filter-btn">Математика</button>
                <button class="filter-btn">Программирование</button>
                <button class="filter-btn">Языки</button>
                <button class="filter-btn">Наука</button>
                <button class="filter-btn">Пройденные</button>
                <button class="filter-btn">В избранном</button>
            </div>
            <!-- Тесты снизу это как пример того, как будет выглядить всё -->
            <div class="tests-grid">
                <!-- Тест 1 -->
                <div class="test-card">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Основы алгебры</h3>
                            <span class="test-difficulty difficulty-easy">Лёгкий</span>
                        </div>
                        <button class="favorite-btn">☆</button>
                    </div>
                    <p class="test-description">Проверьте свои знания по основам алгебры: уравнения, неравенства, функции.</p>
                    <div class="test-meta">
                        <span>15 вопросов</span>
                        <span>20 минут</span>
                    </div>
                    <div class="test-progress">
                        <div class="progress-fill" style="width: 0%"></div>
                    </div>
                    <div class="test-footer">
                        <span class="progress-text">Не начат</span>
                        <button class="btn-start" onclick="startTest(1)">Начать тест</button>
                    </div>
                </div>

                <!-- Тест 2 -->
                <div class="test-card">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Введение в Python</h3>
                            <span class="test-difficulty difficulty-medium">Средний</span>
                        </div>
                        <button class="favorite-btn">☆</button>
                    </div>
                    <p class="test-description">Основы программирования на Python: синтаксис, переменные, функции.</p>
                    <div class="test-meta">
                        <span>20 вопросов</span>
                        <span>30 минут</span>
                    </div>
                    <div class="test-progress">
                        <div class="progress-fill" style="width: 45%"></div>
                    </div>
                    <div class="test-footer">
                        <span class="progress-text">45% завершено</span>
                        <button class="btn-start" onclick="startTest(2)">Продолжить</button>
                    </div>
                </div>

                <!-- Тест 3 -->
                <div class="test-card">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Английский для IT-специалистов</h3>
                            <span class="test-difficulty difficulty-hard">Сложный</span>
                        </div>
                        <button class="favorite-btn active">★</button>
                    </div>
                    <p class="test-description">Специализированная лексика для IT-сферы: термины, документация, общение.</p>
                    <div class="test-meta">
                        <span>25 вопросов</span>
                        <span>40 минут</span>
                    </div>
                    <div class="test-progress">
                        <div class="progress-fill" style="width: 100%"></div>
                    </div>
                    <div class="test-footer">
                        <span class="progress-text">Завершено (85%)</span>
                        <button class="btn-start" onclick="startTest(3)">Повторить</button>
                    </div>
                </div>

                <!-- Тест 4 -->
                <div class="test-card">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Основы веб-разработки</h3>
                            <span class="test-difficulty difficulty-medium">Средний</span>
                        </div>
                        <button class="favorite-btn">☆</button>
                    </div>
                    <p class="test-description">HTML, CSS, JavaScript - основы создания современных веб-сайтов.</p>
                    <div class="test-meta">
                        <span>18 вопросов</span>
                        <span>25 минут</span>
                    </div>
                    <div class="test-progress">
                        <div class="progress-fill" style="width: 0%"></div>
                    </div>
                    <div class="test-footer">
                        <span class="progress-text">Не начат</span>
                        <button class="btn-start" onclick="startTest(4)">Начать тест</button>
                    </div>
                </div>

                <!-- Тест 5 -->
                <div class="test-card">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Основы базы данных</h3>
                            <span class="test-difficulty difficulty-hard">Сложный</span>
                        </div>
                        <button class="favorite-btn">☆</button>
                    </div>
                    <p class="test-description">SQL, проектирование БД, нормализация, оптимизация запросов.</p>
                    <div class="test-meta">
                        <span>22 вопроса</span>
                        <span>35 минут</span>
                    </div>
                    <div class="test-progress">
                        <div class="progress-fill" style="width: 70%"></div>
                    </div>
                    <div class="test-footer">
                        <span class="progress-text">70% завершено</span>
                        <button class="btn-start" onclick="startTest(5)">Продолжить</button>
                    </div>
                </div>

                <!-- Тест 6 -->
                <div class="test-card">
                    <div class="test-header">
                        <div>
                            <h3 class="test-title">Основы алгоритмов</h3>
                            <span class="test-difficulty difficulty-medium">Средний</span>
                        </div>
                        <button class="favorite-btn active">★</button>
                    </div>
                    <p class="test-description">Сортировка, поиск, структуры данных и основы анализа алгоритмов.</p>
                    <div class="test-meta">
                        <span>16 вопросов</span>
                        <span>30 минут</span>
                    </div>
                    <div class="test-progress">
                        <div class="progress-fill" style="width: 100%"></div>
                    </div>
                    <div class="test-footer">
                        <span class="progress-text">Завершено (92%)</span>
                        <button class="btn-start" onclick="startTest(6)">Повторить</button>
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
}
</style>