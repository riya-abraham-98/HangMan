let userWord = "GERMANY";

let userWordArray = userWord.split('');
console.log(userWordArray);

// create Hyphens

userWordArray.forEach((e ,index)=>
{
 let guess = document.createElement("p");
 guess.innerHTML="_";
 let guessAnswer = document.getElementById("guessAnswer");
 guessAnswer.append(guess);
 guess.style.display="inline"
 guess.style.margin="30px";
 
 guess.id=index;
 
 }

)




//event Listener

let letters = document.getElementsByClassName("letters");

let lettersArray = Array.from(letters);

let alphabets;

lettersArray.forEach((e)=>{
    e.addEventListener("click",()=>{
        alphabets = e.innerText;
        
      
        Guess();
    })
})

   let count = 5 ;
   let hearts = document.getElementsByClassName("hearts");
   
   let heartsArray = Array.from(hearts);
   console.log(heartsArray);
   

//Guess .

function Guess(){
   if( userWordArray.includes(alphabets)){




       userWordArray.forEach((element,index)=>{
        if(element===alphabets)
        {
            let indexValue = String(index);
            console.log(indexValue);
            document.getElementById(`${indexValue}`).innerHTML=element;

        }
       })
         
        
   }
   
   
   if( !userWordArray.includes(alphabets)){

    
    count--;
    console.log(`count ${count}`);
    let heartsId = heartsArray[count].id;
    console.log("elseif inner"+heartsId);
    document.getElementById(`${heartsId}`).innerHTML="";

  
}

if(count==0)
{
    document.getElementById("container").innerHTML="YOU LOST SORRY :(";
}

}


let start = document.getElementById("start");
start.onclick=function(){

    document.getElementById("container").style.display="flex";
    document.getElementById("startpage").style.display="none";

}



