const mysql = require('mysql2');

// Создаем подключение к MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // твой пользователь MySQL
  password: 'root',     // твой пароль MySQL
  database: 'exam'    // название твоей базы данных
});

// Подключаемся к базе
connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к MySQL:', err);
    return;
  }
  console.log('✅ Успешно подключен к MySQL базе данных');
});


connection.execute(createTableQuery, (err) => {
  if (err) {
    console.error('Ошибка создания таблицы:', err);
  } else {
    console.log('✅ Таблица users готова');
  }
});

module.exports = connection;