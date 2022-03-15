function alertFunction(){
    console.log('test1')
    var heading1 = document.getElementsByTagName('h1');
    heading1.innerHTML = 'js test';
    console.log('test2')
}

var but = document.getElementById('button');
but.addEventListener('click', alertFunction(), true);
but.onclick = alertFunction()