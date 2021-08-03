import faker from 'faker';

let cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

document.getElementById('cart-root').innerHTML += cartText;
