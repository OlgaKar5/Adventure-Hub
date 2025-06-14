let currentIndex = 0; // Переменная для отслеживания текущего индекса слайда
const slides = document.querySelectorAll('.slide'); // Получаем все элементы с классом "slide"
const totalSlides = slides.length; // Запоминаем общее количество слайдов

function updateSlider() {
    const slider = document.querySelector('.slider'); // Находим элемент "slider" для обновления его положения
    const offset = -currentIndex * 100; // Вычисляем сдвиг в процентах на основе текущего индекса
    slider.style.transform = `translateX(${offset}%)`; // Применяем сдвиг к слайдеру
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Увеличиваем индекс и используем оператор % для зацикления
    updateSlider(); // Обновляем слайдер
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Уменьшаем индекс с зацикливанием
    updateSlider(); // Обновляем слайдер
}

// Привязываем функции переключения к кнопкам
document.getElementById('next').addEventListener('click', nextSlide); // При нажатии на "вперед" вызываем nextSlide
document.getElementById('prev').addEventListener('click', prevSlide); // При нажатии на "назад" вызываем prevSlide
