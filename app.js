// while
 // ellkontrolliga tsükkel
 let number = 1; // defineerime tsükli juhtimismuutuja
 // paneme kontrolltingimus paika
 while(number <= 10) {
   // sooritame tegevused
   console.log(number);
   // suurendame juhtimismuutuja väärtus
   number++;
 } 
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
 } else {
   console.log(arv + ' ei ole algarv');
 }