fetch("./data.json")
.then(Response => Response.json())
.then(data=>{

    let numButton = 0 // me muestra la cantidad total de "You Cart (0)"
    let resultArray = [] // guarda todos los valores cuando se da click
    let ResultProduct = 0
    let resultTotal = 0 // muestra la suma de todos los valores del array

    //funcion para sumar el total de los productos seleccionados
    const sumResultTotal = ()=>{
        resultTotal = 0
        resultArray.forEach(num =>{
            resultTotal += num
        })
    }

    const comfirmButton = document.querySelector(".comfirmButton")
    
    data.forEach(product => {
        
        const imageDesktop = product.image.desktop
        const imageMobile = product.image.mobile
        const imageConfirm = product.image.thumbnail
        const name = product.name
        const category = product.category
        const price = parseFloat(product.price).toFixed(2)

        const message = document.querySelector(".message")
        
    
        const iconAddToCar = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>` 
    
        const iconPlus = `<svg class="iconPlus" xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="none" viewBox="0 0 10 10"><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>`
    
        const iconMenus = `<svg class="iconMenus" xmlns="http://www.w3.org/2000/svg" width="7" height="2" fill="none" viewBox="0 0 10 2"><path d="M0 .375h10v1.25H0V.375Z"/></svg>`
        
        const productsCards = document.querySelector(".productsCards")
        const card = document.createElement("div")
        card.classList.add("containerCards")
        card.innerHTML = `
        <img class="containerCardsImgs" src="${imageDesktop}" alt="producto">
        <div class="buttons">
            <div class="button1">${iconAddToCar} Add to cart</div>
            <div class="button2">${iconMenus}<span class="spanNumber">1</span>${iconPlus}</div>
        </div>
        <div class="containerCardsTexts">
            <p class="category">${category}</p>
            <p class="name">${name}</p>
            <p class="price">$${price}</p>
        </div>
        `
        productsCards.appendChild(card)



        // MEDIAQUERY
        // ESTA FUNCION HACE QUE SE CAMBIE LA IMAGEN CUANDO LA PANTALLA ESTE A UNA MEDIDA ESPECIFICA

        const changeImage = () =>{
            if (window,innerWidth <= 400) {
                containerCardsImgs.src = imageMobile
            } else {
                containerCardsImgs.src = imageDesktop
            }
        }
        window.addEventListener("load", changeImage)
        window.addEventListener("resize", changeImage)


        const iconRemoveIten = `<svg class="iconRemove" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`

        const buysContainer = document.querySelector(".buysContainer")
        const cardBuysContainer = document.createElement("div")
        cardBuysContainer.classList.add("buys")
        cardBuysContainer.innerHTML = `

        <div class="titleProduct">
            <p class="buyName">${name}</p>
            <div class="productsBuys">
                <p class="buysCount">1x</p>
                <p class="buysPrice">$${price}</p>
                <p class="buysTotalPrice">${price}</p>
            </div>
        </div>
        ${iconRemoveIten}
        `
        cardBuysContainer.style.display = "none"
        buysContainer.appendChild(cardBuysContainer)

        // CONTENEDOR DE CONFIRMACION

        const buysContainerConfirm = document.querySelector(".buysContainerConfirm")
        const cardBuysContainer2 = document.createElement("div")
        cardBuysContainer2.classList.add("buys2")
        cardBuysContainer2.innerHTML = `

        <div class="titleProduct2">
            <img class="containerCardsImgsConfirm" src="${imageConfirm}" alt="producto">
            <div class="productsBuysContainer2">
                <p class="buyName2">${name}</p>
                <div class="productsBuys2">
                    <p class="buysCount2">1x</p>
                    <p class="buysPrice2">@ $${price}</p>
                </div>
            </div>
            <p class="buysTotalPrice2">$${price}</p>
        </div>
        `

        buysContainerConfirm.appendChild(cardBuysContainer2)

        const buysCount2 = cardBuysContainer2.querySelector(".buysCount2")
        const buysTotalPrice2 = cardBuysContainer2.querySelector(".buysTotalPrice2")
        const totalPrice2 = document.querySelector(".totalPrice2")
        
        // FUNCIONES
        const sumResultProduct = ()=>{
            ResultProduct = 0
            ResultProduct = numX * price
        }
        
        const updateTotalSum = ()=>{
            resultArray.push(parseFloat(price))
            sumResultTotal()
            priceTotal.textContent = `$${resultTotal.toFixed(2)}`
            totalPrice2.textContent = `$${resultTotal.toFixed(2)}`
        }

        const updateCartVisibility = ()=>{
            if (numX === 0) {
                button.style.display = "none"
                addToCart.style.display = "flex"
                cardBuysContainer.style.display = "none"
                containerCardsImgs.style.border = "none"
            }

            if (numButton === 0) {
                coke.style.display = "flex"
                total.style.display = "none"
                message.style.display = "none"
                comfirmButton.style.display = "none"
                textBuysEmptyContainer.style.display = "flex"
            }
        }

        const removeAllOccurrences = (valueToRemove) => {
            resultArray = resultArray.filter(value => value !== valueToRemove);
        };

        // CREACION DEL BOTON ICONPLUS
        let numX = 0 // esta variable debe estar fuera de los botones
        let buysCount = cardBuysContainer.querySelector(".buysCount")
        let spanNumber = card.querySelector(".spanNumber")
        let buysTotalPrice = cardBuysContainer.querySelector(".buysTotalPrice")

        const textBuysEmptyContainer = document.querySelector(".textBuysEmptyContainer")

        // CREACION DEL PRIMER BOTON
        const button = card.querySelector(".button2")
        const addToCart = card.querySelector(".button1")
        const coke = document.querySelector(".coke")
        const yourCardSpan = document.querySelector(".yourCardSpan")
        const total = document.querySelector(".total")
        const priceTotal = document.querySelector(".priceTotal")
        const containerCardsImgs = card.querySelector(".containerCardsImgs")

        addToCart.addEventListener("click", ()=>{
            button.style.display = "flex"
            coke.style.display = "none"
            addToCart.style.display = "none"
            cardBuysContainer.style.display = "flex"

            numX++
            numButton++ // contador general
            if (numButton > 0) {
                message.style.display = "flex"
                total.style.display = "flex"
                comfirmButton.style.display = "inline"
                containerCardsImgs.style.border = "2px solid var(--Red)"
            }

            yourCardSpan.textContent = `${numButton}` // actualiza el contador general
            spanNumber.textContent = `${numX}`
            buysCount.textContent = `${numX}x`
            updateTotalSum()
            textBuysEmptyContainer.style.display = "none"
            buysTotalPrice.textContent = `$${price}`

            // DESPUES DE DAR CONTINUAR
            cardBuysContainer2.style.display = "flex"
        })

        //CREACION DEL BOTON ICONPLUS
        const iconPlusButton = card.querySelector(".iconPlus")
        iconPlusButton.addEventListener("click", ()=>{
            numX++
            numButton++

            yourCardSpan.textContent = `${numButton}`

            sumResultTotal()
            priceTotal.textContent = `$${resultTotal.toFixed(2)}`
            buysCount.textContent = `${numX}x`
            spanNumber.textContent = `${numX}`
            sumResultProduct()

            buysTotalPrice.textContent = `$${ResultProduct.toFixed(2)}`
            updateTotalSum()

            // DESPUES DE DAR CONTINUAR
            buysCount2.textContent = `${numX}x`
            buysTotalPrice2.textContent = `$${ResultProduct.toFixed(2)}`
        })

        // CREACION DE BOTON ICONMENUS
        const iconMenusButton = card.querySelector(".iconMenus")
        iconMenusButton.addEventListener("click", ()=>{
            numX--
            numButton--

            yourCardSpan.textContent = `${numButton}`
            buysCount.textContent = `${numX}x`
            spanNumber.textContent = `${numX}`

            updateCartVisibility()

            resultArray.pop()
            sumResultProduct()
            sumResultTotal()
            buysTotalPrice.textContent = `$${ResultProduct.toFixed(2)}`
            priceTotal.textContent = `$${resultTotal.toFixed(2)}`

            // DESPUES DE DAR CONTINUAR
            buysCount2.textContent = `${numX}x`
            buysTotalPrice2.textContent = `$${ResultProduct.toFixed(2)}`
        })

        // BOTON X ICONREMOVEITEN
        const iconRemove = cardBuysContainer.querySelector(".iconRemove")
        iconRemove.addEventListener("click", ()=>{
            numButton = numButton - numX
            yourCardSpan.textContent = `${numButton}` //imprime el nuevo valor
            numX = 0
            removeAllOccurrences(parseFloat(price))
            updateCartVisibility()
            buysTotalPrice.textContent = `$${price}` // imprime el valor del precio en la tabla de selccion
            sumResultTotal() // esta funcion me suma el contenido del array
            priceTotal.textContent = `$${resultTotal.toFixed(2)}`
        })   
    })
    const background = document.querySelector(".background")

    // CREACION DE BOTON DE CONFIRMACION DE COMPRA
    comfirmButton.addEventListener("click", ()=>{
        background.style.display = "flex"
    })
    
})