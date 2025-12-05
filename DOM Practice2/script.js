var arr=[
    {
       team:'RCB',
       primary:'red',
       secondary:'black'
    },
    {
       team:'CSK',
       primary:'yellow',
       secondary:'blue'
    },
    {
       team:'MI',
       primary:'royal blue',
       secondary:'gold'
    }
    ,{
        team:'SRH',
       primary:'orange',
       secondary:'black'
    },
    {
        team:'GT',
       primary:'pink',
       secondary:'orange'
    }
]
  

let h1=document.querySelector('h1');
let btn=document.querySelector('button');
let main=document.querySelector('body');

btn.addEventListener('click',function(){
   var winner = arr[Math.floor(Math.random()*arr.length)]
   h1.innerHTML=winner.team
   h1.style.backgroundColor=winner.primary

   main.style.backgroundColor=winner.secondary
})