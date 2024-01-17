document.addEventListener("DOMContentLoaded", () => {

    const myButton = document.getElementById("myButton");
    const removeElementButton = document.getElementById("removeElementButton");
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
                    let elementButton = document.createElement('Button');

                    const currentElementCounter = elementCounter;
                    elementButton.addEventListener("click", () => listControl("removeElement", currentElementCounter));
                    elementButton.textContent = "削除";

                    li.id = "element" + elementCounter.toString();

                    li.textContent = tuple[0] + "   水路 " +  tuple[1] + "  ";
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

        }

    }

    myButton?.addEventListener("click", () => listControl("addElement"));

});
