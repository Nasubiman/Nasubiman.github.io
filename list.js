document.getElementById('myButton').addEventListener('click', function () {
    var li = document.createElement('li');
    li.textContent = document.getElementById('myInput').value;
    document.getElementById('myList').appendChild(li);
    document.getElementById('myInput').value = '';
});
