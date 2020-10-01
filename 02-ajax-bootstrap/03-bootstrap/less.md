1 先安装node环境
下一步 除了勾选协议 不要改任何东西

2 打开 终端 CMD powershell WIN+R运行=> cmd
终端输入 node -v 验证node是否装好

如果报错 不是内部或外部命令，也不是可运行的程序或批处理文件。
那就是node没有装好

终端输入 npm -v 包(软件)管理工具 手机应用商店


3 安装less
终端输入 npm install -g less

正常
C:\Users\DONG\AppData\Roaming\npm\lessc -> C:\Users\DONG\AppData\Roaming\npm\node_modules\less\bin\lessc
+ less@3.11.1
updated 3 packages in 5.72s

中间卡住了 ctrl+c y 退出 之后再重新安装 箭头上按键

终端输入 lessc -v 验证 less是否装好

基本cmd命令
dir 列出当前路径下所有资源
cls 清屏

vscode集成终端 不要用ps 用cmd
vscode配置全局命令 ctrl+shift+P terminal:select default

4 lessc 命令 手动编译
lessc style.less 输出到终端
lessc style.less style.css 把less文件编译成css文件

vscode Easy less插件 自动编译

5 配置map