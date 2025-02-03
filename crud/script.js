let data = JSON.parse(localStorage.getItem("object")) || [];
    // { id: 1, name: "hrishi", email: "hri@gmail.com" },
    // { id: 2, name: "kesh", email: "kesh@gmail.com" },
    // { id: 3, name: "thakkar", email: "thakkar@gmail.com" }

function readALL() {
  
    localStorage.setItem("object", JSON.stringify(data));
    
    var tabledata = document.querySelector(".data_table");
    var elements = "";

  
    data.map(record => (
        elements += `<tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>
                <button type="button" class="btn btn-danger" onclick="deleteItem(${record.id})">Delete</button>
                <button type="button" class="btn btn-warning" onclick="edit(${record.id})">Update</button>
            </td>
        </tr>`
    ));

    tabledata.innerHTML = elements;
   
}


document.addEventListener('DOMContentLoaded', readALL);

function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add-btn").style.display = "none";
}

function add() {
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var newObj = { id: Date.now(), name: name, email: email };
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add-btn").style.display = "block";

    readALL(); 
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";

    var obj = data.find(rec => rec.id === id);
    document.querySelector(".uname").value = obj.name;
    document.querySelector(".uemail").value = obj.email;
    document.querySelector(".id").value = obj.id;
}

function update() {
    var id = parseInt(document.querySelector(".id").value);
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = { id, name, email };
    document.querySelector(".update_form").style.display = "none";
    readALL(); 
}

function deleteItem(id) {
    data = data.filter(rec => rec.id !== id);
    readALL(); 
}

