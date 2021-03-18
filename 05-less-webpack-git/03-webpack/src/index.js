import "./style.css";
import "./test.less";

import demo from "./demo.jpg";


var node = document.createElement("span");
node.innerHTML = "span"
document.body.appendChild(node);


var node = document.createElement("img");

node.src = demo;


import printMe from "./print";


printMe()

var btn = document.createElement('button')
btn.innerHTML = 'btn'
btn.onclick = printMe

document.body.appendChild(btn)