document.getElementById('myButton')!.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = (document.getElementById('myInput') as HTMLInputElement).value;
    document.getElementById('myList')!.appendChild(li);
    (document.getElementById('myInput') as HTMLInputElement).value = '';
});
