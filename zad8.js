const ul = document.getElementById("list");

while (true) {
  let value = prompt("Введите содержимое пункта списка:", "");

  if (value === null || value.trim() === "") break;

  let li = document.createElement("li");
  li.textContent = value;
  ul.appendChild(li);
}