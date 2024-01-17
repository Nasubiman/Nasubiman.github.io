document.addEventListener("DOMContentLoaded", function () {
    var addElementButton = document.getElementById("addElementButton");
    var listInput = document.getElementById('waterway');
    var playerName = document.getElementById('playerName');
    var elementCounter = 0;
    var tuples = [];
    function listControl(operation) {
        var _a;
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        switch (operation) {
            case "addElement":
                if (!isNaN(parseInt(listInput.value))) {
                    var tuple = [playerName.value, parseInt(listInput.value)];
                    tuples.push(tuple);
                    var li = document.createElement('li');
                    var currentElementCounter_1 = elementCounter;
                    var changeStatusButton = document.createElement('Button');
                    var elementButton = document.createElement('Button');
                    changeStatusButton.addEventListener("click", function () { return listControl("changeStatus", currentElementCounter_1); });
                    elementButton.addEventListener("click", function () { return listControl("removeElement", currentElementCounter_1); });
                    changeStatusButton.textContent = "ベンチへ";
                    elementButton.textContent = "削除";
                    changeStatusButton.id = "changeStatusButton" + elementCounter.toString();
                    elementButton.id = "elementButton" + elementCounter.toString();
                    li.id = "element" + elementCounter.toString();
                    li.textContent = tuple[0] + "   水路 " + tuple[1] + "  ";
                    li.appendChild(changeStatusButton);
                    li.appendChild(document.createTextNode(" "));
                    li.appendChild(elementButton);
                    document.getElementById('memberList').appendChild(li);
                    document.getElementById('playerName').value = '';
                    document.getElementById('waterway').value = '';
                    elementCounter++;
                }
                break;
            case "removeElement":
                (_a = document.getElementById("element" + others[0])) === null || _a === void 0 ? void 0 : _a.remove();
                break;
            case "changeStatus":
                if (document.getElementById("element" + others[0]).childNodes[1].textContent === "メンバーへ") {
                    document.getElementById('memberList').insertBefore(document.getElementById("element" + others[0]), null);
                    document.getElementById("element" + others[0]).childNodes[1].textContent = "ベンチへ";
                    break;
                }
                else if (document.getElementById("element" + others[0]).childNodes[1].textContent === "ベンチへ") {
                    document.getElementById('benchList').insertBefore(document.getElementById("element" + others[0]), null);
                    document.getElementById("element" + others[0]).childNodes[1].textContent = "メンバーへ";
                    break;
                }
                break;
        }
    }
    addElementButton === null || addElementButton === void 0 ? void 0 : addElementButton.addEventListener("click", function () { return listControl("addElement"); });
});
