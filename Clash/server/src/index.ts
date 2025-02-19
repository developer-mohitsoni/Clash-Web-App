import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import ejs, { name } from "ejs";
import { fileURLToPath } from "url";
import Routes from "./routes/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* Set a view engine

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

//* Routes
app.use(Routes);

app.get("/", async (req: Request, res: Response) => {
  const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
    name: "Mohit Soni",
  });

  // await sendEmail("nelim11546@leacore.com", "Testing SMTP", html);

  await emailQueue.add(emailQueueName, {
    to: "ms7085422@gmail.com",
    subject: "Testing Queue Email",
    body: html,
  });
  return res.json({ msg: "Email send successfully!" });
});

//* Queues

import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
