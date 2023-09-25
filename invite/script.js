function MovePosition(){

    let w = window.screen.width
    let h = window.screen.height

    marginLeft = parseInt (Math.random() * w);
    marginTop = parseInt (Math.random() * h);
    const runningButton = document.getElementById("runningButton");  
    runningButton.style.position="fixed"
    runningButton.style.left = marginLeft +'px';
    runningButton.style.marginTop = marginTop+'px';
}
function autoCopy(){
    navigator.clipboard.writeText("Oi, vamo onde?");
    alert("De um ctrl + v no meu chat!")
    document.getElementById("body").style.backgroundImage = 'url("https://imagepng.org/coracao/")';
}
