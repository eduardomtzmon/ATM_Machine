"use strict"

//DATOS DE LOS CUENTAHABIENTES
const users = [
    {name: "EDUARDO", pin: "1234", saldo: "900"},
    {name: "ALBA", pin: "9842", saldo: "180"},
    {name: "JORDAN", pin: "3285", saldo: "276"},
    {name: "ABDUL", pin: "5478", saldo: "654"}
];


//SELECCIONAMOS LOS NODOS DE NUESTRO HTML CON JAVASCRIPT
const btnModalConsult = document.querySelector(".btn_consulta")
const btnModalDeposit = document.querySelector(".btn_depositar")
const btnModalWithdraw = document.querySelector(".btn_retirar")
const modalConsult = document.querySelector(".modal_consult")
const modalDeposit = document.querySelector(".modal_deposit")
const modalWithdraw = document.querySelector(".modal_withdraw")
const overlay = document.querySelector(".overlay")
const btnClose = document.querySelector(".close_modal")
const btnOpen = document.querySelector(".show_modal")





// LOGICA


function login() {
    var userElement = document.getElementById("name");
    var pinElement = document.getElementById("pin");
    if (!userElement || !pinElement) {
        console.error("No hay usuario o contraseña");
        return;
    }
    var user = userElement.value;
    var pin = pinElement.value;
    for (var i = 0; i < users.length; i++) {
        if (user === users[i].name && pin === users[i].pin) {
            console.log("login exitoso")
            var usuarioLogueado = users[i];
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));
            window.location.href = "menu.html";
            return;
        }
    }
    console.log("Usuario y/o pin incorrecto")
};

//Ahora el error es que no puedo exportar el usuarioLogeado, en este caso el i is not defined




// EVENTOS DE CLICK


btnOpen.addEventListener("click", login);


