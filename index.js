// /* Given Code, don't edit */

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(e) {
//   const timeString = document.getElementById('time').value
//   displayMessage(greet(timeString))
// }

// /* End Given Code, don't edit above here...*/

// /* Write your implementation of greet() */

// function greet(time){
//   let time1=time.split(":");
//   let time2=time1[0].concat(time1[1])
//   let lastTime=parseInt(time2,10)
//   if(lastTime<1200)
//   { return "Good Morning";}
//   else if ((lastTime>=1200) && (lastTime<=1700))
//   {return "Good Afternoon";}
//   else  if (lastTime>1700)
//   {return "Good Evening";}
// //<<<<<<< HEAD
//   else{return "TEST";}
// }
// /* Write your implementation of displayMessage() */
// let message=greet();

// function displayMessage(message)
// {
  
//   let ms=document.getElementById("greeting");
//   ms.innerHTML=message;
// //=======
//   else{return "Enter any Time";}
// }
// console.log(greet());
// /* Write your implementation of displayMessage() */
// function displayMessage(greet())
// {
//   let ms=document.getElementById("greeting");
//   ms.innerHTML=greet();
// >>>>>>> 33e9c4e220019f4fe54542d9902f5adfd6fa3943
// }

function greet(timeStr){
  let nowTime = timeStr.split(':');
  let nowHour = parseInt(nowTime[0]);
  if (nowHour<12){
    return "Good Morning";
  } else if (nowHour>17){
    return "Good Evening";
  }
  return "Good Afternoon";
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}