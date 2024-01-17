/// <reference lib="es2015" />
document.addEventListener("DOMContentLoaded", function () {
    var addElementButton = document.getElementById("addElementButton");
    var listInput = document.getElementById('waterway');
    var playerName = document.getElementById('playerName');
    var elementCounter = 0;
    var tuples = [];
    var ListControl = /** @class */ (function () {
        function ListControl() {
        }
        ListControl.prototype.addElement = function () {
            if (!isNaN(parseInt(listInput.value))) {
                var tuple = [playerName.value, parseInt(listInput.value)];
                tuples.push(tuple);
                var li = document.createElement('li');
                var currentElementCounter_1 = elementCounter;
                var changeStatusButton = document.createElement('Button');
                var elementButton = document.createElement('Button');
                changeStatusButton.addEventListener("click", function () { return listControl.changeStatus(currentElementCounter_1); });
                elementButton.addEventListener("click", function () { return listControl.removeElement(currentElementCounter_1); });
                changeStatusButton.textContent = "ベンチへ";
                elementButton.textContent = "削除";
                changeStatusButton.id = "changeStatusButton" + elementCounter.toString();
                elementButton.id = "elementButton" + elementCounter.toString();
                li.id = "element" + elementCounter.toString();
                li.textContent = tuple[0] + " ".repeat(13 - tuple[0].length) + "水路 " + tuple[1] + " ".repeat(6 - tuple[1].toString().length);
                li.appendChild(changeStatusButton);
                li.appendChild(document.createTextNode(" "));
                li.appendChild(elementButton);
                document.getElementById('memberList').appendChild(li);
                document.getElementById('playerName').value = '';
                document.getElementById('waterway').value = '';
                elementCounter++;
            }
        };
        ListControl.prototype.removeElement = function (element_id) {
            var _a;
            (_a = document.getElementById("element" + element_id)) === null || _a === void 0 ? void 0 : _a.remove();
        };
        ListControl.prototype.changeStatus = function (element_id) {
            if (document.getElementById("element" + element_id).childNodes[1].textContent === "メンバーへ") {
                document.getElementById('memberList').insertBefore(document.getElementById("element" + element_id), null);
                document.getElementById("element" + element_id).childNodes[1].textContent = "ベンチへ";
            }
            else if (document.getElementById("element" + element_id).childNodes[1].textContent === "ベンチへ") {
                document.getElementById('benchList').insertBefore(document.getElementById("element" + element_id), null);
                document.getElementById("element" + element_id).childNodes[1].textContent = "メンバーへ";
            }
        };
        return ListControl;
    }());
    // function listControl(operation, ...others){
    //     switch(operation){
    //         case "addElement":
    //             if (!isNaN(parseInt(listInput.value))) {
    //                 let tuple: [string, number] = [playerName.value , parseInt(listInput.value)];
    //                 tuples.push(tuple);
    //                 const li = document.createElement('li');
    //                 const currentElementCounter = elementCounter;
    //                 let changeStatusButton = document.createElement('Button');
    //                 let elementButton = document.createElement('Button');
    //                 changeStatusButton.addEventListener("click", () => listControl("changeStatus", currentElementCounter));
    //                 elementButton.addEventListener("click", () => listControl("removeElement", currentElementCounter));
    //                 changeStatusButton.textContent = "ベンチへ";
    //                 elementButton.textContent = "削除";
    //                 changeStatusButton.id = "changeStatusButton" + elementCounter.toString();
    //                 elementButton.id = "elementButton" + elementCounter.toString();
    //                 li.id = "element" + elementCounter.toString();
    //                 li.textContent = tuple[0] + " ".repeat(13 - tuple[0].length) + "水路 " + tuple[1] + " ".repeat(6 - tuple[1].toString().length);
    //                 li.appendChild(changeStatusButton);
    //                 li.appendChild(document.createTextNode(" "));
    //                 li.appendChild(elementButton);
    //                 document.getElementById('memberList')!.appendChild(li);
    //                 (document.getElementById('playerName') as HTMLInputElement).value = '';
    //                 (document.getElementById('waterway') as HTMLInputElement).value = '';
    //                 elementCounter++;
    //             }
    //             break;
    //         case "removeElement":
    //             document.getElementById("element" + others[0])?.remove();
    //             break;
    //         case "changeStatus":
    //             if(document.getElementById("element" + others[0])!.childNodes[1].textContent === "メンバーへ")
    //             {
    //                 document.getElementById('memberList')!.insertBefore(document.getElementById("element" + others[0])!, null);
    //                 document.getElementById("element" + others[0])!.childNodes[1].textContent = "ベンチへ";
    //             }else if(document.getElementById("element" + others[0])!.childNodes[1].textContent === "ベンチへ")
    //             {
    //                 document.getElementById('benchList')!.insertBefore(document.getElementById("element" + others[0])!, null);
    //                 document.getElementById("element" + others[0])!.childNodes[1].textContent = "メンバーへ";
    //             }
    //             break;
    //     }
    // }
    // addElementButton?.addEventListener("click", () => listControl("addElement"));
    var listControl = new ListControl;
    addElementButton === null || addElementButton === void 0 ? void 0 : addElementButton.addEventListener("click", function () { return listControl.addElement(); });
});
