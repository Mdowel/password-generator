const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const n = 15;
const result = []

let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")

function reset() {
    passOne.innerText = ""
    passTwo.innerText =""
}

function generatePasswords() {
    reset()
    for(i = 0; i < n; i++){
    let randomIndex1 = Math.floor(Math.random() * characters.length)
    let randomIndex2 = Math.floor(Math.random() * characters.length)
    passOne.textContent += characters[randomIndex1]
    passTwo.textContent += characters[randomIndex2]
    }
}