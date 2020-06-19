const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { User } = require("./models/User");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://shineunji:525200@cluster0-e4251.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("안녕하세요."));

app.post("/register", (req, res) => {
  // 이름, 이메일, 패스워드 등 회원가입 할 때 필요한 정보들을 Client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    }); //status200 성공
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
