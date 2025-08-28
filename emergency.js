//Heart count

function addHeartCount()
{
    let count=document.getElementById('HeartId')
    let CountPlus=parseInt(count.innerText)+1;

     count.innerText=CountPlus;

     
}

function ReduceStar(target)
{
     let starCount=  document.getElementById('star')
     let starCountInt=parseInt(starCount.innerText)
     let Service=target.parentNode.parentNode.childNodes[3];
        console.log(Service)

     if(starCountInt >=20)
     {
        starCount.innerText=starCountInt-20;

        let alertMassage=Service.childNodes;
        console.log(alertMassage)
        
       
        alert(`${alertMassage[1].innerText}
             
            Calling ${alertMassage[3].innerText} service ${alertMassage[5].innerText}... `

        )

        let history=document.createElement('div');
        history.innerHTML=`
        <div class=" flex justify-between items-center gap-1 my-2">
           <div><h4 class="font-bold">${alertMassage[1].innerText} </h4>
         <p class="text-gray-400">${alertMassage[5].innerText}</p></div>
           <div><p> something</p></div>
        </div>`
      
        let historyContainer=document.getElementById('History-container');
          
           historyContainer.appendChild(history)
     }
     else{
        alert('Sorry Cant call,You do not have enough star to call')
     }
}



let heartCount= document.querySelectorAll('.heart');

for (const heart of heartCount) {
     
    heart.addEventListener('click',function(){
        addHeartCount()
    })
}
 
//Call Section
let callHis= document.querySelectorAll('.callHistory')
console.log(callHis)

for (let call of callHis) {

  call.addEventListener('click',function(e){
        ReduceStar(e.target)
        console.log(e.target)
    })
    
}

//clear History

document.getElementById('clear-History').addEventListener('click',function(){
     
    const ClearHistory=document.getElementById('History-container')

    ClearHistory.innerHTML="";
})



