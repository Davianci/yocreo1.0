/* variables que almacenan el contador de los slide*/
/* slide arte*/
fot1 = 0;
/* slide diseño*/
fot2 = 0;
/* slide experimentos*/
fot3 = 0;
/* slide capacitaciones*/
fot4 = 0;
/* slide fiestas*/
fot5 = 0;
mov=0;

function avanza(element) {
  /*verifica cual slide se movio carga un maximo de movimientos y carga el contador*/
if (element == "fotos1") {
  max=8;
  mov=fot1;
}
if (element == "fotos2") {
  max=7;
  mov=fot2;
}
if (element == "fotos3") {
  max=2;
  mov=fot3;
}
if (element == "fotos4") {
  max=6;
  mov=fot4;
}
if (element == "fotos5") {
  max=11;
  mov=fot5;
}

   if (mov < max) {
       mov ++;
       document.getElementById(element).setAttribute('style','left:-'+(mov*100)+'%');
   }
   
   
carga(element);
  
}


function retrocede(element) {
  /*carga el numero avanzado según el slide al contador*/

if (element == "fotos1") {
  mov=fot1;
}
if (element == "fotos2") {
  mov=fot2;
}
if (element == "fotos3") {
  mov=fot3;
}
if (element == "fotos4") {
  mov=fot4;
}
if (element == "fotos5") {
  mov=fot5;
}

  

   if (mov > 0) {
       mov--;
       document.getElementById(element).setAttribute('style','left:-'+(mov*100)+'%');

   }
carga(element);
   
}
/* carga el contrador a la variable de movimiento*/
function carga(element)
{
     if (element == "fotos1") {
  fot1=mov;
}
   if (element == "fotos2") {
  fot2=mov;
}
   if (element == "fotos3") {
  fot3=mov;
}
   if (element == "fotos4") {
  fot4=mov;
}
   if (element == "fotos5") {
  fot5=mov;
}
}