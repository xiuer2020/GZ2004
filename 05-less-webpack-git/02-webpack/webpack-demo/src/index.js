// 引入lodash 浏览器不认识
import _ from 'lodash';

function component() {
    var element = document.createElement("div");

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = ["Hello", "webpack"].join(" ");

    // 这里的_ 是通过ES6模块化引入的
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
}

document.body.appendChild(component());
