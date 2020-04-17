(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Controller(model, view) {
    this._model = model;
    this._view = view;
}

// Controller.prototype.init = function() {
//     this._view.init();



module.exports = Controller;
},{}],2:[function(require,module,exports){
function Model() {
    this._persons = [];
}

Model.prototype.addPerson = function(person) {
    this._persons.push(person);
}

Model.prototype.getPersons = function() {
    return this._persons;
}

module.exports = Model;

},{}],3:[function(require,module,exports){
function View() {
    this._root = document.querySelector('div#root');
}

const canvas = document.createElement('canvas');
canvas.setAttribute('class', 'canvas');
canvas.setAttribute('height', '500px');
canvas.setAttribute('width', '500px');
root.append(canvas);

const inputDiv = document.createElement('div');
root.appendChild(inputDiv); 

const input = document.createElement('input');
input.setAttribute('id', 'color');
input.value = '#00000';
input.type = 'color';
inputDiv.appendChild(input); 

const rangeDiv = document.createElement('div');
root.appendChild(rangeDiv);

const range = document.createElement('input');
range.setAttribute('id', 'range');
range.setAttribute('oninput', 'changeRange()');
range.type = 'range';
rangeDiv.appendChild(range);



document.getElementById('color').oninput = function () {
    newColor = this.value; 
    ctx.beginPath();
}

let newColor = 'black';

const ctx = canvas.getContext('2d');

let isPressed = false;

canvas.addEventListener('mousedown', () => {
    isPressed = true;
})

canvas.addEventListener('mouseup', () => {
    isPressed = false;
    ctx.beginPath();
})


canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.lineWidth = 10 * 2;

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0, 2*Math.PI);
        ctx.fillStyle = newColor;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        ctx.fillStyle = newColor;
        ctx.fill();
    }
})

const val = range.value;
box.style.lineWidth() = val;


 module.exports = View;
},{}],4:[function(require,module,exports){
const Model = require('./Model.js');
const View = require('./View.js');
const Controller = require('./Controller.js');

function initProject() {  
    const model = new Model();
    const view = new View(); 
    const controller = new Controller(model, view);

    controller.init()
}



initProject();
},{"./Controller.js":1,"./Model.js":2,"./View.js":3}]},{},[4]);
