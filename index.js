function redirectToProjects(event){
    event.preventDefault();
    window.location.href = "projects.html";
}

function toggleTheme(){
    var style = document.getElementById("style");
    if (style.href.match("light.css")){
        style.href = "dark.css";
    } else{
        style.href = "light.css";
    }
}

const modeLink = document.getElementById("switch-theme");
let mode = "dark";

modeLink.addEventListener("click", () => {
    if (mode == "dark"){
        modeLink.textContent = "Light Mode";
        mode = "light";
    } 
    else {
        modeLink.textContent = "Dark Mode";    
        mode = "dark";
    }
    toggleTheme();
});

