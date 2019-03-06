window.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("ogDrawing");
    ctx.fillStyle = "rgb(98, 114, 255)";
    ctx.drawImage(img, 25, 25);
};