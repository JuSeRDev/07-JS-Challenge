
fetch("./data.json")
.then(Response => Response.json())
.then(data=>{

    let totalSumProducts = 0
    let sumProducts = []
    let sumTotales =[]
    let totalSumTotales = 0

    const yourCardSpan = document.querySelector(".yourCardSpan")

    // Función para actualizar el total de productos usando forEach
    const updateTotalProdcuts = ()=>{
        totalSumProducts = 0
            sumProducts.forEach(num =>{
                totalSumProducts += num
            })
            yourCardSpan.innerHTML = `${totalSumProducts}`
    }

    data.forEach(product => {
        

        // este es la variable en la que se agrega todo el HTML
        const productsCards = document.querySelector(".productsCards")

        // esta variable contiene la imagen del carrito de compras
        const iconAddToCar = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>` 

        // esta variable contiene el icono de +
        const iconPlus = `<svg class="iconPlus" xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="none" viewBox="0 0 10 10"><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>`

        // esta variable contiene el icono de -
        const iconMenus = `<svg class="iconMenus" xmlns="http://www.w3.org/2000/svg" width="7" height="2" fill="none" viewBox="0 0 10 2"><path d="M0 .375h10v1.25H0V.375Z"/></svg>`

        // aqui traigo los datos importantes del .JSON a variables para facilitar la lectura
        const imageDesktop = product.image.desktop
        const name = product.name
        const category = product.category
        const price = parseFloat(product.price).toFixed(2)

        let numButton = 0

        //aqui ya comienza la creacion de la tienda
        const card = document.createElement("div")
        card.classList.add("containerCards")
        card.innerHTML = `
        <img class="containerCardsImgs" src="${imageDesktop}" alt="producto">
        <div class="buttons">
            <div class="button1">${iconAddToCar} Add to cart</div>
            <div class="button2">${iconMenus}<span class="spanNumber">${numButton}</span>${iconPlus}</div>
        </div>
        <div class="containerCardsTexts">
            <p class="category">${category}</p>
            <p class="name">${name}</p>
            <p class="price">$${price}</p>
        </div>
        `
        productsCards.appendChild(card)
        
        // hago la seleccion dentro de la tarjeta "card" que es la que crea el div con todo el contendio
        const button = card.querySelector(".button1")
        const button2 = card.querySelector(".button2")
        const spanCount = button2.querySelector(".spanNumber")
        const containerCardsImgs = card.querySelector(".containerCardsImgs")
        const coke = document.querySelector(".coke")
        const textBuysEmptyContainer = document.querySelector(".textBuysEmptyContainer")
        const total = document.querySelector(".total")
        const priceTotal = document.querySelector(".priceTotal")
        const message = document.querySelector(".message")

        button.addEventListener("click", ()=>{


            let resultado = 0
            
            const sumPrice = ()=>{
                resultado = 0
                resultado += price
            }

             // funcion para actualizar el precio final
            const finalResult = ()=>{
                totalSumTotales = 0
                sumTotales.forEach(num =>{
                    totalSumTotales += num
                })
                priceTotal.textContent = `$${totalSumTotales.toFixed(2)}`
            }
            
            button.style.display = "none"
            button2.style.display = "flex"
            containerCardsImgs.style.border = "3px solid var(--Red)"
            total.style.display = "flex"
            message.style.display = "flex"
            numButton++
            spanCount.textContent = numButton
            coke.style.display = "none"
            sumPrice()
            sumProducts.push(1)
            updateTotalProdcuts()

            textBuysEmptyContainer.style.display = "none"

            //aqui comienza la tarjeta de compras
            const iconRemoveIten = `<svg class="iconRemove" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`

            const buysContainer = document.querySelector(".buysContainer")
            const cardBuysContainer = document.createElement("div")
            cardBuysContainer.classList.add("buys")
            cardBuysContainer.innerHTML = `

            <div class="titleProduct">
                <p class="buyName">${name}</p>
                <div class="productsBuys">
                    <p class="buysCount">${numButton}x</p>
                    <p class="buysPrice">${price}</p>
                    <p class="buysTotalPrice">${resultado}</p>
                </div>
            </div>
            ${iconRemoveIten}
            `
            buysContainer.appendChild(cardBuysContainer)

            sumTotales.push(parseFloat(price))
            finalResult()

            // aqui comienza la accion del boton sumar
            const buysTotalPrice = cardBuysContainer.querySelector(".buysTotalPrice")
            const buysCount = cardBuysContainer.querySelector(".buysCount")
            const iconPlusButton = card.querySelector(".iconPlus")
            const iconMenusButton = card.querySelector(".iconMenus")

            iconPlusButton.addEventListener("click", ()=>{
                numButton++
                sumProducts.push(1)
                updateTotalProdcuts()
                if (numButton > 0) { 
                    containerCardsImgs.style.border = "3px solid var(--Red)"
                }
                
                buysCount.textContent = `${numButton}x`
                resultado = parseFloat(numButton * price).toFixed(2)
                buysTotalPrice.textContent = `${resultado}`
                spanCount.innerHTML = `${numButton}`
    
                sumTotales.push(parseFloat(price))
                finalResult()
                
                if (cardBuysContainer.style.display = "none") {
                    cardBuysContainer.style.display = "flex"
                }

                if (numButton >= 1) {
                    message.style.display = "flex"
                }
            })
            
            iconMenusButton.addEventListener("click", ()=>{
                if (numButton > 0) {
                    
                    numButton--
                    sumProducts.splice(sumProducts.length -1, 1)
                    
                    updateTotalProdcuts()
                    buysCount.textContent = `${numButton}x`
                    
                    resultado = parseFloat(numButton * price).toFixed(2)
                    buysTotalPrice.textContent = `${resultado}`
                    spanCount.innerHTML = `${numButton}`
                    
                    const index = sumTotales.lastIndexOf(parseFloat(price))
                    if (index > -1) {
                        sumTotales.splice(index, 1)
                    }
                }
                finalResult()
    
                if (numButton === 0) {
                    containerCardsImgs.style.border = "none"
                    cardBuysContainer.style.display = "none"
                    message.style.display = "none"
                    // button.style.display = "flex"
                    // button2.style.display = "none"
                }
            })
        })
    });
})