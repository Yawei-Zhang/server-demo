####Overview
This is a server demo written by Yawei, just for practising. 

The functions of this server includes:

1. Show "Hello, <user>!" by accessing "localhost:8080/user'

####How to start

1. Download from GitHub.
2. Run `yarn install` in root path of project.
3. Run `yarn start` to start the server.
4. Run `yarn stop` to stop the server.


####How to test
Run `yarn test` to test.

Run `yarn eslint` to format the code.



#### TODO:

* gitignore可以参考 https://github.com/github/gitignore

* 要有README文件（可以参考我们的README）
    > Overview
    >
    > 如何配置
    >
    > 如何运行
    >
    > ...

* 要Docker化：仔细考虑你的.dockerignore文件，Dockerfile, docker-compose

* 修改了文档结构：回头给你解释，这种结构的好处（记得问我）


#### More

* 数据库配置应该独立，不应该写在index model里

* 不应该有index这个model

* model名应该为单数

* 代码库名称应尽量使用中间线分割（-）

* ...
