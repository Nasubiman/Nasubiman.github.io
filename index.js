// document.addEventListener("DOMContentLoaded", () => {
//     const num1Input = document.getElementById("num1") as HTMLInputElement;
//     const num2Input = document.getElementById("num2") as HTMLInputElement;
//     const calculateButton = document.getElementById("calculateButton");
//     const resultParagraph = document.getElementById("result");
//     calculateButton?.addEventListener("click", () => {
//         const num1 = parseFloat(num1Input.value);
//         const num2 = parseFloat(num2Input.value);
//         if (!isNaN(num1) && !isNaN(num2)) {
//             const sum = num1 + num2;
//             resultParagraph.textContent = `結果: ${sum}`;
//         } else {
//             resultParagraph.textContent = "有効な数値を入力してください";
//         }
//     });
// });
// HTML要素への参照を取得
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var calculateButton = document.getElementById("calculateButton");
var resultParagraph = document.getElementById("result");
// ボタンクリック時の処理
calculateButton.addEventListener("click", function () {
    // 入力値を取得し数値に変換
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    // 数値が有効な場合、足し算を行って結果を表示
    if (!isNaN(num1) && !isNaN(num2)) {
        var result = num1 + num2;
        resultParagraph.textContent = "\u7D50\u679C: ".concat(result);
    }
    else {
        resultParagraph.textContent = "無効な入力です。数値を入力してください。";
    }
});
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // 足し算
    Calculator.add = function (x, y) {
        return x + y;
    };
    // 引き算
    Calculator.subtract = function (x, y) {
        return x - y;
    };
    // 掛け算
    Calculator.multiply = function (x, y) {
        return x * y;
    };
    // 割り算
    Calculator.divide = function (x, y) {
        if (y === 0) {
            throw new Error("0で割ることはできません。");
        }
        return x / y;
    };
    return Calculator;
}());
