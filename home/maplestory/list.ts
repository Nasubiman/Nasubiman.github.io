/// <reference lib="es2017" />
document.addEventListener("DOMContentLoaded", () => {

    const addElementButton = document.getElementById("addElementButton");
    const sortOutElementButton = document.getElementById("sortOutElementButton");
    const waterway_input = document.getElementById('waterway') as HTMLInputElement;
    const playerName = document.getElementById('playerName') as HTMLInputElement;
    const member_table = document.getElementById("member_table") as HTMLTableElement;
    const bench_table = document.getElementById("bench_table") as HTMLTableElement;
    const boss_waterway = document.getElementById("boss_waterway");



    class ListControl
    {
        addElement()
        {
            
            if (!isNaN(parseInt(waterway_input.value))) {

                let tuple: [string, number] = [playerName.value, parseInt(waterway_input.value)];
                let newRow = member_table.insertRow();

                let newCell = newRow.insertCell();
                newCell.textContent = tuple[0];
                newCell = newRow.insertCell();
                newCell.textContent = tuple[1].toString();
                newCell = newRow.insertCell();

                let btn = document.createElement('button');
                btn.textContent = '削除';

                let change_status_button = document.createElement('button');
                change_status_button.textContent = 'ベンチへ';

                this.removeTableElement(btn);
                this.changeElementStatus(change_status_button);
                newCell.textContent = "hoge";
                newCell = newRow.insertCell();

                newCell.appendChild(btn);

                newCell = newRow.insertCell();
                newCell.appendChild(change_status_button);


                (document.getElementById('playerName') as HTMLInputElement).value = '';
                (document.getElementById('waterway') as HTMLInputElement).value = '';
            }
        }

        changeElementStatus(btn: HTMLButtonElement)
        {
            btn.addEventListener('click', (event) => {
                event.preventDefault();

                let row = (event.target! as HTMLElement).parentElement!.parentElement as HTMLTableRowElement;
                let table = row.parentElement?.parentElement as HTMLTableElement;
                let insert_tbody = document.getElementById(table.id == "member_table" ? "bench_tbody" : "member_tbody") as HTMLTableRowElement;
                insert_tbody.insertBefore(row!, null);

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
            let tbody = document.getElementById("member_tbody") as HTMLTableSectionElement;
            let ul;
            const member_num = tbody.rows.length;



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
