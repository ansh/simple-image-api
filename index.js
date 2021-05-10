const app = require("./app");
// create app
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

module.exports = listener;
