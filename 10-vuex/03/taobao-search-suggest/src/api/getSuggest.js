import "@/plugins/axios";

export default function(n, callback) {
    // 
    window.axios
        .get("http://api.kele8.cn/agent/https://suggest.taobao.com/sug?code=utf-8", {
            params: {
                q: n,
            },
        })
        .then(function(response) {
            // 
            callback(response);
        })
        .catch(function(error) {
            
        });
}
