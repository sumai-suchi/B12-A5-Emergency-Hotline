//Heart count

function addHeartCount() {
    let count = document.getElementById('HeartId')
    let CountPlus = parseInt(count.innerText) + 1;

    count.innerText = CountPlus;


}

function ReduceStar(target) {
    let starCount = document.getElementById('star')
    let starCountInt = parseInt(starCount.innerText)
    let Service = target.closest(".card");
    console.log(Service)
   let title=Service.querySelector("h1").innerText;
   let serviceName=Service.querySelector("h2").innerText;
   let number=Service.querySelector("p").innerText;
   console.log(title,serviceName,number)
    // console.log(Service.children)

    if (starCountInt >= 20) {
        starCount.innerText = starCountInt - 20;

    


       alert(`${serviceName}
             
            Calling ${title}  ${number}... `

        )
           let now = new Date();
             let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        let history = document.createElement('div');
        history.innerHTML = `
        <div class="w-full flex justify-between items-center gap-1 my-2">
           <div class="w-4/6"><h4 class="font-bold">${title} </h4>
         <p class="text-gray-400">${number}</p></div>
           <div class="w-2/6"><p>${currentTime}</p></div>
        </div>`

       
      

        
let historyContainer = document.getElementById('History-container');

        historyContainer.appendChild(history)
    }
    else {
        alert('Sorry Cant call,You do not have enough star to call')
    }
}



let heartCount = document.querySelectorAll('.heart');

for (const heart of heartCount) {

    heart.addEventListener('click', function () {
        addHeartCount()
    })
}

//Call Section
let callHis = document.querySelectorAll('.callHistory')
console.log(callHis)

for (let call of callHis) {

    call.addEventListener('click', function (e) {

        e.preventDefault();
     
        ReduceStar(e.target)
        console.log(e.target)
    })

}

//clear History

document.getElementById('clear-History').addEventListener('click', function () {

    const ClearHistory = document.getElementById('History-container')

    ClearHistory.innerHTML = "";
})

//copy section


let copies = document.getElementsByClassName('copy-btn');

for (let copy of copies) {

    copy.addEventListener('click', async()=> {
        alert('Information has been copied')
        let copyCount = document.getElementById('copyCount');
        let copyCountInt = parseInt(copyCount.innerText);
        copyCount.innerText = copyCountInt + 1;
    
       let card=copy.closest('.card');
       console.log(card)
       const textItem=card.querySelector(".copy-num") 
       console.log(textItem)
       const text=textItem.innerText;

       try {

        await navigator.clipboard.writeText(text)
     
        
       } catch (error) {
        
           const t=document.createElement('textarea');
        t.value=text;
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t)

       }



    })

}

//Copy paste section

// let copyItem=document.getElementsByClassName('copy-btn')
// console.log(copyItem,'hello')

// for (const copy of copyItem) {

    
// }
