document.addEventListener("DOMContentLoaded", function () {
    var num1Input = document.getElementById("num1");
    var num2Input = document.getElementById("num2");
    var addButton = document.getElementById("addButton");
    var multiButton = document.getElementById("multiButton");
    var divButton = document.getElementById("divButton");
    var resultParagraph = document.getElementById("result");
    function calculate(operation) {
        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);
        if (!isNaN(num1) && !isNaN(num2)) {
            var result = void 0;
            if (operation === "add") {
                result = num1 + num2;
            }
            else if (operation === "multiply") {
                result = num1 * num2;
            }
            else if (operation === "divide") {
                result = num1 / num2;
            }
            resultParagraph.textContent = "\u7D50\u679C: ".concat(result);
        }
        else {
            resultParagraph.textContent = "有効な数値を入力してください";
        }
    }
    addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function () { return calculate("add"); });
    multiButton === null || multiButton === void 0 ? void 0 : multiButton.addEventListener("click", function () { return calculate("multiply"); });
    divButton === null || divButton === void 0 ? void 0 : divButton.addEventListener("click", function () { return calculate("divide"); });
});
