let inp1 = document.getElementById("sName");
let inp2 = document.getElementById("sUrl");
let btn = document.getElementById("btn");
let l = document.getElementById("links");
let updt = document.getElementById("update");

let books = [];
// onload
if (localStorage.getItem("books") !== null) {
  books = JSON.parse(localStorage.getItem("books"));
  display();
}
// create
function createBook() {
  let names = {
    name: inp1.value,
    url: inp2.value,
  };
  books.push(names);
  localStorage.setItem("books", JSON.stringify(books));
}

// read
function display() {
  l.innerHTML = ``;
  for (let i = 0; i < books.length; i++) {
    l.innerHTML += `<tr class=" px-5 d-flex justify-content-between align-items-center flex-row">    
        <td> ${books[i].name} </td>  
        <td> <a href="${books[i].url}" ><i class="fa-solid fa-eye text-success" ></i></a></td>
        <td><button onclick="edit(${i})" class="btn" 5><i class="fa-regular fa-pen-to-square text-warning" ></i></button></td>
    <td><button class="btn" onclick="remove(${i})" ><i = class="fa-regular fa-trash-can text-danger" ></i></button></td></tr>
        `;
  }
}
// reset input
function resetInp() {
  inp1.value = "";
  inp2.value = "";
}

btn.addEventListener("click", function () {
  createBook();
  display();
  resetInp();
});

//edit
var bookIndex;
function edit(indx) {
  bookIndex = indx;
  inp1.value = books[indx].name;
  inp2.value = books[indx].url;
  updt.classList.remove("d-none");
  btn.classList.add("d-none");
}
function resett() {
  books[bookIndex].name = inp1.value;
  books[bookIndex].url = inp2.value;
  display();
  updt.classList.add("d-none");
  btn.classList.remove("d-none");
  resetInp();
  localStorage.setItem("books", JSON.stringify(books));
}

updt.addEventListener("click", resett);

// delete
function remove(indx) {
  books.splice(indx, 1);
  localStorage.setItem("books", JSON.stringify(books));
  display();
}

// search
let searchInp = document.getElementById("search");

function search(data) {
  l.innerHTML = ``;
  for (let i = 0; i < books.length; i++) {
    if (
      books[i].name.toLowerCase().includes(data.value.toLowerCase()) == true
    ) {
      l.innerHTML += `<tr class=" px-5 d-flex justify-content-between align-items-center flex-row">
        <td> ${books[i].name} </td>  
        <td> <a href="${books[i].url}" ><i class="fa-solid fa-eye text-success" ></i></a></td>
        <td><button onclick="edit(${i})" class="btn" 5><i class="fa-regular fa-pen-to-square text-warning" ></i></button></td>
    <td><button class="btn" onclick="remove(${i})" ><i = class="fa-regular fa-trash-can text-danger" ></i></button></td></tr>
        `;
    }
  }
}
searchInp.addEventListener("input", function () {
  search(searchInp);
});
