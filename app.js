// Funktsioonid
 // Nähtavus - Scope

 // Funktsioon, mis arvutab 
 // riistküliku pindala
 // globaalne
 var a = 1;
 let b = 2;
 const c = 3;

 function riistkylikuPindala(pikkus, laius){
   // arvutame pindala
   let pindala = pikkus * laius;
   // tagastame pindala põhiprogrammi
   return pindala;
 }


 // Funktsioon, mis väljastab tulemus ekraani
 function valjasta(pikkus = 0, laius = 0){
   // väljastame väärtused
   console.log('Pikkus = ' + pikkus);
   console.log('Laius = ' + laius);
   // salvestame arvutatud pindala
   let pindala = riistkylikuPindala(pikkus, laius);
   // väljastame tulemus
   console.log('Pindala = ' + pindala);
 }

 valjasta(15, 5);
 valjasta(1, 5);
 valjasta(); 
 console.log('Globaalne: ', a, b, c); 