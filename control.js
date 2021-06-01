var form = document.querySelector('form');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var submit = document.getElementById('submit');
var para = document.querySelector('p');
var arrob = new RegExp("@")
 
form.onsubmit = function(e) {
  if (email.value === '' || pass.value === '') {
    e.preventDefault();
    para.textContent = '¡Completá ambos campos!';
    };
  if (email.value !== '' && email.value.match(arrob) != "@"){
    e.preventDefault();
    para.textContent = '¡Falta el arroba en el usuario!';
    };
  if (email.value !== '' && email.value.match(arrob) != "@" && pass.value === ''){
    e.preventDefault();
    para.textContent = '¡Falta el arroba en el usuario y la clave!';
    };
}
