// DADI

const primoDado = Math.floor(Math.random() * 6) + 1;
console.log(primoDado); 

const secondoDado = Math.floor(Math.random() * 6) + 1;
console.log(secondoDado); 

if (primoDado > secondoDado) {

  console.log("Che fortuna, il tuo dado ha vinto contro il bot con il numero " + primoDado)

} else if (secondoDado > primoDado) {

  console.log("Peccato, il bot ha vinto con il numero " + secondoDado)

} else if (primoDado === secondoDado) {

  console.log("Pareggio! Tu e il bot avete avuto lo stesso risultato")

}

// MAIL

const mail = ["Alberto", "Alessandro", "Guglielmo", "Andrea", "Maria"]

const user =prompt("Digita la tua Email");

 for (let i = 0; i < mail.length; i++) {

  if (user === mail[i]) {

    console.log("Benvenuto " + user + ", goditi la festa") 

} else {

    console.log("Mi dispiace " + user + ", non sei stato invitato") 

}
}

