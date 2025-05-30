import { baseAPI } from "../api/api";

const wrapperItems = document.querySelector(".wrapper-items");
const pathImg = "./assets/bin.svg";
export async function getItems() {
  try {
    wrapperItems.innerHTML = "";
    const response = await fetch(`${baseAPI}/list`);
    if (!response.ok) {
      throw new Error("Não foi conectar ao servidor.");
    }
    const data = await response.json();

    data.forEach(({ id, item }) => {
      const addItem = document.createElement("div");
      addItem.classList.add("add-item");
      addItem.setAttribute("data-id", `${id}`);
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      const input = document.createElement("input");
      input.setAttribute("id", `${id}`);
      input.classList.add("checkbox");
      input.setAttribute("type", "checkbox");

      const label = document.createElement("label");
      label.setAttribute("for", `${id}`);
      label.classList.add("text");
      label.textContent = item;

      const img = document.createElement("img");
      img.setAttribute("src", pathImg);
      img.classList.add("trash");
      img.setAttribute("alt", "Ícone de lixeira");

      itemDiv.append(input, label);
      addItem.append(itemDiv, img);
      wrapperItems.append(addItem);
    });
  } catch (error) {
    alert("Não possivel carregar a lista de itens.");
    console.log(error);
  }
}
