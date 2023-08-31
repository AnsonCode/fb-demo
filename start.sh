# 启动Fireboom
./fireboom dev &

sleep 5

# 启动custom-go
cd custom-go
go run main.go &
cd ..
sleep 5

# 启动前端
cd front
yarn 
npm run dev &
cd ..