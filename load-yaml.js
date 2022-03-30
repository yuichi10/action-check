'use strict';
const { execSync } = require('child_process');
const yaml = require('js-yaml');

const resultYaml = execSync('./test.yaml');

const result = yaml.load(resultYaml);
console.log(result);
