const express = require('express')
const app = require('express')()
const db = require('./models')

//db connect
db.sequelize
    .sync({ force: false }) // sync 메소드로 인해 서버 실행 시 mysql과 연동
    .then(() => {
    console.log("데이터베이스 연결 성공");
})
    .catch((err) => {
    console.log(err, "데이터베이스 연결 실패");
});

//router require
const testRouter = require('./routes/test')

//middleware require
app.use(express())
app.use(express.urlencoded())
app.use(express.urlencoded({extended:false}))

app.use('/api', [testRouter])

app.listen(3000, ()=> {
    console.log('3000번 포트로 서버가 켜졌습니다.')
})