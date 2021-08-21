## 專案功能 Features

1. 使用者可以註冊帳號登入或是用Facebook第三方登入
2. 使用者必須登入後才能使用專案相關功能
5.  使用者可以在首頁瀏覽所有待辦事項
6.  使用者可以新增待辦事項
7.  使用者可以勾選已完成的待辦事項
8.  使用者可以修改待辦事項
9.  使用者可以刪除待辦事項

<br>

## 畫面預覽 Preview
![A12 登入畫面](https://i.imgur.com/Kq0lI3m.png)

![A12 首頁畫面](https://i.imgur.com/LXDZ090.png)

## 建置環境 Environment


* Node.js
* nodemon
* sequelize
* npm
* MySQL

## 安裝流程 Install

<br>

1. 藉由 git clone 將專案下載至本地
```
git clone https://github.com/mush1200/Todo-List-Sequelize.git
```
2. 進入專案資料夾
```
cd Todo-List-Sequelize
```
3. 安裝相關套件
```
npm install
```
4. 安裝 nodemon 套件 (若未安裝)
```
npm install -g nodemon
```
5. 複製.env.example檔案，檔名更改為.env
```
cp .env.example .env
```
6. Facebook Login: 

在 [Facebook for Developers](https://developers.facebook.com/) 建立應用程式，並將應用程式編號與應用程式密鑰分別代入.env檔案中的 FACEBOOK_ID 及 FACEBOOK_SECRET

7. 建立資料庫

打開 MySQL workbench 並連線至本地資料庫，輸入下列指令建立資料庫 

```
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
```
* 預設資料庫名稱為 todo_sequelize，也可使用其他名稱，並將 config.js 中的 database 改為欲使用的資料庫名稱。

<br>

8. 建立資料庫欄位
```
npx sequelize db:migrate
```

9. 建立種子資料
```
npx sequelize db:seed:all
```

10. 啟動網頁伺服器
```
npm run dev
```
11. 當終端機出現以下訊息後，即可在 http://localhost:3000 開始使用

App is running on http://localhost:3000

## 預設使用者

>email: root@example.com
>password: 12345678