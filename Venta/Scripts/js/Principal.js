class Principal {
    constructor() {

    }
    userLink(URLactual) {
       //alert(URLactual);
        if (URLactual == "/Principal/Index" || URLactual== "/Principal/Index/")
        {
            document.getElementById("idColeccion").classList.add('active');
        }
        if (URLactual == "/Usuario/Index" || URLactual== "/Usuario/Index/")
        {
            document.getElementById("idColeccion2").classList.add('active');
        }
        if (URLactual == "/Usuario/Registrar" || URLactual == "/Usuario/Registrar/")
        {
            document.getElementById("idColeccion2").classList.add('active');
        }
        
    }
}

//const greenBotton = document.getElementById('idColeccion');
//const blueBotton = document.getElementById('idColeccion2');
//const colorSquare = document.getElementById('idBoton1');
//const colorSq = document.getElementById("idBoton2");

//greenBotton.addEventListener('click', (e) => {
//    //colorSq.classList.remove("blue");
//    colorSquare.classList.add("green");
//});

//blueBotton.addEventListener('click', (e) => {
//   // colorSquare.classList.remove("green");
//    colorSq.classList.add("blue");
//})


