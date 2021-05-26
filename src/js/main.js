import {docteur,salleDAttente,pharmacie,allTraitement, cimetierre} from './classe.js'

//le main
let i=5;
salleDAttente.personnes.forEach(element => {
    console.log(`Il y a ${i} personnes dans la salle d attente`);
    console.log(`${element.nom} est entre au cabinet`);
    docteur.chat();
    element.etatSante="en traitement";
    docteur.cabinet.push(element);
    docteur.diagnostique(element,allTraitement);
    element.paye(docteur);
    console.log(`${element.nom} a quitte le cabinet`);
    element.goTo(pharmacie);
    console.log(element.traitement);
    element.paye(cimetierre);
    console.log("_______________")

    i--;
    
});
