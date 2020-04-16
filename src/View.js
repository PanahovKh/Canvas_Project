function View() {
    this._root = document.querySelector('div#root');
}
const root = document.querySelector('div#root');


const canvas = document.createElement('canvas');
canvas.setAttribute('class', 'canvas');
canvas.setAttribute('height', '500px');
canvas.setAttribute('width', '500px');

root.append(canvas);

const ctx = getContext('2d');
let isPressed = false;
canvas.addEventListener('mousedown', () => {
    isPressed = true;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
});

canvas.addEventListener('mousemove', (e) => {
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, 2* Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
});

// View.prototype.init = function() {
//     const containerFirst = createDiv({class: 'container-first'});
//     const formTag = createForm('container-first__form-input');
//     const RegDiv = createDiv({
//         class: 'find',
//         title: 'регистрация',
//         textContent: 'введите данные',
//     });
//     const label = createLabel({
//         name: 'name',
//         inner: 'Имя <span>*</span>',
//     });
//     const nameInput = createInput({
//         id: 'name',
//         name: 'name',
//         placeholder: 'Введите имя',
//     });
//     const labelSurname = createLabel({
//         name: 'surname',
//         inner: 'Фамилия <span>*</span>',
//     });

//     formTag.appendChild(labelSurname);
//     formTag.appendChild(nameInput);
//     formTag.appendChild(label);
//     formTag.append(RegDiv);
//     containerFirst.append(formTag);
//     this._root.append(containerFirst);
// }

// const createDiv = params => {
//     const div = document.createElement('div');
//     div.setAttribute('class', params.class)
//     params.id && (div.id = params.id);
//     params.title && (div.title = params.title);
//     params.textContent && (div.textContent = params.textContent);
//     params.inner && (div.innerHTML = params.inner);

//     return div;
// };

// const createForm = id => {
//     const form = document.createElement('form');
//     form.id = id;

//     return form;
// }

// const createLabel = params => {
//     const label = document.createElement('label');
//     label.setAttribute('for', params.name);
//     params.inner && (label.innerHTML = params.inner);

//     return label;
// }

// const createInput = params => {
//     const input = document.createElement('input');
//     input.setAttribute('type', params.type || 'text');
//     params.id && input.setAttribute('id', params.id);
//     params.name && input.setAttribute('name', params.name);
//     params.placeholder && (input.placeholder = params.placeholder);

//     return input;
// }

module.exports = View;