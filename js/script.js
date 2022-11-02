let num=0;
let people = [
    {
        nom: "nom1",
        prenom: "prenom1",
        points: 5
    },
    {
        nom: "nom2",
        prenom: "prenom2",
        points: 10
    },
    {
        nom: "nom3",
        prenom: "prenom3",
        points: 15
    },
]
let encien=false;
let total_points = 0;
function init() {
    for(person of people) { 
        doInsert(person.nom, person.prenom, person.points);
        
    }
}

function doInsert(nom, prenom, points) {
    if(encien==false){
    encien = true;
    init();   
    }

    num++;
    total_points= total_points+points;
    update_summary(total_points,num);
    doInsertRowTable(num,nom,prenom,points);
    
    
}

function update_summary(pts,nb){
    element_lignes = document.getElementById('p1');
    element_points = document.getElementById('p3');
    
    element_lignes.innerText=nb+" ligne(s)";
    element_points.innerText='Totale point(s) '+pts;
    
}

function doInsertRowTable(id,nom,prenom,points){
    //Recuperer l'element tableau
    const table= document.getElementById('table');
    //creer l'element de type tr
    row = document.createElement('tr');
    //ajouter l'attribut class='row'
    row.setAttribute('class','row');

    //creer 5 elements de type td
    col1= document.createElement('td');
    col2= document.createElement('td');
    col3= document.createElement('td');
    col4= document.createElement('td');
    col5= document.createElement('td');

    //remplissage des colonnes
    col1.innerText=id;
    col2.innerText=nom;
    col3.innerText=prenom;
    col4.innerText=points;
    col5.innerHTML="<input type='checkbox'/>";

    //creer des attribut class pour les colonnes
    col1.setAttribute('class','col_nb');
    col4.setAttribute('class','col_nb');
    col2.setAttribute('class','col_txt');
    col3.setAttribute('class','col_txt');
    col5.setAttribute('class','col_select');

    //rajout des elements col a row
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    //rajout de l'element row a la table
    table.appendChild(row);
}

function consoleTableau(){
    console.log(people);
}

function doNewData() {
    const elt_nom = document.getElementById('form_nom');
    const elt_prenom = document.getElementById('form_prenom');
    const elt_points = document.getElementById('form_points');

    nom= elt_nom.value;
    prenom= elt_prenom.value;
    points= parseInt(elt_points.value);

    if(nom=="" || prenom=="" || Number.isNaN(points)){
        alert('Veuillez verifier les champs \nErreur : champs vides')
        elt_nom.style.borderColor = "red";
        elt_prenom.style.borderColor = "red";
        elt_points.style.borderColor = "red";
    }

    else{
        
        doInsert(nom,prenom,points);
        keys= ['nom','prenom','points']
        t=[nom,prenom,points]
        person = new Object();
            for (n=0;n<t.length;n++){
                person[keys[n]]=t[n];
            }
        
        people.push(person)

        elt_nom.style.borderColor = "black";
        elt_prenom.style.borderColor = "black";
        elt_points.style.borderColor = "black";

        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";

    }


}

function deleteRow(){
    if(num<=0){
        alert("Tableau deja vide !")
    }else{
        table = document.getElementById("table");
        checkbox_list = table.querySelectorAll(".col_select input");
        isOneChecked = false;
        for(let i=0; i<checkbox_list.length; i++){
            if(checkbox_list[i].checked){
                isOneChecked = true;
            }
        }
        if(!isOneChecked){
            alert('Selectionnez au moins une ligne !');
        }
        else{
            if(confirm('Voulez-vous vraiment supprimer les lignes ?')){
                element_found = false;
                table = document.getElementById('table');
                rows = document.getElementsByClassName('row');
                
                let i=0;
                while(i<rows.length){
                    if(rows[i].lastChild.firstChild.checked) {
                    total_points = total_points - parseInt(rows[i].childNodes[3].innerText);
                    rows[i].remove();
                    people.splice(i, 1);
                    element_found = true;
                    i--;
                    num--;
                            
                    }
                    i++
                }
                alert("Ligne supprimée avec succès");
                update_summary(total_points,num);

            }
        }
    }
}