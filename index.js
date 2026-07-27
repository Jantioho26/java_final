 function renderLenses(filter, searchValue = "") {
  const lensesWrapper = document.querySelector(".lens");
  let lenses = getLenses();

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
  
function getLenses() {
  return [
{
    "Title": "Sony 24-70",
    "Price": 50,
    "Rating": 5,
    "URL": "Assests/sony24-70.webp",
    "Brand": "Sony"
  },
  {
    "Title": "Sony 85",
    "Price": 75,
    "Rating": 5,
    "URL": "Assests/sony85.webp",
    "Brand": "Sony"
  },
  {
    "Title": "Sony 50-150",
    "Price": 45,
    "Rating": 5,
    "URL": "Assests/sony50-150.webp",
    "Brand": "Sony"
  },
  {
    "Title": "Sony 16-24",
    "Price": 100,
    "Rating": 4,
    "URL": "Assests/shopping.webp",
    "Brand": "Sony"
  },
  {
    "Title": "Cannon 15-36",
    "Price": 35,
    "Rating": 5,
    "URL": "Assests/cannon15-36.webp",
    "Brand": "Cannon"
  },
  {
    "Title": "Cannon 24-105",
    "Price": 55,
    "Rating": 5,
    "URL": "Assests/cannon24-105.webp",
    "Brand": "Cannon"
  },
  {
    "Title": "Cannon 100",
    "Price": 100,
    "Rating": 4,
    "URL": "Assests/Cannon100.jpeg",
    "Brand": "Cannon"
  },
  {
    "Title": "Cannon100-300",
    "Price": 125,
    "Rating": 5,
    "URL": "Assests/Cannon 100-300.webp",
    "Brand": "Cannon"
  },
  {
    "Title": "Nikon 35",
    "Price": 50,
    "Rating": 5,
    "URL": "Assests/nikon35mm.jpeg",
    "Brand": "Nikon"
  },
  {
    "Title": "Nikon 70-200",
    "Price": 75,
    "Rating": 5,
    "URL": "Assests/nikon70-200.webp",
    "Brand": "Nikon"
  },
  {
    "Title": "Nikon 28-135",
    "Price": 125,
    "Rating": 5,
    "URL": "Assests/Nikon 28-135 .webp",
    "Brand": "Nikon"
  },
  {
    "Title": "Nikon 85",
    "Price": 85,
    "Rating": 5,
    "URL": "Assests/Nikon 85mm.jpeg",
    "Brand": "Nikon"
    },
   ]}

 const searchInput = document.querySelector("#searchInput");

  searchInput.addEventListener("input", function (event) {
  renderLenses("", event.target.value);
  });

  renderLenses();

