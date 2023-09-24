document.addEventListener("DOMContentLoaded", function () {
    var num1Input = document.getElementById("num1");
    var num2Input = document.getElementById("num2");
    var addButton = document.getElementById("addButton");
    var multiButton = document.getElementById("multiButton");
    var divButton = document.getElementById("divButton");
    var resultParagraph = document.getElementById("result");
    addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function () {
        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);
        if (!isNaN(num1) && !isNaN(num2)) {
            var sum = num1 + num2;
            resultParagraph.textContent = "\u7D50\u679C\u3042\u3042\u3042: ".concat(sum);
        }
        else {
            resultParagraph.textContent = "有効な数値を入力してください";
        }
    });
    multiButton === null || multiButton === void 0 ? void 0 : multiButton.addEventListener("click", function () {
        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);
        if (!isNaN(num1) && !isNaN(num2)) {
            var sum = num1 * num2;
            resultParagraph.textContent = "\u7D50\u679C\u3042\u3042\u3042: ".concat(sum);
        }
        else {
            resultParagraph.textContent = "有効な数値を入力してください";
        }
    });
    divButton === null || divButton === void 0 ? void 0 : divButton.addEventListener("click", function () {
        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);
        if (!isNaN(num1) && !isNaN(num2)) {
            var sum = num1 / num2;
            resultParagraph.textContent = "\u7D50\u679C\u3042\u3042\u3042: ".concat(sum);
        }
        else {
            resultParagraph.textContent = "有効な数値を入力してください";
        }
    });
});
// // HTML要素への参照を取得
// const num1Input = document.getElementById("num1") as HTMLInputElement;
// const num2Input = document.getElementById("num2") as HTMLInputElement;
// const calculateButton = document.getElementById("calculateButton") as HTMLButtonElement;
// const resultParagraph = document.getElementById("result") as HTMLParagraphElement;
// // ボタンクリック時の処理
// calculateButton.addEventListener("click", () => {
//     // 入力値を取得し数値に変換
//     const num1 = parseFloat(num1Input.value);
//     const num2 = parseFloat(num2Input.value);
//     // 数値が有効な場合、足し算を行って結果を表示
//     if (!isNaN(num1) && !isNaN(num2)) {
//         const result = num1 + num2;
//         resultParagraph.textContent = `結果: ${result}`;
//     } else {
//         resultParagraph.textContent = "無効な入力です。数値を入力してください。";
//     }
// });
// class Calculator {
//     // 足し算
//     static add(x: number, y: number): number {
//         return x + y;
//     }
//     // 引き算
//     static subtract(x: number, y: number): number {
//         return x - y;
//     }
//     // 掛け算
//     static multiply(x: number, y: number): number {
//         return x * y;
//     }
//     // 割り算
//     static divide(x: number, y: number): number {
//         if (y === 0) {
//             throw new Error("0で割ることはできません。");
//         }
//         return x / y;
//     }
// }
