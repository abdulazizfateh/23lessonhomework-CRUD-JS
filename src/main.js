const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");
const cards = document.querySelector(".cards");

let data = [];

const render = () => { // CREATE THE CONTENT 
  cards.innerHTML = data.map((item) =>
    `<div class="bg-[hotpink] p-4 rounded-[12px] w-[30%] flex flex-col items-center mb-[20px]">
      <h1 class="font-bold text-white text-[32px]">${item.firstName}</h1>
      <h2 class="mb-[8px] text-white">${item.lastName}</h2>
      <div class="flex items-center gap-[10px]">
      <button onclick="editItem(${item.id})" class="bg-sky-700 text-white py-[4px] px-[6px] rounded-md">edit</button>
      <button onclick="deleteItem(${item.id})" class="bg-pink-700 text-white  py-[4px] px-[6px] rounded-md">delete</button>
      </div>
    </div>`).join("");
};

form.addEventListener("submit", (e) => { // FORM
  e.preventDefault();

  let obj = { id: Date.now() };
  for (let i of inputs) {
    obj[i.name] = i.value;
    i.value = "";
  }
  data.push(obj);
  render();
});

const editItem = (id) => { // EDIT
  const firstName = prompt("First name");
  const lastName = prompt("Address");
  data = data.map((item) => item.id === id ? { firstName, lastName, id } : item);
  render();
};


const deleteItem = (id) => { // DELETE
  data = data.filter((item) => item.id !== id);
  render();
};