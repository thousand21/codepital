class Patient{
    constructor(nom,maladie,argent,poche,etatSante,traitement,goTo,takeCare,paye){
        this.nom=nom;
        this.maladie=maladie;
        this.argent=argent;
        this.poche=poche;
        this.etatSante=etatSante;
        this.traitement=traitement;
        this.goTo=()=>{

        }
        this.takeCare=()=>{

        }
        this.paye=()=>{

        }
    }
}



let Marcus=new Patient("Marcus","mal indenté",100,"","malade",);
let Optimus=new Patient("Optimus","unsave",200,"","malade",);
let Sangoku=new Patient("Sangoku","404",100,"","malade",);
let Darthvader=new Patient("Darthvader","azmatique",110,"","malade",);
let Semicolon=new Patient("Semicolon","syntaxError",60,"","malade",);



class Docteur{
    constructor(nom,argent,cabinet){
        this.nom=nom;
        this.argent=argent;
        this.cabinet=cabinet;
        this.diagnostique=()=>{

        }
        this.patientIn=()=>{

        }
        this.patientOut=()=>{

        }
    }
}
let docteur= new Docteur("Van",0,[]);
class Diagnostiques{
    constructor(maladie,traitement){
        this.maladie=maladie;
        this.traitement=traitement;
    }
}

class Lieu{
    constructor(nom,personnes){
        this.nom=nom;
        this.personnes=personnes;
        this.etre=()=>{
            console.log(`Il y a ${this.personnes.length} personnes dans la salle d attente`)
        }
    }
}

let salleDAttente=new Lieu("salle d'attente",[Marcus,Optimus,Sangoku,Darthvader,Semicolon]);

class Pharmacie extends Lieu{
    constructor(nom,personnes){
        super(nom,personnes);
        this.cimetierre=()=>{

        }
    }
}

class Traitement{
    constructor(traitement,prix){
        this.traitement=traitement;
        this.prix=prix;
    }
}

export {Marcus,Optimus,Sangoku,Darthvader,Semicolon,docteur,salleDAttente}