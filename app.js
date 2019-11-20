// for tsükkel
 // üldtsükkel
 // let arv;
 let lause;
 for(let arv = 1; arv <= 10; arv++){
   lause = 'arv =  ';
   if(arv < 10) {
     console.log('arv =  ' + arv);
     lause = lause + ' ';
   }
   lause = lause + arv;
   if(arv % 2 == 0){
     lause = lause + ' - paaris';
   } else {
     console.log('arv = ' + arv);
     lause = lause + ' - paaritu';
   }
   console.log(lause);
 } 