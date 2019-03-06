window.onload = function () {
    var canvas = document.getElementById("canvas");
    var canstuff = canvas.getContext("2d");
    var drawing = document.getElementById("ogDrawing");
    canstuff.fillStyle = "#612A03";
    canstuff.drawImage(drawing, 25, 25);
};