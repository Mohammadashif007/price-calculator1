document.getElementById('btnApply').addEventListener('click', () => {
    const getPriceValue = getElementById('price');
    const discountValue = getElementById('discount');
    const payAbleValue = getPriceValue - (discountValue/getPriceValue)*100;
    const setValue = document.getElementById('pay-amount');
    setValue.innerText = payAbleValue;
})


function getElementById(elementId){
    const inputElement = document.getElementById(elementId);
    const inputElementValue = parseInt(inputElement.value);
    inputElement.value = "";
    return inputElementValue;
}