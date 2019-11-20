@@ -8,17 +8,22 @@ function funktsiooniNimi([param1, param2, .., paramN]){
}
*/
function paarsuseKontroll(arv){
  // tulemuslause defineerimine
  let lause;
  // arvutame jääk 2-ga jagamisel
  let jaak = arv % 2;
  // kui jaak on võrdne nulliga
  if( jaak === 0 ){
    // tegu on paaris avuga
    console.log(arv + ' on paaris');
    lause =  arv + ' on paaris';
  } else {
    // tegu on paaritu arvuga
    console.log(arv + ' on paaritu');
    lause =  arv + ' on paaritu';
  }
  // tagastame antud väärtus
  return lause;
}
// funktsiooni kasutamine
paarsuseKontroll(4);
paarsuseKontroll(9);
let paarsus;
paarsus = paarsuseKontroll(4);
console.log(paarsus);