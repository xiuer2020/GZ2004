import printMe from "./print";


// printMe()

var btn = document.createElement('button')
btn.innerHTML = 'btn'
btn.onclick = printMe

document.body.appendChild(btn)