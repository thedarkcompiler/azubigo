import bcrypt from "bcryptjs";
import db from "../lib/db";

async function seed() {
  const username = process.env.ADMIN_USER || "admin";
  const password = process.env.ADMIN_PASSWORD || "admin123";
  const hashedPassword = await bcrypt.hash(password, 10);

  db.prepare(
    "INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)"
  ).run(username, hashedPassword);

  console.log("Done!");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
})
.finally(() => {
  db.close();
});