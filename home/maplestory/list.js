/// <reference lib="es2015" />
document.addEventListener("DOMContentLoaded", function () {
    var addElementButton = document.getElementById("addElementButton");
    var sortOutElementButton = document.getElementById("sortOutElementButton");
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
                li.appendChild(document.createTextNode(tuple[0]));
                li.appendChild(document.createTextNode(" ".repeat(13 - tuple[0].length) + "水路 "));
                li.appendChild(document.createTextNode(tuple[1].toString()));
                li.appendChild(document.createTextNode(" ".repeat(6 - tuple[1].toString().length)));
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
            document.getElementById("element" + element_id).remove();
        };
        ListControl.prototype.changeStatus = function (element_id) {
            if (document.getElementById("element" + element_id).childNodes[4].textContent === "メンバーへ") {
                document.getElementById('memberList').insertBefore(document.getElementById("element" + element_id), null);
                document.getElementById("element" + element_id).childNodes[4].textContent = "ベンチへ";
            }
            else if (document.getElementById("element" + element_id).childNodes[4].textContent === "ベンチへ") {
                document.getElementById('benchList').insertBefore(document.getElementById("element" + element_id), null);
                document.getElementById("element" + element_id).childNodes[4].textContent = "メンバーへ";
            }
        };
        ListControl.prototype.sortOutElement = function () {
            var teamListNode = document.getElementById("teamList");
            var memberListNode = document.getElementById("memberList");
            while (teamListNode === null || teamListNode === void 0 ? void 0 : teamListNode.firstChild) {
                teamListNode.firstChild.remove;
            }
            for (var i = 0; i < (memberListNode.childElementCount + 5) / 6; i++) {
                var ul = document.createElement("ul");
                ul.id = i.toString();
                teamListNode.appendChild(ul);
            }
            document.getElementById("teamList").insertBefore(document.getElementById("memberList").children[1], null);
        };
        return ListControl;
    }());
    var listControl = new ListControl;
    addElementButton === null || addElementButton === void 0 ? void 0 : addElementButton.addEventListener("click", function () { return listControl.addElement(); });
    sortOutElementButton === null || sortOutElementButton === void 0 ? void 0 : sortOutElementButton.addEventListener("click", function () { return listControl.sortOutElement(); });
});
