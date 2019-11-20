// Logid konsoolile
 // Muutujad

 // logid
 console.log('123');
 // var
 // muutujate defineerimine
 var nimi = 'Anna'; // defineerimine
 console.log(nimi);
 nimi = 'Katrin'; // väärtuse omistamine
 console.log(nimi);

 // tabel
 console.table({a : 1, b : 2});
 // muutujate initsialiseerimine
 var tervitus;
 console.log(tervitus);
 tervitus = 'Tere tulemast!';
 console.log(tervitus);

 // veateade
 console.error('See on mingi viga');
 // liitnimede kasutamine
 var eesNimi = 'Anna'; // Camel Stiil
 var ees_nimi = 'Anna'; // PHP Stiil
 var EesNimi = 'Anna'; // Pascal Stiil
 var eesnimi = 'Anna';

 // märkused
 console.warn('See on märkus');
 // let - muutuja
 let pereNimi = 'Karutina';
 console.log(pereNimi);
 pereNimi = '?????';
 console.log(pereNimi);

 // ajakulu kontroll
 console.time('Test');
   console.log('mingi tegevus');
   console.log('mingi tegevus');
   console.log('mingi tegevus');
   console.log('mingi tegevus');
   console.log('mingi tegevus');
 console.timeEnd('Test');
 // const - konstant
 const minuEesNimi = 'Anna';
 console.log(minuEesNimi);
 // minuEesNimi = 'Katrin';

 // kustutamine
 console.clear(); 
 // const kasutamise näide 1
 const inimene = {nimi : 'Katrin', vanus : 20};
 // inimene = {nimi: 'Katrin', rahvus: 'eestlane'};
 console.table(inimene);
 inimene.vanus = 21;
 console.table(inimene);

 // const kasutamine näide 2
 const arvud = [1, 2, 3, 4, 5];
 // arvud = [1, 2, 3, 4, 5, 6];
 console.log(arvud);
 arvud.push(6);
 console.log(arvud); 
