/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir šis atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

async function getData() {
  const response = await fetch("./cars.json");
  const data = await response.json();
  infoAboutCars(data);
  console.log(data);
}

function infoAboutCars(data) {
  const carsItems = document.getElementById("output");
  carsItems.classList.add("output-style");

  data.forEach((dataItem) => {
    const carsCard = document.createElement("div");
    carsCard.classList.add("cars-card-style");
    
    const autoBrand = document.createElement("div");
    autoBrand.textContent = dataItem.brand;
    autoBrand.classList.add("brand-style");

    const autoModels = document.createElement("div");
    autoModels.textContent = dataItem.models;
    autoModels.classList.add("models-style");

    carsItems.append(carsCard);
    carsCard.append(autoBrand, autoModels);
});
}

getData();
