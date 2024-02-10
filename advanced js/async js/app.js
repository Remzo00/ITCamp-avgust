//JavaScript je sinkhroni jezik
//JavaScript je single-threaded jezik

console.log("A");

setTimeout(() => {
  console.log("B");
}, 5000);

console.log("C");

function myFunction() {
  console.log("D");
}

//Callback(Hell)
//Promise -> objekat koji se vraca nakon asinhronog koda

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        const data = { id: 1, name: "Neko" };
        resolve(data);
      } else {
        reject("Greska");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Podaci su uspesno dobijeni: ", data);
  })
  .catch((error) => {
    console.error("Podaci nisu dobijeni: ", error);
  });

//Async/Await

const fecthDataFromServer = async () => {
  const data = {
    id: 1,
    name: "Neko",
  };
  return data;
};

const displayData = async () => {
  try {
    const data = await fecthDataFromServer();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

displayData();

const getData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    const productList = document.getElementById("container");
    data.forEach((item) => {
      const productElements = document.createElement("div");
      productElements.innerHTML = `
        <h1>${item.title}</h1>
        <h3>${item.price}</h3>
        <img src="${item.image}">
      `;
      productList.appendChild(productElements);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();

//API
//json
//xml
