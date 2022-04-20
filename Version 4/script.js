function clearScreen() {
    document.getElementById('result').value = '';
}

function display(value) {
    document.getElementById('result').value += value;
}

function calculate(a = document.getElementById('result').value) {
    if (a.indexOf(',')!=-1) {
        try {
            myArray = a.split(',');
            tmp_a = eval(myArray[0]);
            tmp_n = eval(myArray[1]);
            document.getElementById('result').value = Math.pow(tmp_a, tmp_n);
        }
        catch {document.getElementById('result').value = 'Error';}
    }
    else if (a.indexOf('p')!=-1) {
        try {
            myArray = a.split('p');
            tmp_n = eval(myArray[0]);
            tmp_r = eval(myArray[1]);
            document.getElementById('result').value = factorialize(tmp_n)/factorialize(tmp_n-tmp_r);
        }
        catch {document.getElementById('result').value = 'Error';}
    }
    else if (a.indexOf('c')!=-1) {
        try {
            myArray = a.split('c');
            tmp_x = eval(myArray[0]);
            tmp_y = eval(myArray[1]);
            document.getElementById('result').value = factorialize(tmp_x)/factorialize(tmp_x-tmp_y)/factorialize(tmp_y);
        }
        catch {document.getElementById('result').value = 'Error';}
    }
    else {
        try {document.getElementById('result').value = eval(a);}
        catch {document.getElementById('result').value = 'Error';}
    }
}

function sqrt(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = Math.sqrt(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}

function squar(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = Math.pow(eval(a), 2);}
    catch {document.getElementById('result').value = 'Error';}
}

function abs(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = Math.abs(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}

function inv(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = 1/eval(a);}
    catch {document.getElementById('result').value = 'Error';}
}

function factorialize(a = document.getElementById('result').value) {
    try {
        num = eval(a);
        if (num===0||num===1)
            return 1;
        for (var i=num-1; i>=1; i--)
            num*=i;
        document.getElementById('result').value = num;
        return num;
    }
    catch {document.getElementById('result').value = 'Error';}
}

function sin(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = Math.sin(eval(a)*Math.PI/180);}
    catch {document.getElementById('result').value = 'Error';}
}

function cos(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = Math.cos(eval(a)*Math.PI/180);}
    catch {document.getElementById('result').value = 'Error';}
}

function tan(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = Math.tan(eval(a)*Math.PI/180);}
    catch {document.getElementById('result').value = 'Error';}
}

function cot(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = 1/Math.tan(eval(a)*Math.PI/180);}
    catch {document.getElementById('result').value = 'Error';}
}

function log(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = Math.log(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}

function log2(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = Math.log2(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}

function log10(a = document.getElementById('result').value) {
    try {document.getElementById('result').value = Math.log10(eval(a));}
    catch {document.getElementById('result').value = 'Error';}
}