//1
const buttonAlert = document.querySelector('.button-alert');

buttonAlert.onclick = () => alert('Hello Palmo');

//2
const helloButton = document.querySelector('.hello-button');

function changeInputValue() {
    const helloInput = document.querySelector('.hello-input');

    helloInput.value = 'Hello, World!'
}

helloButton.addEventListener("click", changeInputValue);

//3
const logInput = document.querySelector('.log-input');
const logButton = document.querySelector('.log-button');

logButton.addEventListener("click", () => console.log(logInput.value));

//4
const swapButton = document.querySelector('.swap-button');

function swapTitles() {
    const firstTitle = document.querySelector('.first-title');
    const secondTitle = document.querySelector('.second-title');
    const tempTitle = firstTitle.innerText;

    firstTitle.innerText = secondTitle.innerText;
    secondTitle.innerText = tempTitle;
}

swapButton.addEventListener('click', swapTitles);

//5
const changeColorButton = document.querySelector('.change-color-button');

function toggleTextColor() {
    const text = document.querySelector('.text');

    text.classList.toggle("red-text")
}

changeColorButton.addEventListener('click', toggleTextColor);

//6
const disabledButton = document.querySelector('.disabled-button');

function toggleInput() {
    const disabledInput = document.querySelector('.disabled-input');

    disabledInput.disabled = !disabledInput.disabled;
}

disabledButton.addEventListener('click', toggleInput);

//7
const squares = document.querySelectorAll('.square');

function swapColors() {
    const greenSquare = document.querySelector('.green-square');
    const redSquare = document.querySelector('.red-square');

    greenSquare.classList.replace('green-square', 'red-square');
    redSquare.classList.replace('red-square', 'green-square');
}

squares.forEach(square => {
    square.addEventListener('click', swapColors);
});

//8
const addItemButton = document.querySelector('.add-item-button');
let listItem = 1;

function addItem() {
    const list = document.querySelector('.list');
    const newListItem = document.createElement('li');

    newListItem.textContent = listItem.toString();
    list.appendChild(newListItem);

    listItem++
}

addItemButton.addEventListener('click', addItem);

//9
const listButton = document.querySelector('.list-button');

function makeList() {
    const inputValues = document.querySelector('.input-values');
    const listValues = document.querySelector('.list-values');

    listValues.innerHTML = '';

    inputValues.value.split(',').forEach(item => {
        const newListItem = document.createElement('li');

        newListItem.textContent = item.toString();
        listValues.appendChild(newListItem);
    });
}

listButton.addEventListener('click', makeList);

//10
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('.registration-form');
    const inputs = registrationForm.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const errorSpan = this.parentElement.nextElementSibling;
            errorSpan.style.display = 'none';
            this.classList.remove('error-border');
        });
    });

    function checkValidation(input, className) {
        document.querySelector(className).style.display = 'block';
        input.classList.add('error-border');
        return false;
    }

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        const loginInput = document.querySelector('.login-input');

        if (loginInput.value.length < 4 || loginInput.value.length > 20 || /[._\/\\|,]/.test(loginInput.value)) {
            isValid = checkValidation(loginInput, '.login-error');
        }

        const emailInput = document.querySelector('.email-input');

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            isValid = checkValidation(emailInput, '.email-error');
        }

        const ageInput = document.querySelector('.age-input');

        if (!/^\d+$/.test(ageInput.value) || parseInt(ageInput.value) < 0) {
            isValid = checkValidation(ageInput, '.age-error');
        }

        const passwordInput = document.querySelector('.password-input');

        if (!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(passwordInput.value)) {
            isValid = checkValidation(passwordInput, '.password-error');
        }

        const confirmInput = document.querySelector('.confirm-input');

        if (confirmInput.value !== passwordInput.value) {
            isValid = checkValidation(confirmInput, '.confirm-error');
        }

        if (isValid) {
            document.querySelector('.success-message').style.display = 'block';

            registrationForm.reset();
        }
    });
});

//11
const display = document.querySelector('.calculator-display');

function appendValue(value) {
    if (display.value === 'Error') {
        display.value = '';
    }

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteValue() {
    if (display.value === 'Error') {
        display.value = '';
    }

    display.value = display.value.toString().slice(0, -1)
}

function calculate() {
    if (display.value === '') {
        display.value = '';
        return;
    }

    try {
        const result = eval(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = 'Error';
    }
}

//12
const goods = [
    {
        image: 'https://placehold.co/200x300/orange/white?text=Computer',
        alt: 'Computer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 1200
    },
    {
        image: 'https://placehold.co/200x300/green/white?text=Playstation',
        alt: 'Playstation',
        description: 'In vitae neque vel felis ultrices fermentum.',
        price: 400
    },
    {
        image: 'https://placehold.co/200x300/blue/white?text=Telephone',
        alt: 'Telephone',
        description: 'Proin at urna vel quam luctus efficitur id sed mauris.',
        price: 200
    },
    {
        image: 'https://placehold.co/200x300/red/white?text=HDMI',
        alt: 'HDMI',
        description: 'Integer non velit hendrerit, lobortis dui sed, ultrices ex.',
        price: 10
    },
    {
        image: 'https://placehold.co/200x300/purple/white?text=Mouse',
        alt: 'Mouse',
        description: 'Mauris scelerisque neque quis egestas malesuada.',
        price: 100
    },
    {
        image: 'https://placehold.co/200x300/pink/white?text=Monitor',
        alt: 'Monitor',
        description: 'Mauris et lectus accumsan, eleifend sem quis, malesuada.',
        price: 200
    },
];

const shopCardsContainer = document.querySelector('.shop-cards');
const cartOpenButton = document.querySelector('.cart-btn');
const cartCount = document.querySelector('.cart-btn span');
const cartModal = document.querySelector('.cart-modal');
const cartItems = document.querySelector('.cart-items');
const closeModal = document.querySelector('.close');
const clearCartButton = document.querySelector('.clear-cart');
const cart = [];

goods.forEach(good => {
    const card = document.createElement('div');

    card.classList.add('shop-card');

    card.innerHTML = `<img src="${good.image}" alt="${good.alt}">
                        <a href="#">${good.description}</a>
                        <p class="price">${good.price} $</p>
                        <button>Add to cart</button>`;

    const addButton = card.querySelector('button');

    addButton.addEventListener('click', () => {
        addToCart(good);
    });

    shopCardsContainer.appendChild(card);
});

function addToCart(good) {
    cart.push(good);

    cartCount.textContent = cart.length.toString();
}

cartOpenButton.addEventListener('click', () => {
    openCart();
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

clearCartButton.addEventListener('click', () => {
    clearCart();
});

function openCart() {
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('p');
            cartItem.innerHTML = `${item.description} - ${item.price}`;
            cartItems.appendChild(cartItem);
        });
    }

    cartModal.style.display = 'block';
}

function clearCart() {
    cart.length = 0;
    cartCount.textContent = '0';

    openCart();
}