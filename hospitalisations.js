//Ahmed Ben Daya
//p1161664

var tabPatients = [ 
    { "dossier" : 1, "nom":"leger", "prenom":"Emile", "naissance":"26 Mars 1917", "sexe":"M" }, {"dossier":2, "nom":"Bernard", "prenom":"Marie", "naissance":"03 Fevrier 1946", "sexe":"F"}, {"dossier":3, "nom":"Chartrand", "prenom":"Guy", "naissance":"05 Avril 1959", "sexe":"M"},{"dossier":4, "nom":"Coté", "prenom":"André", "naissance":"02 Septembre 1978", "sexe":"M"}, {"dossier":5, "nom":"Lavole", "prenom":"Carole", "naissance":"04 Novembre 1973", "sexe":"F"}, {"dossier":6, "nom":"Martin", "prenom":"Diane", "naissance":"02 Decembre 1965", "sexe":"F"}, {"dossier":7, "nom":"Lacroix", "prenom":"Pauline", "naissance":"25 Janvier 1956", "sexe":"F"}, {"dossier":8, "nom":"St-Jean", "prenom":"Arthur", "naissance":"07 Octobre 1912", "sexe":"M"},{"dossier":9, "nom":"Bechard", "prenom":"Marc", "naissance":"08 Aout 1980", "sexe":"M"},{"dossier":10, "nom":"Chantrand", "prenom":"Mario", "naissance":"23 Juillet 1947", "sexe":"M"}
 ];

var tabHospitalisations = [
    { "code" : 1234, "nDossier":5, "dateAdmis" : "14 Aout 2000", "dateSortie":"14 Aout 2001","specialite": "médecine"},{ "code" : 1234, "nDossier":10, "dateAdmis" : "12 Decembre 1992", "dateSortie":"12 Decembre 1992","specialite": "chirugie"},{ "code" : 2346, "nDossier":8, "dateAdmis" : "03 Mars 2003", "dateSortie":"05 Mars 2003","specialite": "médecine"},{ "code" : 2346, "nDossier":1, "dateAdmis" : "11 Novembre 1997", "dateSortie":"12 Novembre 1997","specialite": "orthopedie"},{ "code" : 2346, "nDossier":3, "dateAdmis" : "12 Avril 1995", "dateSortie":"30 Avril 1995","specialite": "médecine"},{ "code" : 3980, "nDossier":5, "dateAdmis" : "14 Fevrier 2000", "dateSortie":"14 Mars 2000","specialite": "médecine"},{ "code" : 3980, "nDossier":5, "dateAdmis" : "01 Janvier 2001", "dateSortie":"01 Fevrier 2001","specialite": "médecine"},{ "code" : 3980, "nDossier":9, "dateAdmis" : "03 Avril 1995", "dateSortie":"08 Avril 1995","specialite": "orthopedie"},{ "code" : 3980, "nDossier":7, "dateAdmis" : "27 Novembre 1999", "dateSortie":"04 Decembre 1999","specialite": "chirugie"},{ "code" : 3980, "nDossier":10, "dateAdmis" : "28 Avril 1997", "dateSortie":"05 Mai 1997","specialite": "chirugie"},{ "code" : 4177, "nDossier":3, "dateAdmis" : "03 Aout 2001", "dateSortie":"05 Decembre 2001","specialite": "médecine"},{ "code" : 4177, "nDossier":3, "dateAdmis" : "02 Fevrier 2002", "dateSortie":"23 Fevrier 2002","specialite": "orthopedie"},{ "code" : 7306, "nDossier":2, "dateAdmis" : "23 Mai 1998", "dateSortie":"27 Mai 1998","specialite": "orthopedie"}
];

var tabEtablissements = [
    { "etablissement" : 1234, "nom" :"Centre hospitalier Sud", "adresse":"1234 Boul. Sud, Montréal, Qc", "postalCode":"H2M 3Y6", "phone":"(514) 123-1234"},{ "etablissement" : 2346, "nom" :"Hopital Nord", "adresse":"7562 rue du Souvenir, Nordville,Qc", "postalCode":"J4R 2Z5", "phone":"(450) 222-3333"},{ "etablissement" : 3980, "nom" :"Hopital Centre", "adresse":"4637 Boul. de l'Eglise, Montréal, Qc", "postalCode":"H3J 4K8", "phone":"(514) 123-5678"},{ "etablissement" : 4177, "nom" :"Centre hospitalier Est", "adresse":"12 rue Bernard, Repentigny, Qc", "postalCode":"J8R 3K5", "phone":"(450) 589-2345"},{ "etablissement" : 7306, "nom" :"Hopital du Salut", "adresse":"11 Rue de la Redemption, St-Basile, Qc", "postalCode":"J8H 2D4", "phone":"(450) 345-6789"},{ "etablissement" : 8895, "nom" :"Dernier recours", "adresse":"999 rue St-Pierre, Longeuil, Qc", "postalCode":"J7B 3J5", "phone":"(450) 555-6741"}
];



function hideDiv(id) {
    var divToHide = document.getElementById(id);
    divToHide.style.display = 'none';
    document.getElementById('status').innerHTML='<p></p>';
}

function getTabPatients() {
    document.getElementById('selectHS').style.display = 'none';
    var zoneAffichage = document.getElementById('affichage');
    zoneAffichage.style.display = "block";
    var table = '<tr ><td class="main">Dossier</td><td class="main">Nom</td><td class="main">Prenom</td><td class="main">Date de Naissance</td><td class="main">Sexe</td></tr>';
    var status = document.getElementById('status');
    document.getElementById('patient').style.display = 'none';
    document.getElementById('messagePatient').style.display = 'none';

    
    for (var i in tabPatients) {
        if (i%2==0) {
        table += '<tr>';
        
            table += '<td class="lighter">' + tabPatients[i].dossier + '</td>';
            table += '<td class="lighter">' + tabPatients[i].nom + '</td>';
            table += '<td class="lighter">' + tabPatients[i].prenom + '</td>';
            table += '<td class="lighter">' + tabPatients[i].naissance + '</td>';
            table += '<td class="lighter">' + tabPatients[i].sexe + '</td>';
        
        table += '</tr>';
        } else {
            table += '<td>' + tabPatients[i].dossier + '</td>';
            table += '<td>' + tabPatients[i].nom + '</td>';
            table += '<td>' + tabPatients[i].prenom + '</td>';
            table += '<td>' + tabPatients[i].naissance + '</td>';
            table += '<td>' + tabPatients[i].sexe + '</td>';
        }
    }
    
    zoneAffichage.innerHTML='<button onclick=hideDiv("affichage") class="button">X</button>' + '<table>' + table + '</table>';
    status.innerHTML = 'La liste des patients a été chargée avec succées'
}

function getTabEtablissements() {
    document.getElementById('selectHS').style.display = 'none';
    var zoneAffichage = document.getElementById('affichage');
    zoneAffichage.style.display = 'block';
    var table = '<tr ><td class="main">Etablissement</td><td class="main">Nom</td><td class="main">Adresse</td><td class="main">Code Postal</td><td class="main">Telehone</td></tr>';
    var status = document.getElementById('status');
    document.getElementById('patient').style.display = 'none';
    document.getElementById('messagePatient').style.display = 'none';

    
    for (var i in tabEtablissements) {
        if (i%2 == 0) {
        table += '<tr>';
        
            table += '<td class="lighter">' + tabEtablissements[i].etablissement + '</td>';
            table += '<td class="lighter">' + tabEtablissements[i].nom + '</td>';
            table += '<td class="lighter">' + tabEtablissements[i].adresse + '</td>';
            table += '<td class="lighter">' + tabEtablissements[i].postalCode + '</td>';
            table += '<td class="lighter">' + tabEtablissements[i].phone + '</td>';
        
        table += '</tr>';
        } else {
             table += '<tr>';
        
            table += '<td>' + tabEtablissements[i].etablissement + '</td>';
            table += '<td>' + tabEtablissements[i].nom + '</td>';
            table += '<td>' + tabEtablissements[i].adresse + '</td>';
            table += '<td>' + tabEtablissements[i].postalCode + '</td>';
            table += '<td>' + tabEtablissements[i].phone + '</td>';
        
        table += '</tr>';
        }
    }
    
    zoneAffichage.innerHTML='<button onclick=hideDiv("affichage") class="button">X</button>' + '<table>' + table + '</table>';
    status.innerHTML = 'La liste des établissements a été chargée avec succées'
    
}

function getTabHospitalisations() {
    document.getElementById('selectHS').style.display = 'none';
    var zoneAffichage = document.getElementById('affichage');
    zoneAffichage.style.display = 'block';
    var table = '<tr ><td class="main">Code Etablissement</td><td class="main">No Dossier Patient</td><td class="main">Date Admission</td><td class="main">Date Sortie</td><td class="main">Spécialité</td></tr>';
    var status = document.getElementById('status');
    document.getElementById('patient').style.display = 'none';
    document.getElementById('messagePatient').style.display = 'none';
    
    for (var i in tabHospitalisations) {
        if (i%2==0) {
        table += '<tr>';
        
            table += '<td class="lighter">' + tabHospitalisations[i].code + '</td>';
            table += '<td class="lighter">' + tabHospitalisations[i].nDossier + '</td>';
            table += '<td class="lighter">' + tabHospitalisations[i].dateAdmis + '</td>';
            table += '<td class="lighter">' + tabHospitalisations[i].dateSortie + '</td>';
            table += '<td class="lighter">' + tabHospitalisations[i].specialite + '</td>';
        
        table += '</tr>';
        } else {
            table += '<tr>';
        
            table += '<td>' + tabHospitalisations[i].code + '</td>';
            table += '<td>' + tabHospitalisations[i].nDossier + '</td>';
            table += '<td>' + tabHospitalisations[i].dateAdmis + '</td>';
            table += '<td>' + tabHospitalisations[i].dateSortie + '</td>';
            table += '<td>' + tabHospitalisations[i].specialite + '</td>';
        
        table += '</tr>';
        }
        
        zoneAffichage.innerHTML='<button onclick=hideDiv("affichage") class="button">X</button>' + '<table>' + table + '</table>';
    status.innerHTML = 'La liste des Hospitalisations a été chargée avec succées'
    }
}

function getSelectPatient() {
    document.getElementById('selectHS').style.display = 'none';
    document.getElementById('status').innerHTML="Choisir le code patient pour afficher les hospitalisations.";
    document.getElementById('selectH').style.display = 'block';
    var zoneAffichage = document.getElementById('affichage');
    zoneAffichage.style.display = 'none';
    var status = document.getElementById('status');
    var liste = document.getElementById('patient');
    liste.style.display = 'block';
    document.getElementById('messagePatient').style.display = 'block';
    var select ='<option>Choisir..</options>';
    
    for (var i in tabPatients) {
            select += "<option value='" + tabPatients[i].dossier + "'>" + tabPatients[i].dossier + " ( " + tabPatients[i].nom + " " + tabPatients[i].prenom + " )" + "</option>"
    }

    liste.innerHTML =  select ;
    
}

function getHospitalisations() {
    var zoneAffichage = document.getElementById('affichage');
    var selected = document.getElementById('patient');
    var table = '<tr ><td class="main">Code Etablissement</td><td class="main">No Dossier Patient</td><td class="main">Date Admission</td><td class="main">Date Sortie</td><td class="main">Spécialité</td></tr>';
    var status = document.getElementById('status');
    var k =0; //Compteur pour alterner les couleurs du tableau
    for (var i in tabHospitalisations) {
        if (selected.value == tabHospitalisations[i].nDossier) {
            k++; //Incrementer le compteur
            if(k%2==0) { //les cases pairs ont une couleur et les impairs une autres.
                table += '<tr>';
        
                table += '<td class="lighter">' + tabHospitalisations[i].code + '</td>';
                table += '<td class="lighter">' + tabHospitalisations[i].nDossier + '</td>';
                table += '<td class="lighter">' + tabHospitalisations[i].dateAdmis + '</td>';
                table += '<td class="lighter">' + tabHospitalisations[i].dateSortie + '</td>';
                table += '<td class="lighter">' + tabHospitalisations[i].specialite + '</td>';
        
            table += '</tr>';
            var exists = true;
            } else {
                table += '<tr>';
        
            table += '<td>' + tabHospitalisations[i].code + '</td>';
            table += '<td>' + tabHospitalisations[i].nDossier + '</td>';
            table += '<td>' + tabHospitalisations[i].dateAdmis + '</td>';
            table += '<td>' + tabHospitalisations[i].dateSortie + '</td>';
            table += '<td>' + tabHospitalisations[i].specialite + '</td>';
        
            table += '</tr>';
                exists = true;
            }
        }
    }
    if (exists == true) {
        zoneAffichage.innerHTML='<button onclick=hideDiv("affichage") class="button">X</button>' + '<table>' + table + '</table>';
        zoneAffichage.style.display = 'block';
        selected.style.display = 'none';
        status.innerHTML ='Le(s) Hospitalisation(s) du patient sont affiché(s).';
        document.getElementById('messagePatient').style.display = 'none';
    } else {
        status.innerHTML= 'Ce patient n&rsquo;a pas encore d&rsquo;hospitalisations. Veuillez choisir un autre!';
    }
    
}

function getFirstSelect() {
    document.getElementById('specialite').style.display = 'none';
    document.getElementById('msgS').style.display = 'none';
    document.getElementById('affichage').style.display ='none';
    document.getElementById('selectH').style.display = 'none';
    document.getElementById('status').innerHTML="Choisir l'établissement pour afficher.";
    document.getElementById('selectHS').style.display = 'block';
    var status = document.getElementById('status');
    var liste = document.getElementById('etablissement');
    var select ='<option>Choisir..</options>';
    
    for (var i in tabEtablissements) {
            select += "<option value='" + tabEtablissements[i].etablissement + "'>" + tabEtablissements[i].etablissement + " ( " + tabEtablissements[i].nom + " )" + "</option>"
    }

    liste.innerHTML =  select ;
}

function getSpecialite() {
    var selected = document.getElementById('etablissement');
    document.getElementById('msgS').style.display = 'block';
    var liste = document.getElementById('specialite');
    liste.style.display = 'block';
    var status = document.getElementById('status');
    status.innerHTML="Choisir la spécialité";
    var myArray = [];
    
    var select ='<option>Choisir la spécialité ..</options>';
    
    for (var i in tabHospitalisations) {
        if (tabHospitalisations[i].code == selected.value) {
                    
            myArray.push(tabHospitalisations[i].specialite);    
            // Stocker les valeurs dans un tableau pour trier les doubles
        } 
    }
    for (var i=0;i< myArray.length;i++) { //Boucle pour trier les doubles
        for (var j=i+1 ;j< myArray.length;j++ ) {
            if (myArray[i] == myArray[j]) {
                myArray.splice(j,1); //Enlever l'element doublé
            }
        }
    }
    
    for (var i in myArray) { //Inserer les elements du tableau dans le Select
        select += "<option value='" + myArray[i] + "'>" + myArray[i] + "</option>"
    }
    console.log(myArray)

    liste.innerHTML = select;
    
    
}

function getInformationsTableau() {
    var affichage = document.getElementById('affichage');
    var tableE = '<tr ><td class="main">Etablissement</td><td class="main">Nom</td><td class="main">Adresse</td><td class="main">Code Postal</td><td class="main">Telehone</td></tr>';
    var table = '<tr ><td class="main">Code Etablissement</td><td class="main">No Dossier Patient</td><td class="main">Date Admission</td><td class="main">Date Sortie</td><td class="main">Spécialité</td></tr>';
    var selectedEtablissement = document.getElementById('etablissement').value;
    var selectedSpecialite = document.getElementById('specialite').value;
    var k=0;
    
    for (var i in tabHospitalisations) {
        if(tabHospitalisations[i].specialite == selectedSpecialite && tabHospitalisations[i].code == selectedEtablissement) {
            k++;
            if (k%2==0) {
            table += '<tr>';
        
                table += '<td class="lighter">' + tabHospitalisations[i].code + '</td>';
                table += '<td class="lighter">' + tabHospitalisations[i].nDossier + '</td>';
                table += '<td class="lighter">' + tabHospitalisations[i].dateAdmis + '</td>';
                table += '<td class="lighter">' + tabHospitalisations[i].dateSortie + '</td>';
                table += '<td class="lighter">' + tabHospitalisations[i].specialite + '</td>';
        
            table += '</tr>'; 
            } else {
                table += '<tr>';
        
            table += '<td>' + tabHospitalisations[i].code + '</td>';
            table += '<td>' + tabHospitalisations[i].nDossier + '</td>';
            table += '<td>' + tabHospitalisations[i].dateAdmis + '</td>';
            table += '<td>' + tabHospitalisations[i].dateSortie + '</td>';
            table += '<td>' + tabHospitalisations[i].specialite + '</td>';
        
            table += '</tr>'; 
            
            }
            
            for (var i in tabEtablissements) {
                if(tabEtablissements[i].etablissement == selectedEtablissement) {
                    tableE = '<tr ><td class="main">Etablissement</td><td class="main">Nom</td><td class="main">Adresse</td><td class="main">Code Postal</td><td class="main">Telehone</td></tr>'
                    tableE += '<tr>'; //Pour eviter la repetition des cases et reintiliaser le tableau s'il en trouve un deuxieme dans la boucle
        
                    tableE += '<td class="etablissement">' + tabEtablissements[i].etablissement + '</td>';
                    tableE += '<td class="etablissement">' + tabEtablissements[i].nom + '</td>';
                    tableE += '<td class="etablissement">' + tabEtablissements[i].adresse + '</td>';
                    tableE += '<td class="etablissement">' + tabEtablissements[i].postalCode + '</td>';
                    tableE += '<td class="etablissement">' + tabEtablissements[i].phone + '</td>';
        
                    tableE += '</tr>';
                }
            }
            
            affichage.innerHTML ='<button onclick=hideDiv("affichage") class="button">X</button>' + '<table>' + tableE + '</table>' + '<table>' + table + '</table>';
            affichage.style.display = 'block';
            document.getElementById('selectH').style.display = 'none';
            document.getElementById('selectHS').style.display = 'none';
            document.getElementById('status').innerHTML ='Le(s) Hospitalisation(s) sont affichée(s)';
            
        }
    }
}

function secondHideDiv() {
    document.getElementById('selectHS').style.display ='none';
}


