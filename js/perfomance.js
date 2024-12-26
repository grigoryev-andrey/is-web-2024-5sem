(function () {
    window.addEventListener('load', function () {
        const loadTime = (window.performance.now() / 1000).toFixed(2);
        swal({
            title: "Время загрузки",
            text: `${loadTime} секунд`,
            icon: "success",
          });
    });
})();