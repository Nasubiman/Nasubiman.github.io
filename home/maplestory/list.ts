/// <reference lib="es2017" />
document.addEventListener("DOMContentLoaded", () => {

    const addElementButton = document.getElementById("addElementButton");
    const sortOutElementButton = document.getElementById("sortOutElementButton");
    const listInput = document.getElementById('waterway') as HTMLInputElement;
    const playerName = document.getElementById('playerName') as HTMLInputElement;
    const member_table = document.getElementById("member_table") as HTMLTableElement;
    const bench_table = document.getElementById("bench_table") as HTMLTableElement;
    const boss_waterway = document.getElementById("boss_waterway");
    let elementCounter = 0;



    class ListControl
    {
        addElement()
        {
            
            if (!isNaN(parseInt(listInput.value))) {

                let tuple: [string, number] = [playerName.value, parseInt(listInput.value)];

                const li = document.createElement('li');

                const currentElementCounter = elementCounter;

                let changeStatusButton = document.createElement('Button');
                let elementButton = document.createElement('Button');


                changeStatusButton.addEventListener("click", () => listControl.changeStatus(currentElementCounter));
                elementButton.addEventListener("click", () => listControl.removeElement(currentElementCounter));

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

                let newRow = member_table.insertRow();

                newRow.id = "element_" + elementCounter.toString();

                let newCell = newRow.insertCell();
                newCell.textContent = tuple[0];
                newCell = newRow.insertCell();
                newCell.textContent = tuple[1].toString();
                newCell = newRow.insertCell();

                let btn = document.createElement('button');
                btn.textContent = '削除';

                let change_status_button = document.createElement('button');
                change_status_button.textContent = 'ベンチへ';

                // 削除ボタンがクリックされたときのイベントリスナーを追加
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


                document.getElementById('memberList')!.appendChild(li);
                (document.getElementById('playerName') as HTMLInputElement).value = '';
                (document.getElementById('waterway') as HTMLInputElement).value = '';
                elementCounter++;
            }
        }

        changeElementStatus(btn: HTMLButtonElement)
        {
            btn.addEventListener('click', (event) => {
                event.preventDefault();

                let row = (event.target! as HTMLElement).parentElement!.parentElement as HTMLTableRowElement;
                let table = row.parentElement?.parentElement as HTMLTableElement;
                let after_table = document.getElementById(table.id == "member_table" ? "bench_tbody" : "member_tbody") as HTMLElement;
                after_table.insertBefore(row!, null);

            });
        }

        removeTableElement(btn: HTMLButtonElement)
        {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                // ボタンが属している行を削除
                let row = (event.target! as HTMLElement).parentElement!.parentElement as HTMLTableRowElement;
                let table = row.parentElement?.parentElement as HTMLTableElement;
                table.deleteRow(row!.rowIndex);
            });

        }

        removeElement(element_id: number)
        {
            document.getElementById("element" + element_id)!.remove();
        }

        changeStatus(element_id: number)
        {
            if (document.getElementById("element" + element_id)!.childNodes[4].textContent === "メンバーへ") {
                document.getElementById('memberList')!.insertBefore(document.getElementById("element" + element_id)!, null);
                document.getElementById("element" + element_id)!.childNodes[4].textContent = "ベンチへ";

            } else if (document.getElementById("element" + element_id)!.childNodes[4].textContent === "ベンチへ") {
                document.getElementById('benchList')!.insertBefore(document.getElementById("element" + element_id)!, null);
                document.getElementById("element" + element_id)!.childNodes[4].textContent = "メンバーへ";

            }

            
        }

        clearTeam()
        {
            let teamListNode = document.getElementById("teamList");
            while((teamListNode?.firstChild))
            {
                teamListNode?.removeChild(teamListNode.firstChild);
            }
        }

        sortOutElement()
        {

            let tuples: [string, number][] = [];
            let teamListNode = document.getElementById("teamList");
            let memberListNode = document.getElementById("memberList");
            let ul;
            const member_num = memberListNode?.childElementCount;

            // for (let i = 0; i < member_num!; i++) {
            //     let member_copy = memberListNode?.childNodes[i].cloneNode(true);
            //     let tuple: [string, number] = [member_copy!.childNodes[0].textContent!, parseInt(member_copy!.childNodes[2].textContent!)];
            //     tuples.push(tuple);
            // }

            // alert(member_table.rows[0].cells[0].textContent!)

            for(let i = 1; i < member_table.rows.length; i++)
            {
                let tuple: [string, number] = [member_table.rows[i].cells[0].textContent!, parseInt(member_table.rows[i].cells[1].textContent!)];
                    tuples.push(tuple);
            }

            tuples.sort((a, b) => b[1] - a[1]);

            let sum = tuples.reduce((total, tuple) => total + tuple[1], 0);

            let  team_num: number = Math.max(Math.min( sum / parseInt(boss_waterway!.textContent!) , member_num!) , 1) | 0;
            let min_team_num = (((member_num! - 1) / 6) + 1) | 0;

            while(true)
            {
                this.clearTeam();

                let team_boss_waterway_sum: number[] = new Array(team_num);
                team_boss_waterway_sum.fill(0);

                for (let i = 0; i < team_num; i++) {
                    ul = document.createElement("ul");
                    ul.id = "team" + i.toString();
                    teamListNode!.appendChild(ul)
                }


                for (let i = 0; i < member_num!; i++) {

                    let minIndex = team_boss_waterway_sum.indexOf(Math.min(...team_boss_waterway_sum));
                    let p = document.createElement("p");
                    p.textContent = tuples[i][0] + "  " + (tuples[i][1]).toString();
                    team_boss_waterway_sum[minIndex] += tuples[i][1];
                    teamListNode?.childNodes[minIndex].appendChild(p);

                }

                if (team_num <= min_team_num || Math.min(...team_boss_waterway_sum) >= parseInt(boss_waterway!.textContent!))
                {
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


        }
    }

    const listControl = new ListControl;

    addElementButton?.addEventListener("click", () => listControl.addElement());
    sortOutElementButton?.addEventListener("click", () => listControl.sortOutElement());
    

});
