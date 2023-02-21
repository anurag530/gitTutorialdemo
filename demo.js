//console.log('i love git')
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='hello';
//headerTitle.innerText='goodbye';
//console.log(headerTitle.innerText);
//header.style.borderBottom='solid 3px #000';
//document.getElementById("title").style.color = "green";
var items=document.getElementsByClassName('list-group-item');
console.log(items);
//console.log(items[1]);
//items[1].textContent='Hello 2';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
//items[1].style.fontWeight='bold';
items[2].style.backgroundColor='green';
//give error
//items.style.backgroundColor='#f4f4f4';

//for(var i=0;i<items.length;i++){
   // items[i].style.backgroundColor='#f4f4f4';
//}