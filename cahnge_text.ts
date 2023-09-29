
document.addEventListener("DOMContentLoaded", () => {
    const target_text = document.getElementById("demo") as HTMLInputElement;

    function calculate(operation) {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            let result;
            if (operation === "add") {
                result = num1 + num2;
            } else if (operation === "multiply") {
                result = num1 * num2;
            } else if (operation === "divide") {
                result = num1 / num2;
            }
            resultParagraph.textContent = `結果: ${result}`;
        } else {
            resultParagraph.textContent = "有効な数値を入力してください";
        }
    }

    addButton?.addEventListener("click", () => calculate("add"));
});
