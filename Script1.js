// hoge.js

// JavaScriptコード
function changeText() {
    var element = document.getElementById("demo");
    element.innerHTML = "こんにちは、新しいテキスト！";
}

function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").textContent = "結果: " + sum;
}