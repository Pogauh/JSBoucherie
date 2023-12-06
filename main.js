import {getTypes,getProduits,authentifier, createUser} from './api/api_user.js ';

const connexionButton = document.getElementById('connexionButton');
connexionButton.addEventListener('click', connectClick, false);
const emailInput = document.getElementById('emailConnexion');
const passwordInput = document.getElementById('passwordConnexion');

const creationUser = document.getElementById('creationUser');
creationUser.addEventListener('click',createUserClick, false);


async function afficherTypes(){
    try {
            const types = await getTypes();
            var lesTypes = types["hydra:member"];

            
            for (let type of lesTypes) {
                console.log(type.description);
            }
            
            var olTypes = document.getElementById('olTypes');
            for (let type of lesTypes) {
                var li = document.createElement("li");
                li.classList.add("list-group-item","d-flex","justify-content-between","align-items-start");

                var div = document.createElement("div");
                div.classList.add("ms-2" ,"me-auto");

                var div2 = document.createElement("div");
                div2.innerText = type.description;
                var buttonDetail = document.createElement("button");
                buttonDetail.innerText = ("detail");
                buttonDetail.classList.add();
                





                div2.classList.add('fw-bold');

                li.appendChild(div);
                div.appendChild(div2);
                div2.appendChild(buttonDetail);
                olTypes.appendChild(li);       
            } 
    }
    catch (erreur){
        console.log('erreur :', erreur);
    }
}

async function createUserClick() {
    var nom = nomCree.value;
    var prenom = prenomCree.value;
    var email = emailCree.value;
   console.log(nom,prenom,email)

   try {
       
       // ---------------- ligne ci - dessous pas sur 
       const newUser = await createUser(nom, prenom, email);
       console.log('Nouvel utilisateur créé:', newUser);
   } catch (erreur) {
       console.error('Erreur lors de la création de l\'utilisateur : ', erreur);
   }
}


async function connectClick() {

    const email = emailInput.value;
    const password = passwordInput.value;
    const r = await authentifier(email, password);
    console.log(r.token);
    //Changement de token en chaine de caractere
    localStorage.setItem('token',r.token);
    localStorage.setItem('email',email);

    console.log("l'email c'est : ", email)
    //console.log("Le Local Storage",localStorage)

}

const produit = getProduits();
afficherTypes();
console.log("test");
