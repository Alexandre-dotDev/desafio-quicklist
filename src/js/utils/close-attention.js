export async function closeAttention(text) {
  const wrapperList = document.querySelector(".wrapper-list");
  const removeItem = document.createElement("div");
  removeItem.classList.add("remove-item");

  const attention = document.createElement("div");
  attention.classList.add("attention");

  const imgLink = "./assets/attention.svg";
  const imgAttention = document.createElement("img");
  imgAttention.setAttribute("src", `${imgLink}`);
  imgAttention.setAttribute("alt", "Alerta");

  const span = document.createElement("span");
  span.classList.add("alert");
  span.textContent = "O item foi removido da lista";

  const imgCloseLink = "./assets/close.svg";
  const imgClose = document.createElement("img");
  imgClose.classList.add("close");
  imgClose.setAttribute("src", `${imgCloseLink}`);
  imgClose.setAttribute("alt", "Fechar");

  attention.append(imgAttention, span);
  removeItem.append(attention, imgClose);
  wrapperList.append(removeItem);

  removeItem.classList.add("remove-item");

  removeItem.addEventListener("click", (event) => {
    const e = event.target.classList.contains("close");
    if (e) {
      removeItem.innerHTML = "";
      removeItem.classList.remove("remove-item");
    }
  });
}
