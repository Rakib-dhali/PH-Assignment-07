import path from "path";
import fs from "fs/promises";

export async function getFriends() {
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContent);
}