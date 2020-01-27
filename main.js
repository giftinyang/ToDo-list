let persons = [
  { name: "Wisdom", role: "Html dev" },
  { name: "Samuel", role: "js dev" },
  { name: "Stanley", role: "php dev" },
  { name: "Joe", role: "UI/Ux dev" },
  { name: "Mata", role: "UX dev" }
];

let getAllUsersInfo = () => {
  persons.forEach(person => {
    console.log(person);
  });
};

getAllUsersInfo();

let form = document.getElementById("form");
let reset = document.getElementById("reset");
let name = document.getElementById("name");
let role = document.getElementById("role");

form.addEventListener("submit", e => {
  e.preventDefault();
  alert(`My name is ${name.value} and my role is ${role.value}`);
});

reset.addEventListener("click", () => {
  name.value = "";
  role.value = "";
});
