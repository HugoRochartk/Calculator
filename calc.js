

d = document.getElementById("display");


function put(num) {
    if (d.innerText == '0') {
        d.innerText = num;
    }
    else {
        d.innerText += num;
    }
    
}

function reset() {
    d.innerText = '0';
}


function dlt() {
    len = d.innerText.length;
    if (len >= 2) {
        d.innerText = d.innerText.substring(0, len-1);
    }
    
    

}

function result() {
    toEval = (d.innerText).replace(new RegExp('x', 'g'), '*');
    toEval = toEval.replace(new RegExp('%', 'g'), '*1/100');
    d.innerText = eval(toEval);
   
}