function redirectToProjects(event){
    event.preventDefault();
    window.location.href = "projects.html";
}

function toggleDarkMode(event, form) {
    event.preventDefault();
    const body = document.body;
    const headerFooter = document.querySelectorAll('.header-footer');
    const modeButton = form.querySelector('input[type="submit"]');
    
    body.classList.toggle('dark');
    headerFooter.forEach(tag => tag.classList.toggle('dark-header-footer'));

    if (modeButton.value === 'Dark Mode'){
        modeButton.value = 'Light Mode';
    }
    else{
        modeButton.value = 'Dark Mode';
    }

  }
/*
const modeButton = document.getElementById("mode-button");

modeButton.addEventListener('click', toggleDarkMode);
*/
