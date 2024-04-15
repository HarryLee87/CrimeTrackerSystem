import { parse, Parser } from "csv-parse";
import { createReadStream } from "fs";
import { existsSync, mkdirSync } from "fs";
import { writeFile } from "fs/promises";
import { join } from "path";

const inputFilePath = join(
  process.cwd(),
  "public/dataset/Community_Crime_Statistics_20240131.csv"
);
const outputDirPath = join(process.cwd(), "public/json");
const outputFilePath = join(
  outputDirPath,
  "Community_Crime_Statistics_20240131.json"
);

async function convertCsvToJson() {
  if (existsSync(outputFilePath)) {
    console.log("The file already exists");
    return;
  }

  if (!existsSync(outputDirPath)) {
    mkdirSync(outputDirPath);
  }

  const records: any[] = [];
  const parser = parse({
    columns: true,
    delimiter: ",",
    bom: true,
  });

  createReadStream(inputFilePath, { encoding: "utf-8" })
    .pipe(parser)
    .on("readable", function (this: Parser) {
      let record;
      while ((record = this.read()) !== null) {
        records.push(record);
      }
    })
    .on("end", async () => {
      await writeFile(
        outputFilePath,
        JSON.stringify(
          records,
          (key, value) => {
            if (typeof value === "string") {
              return value.replace(/^\uFEFF/, "");
            }
            return value;
          },
          2
        ),
        "utf8"
      );
      console.log("CSV file successfully transformed to JSON file");
    })
    .on("error", (err: Error) => {
      console.error("Error", err);
    });
}

convertCsvToJson();
