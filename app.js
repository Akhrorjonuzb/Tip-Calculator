/* Selecting InnerHtml elements */
  const tipResult=document.querySelector('#tipResult');
const totalResult=document.querySelector('#totalResult');

let box=document.querySelector('.box');
  
const fifth=document.querySelector('.fifth');

/* Change one button background color onClick and revert previously clicked button to default background */
var buttons = document.querySelectorAll(".boxes");
 
 for (button in buttons) {
    buttons[button].onclick = function() {
        buttons.forEach(function(btn){
          btn.classList.remove('highlight');
        })
        this.classList.add('highlight');
    }
}

/* Fifth function */
function fifthFunction(){

fifth.addEventListener('click', function(){
  
  let input1 =document.querySelector('#label-input').value;
      let input2 = document.querySelector('#people-input').value;
        let result=input1 / input2;
        let data=result * 5 ;
        let finalObject=data / 100;
        let totalAmount=result + finalObject;

        totalResult.innerHTML="$" +  parseFloat(totalAmount).toFixed(2);
   tipResult.innerHTML="$" + parseFloat( finalObject).toFixed(2);

   


})

}
fifthFunction();

const tenth=document.querySelector('.tenth');

/* Tenth function */
function tenthFunction(){

tenth.addEventListener('click', function(){
  let input1 =document.querySelector('#label-input').value;
  let input2 = document.querySelector('#people-input').value;
    let result=input1 / input2;
    let data=result * 10 ;
    let finalObject=data / 100;
    let totalAmount=result + finalObject;

    totalResult.innerHTML="$" +  parseFloat(totalAmount).toFixed(2);
    tipResult.innerHTML="$" + parseFloat( finalObject).toFixed(2);

})

}
tenthFunction();

/* Fifteen function */
function fifteenFunction(){
const fifteen=document.querySelector('.fifteen');

fifteen.addEventListener('click', function(){
  let input1 =document.querySelector('#label-input').value;
  let input2 = document.querySelector('#people-input').value;
    let result=input1 / input2;
    let data=result * 15 ;
    let finalObject=data / 100;
    let totalAmount=result + finalObject;

    totalResult.innerHTML="$" +  parseFloat(totalAmount).toFixed(2);
    tipResult.innerHTML="$" + parseFloat( finalObject).toFixed(2);

})

}
fifteenFunction();
 
/* TwentyFive function */

function twentyFive(){
  const twentyFive=document.querySelector('.twentyFive');
  twentyFive.addEventListener('click', function(){
    let input1 =document.querySelector('#label-input').value;
    let input2 = document.querySelector('#people-input').value;
      let result=input1 / input2;
      let data=result * 25 ;
      let finalObject=data / 100;
      let totalAmount=result + finalObject;
  
      totalResult.innerHTML="$" +  parseFloat(totalAmount).toFixed(2);
      tipResult.innerHTML="$" + parseFloat( finalObject).toFixed(2);
  
  })

}
twentyFive();

/* Fifty function */

function fifty(){
  const fifty=document.querySelector('.fifty');
  fifty.addEventListener('click', function(){
    
    let input1 =document.querySelector('#label-input').value;
    let input2 = document.querySelector('#people-input').value;
      let result=input1 / input2;
      let data=result * 50 ;
      let finalObject=data / 100;
      let totalAmount=result + finalObject;
  
      totalResult.innerHTML="$" +  parseFloat(totalAmount).toFixed(2);
      tipResult.innerHTML="$" + parseFloat( finalObject).toFixed(2);
  
  })
}
  
fifty();


const reset=document.getElementById('reset');
reset.addEventListener('click', function(){
  // window.parent.location = window.parent.location.href;
  location.reload();
})