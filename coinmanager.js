function newcoin(x,y,map){
	coins.push({
		x: x,
		y: y,
		width: tile/2,
		height: tile/2,
		sourceX: 0,
		tickCount:0,
		tickperframe:4,
		map: map,
	});
}

function coinmanager(){
	//map 1
	newcoin(200,H - 3*tile-player.height+player.height/3-5,1);
	newcoin(200+1*tile,H - 3*tile-player.height+player.height/3-5,1);
	newcoin(200+2*tile,H - 3*tile-player.height+player.height/3-5,1);
	
	newcoin(400,H - 4*tile-player.height+player.height/3,1);
	newcoin(400+1*tile,H - 4*tile-player.height+player.height/3,1);
	newcoin(400+2*tile,H - 4*tile-player.height+player.height/3,1);
	
	newcoin(400+1*tile,H - 5*tile-player.height+player.height/3,1);
	
	
	//map 2
	newcoin(5*tile+10,H - 4*tile-player.height+player.height/3,2);
	newcoin(6*tile+10,H - 4*tile-player.height+player.height/3,2);
}
