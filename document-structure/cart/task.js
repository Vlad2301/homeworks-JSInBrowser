(() => {
    const quantityDecElements = document.querySelectorAll('.product__quantity-control');

    quantityDecElements.forEach((el) => {
        el.addEventListener('click', onClickQuantity);
    })

    const addButtons = document.querySelectorAll('.product__add');
    addButtons.forEach((btn) => {
        btn.addEventListener('click', addProduct);
    })
})()


function onClickQuantity() {
    let quantity = Number(this.parentElement.querySelector('.product__quantity-value').textContent);

    if (this.classList.contains('product__quantity-control_dec')) {
        quantity -= 1;
    } else {
        quantity += 1;
    }

    if (quantity > 0) {
        this.parentElement.querySelector('.product__quantity-value').textContent = quantity;
    } else {
        this.parentElement.querySelector('.product__quantity-value').textContent = 1;
    }
}

function addProduct() {

    const cartProductList = document.querySelector('.cart__products');
    const product = this.closest('.product');

    if (cartProductList.children.length) {
        const cartProductExist = Array.from(cartProductList.children).filter((cartProduct) => {
            return cartProduct.dataset.id === product.dataset.id;
        });
        if (cartProductExist.length) {
            cartProductExist.forEach((cartProduct) => {
                const quantityProduct = Number(product.querySelector('.product__quantity-value').textContent);
                const quantityCartProduct = Number(cartProduct.querySelector('.cart__product-count').textContent);

                cartProduct.querySelector('.cart__product-count').textContent = quantityProduct + quantityCartProduct;
            });
        } else {
            const newCartProduct = createCartProduct.bind(this)();
            cartProductList.appendChild(newCartProduct);
        }
    } else {
        const newCartProduct = createCartProduct.bind(this)();
        cartProductList.appendChild(newCartProduct);
    }

}

function createCartProduct() {
    const product = this.closest('.product');
    const productQuantity = product.querySelector('.product__quantity-value');
    const productImage = product.querySelector('.product__image');
    const htmlCartProduct = `
    <img class="cart__product-image" src="${productImage.src}">
    <div class="cart__product-count">${productQuantity.textContent}</div>`;


    const div = document.createElement('div');

    div.className = 'cart__product';
    div.dataset.id = product.dataset.id;
    div.innerHTML = htmlCartProduct;

    return div;
}