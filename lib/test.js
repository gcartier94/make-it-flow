"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var yaml_1 = __importDefault(require("yaml"));
var fs = __importStar(require("fs"));
var inputFile = fs.readFileSync('../test.yml', 'utf8');
var parsedYAML = yaml_1.default.parse(inputFile);
console.log(parsedYAML);
