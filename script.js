document.getElementById('mostrar-formularios').addEventListener('click', function() {
    var formulariosContainer = document.getElementById('formularios-container');
    if (formulariosContainer.style.display === 'none') {
        formulariosContainer.style.display = 'block';
    } else {
        formulariosContainer.style.display = 'none';
    }
});
