let b=parseInt(prompt("enter the month"));
let a=new Date();
a.setHours(b);
	let res=a.getHours();
	if(res>=6 && res<=11)
	{
		console.log("mornimg");
	}
	else if(res>=12 && res<=16)
	{
		console.log("afternoon");
	}
	else
	{
	console.log("night");
	}