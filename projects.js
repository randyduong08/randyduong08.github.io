    //grab the card container in project.html
const track = document.getElementById("card-track");

console.log(track);

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

console.log(track.dataset.prevPercentage);

//track position of curser on mousedown
const handleOnMove = e => {
    if(track.dataset.mouseDownAt == "0") return;

    console.log('test');

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = 
            parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, 0%)`},
        //transform: `translate(0%, ${nextPercentage}%)`},
        { duration: 1200, fill: "forwards"});
    
    for(const image of track.getElementsByClassName("card mb-4")){
        image.animate({objectPosition: `${100 + nextPercentage}% center`},
                    {duration: 1200, fill: "forwards"});
    }
}

/* actually allows u to record the mouse */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);