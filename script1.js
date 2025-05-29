document.addEventListener('DOMContentLoaded', () => {
    // Находим все элементы строк и элемент курсора
    const lines = document.querySelectorAll('.line');
    const cursor = document.getElementById('cursor');
    // const container = document.getElementById('text-container'); // Контейнер 

    let currentLineIndex = 0; // Индекс текущей строки
    const lineDelay = 1000; // Задержка перед появлением следующей строки 

    // Изначально убедимся, что курсор виден (он скрыт только анимацией)
    cursor.style.display = 'inline-block';

    // Функция для показа одной строки и планирования следующей
    function showLine(index) {
        // не вышли ли за пределы массива строк
        if (index < lines.length) {
            const currentLine = lines[index];

            // Делаем текущую строку видимой
            currentLine.style.display = 'block'; // Или 'inline-block', если строки должны быть рядом, но для построчного вывода лучше 'block'

            // Перемещаем курсор после текущей показанной строки
            // insertBefore(newElement, referenceElement) вставляет newElement передreferenceElement
            // currentLine.nextSibling - это элемент, который идет сразу после currentLine
            currentLine.parentNode.insertBefore(cursor, currentLine.nextSibling);


            // Если есть еще строки для показа, планируем показ следующей
            if (index < lines.length - 1) {
                setTimeout(() => {
                    showLine(index + 1); // Вызываем эту же функцию для следующей строки
                }, lineDelay);
            } else {
                // Это последняя строка, курсор остается мигать после нее
                // Никаких дальнейших setTimeout для показа строк не требуется
            }
        }
    }

    // Запускаем процесс показа строк, начиная с первой (индекс 0)
    showLine(currentLineIndex);
});
