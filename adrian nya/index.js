let btnPlayers=document.getElementById("btn_sumbit")
let num_jugadores


btnPlayers.addEventListener("click",()=>{
    num_jugadores=document.getElementById("jugadores").value
    console.log(num_jugadores)
})

console.log(num_jugadores)