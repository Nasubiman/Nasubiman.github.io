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

                    let changeStatusButton = document.createElement('Button');
                    let elementButton = document.createElement('Button');


                    changeStatusButton.addEventListener("click", () => listControl("changeStatus", currentElementCounter));
                    elementButton.addEventListener("click", () => listControl("removeElement", currentElementCounter));

                    changeStatusButton.textContent = "ベンチへ";
                    elementButton.textContent = "削除";

                    changeStatusButton.id = "changeStatusButton" + elementCounter.toString();
                    elementButton.id = "elementButton" + elementCounter.toString();

                    li.id = "element" + elementCounter.toString();
                    
                    li.textContent = tuple[0] + "   水路 " +  tuple[1] + "  ";


                    li.appendChild(changeStatusButton);
                    li.appendChild(document.createTextNode(" "));
                    li.appendChild(elementButton);

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
                if(document.getElementById("element" + others[0])!.childNodes[1].textContent === "メンバーへ")
                {
                    document.getElementById('memberList')!.insertBefore(document.getElementById("element" + others[0])!, null);
                    document.getElementById("element" + others[0])!.childNodes[1].textContent = "ベンチへ";
                    break;
                }else if(document.getElementById("element" + others[0])!.childNodes[1].textContent === "ベンチへ")
                {
                    document.getElementById('benchList')!.insertBefore(document.getElementById("element" + others[0])!, null);
                    document.getElementById("element" + others[0])!.childNodes[1].textContent = "メンバーへ";
                    break;
                }
                break;
        }

    }

    addElementButton?.addEventListener("click", () => listControl("addElement"));

});
