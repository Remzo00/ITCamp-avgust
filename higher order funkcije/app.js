//Higher order funckije sluze za rad sa nizovima (napredni rad)
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 65, 54, 44, 11, 13, 15, 45, 25, 18, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//forEach funckija -> izlistava niz, vrsi iteraciju (ne menja niz!)

companies.forEach(function (company) {
  console.log(company);
});

//map -> izlistava niz, ali menja niz!

const companyNames = companies.map(function (companyName) {
  return companyName.name;
});

console.log(companyNames);

// let old = [];

// for (let i = 0; ages.length; i++) {
//   if (ages[i] > 18) {
//     old.push(ages[i]);
//   }
// }
// console.log(old);

//filter funckija -> filtrira niz i menja odnosno pravi novi niz za rezultatom

const old = ages.filter(function (age) {
  if (age > 18) {
    return true;
  }
});

console.log(old);

const totalAges = ages.reduce(function (total, age) {
  return total + age;
});

console.log(totalAges);

const brojevi = [3, -1, 7, 2, -5, 8];
const ukupnaSumaPozitivnih = brojevi.reduce(function (total, pozitivniBroj) {
  if (pozitivniBroj > 0) {
    return total + pozitivniBroj;
  }
  return total;
});

console.log(ukupnaSumaPozitivnih);
