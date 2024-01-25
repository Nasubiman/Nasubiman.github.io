/// <reference lib="es2017" />
document.addEventListener("DOMContentLoaded", function () {
    var addElementButton = document.getElementById("addElementButton");
    var sortOutElementButton = document.getElementById("sortOutElementButton");
    var waterway_input = document.getElementById('waterway');
    var playerName = document.getElementById('playerName');
    var member_table = document.getElementById("member_table");
    var bench_table = document.getElementById("bench_table");
    var boss_waterway = document.getElementById("boss_waterway");
    var ListControl = /** @class */ (function () {
        function ListControl() {
        }
        ListControl.prototype.addElement = function () {
            if (!isNaN(parseInt(waterway_input.value))) {
                var tuple = [playerName.value, parseInt(waterway_input.value)];
                var newRow = member_table.insertRow();
                var newCell = newRow.insertCell();
                newCell.textContent = tuple[0];
                newCell = newRow.insertCell();
                newCell.textContent = tuple[1].toString();
                newCell = newRow.insertCell();
                var btn = document.createElement('button');
                btn.textContent = '削除';
                var change_status_button = document.createElement('button');
                change_status_button.textContent = 'ベンチへ';
                this.removeTableElement(btn);
                this.changeElementStatus(change_status_button);
                // btn.addEventListener('click', (event) => {
                //     event.preventDefault();
                //     // ボタンが属している行を削除
                //     let row = (event.target! as HTMLElement).parentElement!.parentElement as HTMLTableRowElement;
                //     member_table.deleteRow(row!.rowIndex);
                // });
                newCell.textContent = "hoge";
                newCell = newRow.insertCell();
                newCell.appendChild(btn);
                newCell = newRow.insertCell();
                newCell.appendChild(change_status_button);
                document.getElementById('playerName').value = '';
                document.getElementById('waterway').value = '';
            }
        };
        ListControl.prototype.changeElementStatus = function (btn) {
            btn.addEventListener('click', function (event) {
                var _a;
                event.preventDefault();
                var row = event.target.parentElement.parentElement;
                var table = (_a = row.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                var insert_tbody = document.getElementById(table.id == "member_table" ? "bench_tbody" : "member_tbody");
                insert_tbody.insertBefore(row, null);
            });
        };
        ListControl.prototype.removeTableElement = function (btn) {
            btn.addEventListener('click', function (event) {
                var _a;
                event.preventDefault();
                // ボタンが属している行を削除
                var row = event.target.parentElement.parentElement;
                var table = (_a = row.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                table.deleteRow(row.rowIndex);
            });
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
            var tbody = document.getElementById("member_tbody");
            var ul;
            var member_num = tbody.rows.length;
            alert(member_num === null || member_num === void 0 ? void 0 : member_num.toString());
            // for (let i = 0; i < member_num!; i++) {
            //     let member_copy = memberListNode?.childNodes[i].cloneNode(true);
            //     let tuple: [string, number] = [member_copy!.childNodes[0].textContent!, parseInt(member_copy!.childNodes[2].textContent!)];
            //     tuples.push(tuple);
            // }
            for (var i = 1; i < member_table.rows.length; i++) {
                var tuple = [member_table.rows[i].cells[0].textContent, parseInt(member_table.rows[i].cells[1].textContent)];
                tuples.push(tuple);
            }
            tuples.sort(function (a, b) { return b[1] - a[1]; });
            var sum = tuples.reduce(function (total, tuple) { return total + tuple[1]; }, 0);
            var team_num = Math.max(Math.min(sum / parseInt(boss_waterway.textContent), member_num), 1) | 0;
            var min_team_num = (((member_num - 1) / 6) + 1) | 0;
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
                if (team_num <= min_team_num || Math.min.apply(Math, team_boss_waterway_sum) >= parseInt(boss_waterway.textContent)) {
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
