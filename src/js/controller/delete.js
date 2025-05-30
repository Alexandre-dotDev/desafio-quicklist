import { baseAPI } from "../api/api";
import { closeAttention } from "../utils/close-attention";
const wrapperList = document.querySelector(".wrapper-list");
const wrapperItems = document.querySelector(".wrapper-items");

wrapperItems.addEventListener("click", async (event) => {
  if (event.target.classList.contains("trash")) {
    const itemDiv = event.target.closest(".add-item");
    const itemId = itemDiv.dataset.id;
    try {
      const response = await fetch(`${baseAPI}/list/${itemId}`, {
        method: "DELETE",
      });

      if (!response) {
        throw new Error("Erro ao deletar o item");
      }

      itemDiv.remove();

      if (!wrapperList.querySelector(".remove-item")) {
        await closeAttention();
      }
    } catch (error) {
      alert("Não foi possivel apagar o item.");
      console.log(error);
    }
  }
});
