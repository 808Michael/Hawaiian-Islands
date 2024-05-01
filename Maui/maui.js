document.addEventListener('DOMContentLoaded', () => {
    const titleBox = document.querySelector('.title-box');
    const title = titleBox.querySelector('h1');

    titleBox.addEventListener('mouseenter', () => {
        if (title.textContent.trim() === 'Maui') {
            title.textContent = 'The Valley Isle';
        } else {
            title.textContent = 'Maui';
        }
    });

    titleBox.addEventListener('mouseleave', () => {
        if (title.textContent.trim() === 'The Valley Isle') {
            title.textContent = 'Maui';
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