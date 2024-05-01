document.addEventListener('DOMContentLoaded', () => {
    const titleBox = document.querySelector('.title-box');
    const title = titleBox.querySelector('h1');

    titleBox.addEventListener('mouseenter', () => {
        if (title.textContent.trim() === 'Kahoolawe') {
            title.textContent = 'The Target Isle';
        } else {
            title.textContent = 'Kahoolawe';
        }
    });

    titleBox.addEventListener('mouseleave', () => {
        if (title.textContent.trim() === 'The Target Isle') {
            title.textContent = 'Kahoolawe';
        }
    });
});