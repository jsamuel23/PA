// Tsüklid
 // Funktsioonid

 // while
 // ellkontrolliga tsükkel
 // defineerime number
 let arv = 4; 
 // defineerime jagaja algväärtus
 let jagaja = 2;
 // suurendame jagaja väärtus nii kaua, kui
 // jagamise jääk on 0
 while(arv % jagaja != 0){
   jagaja++;
 }
 // kontrollime, kas jagasime sama arvuga
 if(arv == jagaja) {
   console.log(arv + ' on algarv');
 // arvu paarsuse kontroll
 // defineerime suvaline täisarv
 let arv = 5;
 // arvutame jääk 2-ga jagamisel
 let jaak = arv % 2;
 // kui jaak on võrdne nulliga
 if( jaak === 0 ){
   // tegu on paaris avuga
   console.log(arv + ' on paaris');
 } else {
   console.log(arv + ' ei ole algarv');
   // tegu on paaritu arvuga
   console.log(arv + ' on paaritu');
 }