document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.getElementById("myButton");
    var listInput = document.getElementById('myInput');
    var playerName = document.getElementById('playerName');
    var tuples = [];
    function listControl(operation) {
        switch (operation) {
            case "addList":
                if (!isNaN(parseInt(listInput.value))) {
                    var tuple = [playerName.value, parseInt(listInput.value)];
                    tuples.push(tuple);
                    var li = document.createElement('li');
                    // li.textContent = (document.getElementById('myInput') as HTMLInputElement).value;
                    li.textContent = tuple[0][0] + "   水路 " + tuple[1][0];
                    document.getElementById('myList').appendChild(li);
                    document.getElementById('playerName').value = '';
                    document.getElementById('myInput').value = '';
                }
                break;
        }
    }
    myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener("click", function () { return listControl("addList"); });
});
