const rootselect = document.getElementsByClassName("container")[0];
const img = document.createElement("img");
const urlImage = "https://s3.me-central-1.amazonaws.com/com.insurancemarket.wp/2024/06/image-125-40.jpg";

function ping(){
    img.src=urlImage;
    img.setAttribute("height", 400);
    img.setAttribute("width", 400);

    rootselect.appendChild(img);

}

ping();