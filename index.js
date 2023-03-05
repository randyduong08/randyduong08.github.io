function redirectToProjects(event){
    event.preventDefault();
    window.location.href = "projects.html";
}

function toggleDarkMode() {
    const body = document.body;
    const headerFooter = document.querySelectorAll('.header-footer');
    
    body.classList.toggle('dark');
    headerFooter.forEach(tag => tag.classList.toggle('dark-header-footer'));

  }
const modeButton = document.getElementById("mode-button");

modeButton.addEventListener('click', toggleDarkMode);
