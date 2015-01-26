'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('You called the Restapi Route with the argument ' + this.name + '.');
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
  },
  copyMainFiles: function(){
    this.template("Controller.js", "app/controller/" + this.name + ".js");
    this.template("Model.js", "app/model/" + this.name + ".js");
    this.template("Router.js", "app/router/" + this.name + ".js");
  },
  modifyFile: function(){
    try{
      var path = 'app.js',
        file = this.readFileAsString(path);
      file = file.replace('//--Routes will be added automatically--','//--Routes will be added automatically--\napp.use(\'/api/' + this.name + '/\', require(\'./router/' + this.name + '\'));\n');
      this.write(path, file);
    }catch (err){
      this.log('The route could not be added to the file.');
      this.log(err.message);
    }
  }
});
