// calculate.ts

document.addEventListener("DOMContentLoaded", () => {
    const num1Input = document.getElementById("num1") as HTMLInputElement;
    const num2Input = document.getElementById("num2") as HTMLInputElement;
    const calculateButton = document.getElementById("calculateButton");
    const resultParagraph = document.getElementById("result");

    calculateButton?.addEventListener("click", () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 + num2;
            resultParagraph.textContent = `結果: ${sum}`;
        } else {
            resultParagraph.textContent = "有効な数値を入力してください";
        }
    });
});

class Person {
    // プロパティの宣言
    name: string;
    age: number;

    // コンストラクタメソッド
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // メソッド
    introduce() {
        console.log(`こんにちは、私は${this.name}です。年齢は${this.age}歳です。`);
    }
}

