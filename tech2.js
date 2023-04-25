const jssearch = () => {
const fs=require('fs');
fs.readFile("https://github.com/drinferni/web-development/blob/main/data.txt","utf-8",(err,data)=> {
var count=0;
for (i in data) {
	if (data[i]=='\n') ++count;
}
var a=[];
var op="";
var up="";
var d=0;
var i=0;
	for ( g in data) {
	if (data[g]=='/' && data[g+1]=='r') {++g; continue;}
	if (data[g]=='-') {d=1; continue;}
	if (data[g]=='\n') { d=0; a[i]=[up,op]; up=""; op=""; ++i; continue;}
	if(d==0) up+=data[g];
	if (d==1) op+=data[g];
	}
var address="_blank";
var search;
search=document.getElementById("search");
var i=0;
for (i;i<count;++i) {
	if (a[i][0].toUpperCase()==search.toUpperCase()) { address=a[i][1]; break;}
}
windows.location.href=address;
});
}
