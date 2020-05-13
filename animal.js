function change(src1,src2,id){ //function that will change image source on click
	var track = "t"; //tracker for the image source
	function modify() { //clouser function to apply the modification
		var image = document.getElementById(id); 
		if (track === "t" ) {
			image.src = src2;
			track = "t1";
		}
		else if (track === "t1") {
			image.src = src1; 
			track = "t";
		}
	}
		return modify;
};

var fish = change("animals/fish.PNG","animals/fish1.PNG","fish");
var giraffe = change("animals/giraffe.PNG","animals/giraffe1.PNG","giraffe");
var otter = change("animals/otter.PNG","animals/otter1.PNG","otter");
var ping = change("animals/ping.PNG","animals/ping1.PNG","ping");
var puffin = change("animals/puffin.PNG","animals/puffin1.PNG","puffin");
var whale = change("animals/whale.PNG","animals/whale1.PNG","whale");
