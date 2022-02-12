function   allBtn(num){


var input=document.getElementById('valueInput').value +=num;
// var number=num;
// input.value=number;
return num ;

};

function solve(){

    let x = document.getElementById('valueInput').value

    let y = eval(x);

    document.getElementById('valueInput').value = y

    return y

};
function clearScreen(){

    document.getElementById('valueInput').value = ''

}