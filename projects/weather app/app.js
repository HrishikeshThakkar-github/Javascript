var selectedRow=null;
function onFormsubmit(){

}

//retrieve the data
function readfromData(){
    var formData={};
    formData["productCode"]=document.getElementById("productCode").value;
    formData["productName"]=document.getElementById("productName ").value;
    formData["productQuantity"]=document.getElementById("productQuantity").value;
    formData["productPrice"]=document.getElementById("productPrice").value;
    return formData;
}

