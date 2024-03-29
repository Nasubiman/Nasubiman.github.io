/// <reference lib="es2017" />
document.addEventListener("DOMContentLoaded", function () {
    var addElementButton = document.getElementById("addElementButton");
    var sortOutElementButton = document.getElementById("sortOutElementButton");
    var listInput = document.getElementById('waterway');
    var playerName = document.getElementById('playerName');
    var boss_waterway = document.getElementById("boss_waterway");
    var elementCounter = 0;
    var ListControl = /** @class */ (function () {
        function ListControl() {
        }
        ListControl.prototype.addElement = function () {
            if (!isNaN(parseInt(listInput.value))) {
                var tuple = [playerName.value, parseInt(listInput.value)];
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
                li.appendChild(document.createTextNode(" 水路 "));
                li.appendChild(document.createTextNode(tuple[1].toString()));
                li.appendChild(document.createTextNode(" "));
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
        ListControl.prototype.clearTeam = function () {
            var teamListNode = document.getElementById("teamList");
            while ((teamListNode === null || teamListNode === void 0 ? void 0 : teamListNode.firstChild)) {
                teamListNode === null || teamListNode === void 0 ? void 0 : teamListNode.removeChild(teamListNode.firstChild);
            }
        };
        ListControl.prototype.sortOutElement = function () {
            var tuples = [];
            var teamListNode = document.getElementById("teamList");
            var memberListNode = document.getElementById("memberList");
            var ul;
            var member_num = memberListNode === null || memberListNode === void 0 ? void 0 : memberListNode.childElementCount;
            for (var i = 0; i < member_num; i++) {
                var member_copy = memberListNode === null || memberListNode === void 0 ? void 0 : memberListNode.childNodes[i].cloneNode(true);
                var tuple = [member_copy.childNodes[0].textContent, parseInt(member_copy.childNodes[2].textContent)];
                tuples.push(tuple);
            }
            tuples.sort(function (a, b) { return b[1] - a[1]; });
            var sum = tuples.reduce(function (total, tuple) { return total + tuple[1]; }, 0);
            var team_num = Math.max(Math.min(sum / parseInt(boss_waterway.textContent), member_num), 1) | 0;
            while (true) {
                this.clearTeam();
                var team_boss_waterway_sum = new Array(team_num);
                team_boss_waterway_sum.fill(0);
                for (var i = 0; i < team_num; i++) {
                    ul = document.createElement("ul");
                    ul.id = "team" + i.toString();
                    teamListNode.appendChild(ul);
                }
                for (var i = 0; i < member_num; i++) {
                    var minIndex = team_boss_waterway_sum.indexOf(Math.min.apply(Math, team_boss_waterway_sum));
                    var p = document.createElement("p");
                    p.textContent = tuples[i][0] + "  " + (tuples[i][1]).toString();
                    team_boss_waterway_sum[minIndex] += tuples[i][1];
                    teamListNode === null || teamListNode === void 0 ? void 0 : teamListNode.childNodes[minIndex].appendChild(p);
                }
                if (team_num <= 1 || Math.min.apply(Math, team_boss_waterway_sum) >= parseInt(boss_waterway.textContent)) {
                    break;
                }
                team_num--;
            }
            // for (let i = 0; i < team_num; i++) {
            //     ul = document.createElement("ul");
            //     ul.id = "team" + i.toString();
            //     teamListNode!.appendChild(ul)
            // }
            // for (let i = 0; i < member_num!; i++) {
            //     // let minIndex = team_boss_waterway_sum.indexOf(Math.min(...team_boss_waterway_sum));
            //     let p = document.createElement("p");
            //     p.textContent = tuples[i][0] + "  " + (tuples[i][1]).toString();
            //     // team_boss_waterway_sum[minIndex] += tuples[i][1];
            //     teamListNode?.childNodes[minIndex].appendChild(p);
            // }
        };
        return ListControl;
    }());
    var listControl = new ListControl;
    addElementButton === null || addElementButton === void 0 ? void 0 : addElementButton.addEventListener("click", function () { return listControl.addElement(); });
    sortOutElementButton === null || sortOutElementButton === void 0 ? void 0 : sortOutElementButton.addEventListener("click", function () { return listControl.sortOutElement(); });
});
