function cloudmanager(){
	var img1 = new Image();
	img1.src = "props/cloud1.png";
	var img2 = new Image();
	img2.src = "props/cloud2.png";
	var img3 = new Image();
	img3.src = "props/cloud3.png";
	
	var images = [img1,img2,img3];
	
	for (i=0;i<8;i++){
		clouds.push(new create_cloud(images));
	}
}

function create_cloud(images){
	this.x = getRandomInt(0, 800);
	this.y = getRandomInt(0, 100);
	this.image = images[getRandomInt(0,2)];
	if(this.image == images[0]){
		this.width = 6*tile;
		this.height = 2*tile;
	}
	if(this.image == images[1]){
		this.width = 4*tile;
		this.height = 2*tile;
	}
	if(this.image == images[2]){
		this.width = 3*tile;
		this.height = 1*tile;
	}
	this.plane = getRandomInt(0, 2);
}