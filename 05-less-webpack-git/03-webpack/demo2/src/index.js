import "./style.css";
import "./test.less";

import icon from "./600x600.jpg";
import logo from "./logo.png";


var node = document.createElement("img");
// node.src = './600x600.jpg'
node.src = logo;
document.body.appendChild(node);


var node = document.createElement("img");
// node.src = './600x600.jpg'
node.src = icon;
document.body.appendChild(node);
