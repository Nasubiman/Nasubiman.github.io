document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.getElementById("myButton");
    var listInput = document.getElementById('waterway');
    var playerName = document.getElementById('playerName');
    var tuples = [];
    function listControl(operation) {
        switch (operation) {
            case "addElement":
                if (!isNaN(parseInt(listInput.value))) {
                    var tuple = [playerName.value, parseInt(listInput.value)];
                    tuples.push(tuple);
                    var li = document.createElement('li');
                    // li.textContent = (document.getElementById('waterway') as HTMLInputElement).value;
                    li.textContent = tuple[0] + "   水路 " + tuple[1];
                    document.getElementById('myList').appendChild(li);
                    document.getElementById('playerName').value = '';
                    document.getElementById('waterway').value = '';
                }
                break;
            case "removeElement":
                break;
        }
    }
    myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener("click", function () { return listControl("addElement"); });
});
