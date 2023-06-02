

let todos=[];
const add1=document.getElementById('btn').addEventListener('click', ()=>{
   
     const  val=document.getElementById('item').value;
     const item1=document.createElement('li');
     item1.textContent=val;
     let id1=new Date().getTime();
     
     item1.classList.add('list');
     item1.classList.add('id1');
     const list=document.getElementById('listItems');
    
      
     document.getElementById('item').value=" ";

     const item2=document.createElement('button');
     item2.textContent="Done";
     item2.classList.add('id1');
     item2.classList.add('todo');
     item1.appendChild(item2);
     list.appendChild(item1);
     call();
});
function call(){
const itemlist=document.getElementsByClassName('list');
console.log(itemlist.length);
for(let i=0;i<itemlist.length;i++){
     itemlist[i].addEventListener('click', ()=>{
          itemlist[i].firstElementChild.classList.add('hide');
          itemlist[i].classList.add('hide');
     })
}
}






