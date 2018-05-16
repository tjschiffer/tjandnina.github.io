const generator = require('multi-language-site-generator');
const sass = require('node-sass');
const path = require('path');
const fs = require('fs');

const templateDirPath = path.resolve('../staging/templates');
const templateDataPath = path.resolve('../staging/templates/languageData.json');
const outputFolder = path.resolve('../staging/');

generator.render(templateDirPath, templateDataPath, outputFolder, err => {
  if (err) throw err;
});

const sassFile = path.resolve('../staging/scss/main.scss');
const outFile = path.resolve('../staging/css/main.css');

sass.render({
  file: sassFile,
  sourceMap: true,
  outFile: outFile,
  outputStyle: 'compressed'
}, function(err, result) {
  if (err) throw err;
  fs.writeFile(outFile, result.css, err => {
    if(err) throw err;
  });
  fs.writeFile(outFile + '.map', result.map, err => {
    if(err) throw err;
  });
});