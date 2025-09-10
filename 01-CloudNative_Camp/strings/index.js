let txt = 'Hello';
let txt2 = "world";

console.log(txt + ' ' + txt2);

console.log(txt + 10);

let txt3 = "Call Marely do not Call Emily";
console.log(txt3.length);

console.log(txt3.indexOf("Marely"));

console.log(txt3.lastIndexOf("Call"));

let txt4 = "call Harley don not call Emily. call Ramzy do not call Magdy";

let index = -1;
for(let i=0; i<txt4.length; i++){
    index = txt4.indexOf("call" , i);
    if(index === -1) break;
    i = index;
    console.log(index);
}

console.log(txt4.search("Harley"));
console.log(txt4.charAt(5));

console.log(txt4.substring(5, 11));

console.log(txt4.replace(/\s/g, '-'));

