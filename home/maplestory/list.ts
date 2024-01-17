/// <reference lib="es2015" />
document.addEventListener("DOMContentLoaded", () => {

    const addElementButton = document.getElementById("addElementButton");
    const listInput = document.getElementById('waterway') as HTMLInputElement;
    const playerName = document.getElementById('playerName') as HTMLInputElement;
    let elementCounter = 0;

    let tuples: [string, number][] = [];

    class ListControl
    {
        addElement()
        {
            if (!isNaN(parseInt(listInput.value))) {

                let tuple: [string, number] = [playerName.value, parseInt(listInput.value)];
                tuples.push(tuple);

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
                li.appendChild(document.createTextNode(" ".repeat(13 - tuple[0].length) + "水路 "));
                li.appendChild(document.createTextNode(tuple[1].toString()));
                li.appendChild(document.createTextNode(" ".repeat(6 - tuple[1].toString().length)));


                li.appendChild(changeStatusButton);
                li.appendChild(document.createTextNode(" "));
                li.appendChild(elementButton);

                document.getElementById('memberList')!.appendChild(li);
                (document.getElementById('playerName') as HTMLInputElement).value = '';
                (document.getElementById('waterway') as HTMLInputElement).value = '';
                elementCounter++;
            }
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
    }

    const listControl = new ListControl;

    addElementButton?.addEventListener("click", () => listControl.addElement());

});
