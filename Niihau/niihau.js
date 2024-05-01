document.addEventListener('DOMContentLoaded', () => {
    const titleBox = document.querySelector('.title-box');
    const title = titleBox.querySelector('h1');

    titleBox.addEventListener('mouseenter', () => {
        if (title.textContent.trim() === 'Niihau') {
            title.textContent = 'The Forbidden Isle';
        } else {
            title.textContent = 'Niihau';
        }
    });

    titleBox.addEventListener('mouseleave', () => {
        if (title.textContent.trim() === 'The Forbidden Isle') {
            title.textContent = 'Niihau';
        }
    });
});