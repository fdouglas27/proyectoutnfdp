/*function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    var imagen = new Image();
    imagen.src = "https://upload.wikimedia.org/wikipedia/commons/5/57/Lancaster%2C_CA_snow.jpg";
    imagen.addEventListener("load", function () {
        lienzo.drawImage(imagen, 20, 20)
    }, false);
}
window.addEventListener("load", iniciar, false);*/

/*function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    var imagen=new Image();
    imagen.src = "https://previews.123rf.com/images/leodikan/leodikan1211/leodikan121100038/16293185-copo-de-nieve-de-la-luz-del-atardecer.jpg?fj=1";
    imagen.addEventListener("load", function(){
    lienzo.drawImage(imagen,0,0,elemento.width,elemento.height)
    }, false);
    }
    window.addEventListener("load", iniciar, false);*/

    function iniciar(){
        var elemento=document.getElementById('lienzo');
        lienzo=elemento.getContext('2d');
        var imagen=new Image();
        imagen.src="https://previews.123rf.com/images/leodikan/leodikan1211/leodikan121100038/16293185-copo-de-nieve-de-la-luz-del-atardecer.jpg?fj=1";
        imagen.addEventListener("load", function(){
        lienzo.drawImage(imagen,135,30,50,50,0,0,200,200)
        }, false);
        }
        window.addEventListener("load", iniciar, false);