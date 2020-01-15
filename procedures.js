/*
 * Class Personaje / Character
*/
class Personaje{
	constructor(hoja){ //recibe la hoja de sprites de 3x4
		this.x=random(0,windowWidth-48);
		this.y=random(0,windowHeight-72);
		this.arreglo=[];
		this.cambio=int(random(0,3.99));
		this.vel=int(random(4,8));
		for(let i=0;i<=3;i++){
			this.arreglo[i]= [hoja.get(0,0+72*i,48,72),hoja.get(48,0+72*i,48,72),hoja.get(96,0+72*i,48,72)];
		}
	}
	mostrar(){
		image(this.arreglo[this.cambio][frameCount%3], this.x, this.y);
		this.setCambio();
		this.mover();
	}
	setCambio(){
		if(frameCount%6==0){
			this.cambio=int(random(0,3.99));
			this.vel=int(random(4,20));
		}		
	}
	getDir(){
		return this.cambio;
	}
	mover(){
		switch(this.getDir()){
			case 0:
				this.y+=this.vel;
				break;
			case 1:
				this.x-=this.vel;
				break;	
			case 2:
				this.x+=this.vel;
				break;
			case 3:
				this.y-=this.vel;
				break;		
		}
	}
}

/*
 * Class Baldosa / Tile
 */

class Baldosa{
	constructor(baldosas){  // 32x32 2048(64 baldosas de ancho) *7
		this.arrBal=[];
		this.cont=0;
		for(let i=0;i<7;i++){
			for(let j=0;j<64;j++){
				this.arrBal[this.cont]=baldosas.get(0+32*j,0+32*i,32,32);
				this.cont++;
			}
		}
		this.cont=1;
	}
	mostrar(){
		for(let i=0;i<windowWidth;i=i+32){
			for(let j=0;j<windowHeight;j=j+32){
				image(this.arrBal[this.cont],i,j);
			}
		}
	}

	setBal(){
		this.cont=int(random(0,448));
	}

}

/*
 * Procedures
 */
function inicializarVariables(){

}

function mousePressed() {
  musicaDeFondo.playMode('untilDone');
  musicaDeFondo.play();
	b1.setBal();
	
}

function touchStarted() {
  musicaDeFondo.playMode('untilDone');
  musicaDeFondo.play();
	b1.setBal();
}
function keyPressed() {
  musicaDeFondo.playMode('untilDone');
  musicaDeFondo.play();
	b1.setBal();
}

function crearObjetos(arreglo,imagen){
	arreglo[0]= new Personaje(imagen.get(	0,	0,144,288));
	arreglo[1]= new Personaje(imagen.get(144,	0,144,288));
	arreglo[2]= new Personaje(imagen.get(288,	0,144,288));
	arreglo[3]= new Personaje(imagen.get(432,	0,144,288));
	arreglo[4]= new Personaje(imagen.get(  0,288,144,288));
	arreglo[5]= new Personaje(imagen.get(144,288,144,288));
	arreglo[6]= new Personaje(imagen.get(288,288,144,288));
	arreglo[7]= new Personaje(imagen.get(432,288,144,288));
} 
