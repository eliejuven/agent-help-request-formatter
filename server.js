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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});