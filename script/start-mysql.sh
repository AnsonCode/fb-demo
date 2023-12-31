#!/bin/bash

# 定义容器名称
CONTAINER_NAME="mysql2"

docker stop $CONTAINER_NAME

docker rm $CONTAINER_NAME

# 创建并启动MySQL容器
docker run -itd --name $CONTAINER_NAME --restart always -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql

# 等待容器启动
sleep 5
docker ps

# 将your_data.sql文件注入到容器中
docker cp init.sql $CONTAINER_NAME:/init.sql

# docker cp init.sql mysql2:/init.sql
sleep 2

for i in {1..10}; do
    # 执行你的命令
     result=$(docker exec -i $CONTAINER_NAME mysql -uroot -p123456 -e "SHOW DATABASES;")
        if [ -n "$result" ]; then
            echo "执行成功...."
            echo "结果: \"$result\""
            break
        else
            echo "执行失败"
        fi
    sleep 3
  done

sleep 1
# 在容器中执行初始化数据的操作
docker exec -i $CONTAINER_NAME mysql -uroot -p"123456" < init.sql
sleep 1
docker exec -i mysql2 mysql -uroot -p"123456" -e "SHOW DATABASES;"
# 执行完毕后删除your_data.sql文件
docker exec $CONTAINER_NAME rm /init.sql