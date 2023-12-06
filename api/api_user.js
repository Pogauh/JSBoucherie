const API_URL = 'https://s3-4680.nuage-peda.fr/boucherieTest/api/types'

async function getTypes(page=1) {
    try{
        const response = await fetch(`${API_URL}?page=${page}&order%5bdescription%5D=asc`);
        if(!response.ok){
            throw new Error('Erreur : '+response.statusText);
        }
        const data = await response.json();
        return data;
    }
    catch(erreur){
        console.error('Erreur lors de la configuration: ',erreur);
        throw erreur;
    }
}

async function getProduits(page=1) {
    try{
        const response = await fetch(`https://s3-4680.nuage-peda.fr/boucherieTest/api/produits?page=${page}`);
        if(!response.ok){
            throw new Error('Erreur : '+response.statusText);
        }
        const data = await response.json();
        return data;
    }
    catch(erreur){
        console.error('Erreur lors de la configuration: ',erreur);
        throw erreur;
    }
}



async function authentifier(email,password) {
    try{
        const data ={
            email: email,
            password: password,
        };

        // creation des options de la requete
        const options={
            method: "POST",//methode HTTP
            headers:{
                'Content-Type':'application/json',
            },

            body: JSON.stringify(data)
        }


        const response = await fetch(`https://s3-4680.nuage-peda.fr/boucherieTest/api/authentication_token`,options);


        if(!response.ok){
            throw new Error('Erreur : '+response.statusText);
        }


        const r = await response.json();
        return r;
    }
    catch(erreur){
        console.error('Erreur lors de l\'Authentification: ',erreur);
        throw erreur;
    }
}

async function createUser(nom, prenom,email,password) {
    try {
      

        const data = {
            email: email,
            nom: nom,
            prenom: prenom,
            
        };

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(`https://s3-4680.nuage-peda.fr/boucherieTest/api/clients`, options);

        if (!response.ok) {
            throw new Error('Erreur : ' + response.statusText);
        }

        const userData = await response.json();
        return userData;
    } catch (erreur) {
        console.error('Erreur lors de la création de l\'utilisateur : ', erreur);
        throw erreur;
    }
}



export {getTypes,getProduits,authentifier,createUser }