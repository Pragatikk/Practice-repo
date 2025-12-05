let arr=[
    "My name is Pragati!!",
    "Practice makes man perfect",
    "JS is Love",
    'Everything is Possible'
]

let main=document.querySelector('main')
let btn=document.querySelector('button')



btn.addEventListener('click',function(){

    let a= Math.floor(Math.random()*arr.length)
let x=Math.random()*70
let y=Math.random()*70
let rotate=Math.random()*360
let scl=Math.random()*3

let c1=Math.floor(Math.random()*256)
let c2=Math.floor(Math.random()*256)
let c3=Math.floor(Math.random()*256)
  let h1= document.createElement('h1')
    main.appendChild(h1)
    h1.innerHTML=arr[a]
    h1.style.position='absolute'
    h1.style.left=x+'%'
    h1.style.top=y+'%'
    h1.style.rotate=rotate+'deg'
    h1.style.scale=scl
    h1.style.color=`rgb(${c1},${c2},${c3})`
})