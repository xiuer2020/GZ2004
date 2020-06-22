// setTimeout(function () {
//     postMessage('我是worker.js传递的信息');
// }, 3000);
onmessage = function(event) {
    
    if (event.data) {
        postMessage(fibonacci(event.data));
    }
};

function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


