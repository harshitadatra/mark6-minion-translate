var btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv =document.querySelector("#output");

console.log(btnTranslate);
console.log(txtInput);

function clickHandler()
{
    outputDiv.innerText="sbkjghakjhg " + txtInput.value;
    
    
}
btnTranslate.addEventListener("click",clickHandler);