// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'ios',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'My App',
	dialog: {
		title: 'My App',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
	
	{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		
		{
		path: '/carnes/',
    	url: 'carnes.html',
    	name: 'carnes',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;

$$('#btnAlerta').on('click',function(){
	app.dialog.alert('Hola, como estas?');
});

$$('#btnLogin').on('click', function(e){
	e.preventDefault();
	
	var usuario = $$('#username').val();
	var password = $$('#password').val();
	
	if (usuario == 'admin' && password == "admin"){
		app.loginScreen.close('.login-screen');
	}else{
		app.dialog.alert('Username not valid');
	} 	
  
});



 

