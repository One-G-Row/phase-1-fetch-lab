const url = "https://anapioficeandfire.com/api/books";
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch(url)
    .then((response) => response.json())
    .then((data) => renderBooks(data))
    .catch((err) => {
      console.log(err);
    });
}
fetchBooks();

function renderBooks(books) {
  const main = document.body.querySelector("main");
  const h2 = document.createElement("h2");
  h2.innerHTML = JSON.stringify(books);
  main.appendChild(h2);
}

//document.addEventListener(DOMContentLoaded, fetchBooks)
