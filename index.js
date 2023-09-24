// calculate.ts
document.addEventListener("DOMContentLoaded", function () {
    var num1Input = document.getElementById("num1");
    var num2Input = document.getElementById("num2");
    var calculateButton = document.getElementById("calculateButton");
    var resultParagraph = document.getElementById("result");
    calculateButton === null || calculateButton === void 0 ? void 0 : calculateButton.addEventListener("click", function () {
        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);
        if (!isNaN(num1) && !isNaN(num2)) {
            var sum = num1 + num2;
            resultParagraph.textContent = "\u7D50\u679C: ".concat(sum);
        }
        else {
            resultParagraph.textContent = "有効な数値を入力してください";
        }
    });
});
var Person = /** @class */ (function () {
    // コンストラクタメソッド
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // メソッド
    Person.prototype.introduce = function () {
        console.log("\u3053\u3093\u306B\u3061\u306F\u3001\u79C1\u306F".concat(this.name, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(this.age, "\u6B73\u3067\u3059\u3002"));
    };
    return Person;
}());
