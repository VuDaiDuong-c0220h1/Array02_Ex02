//Bài 1:
function showMess01() {
    let num = parseFloat(document.getElementById("value01").value);
    document.getElementById("result01").innerHTML = num * num;
}

//Bài 2:
function showMess02() {
    let radius = parseFloat(document.getElementById("value02").value);
    if (radius > 0) {
        document.getElementById("result02").innerHTML = "Chu vi hình tròn là: "
            + (radius * 2 * 3.14) + " .Diện tích hình tròn là: "
            + (radius * radius * 3.14);
    } else {
        document.getElementById("result02").innerHTML = "Bán kính hình tròn lớn hơn 0."
    }
}

//Bài 3:
function showMess03() {
    let num = parseInt(document.getElementById("value03").value);
    let result = 1;
    for (i = 2; i <= num; i++) {
        result = result * i;
    }
    document.getElementById("result03").innerHTML = result;
}

//Bài 4:
function showMess04() {
    let input = document.getElementById("value04").value;
    if (isFinite(input) === true) {
        document.getElementById("result04").innerHTML = "Number";
    } else {
        document.getElementById("result04").innerHTML = "String";
    }
}

//Bài 5:
function showMess05() {
    let num01 = parseFloat(document.getElementById("value05").value);
    let num02 = parseFloat(document.getElementById("value06").value);
    let num03 = parseFloat(document.getElementById("value07").value);
    if (num01 < num02) {
        if (num01 < num03) {
            document.getElementById("result05").innerHTML = num01;
        } else {
            document.getElementById("result05").innerHTML = num03;
        }
    } else if (num02 < num03) {
        document.getElementById("result05").innerHTML = num02;
    } else {
        document.getElementById("result05").innerHTML = num03;
    }
}

//Bài 6:
function showMess06() {
    let num = parseFloat(document.getElementById("value08").value);
    if (num <= 0) {
        document.getElementById("result06").innerHTML = "Đây không là số nguyên dương"
    } else if (num == parseInt(document.getElementById("value08").value)) {
        document.getElementById("result06").innerHTML = "Đây là số nguyên dương"
    } else {
        document.getElementById("result06").innerHTML = "Đây không là số nguyên dương"
    }
}

//Bài 7:
function showMess07() {
    let a = parseInt(document.getElementById("value09").value);
    let b = parseInt(document.getElementById("value10").value);
    let c = a;
    a = b;
    b = c;
    document.getElementById("value09").value = a;
    document.getElementById("value10").value = b;
}

//Bài 8:
let array = [];

function showMess08() {
    array.push(Math.floor(Math.random() * 46));
    document.getElementById("result08").innerHTML = array;
}

function convert() {
    for (i = 0; i < (array.length - 1) / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    document.getElementById("result08").innerHTML = array;
}

//Bài 9
function showMess09() {
    let str = document.getElementById("value11").value;
    let symbol = document.getElementById("value12").value;
    let array = str.split(" ");
    let count = 0;
    for (i = 0; i < array.length; i++) {
        if (symbol == array[i]) {
            count++;
        }
    }
    document.getElementById("result09").innerHTML = count;
}

