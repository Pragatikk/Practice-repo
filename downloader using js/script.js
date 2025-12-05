let btn=document.querySelector('button')
let inner=document.querySelector('.inner')
let h1=document.querySelector('h1')
  var num = 50 + Math.floor(Math.random()*50)
 console.log('Your file will be downloaded in',num/10,'seconds');


 let grow=0;
btn.addEventListener('click',function(){
   btn.style.pointerEvents = 'none'
        let int= setInterval(function(){
           grow++;
           h1.innerHTML=grow+'%'
           inner.style.width=grow+'%'
           
        },num)
     
        setTimeout(() => {
            clearInterval(int)
            btn.innerHTML='downloded'
            btn.style.opacity=0.5
        }, num*100);
})
