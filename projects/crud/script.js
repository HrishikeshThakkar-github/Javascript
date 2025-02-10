let data = JSON.parse(localStorage.getItem("products")) || [
    // { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/60" },
    // { id: 2, name: "Phone", price: 30000, image: "https://via.placeholder.com/60" },
    // { id: 3, name: "Tablet", price: 20000, image: "https://via.placeholder.com/60" }
];

function readALL(filteredData = data) {
    localStorage.setItem("products", JSON.stringify(data));

    var tabledata = document.querySelector(".data_table");
    tabledata.innerHTML = "";

    filteredData.forEach(record => {
        tabledata.innerHTML += `<tr>
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>₹${record.price}</td>
            <td><img src="${record.image}" class="product-img"></td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteItem(${record.id})">Delete</button>
                <button class="btn btn-warning btn-sm" onclick="edit(${record.id})">Edit</button>
            </td>
        </tr>`;
    });
}

document.addEventListener('DOMContentLoaded', readALL);  // we can also do this by adding onload="readALL" in body tag so that every time the table gets loadded when it gets opened

function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add-btn").style.display = "none";
}

function cancelCreate() {
    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add-btn").style.display = "block";
}

function add() {
    var name = document.querySelector(".pname").value;
    var price = document.querySelector(".pprice").value;
    var image = document.querySelector(".pimage").value;
    const gen = () => {
        let id = 0;
        id++;
    }

    var newObj = { id: gen.next(), name, price: parseFloat(price), image };
    data.push(newObj);

    cancelCreate();
    readALL();
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";

    var obj = data.find(rec => rec.id === id);
    document.querySelector(".pid").value = obj.id;
    document.querySelector(".upname").value = obj.name;
    document.querySelector(".upprice").value = obj.price;
    document.querySelector(".upimage").value = obj.image;
}

function cancelUpdate() {
    document.querySelector(".update_form").style.display = "none";
}

function update() {
    var id = parseInt(document.querySelector(".pid").value);
    var name = document.querySelector(".upname").value;
    var price = document.querySelector(".upprice").value;
    var image = document.querySelector(".upimage").value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = { id, name, price: parseFloat(price), image };

    cancelUpdate();
    readALL();
}

function deleteItem(id) {
    data = data.filter(rec => rec.id !== id);
    readALL();
}

function search() {
    var searchValue = document.querySelector(".search-box").value.toLowerCase();

    var filteredData = data.filter(record =>
        record.name.toLowerCase().includes(searchValue) || record.price.toString().includes(searchValue)
    );

    readALL(filteredData);
}

let sortOrder = { name: 'asc', price: 'asc' };

function sortTable(field) {
    if (sortOrder[field] === 'asc') {
        data.sort((a, b) => (a[field] > b[field] ? 1 : -1));
        sortOrder[field] = 'desc';
    } else {
        data.sort((a, b) => (a[field] < b[field] ? 1 : -1));
        sortOrder[field] = 'asc';
    }

    readALL();
}