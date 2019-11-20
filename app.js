// Funktsioon, mis arvutab 
 // riistküliku pindala
 // ja väljastab ekraani

 function riistkylikuPindala(pikkus, laius){
    // arvutame pindala
    let pindala = pikkus * laius;
    // tagastame pindala põhiprogrammi
    return pindala;
  }
 
  // Funktsioon, mis väljastab tulemus ekraani
  function valjasta(pikkus, laius){
    // väljastame väärtused
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    // arvutame pindala
    let pindala = pikkus * laius;
    // väljastame pindala
    // salvestame arvutatud pindala
    let pindala = riistkylikuPindala(pikkus, laius);
    // väljastame tulemus
    console.log('Pindala = ' + pindala);
  }
 
  riistkylikuPindala(15, 5);
  valjasta(15, 5);
  valjasta(1, 5); 