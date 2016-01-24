angular.module('app', [])
  .controller('TodoListController', function() {
    var app = this;
    app.test=  "hello"
    app.showApp = false 
    app.showSoup = true
    app.showSalad = true
    app.showCurry = true


    app.app = function(){
      app.showApp = false
      app.showSoup = true
      app.showSalad = true
      app.showCurry = true
    }

    app.soup = function(){
      app.showApp = true
      app.showSoup = false
      app.showSalad = true
      app.showCurry = true
    }
    app.salad = function(){
      app.showSalad = false
      app.showSoup = true
      app.showApp = true
      app.showCurry = true
    }
    app.curry = function(){
      app.showApp = true
      app.showSalad = true
      app.showCurry = false
      app.showSoup  = true

    }
    


  })