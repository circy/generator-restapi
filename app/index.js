'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the restapi-generator! :)'
    ));

    console.log(chalk.bold.yellow(
    '$$$$$$$                      $$      $$$$$$  $$$$$$$  $$$$$$\n'+
    '$$    $$                     $$     $$    $$ $$    $$   $$\n'+
    '$$    $$  $$$$$$   $$$$$$$ $$$$$$   $$    $$ $$    $$   $$\n'+
    '$$$$$$$  $$    $$ $$         $$     $$$$$$$$ $$$$$$$    $$\n'+
    '$$    $$ $$$$$$$$  $$$$$$    $$     $$    $$ $$         $$\n'+
    '$$    $$ $$             $$   $$  $$ $$    $$ $$         $$\n'+
    '$$    $$  $$$$$$$ $$$$$$$     $$$$  $$    $$ $$       $$$$$$\n'
    ));

    console.log('Created by ' + chalk.bold.green('@circy (Sebastian Kreissl)') + '\n\n');
    console.log('http://github.com/circy/\n\n\n');

    var prompts = [
      {
        name: 'appName',
        message: 'What name will you give your application?',
        default: 'api-Server'
      }
      ,{
        name: 'developper',
        message: 'What you name?',
        default: ' '
      }
      ,{
        type: 'confirm',
        name: 'mongo',
        message: 'Are you using MongoDB?',
        default: true
      }
      ,{
        type: 'confirm',
        name: 'jwt',
        message: 'Do you use jwt (Json web token)?',
        default: true
      }
      ,{
        type: 'confirm',
        name: 'grunt',
        message: 'Do you use grunt for automatik restart after data access?',
        default: true
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.mongo = props.mongo;
      this.jwt = props.jwt;
      this.grunt = props.grunt;
      this.developer = props.developer;
      done();
    }.bind(this));
  },

  scaffoldFolders: function(){
    this.mkdir('app');
    this.mkdir('app/model');
    this.mkdir('app/controller');
    this.mkdir('app/router');
  },

  copyMainFiles: function(){

    if(this.grunt) this.copy("_Gruntfile.js", "Gruntfile.js");

    var context = {
      appName: this.appName,
      mongo: this.mongo,
      jwt: this.jwt,
      grunt: this.grunt
    };

    this.template("_package.json", "package.json", context);
  },

  install: function () {
    this.installDependencies({
      //skipInstall: this.options['skip-install']
    });
  }
});
