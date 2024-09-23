function getValueAndParsefloat (id){
const inputValueToNumber = parseFloat(document.getElementById(id).value);
return inputValueToNumber;
}

function getInnerTextAndParseFloat(id){
const innerTextToNumber = parseFloat(document.getElementById(id).innerText);
return innerTextToNumber;
}



function getInnerText(id){
    const getOnlyInnerText = document.getElementById(id).innerText;
    return getOnlyInnerText;
}