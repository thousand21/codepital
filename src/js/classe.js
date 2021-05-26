class Patient{
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        this.nom=nom;
        this.maladie=maladie;
        this.argent=argent;
        this.poche=poche;
        this.etatSante=etatSante;
        this.traitement=traitement;
        this.goTo=(arrivee)=>{
            arrivee.personnes.push(this);
            console.log(`${this.nom} est arrive a ${arrivee.nom}`);
        }
        this.takeCare=()=>{

        }
        this.paye=(qqun)=>{
            if(qqun==docteur){
                docteur.argent+=50;
            this.argent-=50;
            console.log(`${this.nom} a paye le docteur`);
            console.log(`Il lui reste ${this.argent} €`);
            }
             else{
                console.log(`le traitement de ${this.nom} coute ${this.traitement} €`);
                if(this.argent>=this.traitement){
                    console.log(`${this.nom} est soigne`);
                }
                else{
                    console.log(`${this.nom} n a pas assez dargent pour payer le traitement`);
                    console.log(`${this.nom} est mort et donc envoye au cimetierre`),
                    qqun.personnes.push(this.nom);
                }
            }
        }
           
            
        }
    }




let Marcus=new Patient("Marcus","mal indente",100,"","malade",);
let Optimus=new Patient("Optimus","unsave",200,"","malade",);
let Sangoku=new Patient("Sangoku","404",100,"","malade",);
let Darthvader=new Patient("Darthvader","azmatique",110,"","malade",);
let Semicolon=new Patient("Semicolon","syntaxError",60,"","malade",);



class Docteur{
    constructor(nom,argent,cabinet){
        this.nom=nom;
        this.argent=argent;
        this.cabinet=cabinet;
        this.diagnostique=(personne,traitements)=>{
            console.log(`La maladie de ${personne.nom} est ${personne.maladie}`);
            if(personne.maladie=="mal indente"){
                personne.traitement=allTraitement[0].prix;
                
                console.log(`Le taitement de ${personne.nom} est ${traitements[0].traitement}`);
                
            }
            else if(personne.maladie=="unsave"){
                personne.traitement=allTraitement[1].prix;
                console.log(`Le taitement de ${personne.nom} est ${traitements[1].traitement}`);
                
            }
            else if(personne.maladie=="404"){
                personne.traitement=allTraitement[2].prix;
                console.log(`Le taitement de ${personne.nom} est ${traitements[2].traitement}`);
                
            }
            else if(personne.maladie=="azmatique"){
                personne.traitement=allTraitement[3].prix;
                console.log(`Le taitement de ${personne.nom} est ${traitements[3].traitement}`);
                
            }
            else if(personne.maladie=="syntaxError"){
                personne.traitement=allTraitement[4].prix;
                console.log(`Le taitement de ${personne.nom} est ${traitements[4].traitement}`);
                
            }
            console.log(personne);
        }
        this.patientIn=()=>{

        }
        this.patientOut=()=>{

        }
        this.chat=()=>{
            setInterval(function(){ console.log("Miaou"); }, 2000);
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
let malIndente=new Diagnostiques("mal indente","ctrl+maj+f");
let unsave=new Diagnostiques("unsave","saveOnFocusChange");
let check404=new Diagnostiques("404","CheckLinkRelation");
let azmatique=new Diagnostiques("azmatique","Ventoline");
let syntaxError=new Diagnostiques("syntaxError","f12+foc");
let traitements=[malIndente,unsave,check404,azmatique,syntaxError];
class Lieu{
    constructor(nom,personnes){
        this.nom=nom;
        this.personnes=personnes;
        this.etre=()=>{
            let salleDAttentepersonne=5;
            console.log(`Il y a ${salleDAttentepersonne} personnes dans la salle d attente`);
            
        }
    }
}

let salleDAttente=new Lieu("salle d'attente",[Marcus,Optimus,Sangoku,Darthvader,Semicolon]);
let cimetierre=new Lieu("Cimetierre",[]);
class Pharmacie extends Lieu{
    constructor(nom,personnes){
        super(nom,personnes);
        
    }
}
let pharmacie=new Pharmacie("pharmacie",[]);

class Traitement{
    constructor(traitement,prix){
        this.traitement=traitement;
        this.prix=prix;
    }

    }
let ctrl=new Traitement("ctrl+maj+f",60);
let saveOnFocusChange=new Traitement("saveOnFocusChange",100);
let CheckLinkRelation= new Traitement("CheckLinkRelation",35);
let Ventoline= new Traitement("Ventoline",40);
let f12= new Traitement("f12+doc",20);
let allTraitement=[ctrl,saveOnFocusChange,CheckLinkRelation,Ventoline,f12];


export {Marcus,Optimus,Sangoku,Darthvader,Semicolon,docteur,salleDAttente,traitements,pharmacie,cimetierre,allTraitement}