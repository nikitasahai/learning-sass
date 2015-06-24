var time = "3:00 PM";
var del = time.split(" ");
//console.log(del[1]);
if (del[1]=="PM")
{
	//console.log("here");
	var change = time.split(":");
	var hour = parseInt(change[0]) + 12;
	console.log(hour);
}
else{
	console.log("no change bro");
}



function convertBetweenTimeFormats(timeStr) {
  var hour, mins;
  hour = timeStr.getHour();
  mins = timeStr.getMinutes();
  if(timeStr.hasPM())
  	hour += 12;
  return hour + ":" + mins;
}

String.prototype.hasPM = function () { 

	//console.log(this.toString()) 
	//var newtime = this.toString();
	var checkforPM = this.split(" ");
	if (checkforPM[1] == "PM")
	{
		
		console.log("y");
		return true;	
	}	
	else
	{	
		console.log("n");
		return false;
	}
	};