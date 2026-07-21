let lenses;

async function renderLenses(filter) {
  const lensesWrapper = document.querySelector(".lenses");

  lensesWrapper.classList.add('lenses__loading');

  if (!lenses) {
    lenses = await getLenses();
  }

  lensesWrapper.classList.remove('lenses__loading');

  if (filter === "LOW_TO_HIGH") {
    lenses.sort((a, b) => a.price - b.price);
  } else if (filter === "RATING") {
    lenses.sort((a, b) => b.rating - a.rating);
  }

  // render
  const lensesHTML = lenses
    .map((lens) => {
      return `<div class="lens">
      <figure class="lens__img--wrapper">
        <img class="lens__img" src="./Assests/sony24-70.webp" alt="lens__img">
      </figure>
      <div class="lens__title">
        ${lens.name}
      </div>
      <div class="lens__rating">
        ${ratingsHtml(lens.rating)}
      </div>
      <div class="lens__price">
        $${lens.price} Per Day
      </div>
    </div>`;
    })
    .join("");

  lensesWrapper.innerHTML = lensesHTML;
}

function ratingsHTML(rating) {
    let ratingHTML = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
    }
    if (!Number.isInteger(rating)) {
        ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
    }
    return ratingHTML;
}

function filterLenses(event) {
    renderLenses(event.target.value);
}

setTimeout(() => {
    renderLenses();
});


function getLenses() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
        
  {
    "Title": "Sony 24-70",
    "Price": 50,
    "Rating": 5,
    "Brand": "Sony"
  },
  {
    "Title": "Sony 85",
    "Price": 75,
    "Rating": 5,
    "Brand": "Sony"
  },
  {
    "Title": "Sony 50-150",
    "Price": 45,
    "Rating": 5,
    "Brand": "Sony"
  },
  {
    "Title": "Sony 16-24",
    "Price": 100,
    "Rating": 4,
    "Brand": "Sony"
  },
  {
    "Title": "Cannon 15-36",
    "Price": 35,
    "Rating": 5,
    "Brand": "Cannon"
  },
  {
    "Title": "Cannon 24-105",
    "Price": 55,
    "Rating": 5,
    "Brand": "Cannon"
  },
  {
    "Title": "Cannon 100",
    "Price": 100,
    "Rating": 4,
    "Brand": "Cannon"
  },
  {
    "Title": "Cannon 100-300",
    "Price": 125,
    "Rating": 5,
    "Brand": "Cannon"
  },
  {
    "Title": "Nikon 35",
    "Price": 50,
    "Rating": 5,
    "Brand": "Nikon"
  },
  {
    "Title": "Nikon 70-200",
    "Price": 75,
    "Rating": 5,
    "Brand": "Nikon"
  },
  {
    "Title": "Nikon 28-135",
    "Price": 125,
    "Rating": 5,
    "Brand": "Nikon"
  },
  {
    "Title": "Nikon 85",
    "Price": 85,
    "Rating": 5,
    "Brand": "Nikon"
  }
]);
, 1000);
});
}