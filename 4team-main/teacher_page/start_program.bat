@echo off
chcp 1251 > nul

echo Установка основных зависимостей...
call npm install

echo Установка vue-router...
call npm install vue-router

echo Запуск проекта в режиме разработки...
call npm run dev

echo Проект запущен и работает...
pause