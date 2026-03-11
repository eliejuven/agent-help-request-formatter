const express = require("express");

const app = express();
app.use(express.json());

app.post("/format-help-request", (req, res) => {
  const {
    task = "",
    blocker = "",
    attempts_tried = [],
    constraints = [],
    context = ""
  } = req.body || {};

  res.json({
    title: `${task || "Task"} help request`,
    summary: `Blocked on: ${blocker || "unspecified issue"}`,
    structured_help_request: {
      task,
      blocker,
      attempts_tried,
      constraints,
      context
    },
    recommended_helper_tags: ["general"]
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});