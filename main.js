let boxMain = document.querySelector('.box');

function colorChanger(){
    let colors = ["palevioletred", "aquamarine", "green", "blue", "brown", "tomato", "black"];
    const randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor]
}


function animation() {
    boxMain.style.top = Math.floor(1 + Math.random() * (999 - 1 + 1)) + 'px';
    boxMain.style.left = Math.floor(1 + Math.random() * (999 - 1 + 1)) + 'px';
    boxMain.style.bottom = Math.floor(1 + Math.random() * (999 - 1 + 1)) + 'px';
    boxMain.style.right = Math.floor(1 + Math.random() * (999 - 1 + 1)) + 'px';

    boxMain.style.height = Math.floor(1 + Math.random() * (50 - 1 + 1)) + 'vh';
    boxMain.style.width = Math.floor(1 + Math.random() * (50 - 1 + 1)) + 'vw';
    
    boxMain.style.background = colorChanger();

    return boxMain;
}

setInterval(animation, 2000);