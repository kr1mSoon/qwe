//1
console.log("#")
console.log("##")
console.log("###")
console.log("####")
console.log("#####")
console.log("######")
console.log("#######")
//2
let i = 45;
while (i <= 67) {
console.log(i);
i++
}
//3
let u = 45;
while (u <= 670) {
    if(u % 10 == 0){
console.log(u);
    }
u++
}
//4
 for (let i = 45; i <=67; i++) {
    console.log(i)
 }
 //5
 for (let i = 45; i <=670; i++) {
 if(i % 10==0){
    console.log(i)
 }
 }
 //6
let a =Number (prompt("vvedite  chislo"))
for(i=0;i<a;i++){
    i+=a
}
alert(i)
//6
function ask(a,b){
    a= +prompt("1 chislo")
    b= +prompt("2 chislo")
    switch(a , b){
        case(a && b % 2==0):
        alert(a+b);
        break;
        case(a && b % 2!==0):
        alert(a-b);
        break;
        case(a % 2!==0):
        alert(a);
        break;
        case(b % 2!==0):
        alert(b);
        break;
    }
}
//7
function Prinimaet(r,g,b){
    switch(r,g,b){
    case(r == null , g == null , b == null):
    alert("0,0,0");
    break;
    default:
    alert(r + "," + g + "," + b);
    break;
}
}
function rgb(){
    r= +prompt("1 chislo")
    g= +prompt("2 chislo")
    b= +prompt("3 chislo")
}
//8
function mul (){
    n= +prompt("1 chislo")
    m= +prompt("2 chislo")
 alert(n+m)
} 
    