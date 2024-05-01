document.addEventListener('DOMContentLoaded', () => {
    const titleBox = document.querySelector('.title-box');
    const title = titleBox.querySelector('h1');

    titleBox.addEventListener('mouseenter', () => {
        if (title.textContent.trim() === 'Oahu') {
            title.textContent = 'The Gathering Place';
        } else {
            title.textContent = 'Oahu';
        }
    });

    titleBox.addEventListener('mouseleave', () => {
        if (title.textContent.trim() === 'The Gathering Place') {
            title.textContent = 'Oahu';
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