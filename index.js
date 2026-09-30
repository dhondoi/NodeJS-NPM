import { writeToFile } from "nodejs-npm/write";

const say = "Hello NPM";

console.log(say);

writeToFile("file.txt", say);