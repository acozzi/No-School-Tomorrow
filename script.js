var musicaDeFondo;
var s1=[];
var s2=[];
var s3=[];
var s4=[];

let img1;
let img2;
let img3;
let img4;
var fondo;
var b1;

function preload() {
    soundFormats('mp3');
    musicaDeFondo = loadSound('files/noHayClases.mp3');
	img1 = loadImage('files/spriteSheet1.png');
	img2 = loadImage('files/spriteSheet2.png');
	img3 = loadImage('files/spriteSheet3.png');
	img4 = loadImage('files/spriteSheet4.png');
	fondo= loadImage('files/dungeonTileset.png')
}

function setup() {
	frameRate(4);
	createCanvas(windowWidth, windowHeight);
	b1=new Baldosa(fondo.get(0,32*13,2048,32*7));
	crearObjetos(s1,img1);
	crearObjetos(s2,img2);
	crearObjetos(s3,img3);
	crearObjetos(s4,img4);
	
	musicaDeFondo.setLoop(true);

	
}
function draw() {
	b1.mostrar();

	for(let i=0;i<=7;i++){
		s1[i].mostrar();
		s2[i].mostrar();
		s3[i].mostrar();
		s4[i].mostrar();
	}
}