const express = require("express");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/routes/swagger");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
