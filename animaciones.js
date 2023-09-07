var body=document.getElementsByTagName('body');
const bod=Array.from(body)[0]
const menu=document.getElementById('menu-principal');
const contenido= document.getElementById('section-1');
const alturaContenido= contenido.clientHeight;
console.log(alturaContenido);

window.onscroll=function(){
    var y=window.scrollY;
    if(y > 0){
        ocultarMenu(y);
    }
}


function ocultarMenu(y){
    let calculo=y*90/100;
    if(calculo >90)
        calculo=90    
    console.log(calculo);
    let cadena=`rotateX(-${calculo}deg)`;
    menu.style.transform=cadena;
}