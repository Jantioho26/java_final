async function renderLenses(filter, searchValue = "") {
  const lensesWrapper = document.querySelector(".lens");
  let lenses = await getLenses();

  if (searchValue) {
    lenses = lenses.filter((lens) =>
      lens.Title.toLowerCase().includes(searchValue.toLowerCase()) ||
      lens.Brand.toLowerCase().includes(searchValue.toLowerCase()) ||
      lens.Price.toString().includes(searchValue)
  );
  }

 
  if (filter === 'LOW_TO_HIGH') {
   lenses.sort((a, b) => a.Price - b.Price);
  }
  else if (filter === 'HIGH_TO_LOW') {
    lenses.sort((a, b) => b.Price - a.Price);
  }
  else if (filter === 'RATING') {
    lenses.sort((a, b) => b.Rating - a.Rating);
  }


  const lensesItems = lenses.map((lenses) => {
    return `<div class="lens-item">
      <figure class="lens__img--wrapper">
        <img class="lens__img" src="./${lenses.URL}" alt="lens__img">
        <div class="lens__title">${lenses.Title}</div>
        <div class="lens__price">$${lenses.Price} Per Day</div>
        <div class="lens__ratings">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </figure>
    </div>`;
  })
  .join("");

  
  console.log(lenses)
   lensesWrapper.innerHTML = lensesItems;
  }

  function filterLenses(event) {
      renderLenses(event.target.value);
    }
  

    const API_URL =
  "https://6a5e953098d9f02aed79ac73.mockapi.io/JF/Lenses"


 const searchInput = document.querySelector("#searchInput");

  searchInput.addEventListener("input", function (event) {
  renderLenses("", event.target.value);
  });


  async function getLenses() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return await response.json();
}
  renderLenses();
  