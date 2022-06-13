const userKnex = require("../services/userDB");
const sessionKnex = require("../services/sessionDB");

exports.login = async (req, res, next) => {
  try {
    const userDB = await userKnex("users").where(req.body);
    if (userDB.length == 0) {
      res
        .status(400)
        .json({ status: "failure", test: userDB, text: "Wrong password" });
    } else {
      let day = getDay();
      const sessionDB = await sessionKnex("sessions").insert({
        userID: userDB[0].id,
        login: day,
        logout: "-",
      });
      res.status(200).json({
        status: "success",
        userInfo: userDB,
        sessionInfo: sessionDB,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ status: "failure", e });
  }
};

exports.signup = async (req, res, next) => {
  try {
    const userDB = await userKnex("users").insert(req.body);
    let day = getDay();
    const sessionDB = await sessionKnex("sessions").insert({
      userID: userDB[0],
      login: day,
      logout: "-",
    });
    res
      .status(200)
      .json({ status: "success", userInfo: userDB, sessionInfo: sessionDB });
  } catch (e) {
    console.log(e);
    res.status(400).json({ status: "failure", e });
  }
};

exports.logout = async (req, res, next) => {
  try {
    let day = getDay();
    const sessionID = await sessionKnex
      .select("id")
      .from("sessions")
      .orderBy([{ column: "id", order: "desc" }])
      .limit(1);

    const session = await sessionKnex("sessions")
      .where({ id: sessionID[0].id })
      .update({ logout: day });
    res.status(200).json({ status: "success", session });
  } catch (e) {
    console.log(e);
    res.status(400).json({ status: "failure", e });
  }
};

function getDay() {
  var date = new Date();

  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  return `${day}-${month}-${year} ${hour}:${min}:${sec}`;
}
