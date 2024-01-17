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
                    // elementButton.id = "removeElementButton";
                    // elementButton.className = "removeElementButton";

                    const currentElementCounter = elementCounter;
                    elementButton.addEventListener("click", () => listControl("removeElement", currentElementCounter));
                    // elementButton.na
                    elementButton.textContent = "remove" + elementCounter.toString();

                    li.id = "element" + elementCounter.toString();

                    // li.textContent = (document.getElementById('waterway') as HTMLInputElement).value;
                    li.textContent = tuple[0] + "   水路 " +  tuple[1] + "  ";
                    li.appendChild(elementButton);
                    document.getElementById('myList')!.appendChild(li);
                    // document.getElementById("myList")!.appendChild(elementButton);
                    (document.getElementById('playerName') as HTMLInputElement).value = '';
                    (document.getElementById('waterway') as HTMLInputElement).value = '';
                    elementCounter++;
                }
                break;
            case "removeElement":
                document.getElementById("element" + others[0])?.remove();

                // (document.getElementById("divButton") as HTMLInputElement).textContent = others[0].toString();
                // alert(others[0].toString());
                // document.getElementById("myList")?.children[0].remove();



                // elementCounter--;
            
                break;

        }

    }

    myButton?.addEventListener("click", () => listControl("addElement"));
    // removeElementButton?.addEventListener("click", () => listControl("removeElement"));

});
