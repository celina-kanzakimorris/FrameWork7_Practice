var app = new Framework7({
	root: "#app", /* this is the app element in html */
	routes: [
		{
			path: '/page2/',
			url: 'pages/page2.html',
		}
	]
})

var mainView = app.views.create('.view-main');

document.addEventListener("deviceready", init, false);

function init() {
        //camera code goes here

    $("#takePic").on("click", function () {
        console.log("user tapped")
        navigator.camera.getPicture(cameraSuccess, cameraFail, cameraOptions);
    })

    var cameraOptions = {
        //number range 0-100, default is 50
        quality: 80,
        //default is back
        saveToPhotoAlbum: true
    }
   
    function cameraSuccess(imageURI) {
        console.log("great pic!");
        $("#takePic").after("<img src='" + imageURI + "'>'");
    }


    function cameraFail(message) {
        alert("failure due to: " + message);
    }
}