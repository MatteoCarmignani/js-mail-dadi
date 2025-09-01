// DADI

console.log("Minigioco dei dadi, chi fa il numero più alto vince!!!")

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

console.log("")

console.log("Invito tramite mail, solo se la tua mail corrisponde a quella dei partecipanti puoi entrare")

const mail = ["alberto@gmail.com", "alessandro@gmail.com", "guglielmo@gmail.com", "andrea@gmail.com", "maria@gmail.com", "giorgia@gmail.com", "valentina@gmail.com", "alessia@gmail.com"]

const user =prompt("Digita la tua Email");

let flag = false;

 for (let i = 0; i < mail.length; i++) {

    if (user === mail[i]) {

        flag = true;  
        
    }
    
}


if(flag === true){
    console.log("Benvenuto/a " + user + ", goditi la festa") 
}else{
    console.log("Mi dispiace " + user + ", non sei stato invitato/a") 
}
