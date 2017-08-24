// EXERCICE 1


// variables!


//
// var user1 = {
// prenom: "jo",
// nom: "boddy",
// pays: "france",
// age: 20,
// naissance: 1996,
// paiement: ["visa","mastercard","paypal","espece"],
// getinfo: function(){
//    var annee = 2017;
//    var bornYears =  (annee - this.age);
//    alert("Nom :" + " " + this.nom+ "\n"  + "Age :" + " "+ this.age+ "\n"  +"Année Naissance :" +" "+ bornYears + "\n" + "Pays :" + " " +this.pays+"\n" +"Paiements :" + " " +this.paiement+ "\n");
//
//
//  }
// };
// user1.getinfo();
//
//
// //prototype / function
//
// function user (prenom,nom,pays,age,naissance,paiement) {
//   this.prenom = prenom;
//   this.nom = nom;
//   this.pays = pays;
//   this.age = age;
//   this.naissance = naissance;
//   this.paiement = paiement;
// }
//
//
//
//
// //script!
//
// var userOne = new user('Bob', 'Smith','usa',32,1985,['paypal','espace']);
//
// var infoValid = {
//     pays: ["FRANCE","ITALIE","BELGIQUE","ESPAGNE"],
//     paiement: ["VISA" , "ESPECE"],
//     age: 18,
//     getVerif : function(){
//
// var ages = prompt("Quelle est votre Age?");
//  if (ages < infoValid.age) {
//      alert("access refuse!");
//  }
// else {
//    alert("access accepter!");}
//
// var country = prompt("Quelle est votre pays?");   //SA MARCHE PAS!!
//   for(i=0;i<infoValid.pays.length;i++){
//   if (country == infoValid.pays){
//       alert("ok!");
//       break;
//   }
//   else {
//       alert("refusé!");
//   }
// }
// }
// }
// infoValid.getVerif();
//
/*
 // EXERCICE 2

var sangoku = new guerrier ("SANGOKU",83,91,100);
var hit = new guerrier ("HIT",81,89,100);



function guerrier (nom,attaque,def,sante) {
  this.nom = nom;
  this.attaque = attaque;
  this.def = def;
  this.sante = sante;
  this.atk = function (guerrier){
  guerrier.sante = guerrier.sante - this.attaque;
  alert("vie restant" +" "+  guerrier.sante +"/100");}
  // ____________________________________________
  this.getName = function() {
  alert(this.nom); };
  // ____________________________________________
  this.double = function (magicien){
  magicien.sante  = magicien.sante - this.attaque;
  alert("vie restant" +" "+  magicien.sante +"/200");

   magicien.sante = magicien.sante + magicien.soin;
   alert(magicien.sante + " de sante restant");

  }



}

alert("La vie de sangoku est:  " + sangoku.sante +  "HP" + "\n" + "La vie de Hit est: " + hit.sante + "HP");
alert("Sangoku attaque Hit " ) + sangoku.atk(hit) ;
alert("Hit attaque Sangoku " ) + hit.atk(sangoku) ;
alert("sangoku attaque le magicien")  + sangoku.double(merlin) ;
alert("hit attaque le magicien")  + hit.double(merlin) ;



 _____________________________________________________________________________
var merlin = new magicien ("MERLIN",80,50,200,150,10);

function magicien (nom,attaque,def,sante,mana,soin) {
  this.nom = nom;
  this.attaque = attaque;
  this.def = def;
  this.sante = sante;
  this.mana = mana;
  this.soin = soin;
  this.getName = function() {
     alert(this.nom);
       };
  __________________________________________
  this.heal = function (magicien) {
   magicien.sante = magicien.sante + this.soin;
   alert(magicien.sante + " de sante restant");
   if (this.mana > 10 ){
   magicien.mana = this.mana - 10 ;
   alert(magicien.mana + " mana restant");}
   else {alert("Je n'est plus de Mana! ");}
 ____________________________________________


}
}

// _____SCRIPT ____


sangoku.getName();
hit.getName();

merlin.heal(merlin);
merlin.getName();

sangoku.double(merlin);
hit.double(merlin);


// _____________________________________________________________________________
*/

// EXERCICE 3


 var x = document.getElementsByTagName("p");
 for (i = 0; i < x.length; i++) {
     x[i].style.color = "blue";
     }

