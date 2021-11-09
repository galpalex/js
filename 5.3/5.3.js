const paswIf = (password) => {
  if (password.length > 7) return "Strong";
  else return "Weak";
};

const paswTer = (password) => {
  return password.length > 7 ? "Strong" : "Weak";
};

const paswLOG = (password) => {
  return (password.length > 7 && "Strong") || "Weak";
};
//7 characters
//console.log(paswLOG("passwor"));
//8 characters
//console.log(paswLOG("password"));

function paswAdv(password) {
  if (password.length > 7 && typeof password === "string") {
    if (password !== password.toLowerCase()) return "Very Strong";
    else return "Strong";
  } else return "Weak";
}
console.log(paswAdv("password"));
console.log(paswAdv("paSsword"));
console.log(paswAdv("Password"));
console.log(paswAdv("Passwor"));

//7 characters
//console.log(paswIf("passwor"));
//8 characters
//console.log(paswIf("password"));
//7 characters
//console.log(paswTer("passwor"));
//8 characters
//console.log(paswTer("password"));
//7 characters
//console.log(paswLog("passwor"));
//8 characters
//console.log(paswLog("password"));
