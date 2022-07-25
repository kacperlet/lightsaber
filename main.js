const lightsaber = document.getElementById("lightsaber");
const blade = document.getElementById("lightsaber-blade");
const handle = document.getElementById("handle");

const powerUp = new Audio('audio/power-up.mp3');
const powerDown = new Audio('audio/power-down.mp3');
const swing = [new Audio('audio/short-swing.mp3'), new Audio('audio/medium-swing.mp3'), new Audio('audio/short-2.mp3')];
let audioCooldown = 0;

let ignited = true;
let draggable = false;
num = 75;

document.querySelector('#ignite').onclick = () =>{
    if (ignited)
    {
        powerDown.play();
    }
    else
    {
        powerUp.play();
    }
    ignited = !ignited
}

setInterval(() => {
    if (ignited & num <= 75)
    {
        blade.style.height =  num +  "%";
        num++;
    }
    else if (!ignited & num >= -1)
    {
        blade.style.height =  num +  "%";
        num--;
    }
}, 1)

handle.onclick = () => {
    if (draggable){
        draggable = false;
    }
    else {
        draggable = true;;
    }
}

document.onmousemove = (event) => {
    if (draggable)
    {
        lightsaber.style.left = event.clientX - handle.clientWidth/2 + "px";
        lightsaber.style.top = event.clientY - (5 * lightsaber.clientHeight/6) + "px"
        if (ignited)
        {
            if (audioCooldown == 0)
            {
                swing[Math.floor(Math.random() * 3)].play();
                audioCooldown = 100;
            }
            else
            {
                audioCooldown--;
            }
        }
    }
    
    document.getElementById("mouse").style.left = event.clientX + "px";
    document.getElementById("mouse").style.top = event.clientY + "px"
}

document.getElementById("blue").onclick = () => {
    blade.style.filter = "drop-shadow(.5rem -.5rem 1rem #3c90ea) drop-shadow(-.5rem -.5rem 1rem #3c90ea)";
    blade.style.borderColor = "#50d4f6";
}

document.getElementById("red").onclick = () => {
    blade.style.filter = "drop-shadow(.5rem -.5rem 1rem #b42c32) drop-shadow(-.5rem -.5rem 1rem #b42c32)";
    blade.style.borderColor = "#b42c32";
}

document.getElementById("green").onclick = () => {
    blade.style.filter = "drop-shadow(.5rem -.5rem 1rem #2c6512) drop-shadow(-.5rem -.5rem 1rem #2c6512)";
    blade.style.borderColor = "#2c6512";
}