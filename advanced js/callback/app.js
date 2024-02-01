//callback
function mnozenje(broj, callback) {
  const rezultat = broj * 2;
  callback(rezultat);
}

function rezultatMnozenja(rezultat) {
  console.log(`Rezultat je: ${rezultat}`);
}

mnozenje(5, rezultatMnozenja);
