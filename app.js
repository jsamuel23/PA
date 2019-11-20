@@ -10,8 +10,9 @@ function riistkylikuPindala(pikkus, laius){
    return pindala;
  }
 
 
  // Funktsioon, mis väljastab tulemus ekraani
  function valjasta(pikkus, laius){
  function valjasta(pikkus = 0, laius = 0){
    // väljastame väärtused
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
  @@ -22,4 +23,5 @@ function valjasta(pikkus, laius){
  }
 
  valjasta(15, 5);
  valjasta(1, 5); 
  valjasta(1, 5);
  valjasta(); 