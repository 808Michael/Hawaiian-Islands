document.addEventListener('DOMContentLoaded', () => {
    const titleBox = document.querySelector('.title-box');
    const title = titleBox.querySelector('h1');

    titleBox.addEventListener('mouseenter', () => {
        if (title.textContent.trim() === 'Hawaii') {
            title.textContent = 'The Big Island';
        } else {
            title.textContent = 'Hawaii';
        }
    });

    titleBox.addEventListener('mouseleave', () => {
        if (title.textContent.trim() === 'The Big Island') {
            title.textContent = 'Hawaii';
        }
    });
});
