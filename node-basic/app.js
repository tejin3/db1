const express = require("express");
const app = express();
const fs = require("fs");

//cors
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:8080",
  credentials: true,
};

app.use(cors(corsOption));

app.use(
  express.json({
    limit: "50mb",
  })
);

const server = app.listen(3000, () => {
  console.log("Server stared. port 3000.");
});

const dbPool = require("mysql").createPool({
  database: "dev", //dev
  host: "localhost", // 타임아웃
  // host: "175.214.9.48", //ipv4 타임아웃
  // host: "175.214.9.1", //기본게이트웨이 ECONNREFUSED
  port: 3306,
  user: "root",
  password: "74568963",
});

app.get("/api/getUserList", async (req, res) => {
  const userList = { data: [{ name: "Seungwon Go", gender: "Male" }] };
  res.send(userList);
});

app.get("/api/getList", async (req, res) => {
  try {
    res.send(await sys.db("list"));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

//서버쪽에 목서버를만들어서, 프론트엔드가 진행할수있도록 만들어주는용도
//백에서 -> 어떤데이터를 보내주기위한 .. 서버에서 보내주는 데이터가 제대로 출력되는지 확인한다.

let sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
  console.log("sql 변경시 재시작 없이 반영되도록 함.");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});

app.post("/api/:alias", async (req, res) => {
  //alias = createPerson
  //console.log(req.param.alias 파라미터 선택된 놈이름)
  //자유롭게
  try {
    res.send(await sys.db(req.params.alias, req.body.param, req.body.where));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const sys = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
