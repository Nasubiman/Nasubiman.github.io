document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.getElementById("myButton");
    var removeElementButton = document.getElementById("removeElementButton");
    var listInput = document.getElementById('waterway');
    var playerName = document.getElementById('playerName');
    var elementCounter = 0;
    var tuples = [];
    function listControl(operation) {
        var _a;
        switch (operation) {
            case "addElement":
                if (!isNaN(parseInt(listInput.value))) {
                    var tuple = [playerName.value, parseInt(listInput.value)];
                    tuples.push(tuple);
                    var li = document.createElement('li');
                    li.id = "element" + elementCounter.toString();
                    // li.textContent = (document.getElementById('waterway') as HTMLInputElement).value;
                    li.textContent = tuple[0] + "   水路 " + tuple[1];
                    document.getElementById('myList').appendChild(li);
                    document.getElementById('playerName').value = '';
                    document.getElementById('waterway').value = '';
                    elementCounter++;
                }
                break;
            case "removeElement":
                (_a = document.getElementById("element1")) === null || _a === void 0 ? void 0 : _a.remove();
                // if(removeElement)
                // {
                //     // removeElement.remove();
                //     // removeElement.parentNode?.removeChild(removeElement);
                //     for(let i = 0; i < elementCounter; i++)
                //     {
                //     }
                // }
                elementCounter--;
                break;
        }
    }
    myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener("click", function () { return listControl("addElement"); });
    removeElementButton === null || removeElementButton === void 0 ? void 0 : removeElementButton.addEventListener("click", function () { return listControl("removeElement"); });
});
