const amountEl = document.querySelector("input");
const fromCurrencyEl = document.querySelector(".from select");
const toCurrencyEl = document.querySelector(".to select");
const convertedAmountEl = document.querySelector(".convertedAmount");
const convertBtnEl = document.querySelector(".convertBtn");
const apiKey = "70e252f4210d0bc877aa6208"

async function convertCurrencyFun(){
    let inputAmount = amountEl.value;

    convertedAmountEl.innerText = "Currency Converting...";

    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrencyEl.value}`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        let convertedAmount = data.conversion_rates[toCurrencyEl.value]; 
        let totalConvertedAmount = (inputAmount * convertedAmount).toFixed(2); 
        convertedAmountEl.innerText = `${inputAmount} ${fromCurrencyEl.value} = ${totalConvertedAmount} ${toCurrencyEl.value}`;
    }catch(e){
        convertedAmountEl.innerText = "Oops... Error...!";
    }
}

convertBtnEl.addEventListener("click", () =>{
    convertCurrencyFun();
});