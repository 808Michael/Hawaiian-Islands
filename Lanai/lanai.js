document.addEventListener('DOMContentLoaded', () => {
    const titleBox = document.querySelector('.title-box');
    const title = titleBox.querySelector('h1');

    titleBox.addEventListener('mouseenter', () => {
        if (title.textContent.trim() === 'Lanai') {
            title.textContent = 'The Pineapple Isle';
        } else {
            title.textContent = 'Lanai';
        }
    });

    titleBox.addEventListener('mouseleave', () => {
        if (title.textContent.trim() === 'The Pineapple Isle') {
            title.textContent = 'Lanai';
        } else if (title.textContent.trim() !== 'Lanai') {
            title.textContent = 'Lanai';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
            const panel = accordion.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
});