document.addEventListener("DOMContentLoaded", () => {

    const myButton = document.getElementById("myButton");
    const listInput = document.getElementById('waterway') as HTMLInputElement;
    const playerName = document.getElementById('playerName') as HTMLInputElement;

    let tuples: [string, number][] = [];

    function listControl(operation){

        switch(operation){
            case "addElement":
                if (!isNaN(parseInt(listInput.value))) {
                    
                    let tuple: [string, number] = [playerName.value , parseInt(listInput.value)];
                    tuples.push(tuple);

                    const li = document.createElement('li');

                    // li.textContent = (document.getElementById('waterway') as HTMLInputElement).value;
                    li.textContent = tuple[0] + "   水路 " +  tuple[1];
                    document.getElementById('myList')!.appendChild(li);
                    (document.getElementById('playerName') as HTMLInputElement).value = '';
                    (document.getElementById('waterway') as HTMLInputElement).value = '';
                }
                break;
            case "removeElement":
                break;

        }

    }

    myButton?.addEventListener("click", () => listControl("addElement"));

});
