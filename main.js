
let nom = document.getElementById('nom');
let brande = document.getElementById('brande');
let price = document.getElementById('price');
let date = document.getElementById('date');
let Type = document.getElementById('Type');
let redio1 = document.getElementById('yes');
let redio2 = document.getElementById('No');
let submit = document.getElementById('submit');
let resultat = document.getElementById('cate');

let Promo;
let mood = 'create';
let tmp;

let dataPro =[];
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product);
}else{

    dataPro = [];
}
submit.onclick = function(){
    let newPro = {
        nom:nom.value,
        brande:brande.value,
        price:price.value,
        date:date.value,
        Type:Type.value,
        Promo: Promo,
    }
    if (nom.value != 0 && nom.value.length < 30
    && brande.value != 0 && brande.value.length < 30
    && price.value != 0// && price.value.match(/[0-9]+/g
    && date.value != 0
    && Type.value !="Veuillez selectionner ..."
    )
    {
        if(mood === 'create'){

        dataPro.push(newPro); // Add an array in the object
    }else{
        dataPro[ tmp  ]  =  newPro;   //Modify in index + add data input:
        mood = 'create';
        submit.innerHTML = 'Create';
        cleardate()  //delete input data
    }
    }

    localStorage.setItem('product', JSON.stringify(dataPro)); //Convert array to string + store data in product + fetch data from 
    PrintData() //print data
}

function cleardate(){
    nom.value = "" ;
    brande.value = "" ;
    price.value = "" ;
    date.value = "" ;
    Type.value = "" ;
    Promo.value="";
}

function PrintData(){
    let table = '';
    for(let i = 0 ; i < dataPro.length ; i++){
        table += `
        <tr>
            <td>${dataPro[i].nom}</td>
            <td>${dataPro[i].brande}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].date}</td>
            <td>${dataPro[i].Type}</td>
            <td>${dataPro[i].Promo}</td>
            <td><button onclick = "ModifiData( ${i} )" id = "">Modify</button></td>
            <td><button onclick = "DleteData(  ${i}  )" id = "">Delete</button></td>
            </tr>`;
}
    document.getElementById('tbody').innerHTML = table;
}
PrintData()

function DleteData(i){
    dataPro.splice(i,1)
    localStorage.product = JSON.stringify(dataPro) //Add a array after deleting it
    PrintData()
}
function ModifiData(i){
    nom.value = dataPro[i].nom;
    brande.value = dataPro[i].brande;
    price.value = dataPro[i].price 
    date.value = dataPro[i].date
    Type.value = dataPro[i].Type
    nom.value = dataPro[i].nom
    resultat.value = dataPro[i].resultat
    submit.innerHTML = 'Modifi';
    // submit.style.background =  rgb(0,172,238);
    mood = 'Modifi';
    tmp = i;
}
function inptrdio(){
    var rd1 = document.getElementById("yes");
    var rd2 = document.getElementById("No");
    
    if(rd1.checked==true ){
        resultat.innerHTML= `${rd1.value}` ;
        Promo = 'Yes' ;
    }else if(rd2.checked==true){
        resultat.innerHTML= `${rd2.value}` ;
        Promo = 'Non' ;
    }else{
        Promo = '' ;
    }
}


