/*function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    lienzo.shadowColor = "rgba(0,0,0,0.5)";
    lienzo.shadowOffsetX = 4;
    lienzo.shadowOffsetY = 4;
    lienzo.shadowBlur = 5;

    lienzo.font = "bold 50px verdana, sans-serif";
    lienzo.fillText("Mi mensaje ", 100, 100);
}
window.addEventListener("load", iniciar, false);*/

/*function iniciar() {
    var elemento = document.getElementById('lienzo');

    lienzo = elemento.getContext('2d');
    lienzo.font = "bold 20px verdana, sans-serif";
    lienzo.fillText("PRUEBA", 50, 20);
    lienzo.translate(50, 70);
    lienzo.rotate(Math.PI / 180 * 45);
    lienzo.fillText("PRUEBA", 0, 0);
    lienzo.rotate(-Math.PI / 180 * 45);
    lienzo.translate(0, 100);
    lienzo.scale(2, 2);
    lienzo.fillText("PRUEBA", 0, 0);
}
window.addEventListener("load", iniciar, false);*/

/*function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.transform(3,0,0,1,0,0);
    lienzo.font="bold 20px verdana, sans-serif";
    lienzo.fillText("PRUEBA",20,20);
    lienzo.transform(1,0,0,10,0,0);
    lienzo.font="bold 20px verdana, sans-serif";
    lienzo.fillText("PRUEBA",100,20);
    }
    window.addEventListener("load", iniciar, false);*/

/*function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.setTransform(3,3,3,1,0,0);
    lienzo.font="bold 20px verdana, sans-serif";
    lienzo.fillText("PRUEBA",20,20);
    lienzo.setTransform(11,10,0,10,0,0);
    lienzo.font="bold 20px verdana, sans-serif";
    lienzo.fillText("PRUEBA",100,20);
    }
    window.addEventListener("load", iniciar, false);*/

/*function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.save();
    lienzo.translate(50,70);
    lienzo.font="bold 20px verdana, sans-serif";
    lienzo.fillText("PRUEBA1",0,30);
    lienzo.restore();
    lienzo.fillText("PRUEBA2",0,30);
    }
    window.addEventListener("load", iniciar, false);*/

function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    lienzo.fillStyle = "#990000";
    lienzo.fillRect(100, 100, 300, 100);
    
    //lienzo.globalCompositeOperation = "darker";
    //lienzo.globalCompositeOperation = "copy";
    //lienzo.globalCompositeOperation = "destination-atop";
    //lienzo.globalCompositeOperation = "destination-out";
    //lienzo.globalCompositeOperation = "destination-in";
    //lienzo.globalCompositeOperation = "destination-over";
    //lienzo.globalCompositeOperation = "xor";
    //lienzo.globalCompositeOperation = "lighter";
    //lienzo.globalCompositeOperation = "source-atop";
    //lienzo.globalCompositeOperation = "source-out";
    lienzo.globalCompositeOperation = "source-in";

    lienzo.fillStyle = "#AAAAFF";
    lienzo.font = "bold 80px verdana, sans-serif";
    lienzo.textAlign = "center";
    lienzo.textBaseline = "middle";
    lienzo.fillText("PRUEBA", 250, 110);
}
window.addEventListener("load", iniciar, false);