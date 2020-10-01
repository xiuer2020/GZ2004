创建dev分支
git branch dev

查看分支
git branch 
带星号的就是当前使用分支

然后切换到dev分支：
git switch dev


发布分支
git push --set-upstream origin dev

合并分支
git merge dev

删除分支
git branch -d dev

查看分支合并图 
git log --graph --pretty=oneline

查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>或者git switch <name>

创建+切换分支：git checkout -b <name>或者git switch -c <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>


gitpage
创建仓库 
你的用户名.github.io

静态网站托管
网址
https://你的用户名.github.io
默认首页 readme.md
可以使用index.html替换

拿得出手的项目 放置在gitpage