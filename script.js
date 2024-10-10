fetch("./data.json")
.then(Response => Response.json())
.then(data=>{
    
    data.forEach(product => {
        // este es la variable en la que se agrega todo el HTML
        const productsCards = document.querySelector(".productsCards")

        // esta variable contiene la imagen del carrito de compras
        const iconAddToCar = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>` 

        // esta variable contiene el icono de +
        const iconPlus = `<svg class="iconPlus" xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>`

        // esta variable contiene el icono de -
        const iconMenus = `<svg class="iconMenus" xmlns="http://www.w3.org/2000/svg" width="7" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>`

        // aqui traigo los datos importantes del .JSON a variables para facilitar la lectura
        const imageDesktop = product.image.desktop
        const name = product.name
        const category = product.category
        const price = parseFloat(product.price).toFixed(2)

        const numboton2 = 1

        //aqui ya comienza la creacion de la tienda
        const card = document.createElement("div")
        card.classList.add("containerCards")
        card.innerHTML = `
        <img class="containerCardsImgs" src="${imageDesktop}" alt="producto">
        <div class="buttons">
            <div class="button1">${iconAddToCar} Add to cart</div>
            <div class="button2">${iconMenus}<span>${numboton2}</span>${iconPlus}</div>
        </div>
        <div class="containerCardsTexts">
            <p class="category">${category}</p>
            <p class="name">${name}</p>
            <p class="price">${price}</p>
        </div>
        `
        productsCards.appendChild(card)
    });
})