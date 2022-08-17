//Escucho el hash del sitio
window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
})

//Traigo al js los contenedores del sitio
let home=document.querySelector('#homeContent')
let destinos=document.querySelector('#destinosContent')
let trip=document.querySelector('#tripContent')
let destinoHeader=document.querySelector('#destinoHeader')
let pasaje=document.querySelector('#pasaje')

//Traigo la informacion del JSON y la guardo en su respectivo array.
const destinosInfo= []
const obtenerDatos=async()=>{
    let response=await fetch("./travels.json");
    let resultado=await response.json();
    console.log(resultado)
    resultado.forEach(dt=>{
        destinosInfo.push(dt)

    })

}
obtenerDatos()


//Creo funciones Utiles para el siguiente paso.
const destinoTrip=[]      
function ruta(){
    let ruta
}
function divTrip(){
    let divTrip=document.createElement('div')
}
function btnDestino(){
    btn=document.getElementById(`btn${ruta.nombre}`)
}

//Utilizo switch y el hash para realizar un SPA.

const router = (route)=>{
    destinos.innerHTML="";
    trip.innerHTML="";
    home.innerHTML="";
    destinoHeader.innerHTML="";
    pasaje.innerHTML=""
    home.style.display='none'
    destinos.style.display='none'
    destinoHeader.style.display='none'
    pasaje.innerHTML=""
    switch(route){
        case '':
            
        case '#/home':
            console.log('Home')
            home.removeAttribute('style')
            const div=document.createElement('div')
            div.innerHTML=`
                <video src="./src/video-fondo-home.mp4" class="w-100"  autoplay="true" muted="true" loop="true"></video>
                <div class="card-img-overlay bg-dark opacity-50 text-white" id="descubri">
                <h1 class="position-absolute top-50 start-50 translate-middle">Descubri la Argentina</h1>
                </div>
            `
            home.appendChild(div)
            
            break
        case '#/destinos':
            
            console.log('Destinos')
            destinoHeader.removeAttribute('style')
            destinos.removeAttribute('style')
            const tDestino= document.createElement('h3')
            tDestino.innerHTML="<h3>Viaja por Argentina y descubir su increible belleza natural.</h3>"
            destinoHeader.appendChild(tDestino)
            destinosInfo.forEach((destiny)=>{
                const card= document.createElement('card');
                card.innerHTML += ` <div class="card border-dark rounded" id="card2">
                <img src="${destiny.img}" class="card-img-top img-fluid" alt="${destiny.nombre}">
                <div class="card-img-overlay  text-white" id="hov2" >
                  <a href="${destiny.id}"><span class="card-img-overlay" id="${destiny.nombre}"></span></a>
                    <h1 class="position-absolute top-50 start-50 translate-middle">${destiny.nombre}</h1>
                </div>
            </div>`
                card.setAttribute("class","text-light")
                destinos.appendChild(card)
                
            })
            break
        



        case '#/SantaCruz':
            console.log('Santa Cruz')
            ruta= destinosInfo.find(ruta=>ruta.id==route)
            divTrip =document.createElement('div')
            divTrip.innerHTML=`
                <div class="mt-5 ml-5  container-xl p-4 border border-dark ">
                    <div class="row row-cols-1 row-cols-lg-2 rounded">
                    <img src="${ruta.img}" alt="destino" class="img-fluid" id="imgProduct" >
                    
                    <div class=" col">
                        <div class="bg-light mt-3 p-4 rounded ">
                        <h2 class="pb-4 text-center">${ruta.nombre}</h2> 
                        <p class="text-center">${ruta.detalle}</p>
                        <ul class="d-flex flex-row">
                        <li class="fw-bold mx-3 "><span class="text-decoration-underline">Precio adulto</span>:$ ${ruta.precioAdulto}</li>
                        
                        <li class="fw-bold mx-3"><span class="text-decoration-underline">Precio menor</span>:$ ${ruta.precioMenor}</li>
                        </ul>
                        </div>
                        <div>
                        <div class="bg-light rounded my-2 d-flex flex-row" id="listaServicio">
                            <ul>
                                <li><img src="src/avion.png" width="30" class="m-2" alt=""> Avion</li>
                                <li><img src="src/hotel.png" width="30" class="m-2" alt="">Hotel  ★★★★★</li>
                                <li><img src="src/comida.png" width="30" class="m-2" alt="">All Inclusive</li>
                                
                                <li><img src="src/excursion.png" width="30" class="m-2" alt="">Excursiones diarias</li>
                            </ul>
                            <ul>
                                <li><img src="src/transporte.png" width="30" class="m-2" alt="">Transporte privado</li>
                                <li><img src="src/niñera.png" width="30" class="m-2" alt="">Servicio de niñera incluido*</li>
                                <li><img src="src/hospital.png" width="30" class="m-2" alt="">Seguro medico completo</li>
                            </ul>
                        </div>
                        <div class="form-floating mb-3 bg-light text-center container-fluid rounded">
                            <div class="d-flex flex-row pt-4">
                            <p class="col">ADULTOS</p>
                            <P class="col">MENORES</P>
                            </div>
                            <div class="d-flex flex-row pb-4 text-center">
                            <input type="number" name="Cantidad de adultos" id="adultos"class='col mx-3'>
                            <input type="number" name="Cantidad de niños" id="menores" class="col">
                            </div>
        
                            <div class=" d-flex flex-row">
                            <div class="pt-2 col-4 offset-1">
                                <P ><strong >Fecha Salida</strong></P>
                                <input type="date" id="fechaSalida${ruta.nombre}">
                                </div>
                                <div class="pt-2 col-4 offset-1">
                                <P ><strong>Fecha Regreso</strong></P>
                                <input type="date" id="fechaRegreso${ruta.nombre}">
                                </div>
                            </div>
                            <div class="form-floating mb-3 mt-3">
                                <p>Ingrese su Email</p>
                                <input type="email" class="form-control" id="mail${ruta.nombre}" placeholder="name@example.com">
                                
                            </div>
                            <button type="button" class="btn btn-outline-dark col m-3" id="btn${ruta.nombre}"><STRong><a class="nav-link" href="#/Pasaje" > ENVIAR</a></STRong></button>
                        </div>
                        </div>  
                    </div>
                    </div>
                </div>
            `
            trip.appendChild(divTrip)
            btn=document.getElementById(`btn${ruta.nombre}`)            

            //subo informacion relevante al Local Storage
            btn.addEventListener("click",()=>{
                localStorage.setItem("Destino",(ruta.nombre))
                localStorage.setItem("PrecioA",JSON.stringify(ruta.precioAdulto))
                localStorage.setItem("PrecioM",JSON.stringify(ruta.precioMenor))
                
                function extraerDatos(){
                    const mail=document.getElementById(`mail${ruta.nombre}`).value
                    const fechaRegreso=document.getElementById(`fechaRegreso${ruta.nombre}`).value
                    const fechaSalida=document.getElementById(`fechaSalida${ruta.nombre}`).value
                    const adultos=document.getElementById(`adultos`).value
                    const menores=document.getElementById(`menores`).value
                    localStorage.setItem("Mail",(mail))
                    localStorage.setItem("FechaRegreso",(fechaRegreso))
                    localStorage.setItem("FechaSalida",(fechaSalida))
                    localStorage.setItem("CantidadAdultos",(adultos))
                    localStorage.setItem("CantidadMenores",(menores))
                }
                extraerDatos()

            })
        
            break
        case '#/Cataratas':
            ruta= destinosInfo.find(ruta=>ruta.id==route)
            divTrip =document.createElement('div')
            divTrip.innerHTML=`
                <div class="mt-5 ml-5  container-xl p-4 border border-dark ">
                    <div class="row row-cols-1 row-cols-lg-2 rounded">
                    <img src="${ruta.img}" alt="destino" class="img-fluid" id="imgProduct" >
                    
                    <div class=" col">
                        <div class="bg-light mt-3 p-4 rounded ">
                        <h2 class="pb-4 text-center">${ruta.nombre}</h2> 
                        <p class="text-center">${ruta.detalle}</p>
                        <ul class="d-flex flex-row">
                        <li class="fw-bold mx-3 "><span class="text-decoration-underline">Precio adulto</span>:$ ${ruta.precioAdulto}</li>
                        
                        <li class="fw-bold mx-3"><span class="text-decoration-underline">Precio menor</span>:$ ${ruta.precioMenor}</li>
                        </ul>
                        </div>
                        <div>
                        <div class="bg-light rounded my-2 d-flex flex-row" id="listaServicio">
                            <ul>
                                <li><img src="src/avion.png" width="30" class="m-2" alt=""> Avion</li>
                                <li><img src="src/hotel.png" width="30" class="m-2" alt="">Hotel  ★★★★★</li>
                                <li><img src="src/comida.png" width="30" class="m-2" alt="">All Inclusive</li>
                                
                                <li><img src="src/excursion.png" width="30" class="m-2" alt="">Excursiones diarias</li>
                            </ul>
                            <ul>
                                <li><img src="src/transporte.png" width="30" class="m-2" alt="">Transporte privado</li>
                                <li><img src="src/niñera.png" width="30" class="m-2" alt="">Servicio de niñera incluido*</li>
                                <li><img src="src/hospital.png" width="30" class="m-2" alt="">Seguro medico completo</li>
                            </ul>
                        </div>
                        <div class="form-floating mb-3 bg-light text-center container-fluid rounded">
                            <div class="d-flex flex-row pt-4">
                            <p class="col">ADULTOS</p>
                            <P class="col">MENORES</P>
                            </div>
                            <div class="d-flex flex-row pb-4 text-center">
                            <input type="number" name="Cantidad de adultos" id="adultos"class='col mx-3'>
                            <input type="number" name="Cantidad de niños" id="menores" class="col">
                            </div>
        
                            <div class=" d-flex flex-row">
                            <div class="pt-2 col-4 offset-1">
                                <P ><strong >Fecha Salida</strong></P>
                                <input type="date" id="fechaSalida${ruta.nombre}">
                                </div>
                                <div class="pt-2 col-4 offset-1">
                                <P ><strong>Fecha Regreso</strong></P>
                                <input type="date" id="fechaRegreso${ruta.nombre}">
                                </div>
                            </div>
                            <div class="form-floating mb-3 mt-3">
                                <p>Ingrese su Email</p>
                                <input type="email" class="form-control" id="mail${ruta.nombre}" placeholder="name@example.com">
                                
                            </div>
                            <button type="button" class="btn btn-outline-dark col m-3" id="btn${ruta.nombre}"><STRong><a class="nav-link" href="#/Pasaje" > ENVIAR</a></STRong></button>
                        </div>
                        </div>  
                    </div>
                    </div>
                </div>
            `
            trip.appendChild(divTrip)
            btn=document.getElementById(`btn${ruta.nombre}`)            

            //subo informacion relevante al Local Storage
            btn.addEventListener("click",()=>{
                localStorage.setItem("Destino",(ruta.nombre))
                localStorage.setItem("PrecioA",JSON.stringify(ruta.precioAdulto))
                localStorage.setItem("PrecioM",JSON.stringify(ruta.precioMenor))
                
                function extraerDatos(){
                    const mail=document.getElementById(`mail${ruta.nombre}`).value
                    const fechaRegreso=document.getElementById(`fechaRegreso${ruta.nombre}`).value
                    const fechaSalida=document.getElementById(`fechaSalida${ruta.nombre}`).value
                    const adultos=document.getElementById(`adultos`).value
                    const menores=document.getElementById(`menores`).value
                    localStorage.setItem("Mail",(mail))
                    localStorage.setItem("FechaRegreso",(fechaRegreso))
                    localStorage.setItem("FechaSalida",(fechaSalida))
                    localStorage.setItem("CantidadAdultos",(adultos))
                    localStorage.setItem("CantidadMenores",(menores))
                }
                extraerDatos()

            })
        
            break
        case '#/Mendoza':
            console.log('Mendoza')
            ruta= destinosInfo.find(ruta=>ruta.id==route)
            divTrip =document.createElement('div')
            divTrip.innerHTML=`
                <div class="mt-5 ml-5  container-xl p-4 border border-dark ">
                    <div class="row row-cols-1 row-cols-lg-2 rounded">
                    <img src="${ruta.img}" alt="destino" class="img-fluid" id="imgProduct" >
                    
                    <div class=" col">
                        <div class="bg-light mt-3 p-4 rounded ">
                        <h2 class="pb-4 text-center">${ruta.nombre}</h2> 
                        <p class="text-center">${ruta.detalle}</p>
                        <ul class="d-flex flex-row">
                        <li class="fw-bold mx-3 "><span class="text-decoration-underline">Precio adulto</span>:$ ${ruta.precioAdulto}</li>
                        
                        <li class="fw-bold mx-3"><span class="text-decoration-underline">Precio menor</span>:$ ${ruta.precioMenor}</li>
                        </ul>
                        </div>
                        <div>
                        <div class="bg-light rounded my-2 d-flex flex-row" id="listaServicio">
                            <ul>
                                <li><img src="src/avion.png" width="30" class="m-2" alt=""> Avion</li>
                                <li><img src="src/hotel.png" width="30" class="m-2" alt="">Hotel  ★★★★★</li>
                                <li><img src="src/comida.png" width="30" class="m-2" alt="">All Inclusive</li>
                                
                                <li><img src="src/excursion.png" width="30" class="m-2" alt="">Excursiones diarias</li>
                            </ul>
                            <ul>
                                <li><img src="src/transporte.png" width="30" class="m-2" alt="">Transporte privado</li>
                                <li><img src="src/niñera.png" width="30" class="m-2" alt="">Servicio de niñera incluido*</li>
                                <li><img src="src/hospital.png" width="30" class="m-2" alt="">Seguro medico completo</li>
                            </ul>
                        </div>
                        <div class="form-floating mb-3 bg-light text-center container-fluid rounded">
                            <div class="d-flex flex-row pt-4">
                            <p class="col">ADULTOS</p>
                            <P class="col">MENORES</P>
                            </div>
                            <div class="d-flex flex-row pb-4 text-center">
                            <input type="number" name="Cantidad de adultos" id="adultos"class='col mx-3'>
                            <input type="number" name="Cantidad de niños" id="menores" class="col">
                            </div>
        
                            <div class=" d-flex flex-row">
                            <div class="pt-2 col-4 offset-1">
                                <P ><strong >Fecha Salida</strong></P>
                                <input type="date" id="fechaSalida${ruta.nombre}">
                                </div>
                                <div class="pt-2 col-4 offset-1">
                                <P ><strong>Fecha Regreso</strong></P>
                                <input type="date" id="fechaRegreso${ruta.nombre}">
                                </div>
                            </div>
                            <div class="form-floating mb-3 mt-3">
                                <p>Ingrese su Email</p>
                                <input type="email" class="form-control" id="mail${ruta.nombre}" placeholder="name@example.com">
                                
                            </div>
                            <button type="button" class="btn btn-outline-dark col m-3" id="btn${ruta.nombre}"><STRong><a class="nav-link" href="#/Pasaje" > ENVIAR</a></STRong></button>
                        </div>
                        </div>  
                    </div>
                    </div>
                </div>
            `
            trip.appendChild(divTrip)
            btn=document.getElementById(`btn${ruta.nombre}`)            

            //subo informacion relevante al Local Storage
            btn.addEventListener("click",()=>{
                localStorage.setItem("Destino",(ruta.nombre))
                localStorage.setItem("PrecioA",JSON.stringify(ruta.precioAdulto))
                localStorage.setItem("PrecioM",JSON.stringify(ruta.precioMenor))
                
                function extraerDatos(){
                    const mail=document.getElementById(`mail${ruta.nombre}`).value
                    const fechaRegreso=document.getElementById(`fechaRegreso${ruta.nombre}`).value
                    const fechaSalida=document.getElementById(`fechaSalida${ruta.nombre}`).value
                    const adultos=document.getElementById(`adultos`).value
                    const menores=document.getElementById(`menores`).value
                    localStorage.setItem("Mail",(mail))
                    localStorage.setItem("FechaRegreso",(fechaRegreso))
                    localStorage.setItem("FechaSalida",(fechaSalida))
                    localStorage.setItem("CantidadAdultos",(adultos))
                    localStorage.setItem("CantidadMenores",(menores))
                }
                extraerDatos()

            })
        
            break
        case '#/Salta':
            console.log('Salta')
            ruta= destinosInfo.find(ruta=>ruta.id==route)
            divTrip =document.createElement('div')
            divTrip.innerHTML=`
                <div class="mt-5 ml-5  container-xl p-4 border border-dark ">
                    <div class="row row-cols-1 row-cols-lg-2 rounded">
                    <img src="${ruta.img}" alt="destino" class="img-fluid" id="imgProduct" >
                    
                    <div class=" col">
                        <div class="bg-light mt-3 p-4 rounded ">
                        <h2 class="pb-4 text-center">${ruta.nombre}</h2> 
                        <p class="text-center">${ruta.detalle}</p>
                        <ul class="d-flex flex-row">
                        <li class="fw-bold mx-3 "><span class="text-decoration-underline">Precio adulto</span>:$ ${ruta.precioAdulto}</li>
                        
                        <li class="fw-bold mx-3"><span class="text-decoration-underline">Precio menor</span>:$ ${ruta.precioMenor}</li>
                        </ul>
                        </div>
                        <div>
                        <div class="bg-light rounded my-2 d-flex flex-row" id="listaServicio">
                            <ul>
                                <li><img src="src/avion.png" width="30" class="m-2" alt=""> Avion</li>
                                <li><img src="src/hotel.png" width="30" class="m-2" alt="">Hotel  ★★★★★</li>
                                <li><img src="src/comida.png" width="30" class="m-2" alt="">All Inclusive</li>
                                
                                <li><img src="src/excursion.png" width="30" class="m-2" alt="">Excursiones diarias</li>
                            </ul>
                            <ul>
                                <li><img src="src/transporte.png" width="30" class="m-2" alt="">Transporte privado</li>
                                <li><img src="src/niñera.png" width="30" class="m-2" alt="">Servicio de niñera incluido*</li>
                                <li><img src="src/hospital.png" width="30" class="m-2" alt="">Seguro medico completo</li>
                            </ul>
                        </div>
                        <div class="form-floating mb-3 bg-light text-center container-fluid rounded">
                            <div class="d-flex flex-row pt-4">
                            <p class="col">ADULTOS</p>
                            <P class="col">MENORES</P>
                            </div>
                            <div class="d-flex flex-row pb-4 text-center">
                            <input type="number" name="Cantidad de adultos" id="adultos"class='col mx-3'>
                            <input type="number" name="Cantidad de niños" id="menores" class="col">
                            </div>
        
                            <div class=" d-flex flex-row">
                            <div class="pt-2 col-4 offset-1">
                                <P ><strong >Fecha Salida</strong></P>
                                <input type="date" id="fechaSalida${ruta.nombre}">
                                </div>
                                <div class="pt-2 col-4 offset-1">
                                <P ><strong>Fecha Regreso</strong></P>
                                <input type="date" id="fechaRegreso${ruta.nombre}">
                                </div>
                            </div>
                            <div class="form-floating mb-3 mt-3">
                                <p>Ingrese su Email</p>
                                <input type="email" class="form-control" id="mail${ruta.nombre}" placeholder="name@example.com">
                                
                            </div>
                            <button type="button" class="btn btn-outline-dark col m-3" id="btn${ruta.nombre}"><STRong><a class="nav-link" href="#/Pasaje" > ENVIAR</a></STRong></button>
                        </div>
                        </div>  
                    </div>
                    </div>
                </div>
            `
            trip.appendChild(divTrip)
            btn =document.getElementById(`btn${ruta.nombre}`)            

            //subo informacion relevante al Local Storage
            btn.addEventListener("click",()=>{
                localStorage.setItem("Destino",(ruta.nombre))
                localStorage.setItem("PrecioA",JSON.stringify(ruta.precioAdulto))
                localStorage.setItem("PrecioM",JSON.stringify(ruta.precioMenor))
                
                function extraerDatos(){
                    const mail=document.getElementById(`mail${ruta.nombre}`).value
                    const fechaRegreso=document.getElementById(`fechaRegreso${ruta.nombre}`).value
                    const fechaSalida=document.getElementById(`fechaSalida${ruta.nombre}`).value
                    const adultos=document.getElementById(`adultos`).value
                    const menores=document.getElementById(`menores`).value
                    localStorage.setItem("Mail",(mail))
                    localStorage.setItem("FechaRegreso",(fechaRegreso))
                    localStorage.setItem("FechaSalida",(fechaSalida))
                    localStorage.setItem("CantidadAdultos",(adultos))
                    localStorage.setItem("CantidadMenores",(menores))
                }
                extraerDatos()

            })
        
            break
        case '#/Glaciar':
            console.log('Glaciar')
            ruta= destinosInfo.find(ruta=>ruta.id==route)
            divTrip =document.createElement('div')
            divTrip.innerHTML=`
                <div class="mt-5 ml-5  container-xl p-4 border border-dark ">
                    <div class="row row-cols-1 row-cols-lg-2 rounded">
                    <img src="${ruta.img}" alt="destino" class="img-fluid" id="imgProduct" >
                    
                    <div class=" col">
                        <div class="bg-light mt-3 p-4 rounded ">
                        <h2 class="pb-4 text-center">${ruta.nombre}</h2> 
                        <p class="text-center">${ruta.detalle}</p>
                        <ul class="d-flex flex-row">
                        <li class="fw-bold mx-3 "><span class="text-decoration-underline">Precio adulto</span>:$ ${ruta.precioAdulto}</li>
                        
                        <li class="fw-bold mx-3"><span class="text-decoration-underline">Precio menor</span>:$ ${ruta.precioMenor}</li>
                        </ul>
                        </div>
                        <div>
                        <div class="bg-light rounded my-2 d-flex flex-row" id="listaServicio">
                            <ul>
                                <li><img src="src/avion.png" width="30" class="m-2" alt=""> Avion</li>
                                <li><img src="src/hotel.png" width="30" class="m-2" alt="">Hotel  ★★★★★</li>
                                <li><img src="src/comida.png" width="30" class="m-2" alt="">All Inclusive</li>
                                
                                <li><img src="src/excursion.png" width="30" class="m-2" alt="">Excursiones diarias</li>
                            </ul>
                            <ul>
                                <li><img src="src/transporte.png" width="30" class="m-2" alt="">Transporte privado</li>
                                <li><img src="src/niñera.png" width="30" class="m-2" alt="">Servicio de niñera incluido*</li>
                                <li><img src="src/hospital.png" width="30" class="m-2" alt="">Seguro medico completo</li>
                            </ul>
                        </div>
                        <div class="form-floating mb-3 bg-light text-center container-fluid rounded">
                            <div class="d-flex flex-row pt-4">
                            <p class="col">ADULTOS</p>
                            <P class="col">MENORES</P>
                            </div>
                            <div class="d-flex flex-row pb-4 text-center">
                            <input type="number" name="Cantidad de adultos" id="adultos"class='col mx-3'>
                            <input type="number" name="Cantidad de niños" id="menores" class="col">
                            </div>
        
                            <div class=" d-flex flex-row">
                            <div class="pt-2 col-4 offset-1">
                                <P ><strong >Fecha Salida</strong></P>
                                <input type="date" id="fechaSalida${ruta.nombre}">
                                </div>
                                <div class="pt-2 col-4 offset-1">
                                <P ><strong>Fecha Regreso</strong></P>
                                <input type="date" id="fechaRegreso${ruta.nombre}">
                                </div>
                            </div>
                            <div class="form-floating mb-3 mt-3">
                                <p>Ingrese su Email</p>
                                <input type="email" class="form-control" id="mail${ruta.nombre}" placeholder="name@example.com">
                                
                            </div>
                            <button type="button" class="btn btn-outline-dark col m-3" id="btn${ruta.nombre}"><STRong><a class="nav-link" href="#/Pasaje" > ENVIAR</a></STRong></button>
                        </div>
                        </div>  
                    </div>
                    </div>
                </div>
            `
            trip.appendChild(divTrip)
            btn=document.getElementById(`btn${ruta.nombre}`)            

            //subo informacion relevante al Local Storage
            btn.addEventListener("click",()=>{
                localStorage.setItem("Destino",(ruta.nombre))
                localStorage.setItem("PrecioA",JSON.stringify(ruta.precioAdulto))
                localStorage.setItem("PrecioM",JSON.stringify(ruta.precioMenor))
                
                function extraerDatos(){
                    const mail=document.getElementById(`mail${ruta.nombre}`).value
                    const fechaRegreso=document.getElementById(`fechaRegreso${ruta.nombre}`).value
                    const fechaSalida=document.getElementById(`fechaSalida${ruta.nombre}`).value
                    const adultos=document.getElementById(`adultos`).value
                    const menores=document.getElementById(`menores`).value
                    localStorage.setItem("Mail",(mail))
                    localStorage.setItem("FechaRegreso",(fechaRegreso))
                    localStorage.setItem("FechaSalida",(fechaSalida))
                    localStorage.setItem("CantidadAdultos",(adultos))
                    localStorage.setItem("CantidadMenores",(menores))
                }
                extraerDatos()

            })
        
            break
        case '#/RioNegro':
            console.log('Rio Negro')
            ruta= destinosInfo.find(ruta=>ruta.id==route)
            divTrip =document.createElement('div')
            divTrip.innerHTML=`
                <div class="mt-5 ml-5  container-xl p-4 border border-dark ">
                    <div class="row row-cols-1 row-cols-lg-2 rounded">
                    <img src="${ruta.img}" alt="destino" class="img-fluid" id="imgProduct" >
                    
                    <div class=" col">
                        <div class="bg-light mt-3 p-4 rounded ">
                        <h2 class="pb-4 text-center">${ruta.nombre}</h2> 
                        <p class="text-center">${ruta.detalle}</p>
                        <ul class="d-flex flex-row">
                        <li class="fw-bold mx-3 "><span class="text-decoration-underline">Precio adulto</span>:$ ${ruta.precioAdulto}</li>
                        
                        <li class="fw-bold mx-3"><span class="text-decoration-underline">Precio menor</span>:$ ${ruta.precioMenor}</li>
                        </ul>
                        </div>
                        <div>
                        <div class="bg-light rounded my-2 d-flex flex-row" id="listaServicio">
                            <ul>
                                <li><img src="src/avion.png" width="30" class="m-2" alt=""> Avion</li>
                                <li><img src="src/hotel.png" width="30" class="m-2" alt="">Hotel  ★★★★★</li>
                                <li><img src="src/comida.png" width="30" class="m-2" alt="">All Inclusive</li>
                                
                                <li><img src="src/excursion.png" width="30" class="m-2" alt="">Excursiones diarias</li>
                            </ul>
                            <ul>
                                <li><img src="src/transporte.png" width="30" class="m-2" alt="">Transporte privado</li>
                                <li><img src="src/niñera.png" width="30" class="m-2" alt="">Servicio de niñera incluido*</li>
                                <li><img src="src/hospital.png" width="30" class="m-2" alt="">Seguro medico completo</li>
                            </ul>
                        </div>
                        <div class="form-floating mb-3 bg-light text-center container-fluid rounded">
                            <div class="d-flex flex-row pt-4">
                            <p class="col">ADULTOS</p>
                            <P class="col">MENORES</P>
                            </div>
                            <div class="d-flex flex-row pb-4 text-center">
                            <input type="number" name="Cantidad de adultos" id="adultos"class='col mx-3'>
                            <input type="number" name="Cantidad de niños" id="menores" class="col">
                            </div>
        
                            <div class=" d-flex flex-row">
                            <div class="pt-2 col-4 offset-1">
                                <P ><strong >Fecha Salida</strong></P>
                                <input type="date" id="fechaSalida${ruta.nombre}">
                                </div>
                                <div class="pt-2 col-4 offset-1">
                                <P ><strong>Fecha Regreso</strong></P>
                                <input type="date" id="fechaRegreso${ruta.nombre}">
                                </div>
                            </div>
                            <div class="form-floating mb-3 mt-3">
                                <p>Ingrese su Email</p>
                                <input type="email" class="form-control" id="mail${ruta.nombre}" placeholder="name@example.com">
                                
                            </div>
                            <button type="button" class="btn btn-outline-dark col m-3" id="btn${ruta.nombre}"><STRong><a class="nav-link" href="#/Pasaje" > ENVIAR</a></STRong></button>
                        </div>
                        </div>  
                    </div>
                    </div>
                </div>
            `
            trip.appendChild(divTrip)
            btn =document.getElementById(`btn${ruta.nombre}`)            

            //subo informacion relevante al Local Storage
            btn.addEventListener("click",()=>{
                localStorage.setItem("Destino",(ruta.nombre))
                localStorage.setItem("PrecioA",JSON.stringify(ruta.precioAdulto))
                localStorage.setItem("PrecioM",JSON.stringify(ruta.precioMenor))
                
                function extraerDatos(){
                    const mail=document.getElementById(`mail${ruta.nombre}`).value
                    const fechaRegreso=document.getElementById(`fechaRegreso${ruta.nombre}`).value
                    const fechaSalida=document.getElementById(`fechaSalida${ruta.nombre}`).value
                    const adultos=document.getElementById(`adultos`).value
                    const menores=document.getElementById(`menores`).value
                    localStorage.setItem("Mail",(mail))
                    localStorage.setItem("FechaRegreso",(fechaRegreso))
                    localStorage.setItem("FechaSalida",(fechaSalida))
                    localStorage.setItem("CantidadAdultos",(adultos))
                    localStorage.setItem("CantidadMenores",(menores))
                }
                extraerDatos()

            })
        
            break
        case '#/Pasaje':
            console.log('Pasaje')
            class pasajerosAdultos{
                constructor(precio,cantidad){
                    this.precio=precio
                    this.cantidad=cantidad
                    
                }
                
            }
            class pasajerosMenores{
                constructor(precio,cantidad){
                    this.precio=precio
                    this.cantidad=cantidad
                    
                }
                
            }
            let PrecioAdulto=localStorage.getItem("PrecioA")
            let PrecioMenores=localStorage.getItem("PrecioM")

            const PasajerosAdultos=new pasajerosAdultos(localStorage.getItem("PrecioA"),localStorage.getItem("CantidadAdultos"))
            const PasajerosMenores= new pasajerosMenores(localStorage.getItem("PrecioM"),localStorage.getItem("CantidadMenores"))
            

            let costosPasajes=[]
            let CostoAdulto=[]
            let CostoMenor=[]
            CostoAdulto.push(PasajerosAdultos)
            CostoMenor.push(PasajerosMenores)
            console.log("menor")
            console.log(CostoMenor)
            console.log(costosPasajes)
            let totalPasajeAdulto=CostoAdulto.reduce((acc,item)=> acc + item.precio * item.cantidad ,0)
            let totalPasajeMenor=CostoMenor.reduce((acc,item)=> acc + item.precio * item.cantidad ,0)
            console.log(totalPasajeAdulto)
            console.log(totalPasajeMenor)
            costosPasajes= (totalPasajeMenor+totalPasajeAdulto)
            console.log(costosPasajes)
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
            

            console.log (localStorage.getItem("CantidadAdultos"))
            console.log(localStorage.getItem("CantidadMenores"))
            console.log(localStorage.getItem("Destino"))
            console.log(localStorage.getItem("FechaSalida"))
            console.log(localStorage.getItem("FechaRegreso"))
            

            
                
                
                
            let content=document.createElement('div')
            content.innerHTML=`
                <img src="./src/fondoFinal.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                <div class=" container-xl text-center">
                    <h2>¡Gracias por elegirnos!</h2>
                    <h3>Usted a seleccionado el viaje a ${localStorage.getItem("Destino")}. </h3>
                    <div class="d-flex flex-row justify-content-center">
                    <div class="m-4">Fecha de salida: ${localStorage.getItem("FechaSalida")}</div>
                    <div class="m-4">fecha de Regreso: ${localStorage.getItem("FechaRegreso")}</div>
                </div>
                <div class="d-flex flex-row justify-content-center">
                <div class="m-4">Pasajeros Adultos: ${localStorage.getItem("CantidadAdultos")}</div>
                <div class="m-4">Pasajeros Menores: ${localStorage.getItem("CantidadMenores")}</div>
                </div>
                <h4>Precio total del viaje: $${costosPasajes}</h4>
                <p>Un asesor de ventas se comunicara via el mail que proporciono para definir los ultimos detalles.</p>
                <button type="button" class="btn btn-outline-dark"><a class="nav-link" id="volverHome" href="#/home" > Volver al inicio</a></button>
            `
            pasaje.appendChild(content)
            let botonHome=document.getElementById("volverHome")
            botonHome.addEventListener('click',()=>{
                Toastify({
                    text: "🢃Recuerde seguirnos en nuestras redes por descuentos y promociones.🢃",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    stopOnFocus: true,
                    style: {
                      background: "linear-gradient(to right, dark, dark)",
                    }
                  }).showToast();
            })
        }
    
}
router(window.location.hash)




