function switch_theme() {
    let theme = document.getElementsByTagName("body")[0];
    let theme_btn = document.getElementsByTagName("button")[0];
    let theme_img = document.getElementsByTagName("img")[0];
    if(theme_btn.className == "button_light") {
        theme.className = "theme_dark";
        theme_btn.className = "button_dark";
        theme_img.src = "https://miro.medium.com/v2/resize:fit:640/1*Cw5EWHr4qD3Ktokuk3ZkbQ.jpeg";
    }
    else {
        theme.className = "theme_light";
        theme_btn.className = "button_light";
        theme_img.src = "https://m.media-amazon.com/images/I/717PmDyKW-L.png";
    }
}