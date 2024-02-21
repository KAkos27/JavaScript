export function parosEldontes(szam) {
  let ps = false;
  
  szam % 2 === 0 ? (ps = true) : (ps = false);
  return ps;
}
