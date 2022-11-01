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
let total_points = 0;
function init() {
    for(person of people) { 
        doInsert(person.nom, person.prenom, person.points);
        
    }
}

function doInsert(nom, prenom, points) {
    num++;
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
    table=[];
    keys= ['nom','prenom','points']
    rows= document.getElementsByTagName('tr');
    for(i=1;i<rows.length;i++){
        childs=rows[i].childNodes
        t=[];
        for(j=1;j<childs.length-1;j++){
            t.push(childs[j].innerText)
            
        }
        

        person = new Object();
        for (n=0;n<t.length;n++){
            person[keys[n]]=t[n];
        }
        table.push(person)
    }
    console.log(table);

}