function redirectToProjects(event){
    event.preventDefault();
    window.location.href = "projects.html";
}

//Keep track of current style (either light.css or dark.css) for the document
var style = document.getElementById("style");

function toggleTheme(){
    if (style.href.match("light.css")){
        style.href = "dark.css";
    } else{
        style.href = "light.css";
    }
}

const modeLink = document.getElementById("switch-theme");


// Get current mode from local storage
var mode = localStorage.getItem("mode");

// If mode is not set (so no preference), default to mode=dark, i.e., in light mode (confusing)
if (mode == null || mode=="dark"){
    mode = "dark";
    modeLink.textContent = "Dark Mode";
    style.href = "light.css";
}
//Otherwise, set stuff to dark mode
else{
    mode = "light";
    modeLink.textContent = "Light Mode";
    style.href = "dark.css";
}


modeLink.addEventListener("click", () => {
    if (mode == "dark"){
        modeLink.textContent = "Light Mode";
        mode = "light";
    } 
    else {
        modeLink.textContent = "Dark Mode";    
        mode = "dark";
    }
    localStorage.setItem("mode", mode);
    toggleTheme();
});

