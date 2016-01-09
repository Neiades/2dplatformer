function mapmanager(map){
	if(map == 1){
		newbox(0,H - 3*tile,W+1*tile,3*tile);
	}
	if(map == 2){
		newbox(0,H - 3*tile,4*tile,3*tile);
		newbox(5*tile,H - 4*tile,2*tile,1*tile);
		newbox(8*tile,H - 3*tile,5*tile,3*tile);
		newbox(13*tile,H - 2*tile,4*tile,2*tile);
		newbox(17*tile,H - 3*tile,4*tile,3*tile);
		newbox(21*tile,H - 4*tile,5*tile,4*tile);
	}
	if(map == 3){
		newbox(0,H - 4*tile,2*tile,4*tile);
		newbox(5*tile,H - 3*tile,2*tile,1*tile);
		newbox(9*tile,H - 4*tile,2*tile,1*tile);
		newbox(12*tile,H - 5*tile,2*tile,1*tile);
		newbox(13*tile,H - 6*tile,1*tile,1*tile);
		newbox(9*tile,H - 8*tile,2*tile,2*tile);
		newbox(11*tile,H - 7*tile,1*tile,1*tile);
		newbox(6*tile,H-9*tile,2*tile,1*tile);
		newbox(6*tile,H-10*tile,1*tile,1*tile);
		newbox(9*tile,H - 11*tile,9*tile,1*tile);
		
		newbox(19*tile,H - 4*tile,6*tile,4*tile);
		newbox(20*tile,H - 6*tile,5*tile,2*tile);
		newbox(21*tile,H - 7*tile,4*tile,1*tile);
		newbox(22*tile,H - 8*tile,3*tile,1*tile);
		newbox(23*tile,H - 9*tile,2*tile,1*tile);
		newbox(24*tile,H - 10*tile,2*tile,1*tile);
	}
}

function mapswitcher(){
	if(curmap == 1){
		//going to the left
		if(player.x < 0){
			player.x = 0;
		}
		//going to the right
		if(player.x > 800){
			boxes = [];
			curmap = 2;
			counter = 1;
			player.x = 5;
			mapmanager(curmap);
		}
	}
	if(curmap == 2){
		//going to the left
		if(player.x < 0){
			boxes = [];
			curmap = 1;
			counter = 1;
			player.x = W-20;
			mapmanager(curmap);
		}
		//going to the right
		if(player.x > 800){
			boxes = [];
			curmap = 3;
			counter = 1;
			player.x = 10;
			mapmanager(curmap);
		}
		if(player.y > H){
			player.x = 10;
			player.y = H - 4*tile;
		}
	}
	if(curmap == 3){
		if(player.x < 0){
			boxes = [];
			curmap = 2;
			counter = 1;
			player.x = W-20;
			mapmanager(curmap);
		}
		if(player.x > 800){
			boxes = [];
			curmap = 1;
			counter = 1;
			player.x = 10;
			player.y = H-4*tile
			mapmanager(curmap);
		}
		
		if(player.y > H){
			player.x = 10;
			player.y = H - 5*tile;
		}
	}
}

function newbox(x,y,w,h){
	boxes.push({
		x: x,
		y: y,
		width: w,
		height: h
	});
}

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;
 
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
		var oX = hWidths - Math.abs(vX),             
			oY = hHeights - Math.abs(vY);
         if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                player.y += oY;
            } else {
                colDir = "b";
                player.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                player.x += oX;
            } else {
                colDir = "r";
                player.x -= oX;
            }
        }
    }
    return colDir;
}

function coincheck(shapeA, shapeB){
	var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2);
	if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
		return true;
	} else {
		return false;
	}
	
}
















