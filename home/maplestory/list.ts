document.addEventListener("DOMContentLoaded", () => {

    const addElementButton = document.getElementById("addElementButton");
    const listInput = document.getElementById('waterway') as HTMLInputElement;
    const playerName = document.getElementById('playerName') as HTMLInputElement;
    let elementCounter = 0;

    let tuples: [string, number][] = [];

    function listControl(operation, ...others){

        switch(operation){
            case "addElement":
                if (!isNaN(parseInt(listInput.value))) {
                    
                    let tuple: [string, number] = [playerName.value , parseInt(listInput.value)];
                    tuples.push(tuple);

                    const li = document.createElement('li');

                    const currentElementCounter = elementCounter;

                    let elementButton = document.createElement('Button');
                    let changeStatusButton = document.createElement('Button');

                    elementButton.addEventListener("click", () => listControl("removeElement", currentElementCounter));
                    changeStatusButton.addEventListener("click", () => listControl("changeStatus", currentElementCounter));

                    elementButton.textContent = "削除";
                    changeStatusButton.textContent = "ベンチへ";

                    li.id = "element" + elementCounter.toString();

                    li.textContent = tuple[0] + "   水路 " +  tuple[1] + "  ";

                    li.appendChild(elementButton);
                    li.appendChild(document.createTextNode(" "));
                    li.appendChild(changeStatusButton);

                    document.getElementById('memberList')!.appendChild(li);
                    (document.getElementById('playerName') as HTMLInputElement).value = '';
                    (document.getElementById('waterway') as HTMLInputElement).value = '';
                    elementCounter++;
                }
                break;
            case "removeElement":
                document.getElementById("element" + others[0])?.remove();
                break;
            case "changeStatus":
                document.getElementById('benchList')!.insertBefore(document.getElementById("element" + others[0])!, document.getElementById("benchList")!.childNodes[1]);
                document.getElementById("element" + others[0])!.childNodes[2].textContent = "メンバーへ";
                break;

        }

    }

    addElementButton?.addEventListener("click", () => listControl("addElement"));

});
