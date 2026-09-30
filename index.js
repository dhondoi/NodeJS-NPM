import { writeToFile } from "nodejs-npm/write";
import _ from "lodash";

const say = "Hello NPM";

console.log(say);

writeToFile("file.txt", say);

console.log(_.upperCase(say));
