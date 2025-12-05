let para= document.querySelector('p');
let character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let text=para.innerText;
let iteration=0;
para.addEventListener('mouseenter',()=>{

    setInterval(() => {
         const str=text.split('').map((char, index) => { 
            if(index < iteration){
                return char;
            }
        return character.split('')[Math.floor(Math.random() * 52)];
    }).join('');
        para.innerText = str;
        iteration +=0.2;
    },100)
   
})