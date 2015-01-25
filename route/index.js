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
  }
});
