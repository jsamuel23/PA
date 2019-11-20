// Funktsioonid

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
   // tegu on paaritu arvuga
   console.log(arv + ' on paaritu');
 // funktsiooni defineerimine
 /* 
 function funktsiooniNimi([param1, param2, .., paramN]){
   funktsiooni sisu
 }
 */
 function paarsuseKontroll(arv){
   // arvutame jääk 2-ga jagamisel
   let jaak = arv % 2;
   // kui jaak on võrdne nulliga
   if( jaak === 0 ){
     // tegu on paaris avuga
     console.log(arv + ' on paaris');
   } else {
     // tegu on paaritu arvuga
     console.log(arv + ' on paaritu');
   }
 }
 // funktsiooni kasutamine
 paarsuseKontroll(4);
 paarsuseKontroll(9);