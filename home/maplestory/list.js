document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.getElementById("myButton");
    var removeElementButton = document.getElementById("removeElementButton");
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
                    var elementButton = document.createElement('Button');
                    var currentElementCounter_1 = elementCounter;
                    elementButton.addEventListener("click", function () { return listControl("removeElement", currentElementCounter_1); });
                    elementButton.textContent = "remove" + elementCounter.toString();
                    li.id = "element" + elementCounter.toString();
                    // li.textContent = (document.getElementById('waterway') as HTMLInputElement).value;
                    li.textContent = tuple[0] + "   水路 " + tuple[1] + "  ";
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
        }
    }
    myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener("click", function () { return listControl("addElement"); });
});
