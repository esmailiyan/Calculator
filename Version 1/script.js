function clearScreen() {
    document.getElementById('result').value = '';
}

function display(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = eval(a);}
    catch {document.getElementById('result').value = 'Error';}
}

function sqrt() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = Math.sqrt(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}

function squar() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = Math.pow(eval(a), 2);}
    catch {document.getElementById('result').value = 'Error';}
}

function abs() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = Math.abs(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}

function inv() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = 1/eval(a);}
    catch {document.getElementById('result').value = 'Error';}
}

function factorialize() {
    var a = document.getElementById('result').value;
    try {
        num = eval(a);
        if (num===0||num===1)
            return 1;
        for (var i=num-1; i>=1; i--)
            num*=i;
        document.getElementById('result').value = num;
    }
    catch {document.getElementById('result').value = 'Error';}
}

function log() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = Math.log(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}

function sin() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = Math.sin(eval(a)*Math.PI/180);}
    catch {document.getElementById('result').value = 'Error';}
}

function cos() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = Math.cos(eval(a)*Math.PI/180);}
    catch {document.getElementById('result').value = 'Error';}
}

function tan() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = Math.tan(eval(a)*Math.PI/180);}
    catch {document.getElementById('result').value = 'Error';}
}

function cot() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = 1/Math.tan(eval(a)*Math.PI/180);}
    catch {document.getElementById('result').value = 'Error';}
}

function log2() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = Math.log2(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}

function log10() {
    var a = document.getElementById('result').value;
    try {document.getElementById('result').value = Math.log10(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}