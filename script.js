function cambiarTexto() {
    var enlace = document.getElementById('escondido');
    enlace.textContent = 'Demos';
}

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');


    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });


    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


const buscadorIcono = document.getElementById('abrir');
const miDiv = document.getElementById('miDiv');

buscadorIcono.addEventListener('click', () => {     
    miDiv.classList.toggle('fuera');
    miDiv.classList.toggle('extras');
});

document.getElementById("abrir").addEventListener("click", function() {
    this.style.display = "none"; 
});

