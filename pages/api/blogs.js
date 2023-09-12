import * as fs from "fs";

export default async function handler(req, res) {
  const files = await fs.promises.readdir("blogdata");

  let allBlogs = [];

  for (let index = 0; index < files.length; index++) {
    let myFile = await fs.promises.readFile(
      `blogdata/${files[index]}`,
      "utf-8"
    );
    myFile = JSON.parse(myFile);
    allBlogs.push({
      title: myFile.title,
      content: myFile.content,
      slug: myFile.slug,
    });
  }

  res.status(200).json({
    success: true,
    message: "Blogs fetched successfully!",
    data: allBlogs,
  });
}
