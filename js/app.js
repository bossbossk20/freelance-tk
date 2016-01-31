angular.module('app', [])
  .controller('TodoListController', function() {
    var app = this;
    app.test=  "hello"
    app.showApp = false 
    app.showSoup = true
    app.showSalad = true
    app.showCurry = true
    app.showEntree = true
    app.showRD = true


    app.app = function(){
      app.showApp = false
      app.showSoup = true
      app.showSalad = true
      app.showCurry = true
      app.showEntree = true
      app.showRD = true

     $('.app').addClass( "active" );
    }

    app.soup = function(){
      app.showApp = true
      app.showSoup = false
      app.showSalad = true
      app.showCurry = true
      app.showEntree = true
      app.showRD = true
    }
    app.salad = function(){
      app.showSalad = false
      app.showSoup = true
      app.showApp = true
      app.showCurry = true
      app.showEntree = true
      app.showRD = true
    }
    app.curry = function(){
      app.showApp = true
      app.showSalad = true
      app.showCurry = false
      app.showSoup  = true
      app.showEntree = true
      app.showRD = true

    }
     app.entree = function(){
      app.showApp = true
      app.showSalad = true
      app.showCurry = true
      app.showSoup  = true
      app.showEntree = false
      app.showRD = true



    }
    app.rd = function(){
      app.showApp = true
      app.showSalad = true
      app.showCurry = true
      app.showSoup  = true
      app.showEntree = true
      app.showRD = false
    }
    


  })