import { writeToFile } from "./write.js";

const say = "Hello NPM";

console.log(say);

writeToFile("file.txt", say);