const text = document.querySelector("#colorText");
console.log(text);
const color =document.querySelector("#colorPicker");
console.log(color);

const colorBg = () => {
    //console.log("colorBg関数発動!");
    document.body.style.backgroundColor=color.value;

    text.textContent = color.value;
}

color.addEventListener("input",colorBg);