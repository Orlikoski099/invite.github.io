function MovePosition(){
    marginLeft = parseInt (Math.random() * 500);
    marginTop = parseInt (Math.random() * 500);
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
