/**
 * 显示图片
 */
function show(path) {
    let view = document.getElementById("view-image");
    let viewLevel2 = document.getElementById("view-image-level-2");
    let viewImage = document.getElementById("view-image-img");

    // 显示图片盒子, 并绑定盒子关闭事件
    view.style.display = "block";
    view.onclick = function(){
        // 显示图片后,再次点击将关闭图片
        this.style.display = "none";
    }
    viewImage.src = path;
    viewImage.style.opacity = "1";
}


window.onload = function(){
    let images = document.getElementsByTagName("img");
    for(let img of images){
        img.onclick = function(){
            let image_path = this.src;
            show(image_path);
        }
    }
}


// function