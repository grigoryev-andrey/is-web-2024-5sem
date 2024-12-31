window.addEventListener('DOMContentLoaded', function () {
    let currentPath = document.location.pathname.split("/").pop();
    if (currentPath === "" || currentPath === "/") {
        currentPath = "index.html";
    }
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach((item) => {
        const itemPath = item.getAttribute('href');
        if (currentPath === itemPath) {
            item.parentElement.classList.add('active');
        }
    });
});