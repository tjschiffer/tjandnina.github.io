const path = require('path');
const fs = require('fs');

const templatePath = path.join(__dirname, './tpl.invites.mustache');

const invitesComponent = function() {

  /**
   *
   * @param cb
   */
  this.render = cb => {
    fs.readFile(templatePath, 'utf-8', (err, html) => {
      cb(err, html);
    });
  };
};

module.exports = invitesComponent;
