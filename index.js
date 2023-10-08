let btnPlayers=document.getElementById("btn_sumbit")
let num_jugadores
let padre=document.getElementById("padrevidas")
let jugadores=[]
let registro_vida=0
let controlsumrest=false
btnPlayers.addEventListener("click",()=>{
    num_jugadores=document.getElementById("jugadores").value
    console.log(num_jugadores)
    padre.innerHTML=""

    elemtnosvidas(num_jugadores)
})

function elemtnosvidas(num_jugadores){
    let cont=0;
    let id="flecha"
    for(i=0;i<num_jugadores;i++){
        jugadores.push({
            vida:0,
            registrovida:[{
                sumvida:[],
                restvida:[]
            }]
        })    
        let elementvida=document.createElement("div")
        let div=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let mostrarvida=document.createElement("p")
        let arrow_down=document.createElement("img")
        let arrow_up=document.createElement("img")
        let btn=document.createElement("button")
        arrow_down.id=id+"down"+i
        arrow_up.id=id+"up"+i
        arrow_down.addEventListener("click",bajarvida)
        arrow_up.addEventListener("click",subir_vida)
        if(cont==1){
            console.log(cont+"en"+i)
            elementvida.style.float="right"
            cont=0;
            
        }else{

            cont++;
        }
        elementvida.style.width="40%"
        elementvida.style.background="red"
        elementvida.style.marginTop="70px"
        elementvida.style.display="inline-block"
        mostrarvida.textContent=0
        mostrarvida.id="jugador"+i
        mostrarvida.style.display="inline-block"
        mostrarvida.classList="mostrarvida"
        arrow_down.src="img/arrow-down-solid.svg"
        arrow_down.classList.add("arrows")
        div.style.display="inline-block"
        div2.style.display="inline-block"
        div3.style.display="inline-block"
        div.style.width="50%"
        arrow_up.src="img/arrow-up-solid.svg"
        arrow_up.classList.add("arrowsup")
        arrow_up.style.marginLeft="15px"
        arrow_down.style.marginRight="15px"
        arrow_up.setAttribute("data-jugador",i)
        arrow_down.setAttribute("data-jugador",i)
        btn.textContent="registrar"
        btn.style.display="block"
        btn.classList.add("registrobtn")
        btn.setAttribute("data-jugador",i)
        btn.addEventListener("click",registro_vida_)
        padre.appendChild(elementvida)
        elementvida.appendChild(div)
        elementvida.appendChild(div2)
        elementvida.appendChild(div3)
        div.appendChild(arrow_down)
        div2.appendChild(mostrarvida)
        div3.appendChild(arrow_up)
        elementvida.appendChild(btn)
        
    }
}

function subir_vida(event){
    let jugador=event.currentTarget.getAttribute("data-jugador")
    jugadores[jugador].vida++;
    registro_vida++
    controlsumrest=true
    document.getElementById("jugador"+jugador).innerHTML= jugadores[jugador].vida
}

function bajarvida(event){
    let jugador=event.currentTarget.getAttribute("data-jugador")
    jugadores[jugador].vida--;
controlsumrest=false;
    registro_vida++
    document.getElementById("jugador"+jugador).innerHTML=jugadores[jugador].vida
}


function registro_vida_(event){
    let jugador=event.currentTarget.getAttribute("data-jugador")
    console.log(jugador)
    console.log(registro_vida)
    switch(controlsumrest){
        case true:
            jugadores[jugador].registrovida.sumvida.push(registro_vida)
        break;
        case false:
            jugadores[jugador].registrovida.restvida.push(registro_vida)
            break;
    }
    
}