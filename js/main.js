(function () {
    window.addEventListener('load', function () {
        const loadTime = (window.performance.now() / 1000).toFixed(2);
        const footer = document.querySelector('footer');
        if (footer) {
            const statsDiv = document.createElement('div');
            statsDiv.textContent = `Время загрузки страницы: ${loadTime} секунд`;
            footer.appendChild(statsDiv);
        }
    });

    window.addEventListener('DOMContentLoaded', function () {
        let currentPath = document.location.pathname;
        if (currentPath === "/" || currentPath === "") {
            currentPath = "/index.html";
        }
        currentPath = currentPath.replace(/^\//, '');
        const menuItems = document.querySelectorAll('nav ul li a');
        menuItems.forEach((item) => {
            const itemPath = item.getAttribute('href');
            if (itemPath && currentPath.includes(itemPath)) {
                item.classList.add('active');
            }
        });
    });
})();