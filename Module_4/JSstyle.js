// JavaScript source code
var names = new Array();
names[0]="Keyur";
names[1]="Jenson";
names[2]="Prajakata";
names[3]="Omar";
names[4]="adya";
names[5]="marica";
names[6]="Loki";
names[7]="sherya";
names[8]="yusuf";
names[9]="jannet";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}