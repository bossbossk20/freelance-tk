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
     $('.app').addClass( "active" );

    app.app = function(){
      app.showApp = false
      app.showSoup = true
      app.showSalad = true
      app.showCurry = true
      app.showEntree = true
      app.showRD = true

     $('.app').addClass( "active" )
     $('.soup').removeClass( "active")
     $('.curry').removeClass( "active" )
     $('.salad').removeClass("active")
     $('.entree').removeClass("active")
     $('.rd').removeClass("active")

    }

    app.soup = function(){
      app.showApp = true
      app.showSoup = false
      app.showSalad = true
      app.showCurry = true
      app.showEntree = true
      app.showRD = true
      $('.soup').addClass("active")
      $('.app').removeClass( "active")
      $('.salad').removeClass( "active")
      $('.curry').removeClass( "active")
      $('.entree').removeClass( "active")
      $('.rd').removeClass( "active")
    }
    app.salad = function(){
      app.showSalad = false
      app.showSoup = true
      app.showApp = true
      app.showCurry = true
      app.showEntree = true
      app.showRD = true
      $('.salad').addClass("active")
      $('.app').removeClass( "active")
      $('.soup').removeClass( "active")
      $('.curry').removeClass( "active")
      $('.entree').removeClass( "active")
      $('.rd').removeClass( "active")
    }
    app.curry = function(){
      app.showApp = true
      app.showSalad = true
      app.showCurry = false
      app.showSoup  = true
      app.showEntree = true
      app.showRD = true
      $('.curry').addClass("active")
      $('.app').removeClass( "active")
      $('.salad').removeClass( "active")
      $('.soup').removeClass( "active")
      $('.entree').removeClass( "active")
      $('.rd').removeClass( "active")

    }
     app.entree = function(){
      app.showApp = true
      app.showSalad = true
      app.showCurry = true
      app.showSoup  = true
      app.showEntree = false
      app.showRD = true
      $('.entree').addClass('active')
      $('.app').removeClass( "active")
      $('.salad').removeClass( "active")
      $('.curry').removeClass( "active")
      $('.soup').removeClass( "active")
      $('.rd').removeClass( "active")


    }
    app.rd = function(){
      app.showApp = true
      app.showSalad = true
      app.showCurry = true
      app.showSoup  = true
      app.showEntree = true
      app.showRD = false
      $('.rd').addClass('active')
      $('.app').removeClass( "active")
      $('.salad').removeClass( "active")
      $('.curry').removeClass( "active")
      $('.entree').removeClass( "active")
      $('.soup').removeClass( "active")

    }



  })
