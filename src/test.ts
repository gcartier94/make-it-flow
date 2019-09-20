import YAML from "yaml";
import * as fs from "fs";

const inputFile = fs.readFileSync('../test.yml', 'utf8');
const parsedYAML = YAML.parse(inputFile);

console.log(parsedYAML);
