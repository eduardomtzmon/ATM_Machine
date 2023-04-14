"use strict"

//DATOS DE LOS CUENTAHABIENTES
const users = [
    {name: "EDUARDO", pin: "1234", saldo: "150"},
    {name: "ALBA", pin: "2341", saldo: "550"},
    {name: "JORDAN", pin: "3412", saldo: "11"},
    {name: "ABDUL", pin: "4123", saldo: "98"}
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

const userInput = document.querySelector(".user_input")
const pwdInput = document.querySelector(".pwd_input")

const depositInput = document.querySelector(".btn_input_depositar")
const withdrawButton = document.querySelector(".btn_input_retirar")



// LOGICA 

function withdraw() {
    var amount = document.getElementById("withdraw_qty").value;
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

    const user = users.find(u => u.name === usuarioLogueado.name && u.pin === usuarioLogueado.pin);
  if (user) {
    console.log("checkpoint 1");
    user.saldo = String(Number(user.saldo) - Number(amount));
    console.log("checkpoint 2");
    const userIndex = users.findIndex(u => u.name === user.name && u.pin === user.pin);
    users[userIndex].saldo = user.saldo;
    var newSaldoShow = document.querySelector(".new_saldo2")
    if (user.saldo < 10) {
      newSaldoShow.textContent = "Tu saldo es menor a 10, imposible mostrar"
    } else {
      newSaldoShow.textContent = `Tu nuevo saldo es $${user.saldo}`
      
    }
    newSaldoShow.classList.remove("hidden")
    console.log(`Withdrawn ${amount} to ${user.name}. New balance is ${user.saldo}.`);
    return `Withdrawn ${amount} to ${user.name}. New balance is $${user.saldo}.`;
  } else {
    return "User not found.";
  }
}

function deposit() {
    var amount = document.getElementById("deposit_qty").value;
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

    const user = users.find(u => u.name === usuarioLogueado.name && u.pin === usuarioLogueado.pin);
  if (user) {
    console.log("checkpoint 1");
    user.saldo = String(Number(user.saldo) + Number(amount));
    console.log("checkpoint 2");
    const userIndex = users.findIndex(u => u.name === user.name && u.pin === user.pin);
    users[userIndex].saldo = user.saldo;
    var newSaldoShow = document.querySelector(".new_saldo")
    if (user.saldo > 990) {
      newSaldoShow.textContent = "Tu saldo excede los 990, imposible mostrar"
    } else {
      newSaldoShow.textContent = `Tu nuevo saldo es $${user.saldo}`
    }
    
    newSaldoShow.classList.remove("hidden")
    console.log(`Deposited ${amount} to ${user.name}. New balance is ${user.saldo}.`);
    return `Deposited ${amount} to ${user.name}. New balance is ${user.saldo}.`;
  } else {
    return "User not found.";
  }
}

function consultBalance(){
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

console.log(usuarioLogueado);

    var balanceShow = document.querySelector(".saldo_show");
    if (!balanceShow) {
        console.error("No hay elemento saldo");
        return;
      }
      
    balanceShow.textContent = usuarioLogueado.saldo;
};

function openModalConsult() {
    modalConsult.classList.remove("hidden")
    overlay.classList.remove("hidden")
    consultBalance();
    return;
} ;

// function closeModalConsult() {
//     btnModalConsult.classList.add("hidden")
//     overlay.classList.add("hidden")
//     return
// } 

function openModalDeposit() {
    modalDeposit.classList.remove("hidden")
    overlay.classList.remove("hidden")
    return;
};

function openModalWithdraw() {
    modalWithdraw.classList.remove("hidden")
    overlay.classList.remove("hidden")
    return;
};

function closeAnyModal() {
    window.location.href = "menu.html"
};


//EVENTOS DE CLICK
btnModalConsult.addEventListener("click", openModalConsult);
btnModalDeposit.addEventListener("click", openModalDeposit);
    depositInput.addEventListener("click", deposit);
btnModalWithdraw.addEventListener("click", openModalWithdraw);
  withdrawButton.addEventListener("click", withdraw);
btnClose.addEventListener("click", closeAnyModal);
overlay.addEventListener("click", closeAnyModal);


// EVENTO DE PRESIONAR ESC
document.addEventListener("keydown", function (e){
    if (e.key === "Escape") {
        closeModal()
    }
});