let szam = 12;

//var-ral deklarált változók esetén is működik a hoisting,
//viszont az értékadást továbbra is a deklaráció sorától elérhető.
//a var-ral deklarált változók hatóköre lehet modul szintű vagy függvény szintű

function fv1() {
  let szam = 5;
  console.log(szam);
  let masikszam = 23;
  console.log(masikszam);
}

// a let hatőköre blokkszintű

function fv2() {
  let x = 2;
  {
    let x = 3;
    console.log(x);
  }
  console.log(x);
}

function fv3() {
  for (let index = 0; index < 3; index++) {
    console.log(index);
  }
  console.log(index);
}

function fv4(szam) {
  let maradek = szam % 5;
  let eredmenySzoveg;
  maradek === 0
    ? (eredmenySzoveg = "nulla")
    : maradek === 1
    ? (eredmenySzoveg = "egy")
    : maradek === 2
    ? (eredmenySzoveg = "kettő")
    : maradek === 3
    ? (eredmenySzoveg = "három")
    : (eredmenySzoveg = "négy");

  return eredmenySzoveg;
}

console.log(fv4(9));
