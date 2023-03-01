let Spoural = {
    firstname: document.getElementById("d1") ,
    lastname: document.getElementById("d2") ,
    id_no: document.getElementById("d3") ,
    departement: document.getElementById("d4") ,
    contact_no: document.getElementById("d5") ,
    gender: document.getElementById("d6")
}
function input(){
    let tr = document.createElement("tr");
    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));
    let td5 = tr.appendChild(document.createElement("td"));
    let td6 = tr.appendChild(document.createElement("td"));
    td1.classList.add("tblhead");
    td2.classList.add("tblhead");
    td3.classList.add("tblhead");
    td4.classList.add("tblhead");
    td5.classList.add("tblhead");
    td6.classList.add("tblhead");
    td1.innerHTML = Spoural.firstname.value;
    td2.innerHTML = Spoural.lastname.value;
    td3.innerHTML = Spoural.id_no.value;
    td4.innerHTML = Spoural.departement.value;
    td5.innerHTML = Spoural.contact_no.value;
    td6.innerHTML = Spoural.gender.value;
    
    document.getElementById("tbdy").appendChild(tr);
}



let car = {
    type : "",
    fuelType : "",
    brand : "",
    isType : function(type){
        this.type = type;
    } ,
    isFuelType : function(fuelType){
        this.fuelType = fuelType;
    } , 
    isBrand : function(brand) {
        this.brand = brand;
    }
}