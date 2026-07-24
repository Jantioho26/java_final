function renderLenses(filter) {
  const lensesWrapper = document.querySelector(".lenses");

  const lenses = getLenses();

 
  if (filter === 'LOW_TO_HIGH') {
    console.log(filter)
   lenses.sort((a, b) => a.originalPrice - b.originalPrice);
  }
  else if (filter === 'HIGH_TO_LOW') {
    lenses.sort((a, b) => b.originalPrice - a.originalPrice);
  }
  else if (filter === 'RATING') {
    lenses.sort((a, b) => b.rating - a.rating);
  }


  const lensesItems = lenses.map((lenses) => {
    return `<div class="lens-item">
      <figure class="lens__img--wrapper">
        <img class="lens__img" src="./${lenses.URL}" alt="lens__img">
        <div class="lens__title">${lenses.Title}</div>
        <div class="lens__price">$${lenses.Price.toFixed(2)} Per Day</div>
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
    lensWrapper.innerHTML = lensItems;
  }

  function filterLenses(event) {
      renderLenses(event.target.value);
    }
  


setTimeout(() => {
  renderLenses();
});

function getLenses() {
return [
  {
    "Title": "Sony 24-70",
    "Price": 50,
    "Rating": 5,
    "URL": "assests/sony24-70.webp",
    "Brand": "Sony"
  },
  {
    "Title": "Sony 85",
    "Price": 75,
    "Rating": 5,
    "URL": "assests/sony85.webp",
    "Brand": "Sony"
  },
  {
    "Title": "Sony 50-150",
    "Price": 45,
    "Rating": 5,
    "URL": "assests/sony50-150.webp",
    "Brand": "Sony"
  },
  {
    "Title": "Sony 16-24",
    "Price": 100,
    "Rating": 4,
    "URL": "assests/sony16-24.webp",
    "Brand": "Sony"
  },
  {
    "Title": "Cannon 15-36",
    "Price": 35,
    "Rating": 5,
    "URL": "assests/cannon15-36.webp",
    "Brand": "Cannon"
  },
  {
    "Title": "Cannon 24-105",
    "Price": 55,
    "Rating": 5,
    "URL": "assests/cannon24-105.webp",
    "Brand": "Cannon"
  },
  {
    "Title": "Cannon 100",
    "Price": 100,
    "Rating": 4,
    "URL": "assests/cannon100.webp",
    "Brand": "Cannon"
  },
  {
    "Title": "Cannon100-300",
    "Price": 125,
    "Rating": 5,
    "URL": "assests/cannon100-300.webp",
    "Brand": "Cannon"
  },
  {
    "Title": "Nikon 35",
    "Price": 50,
    "Rating": 5,
    "URL": "assests/nikon35.webp",
    "Brand": "Nikon"
  },
  {
    "Title": "Nikon 70-200",
    "Price": 75,
    "Rating": 5,
    "URL": "assests/nikon70-200.webp",
    "Brand": "Nikon"
  },
  {
    "Title": "Nikon 28-135",
    "Price": 125,
    "Rating": 5,
    "URL": "assests/nikon28-135.webp",
    "Brand": "Nikon"
  },
  {
    "Title": "Nikon 85",
    "Price": 85,
    "Rating": 5,
    "URL": "assests/nikon85.webp",
    "Brand": "Nikon"
  }
]}



