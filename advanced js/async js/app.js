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
