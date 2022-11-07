function social_media() {
    let arrow = document.querySelector("#arrow");
    let s_media = document.querySelector(".social_media_group");

    if(!(s_media.style.display === 'inline')) {
        s_media.style.display = 'inline'

        arrow.style.rotate = "180deg";
    }
    else {
        s_media.style.display = `none`;
        arrow.style.rotate = "0deg";
    }
}