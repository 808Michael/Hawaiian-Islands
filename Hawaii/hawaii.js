document.addEventListener('DOMContentLoaded', () => {
    const titleBox = document.querySelector('.title-box');
    const title = titleBox.querySelector('h1');

    titleBox.addEventListener('click', () => {
        if (title.textContent.trim() === 'Hawaii') {
            title.textContent = 'The Big Island';
        } else {
            title.textContent = 'Hawaii';
        }
    });
});
