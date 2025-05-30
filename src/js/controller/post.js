import { baseAPI } from "../api/api.js";
import { getItems } from "./get-items.js";

const form = document.querySelector("form");
const input = document.querySelector(".new-product");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const item = input.value.trim();
  const id = new Date().getTime().toString();

  try {
    const response = await fetch(`${baseAPI}/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, item }),
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar item");
    }
    input.value = "";
    // alert("Item cadastrado com sucesso.");
    const data = await response.json();

    getItems();
  } catch (error) {
    alert("Ocorreu um erro tente novamente!");
    console.log(error);
  }
});
