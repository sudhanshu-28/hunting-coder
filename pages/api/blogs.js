import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("blogdata", "utf-8", (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      files.forEach((file) => {
        console.log(file);
      });
      res.status(200).json(files);
    }
  });
}
