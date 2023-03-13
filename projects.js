//grab the card container in project.html
const track = document.getElementById("container");


//track position of curser on mousedown
window.onmousedown = e => {
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * 100;
}