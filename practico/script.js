const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('btnCalculo');
const r = document.querySelector('#resultado')
let suma;
let num1;
let num2;
form.addEventListener('submit',sumar)//Ya no se escucha el 'click', si no, el evento del 'submit' para escuchar cuando se envía un formulario
function sumar(event) {
    console.log({event});
    event.preventDefault();//Previene que el formulario se recargue y se pueda ver algún resultado en pantalla
    num1 = parseInt(input1.value);
    num2 = parseInt(input2.value);
    suma = num1 + num2;
    r.innerHTML = "El resultado es: " + suma;

}