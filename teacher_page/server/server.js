const express = require('express');
const cors = require('cors');
const connection = require('./database');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes - прямые запросы к MySQL

// GET - получить всех пользователей
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users ORDER BY created_at DESC';
  
  connection.execute(query, (err, results) => {
    if (err) {
      console.error('MySQL ошибка:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// GET - получить пользователя по ID
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM users WHERE id = ?';
  
  connection.execute(query, [userId], (err, results) => {
    if (err) {
      console.error('MySQL ошибка:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(results[0]);
  });
});

// POST - создать нового пользователя
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  
  connection.execute(query, [name, email], (err, results) => {
    if (err) {
      console.error('MySQL ошибка:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.json({ 
      id: results.insertId, 
      name, 
      email,
      message: 'User created successfully' 
    });
  });
});

// PUT - обновить пользователя
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  
  const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  
  connection.execute(query, [name, email, userId], (err, results) => {
    if (err) {
      console.error('MySQL ошибка:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ message: 'User updated successfully' });
  });
});

// DELETE - удалить пользователя
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  
  connection.execute(query, [userId], (err, results) => {
    if (err) {
      console.error('MySQL ошибка:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ message: 'User deleted successfully' });
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  console.log(`📊 База данных: MySQL`);
});