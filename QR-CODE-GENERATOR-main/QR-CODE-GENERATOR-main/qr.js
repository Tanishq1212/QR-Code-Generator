var container  = document.querySelector(".container");
var generatebtn = document.querySelector(".generate-btn");
var qrinput = document.querySelector(".qr-input");
var qrimg = document.querySelector(".qr-image");

window.onload = function(){
generatebtn.onclick = function() {
    if(qrinput.value.length > 0) {
    generatebtn.innerText = "Generating QR Code..."

    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrinput.value ; 
     qrimg.onload = function()
     {
        container.classList.add("active");
        generatebtn.innerText = "Generate QR code"
     }
}
}
}