
document.addEventListener("DOMContentLoaded", () => {
    const num1Input = document.getElementById("num1") as HTMLInputElement;
    const num2Input = document.getElementById("num2") as HTMLInputElement;
    const addButton = document.getElementById("addButton");
    const multiButton = document.getElementById("multiButton");
    const divButton = document.getElementById("divButton");
    const resultParagraph = document.getElementById("result");

    addButton?.addEventListener("click", () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 + num2;
            resultParagraph.textContent = `結果あああ: ${sum}`;
        } else {
            resultParagraph.textContent = "有効な数値を入力してください";
        }
    });


    multiButton?.addEventListener("click", () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 * num2;
            resultParagraph.textContent = `結果あああ: ${sum}`;
        } else {
            resultParagraph.textContent = "有効な数値を入力してください";
        }
    });

    divButton?.addEventListener("click", () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 / num2;
            resultParagraph.textContent = `結果あああ: ${sum}`;
        } else {
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