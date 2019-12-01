
// function myM(){

//     $('#apple1').sildeUp(300)
//     $('#apple1').sildeUp(300)
// }
// $('.apple').on('click', function(event){
//   const apple = $(event.target)
//   apple.animate({"top":"+=100"},"fast")
// });

setInterval(function(){
    const apple =$('.apple img')
    
// const random = appel.top.Math.random //TODO make random math 
   

    apple.each(function(index,element){
     //heightWindow
     const heightWindow = $(window).height()
     //heightRandom -100 to -200
     const heightRandom =  Math.round(Math.random() * -100) - 100
    
     //widthRandom
        const widthWindow=$(window).width()
        const widthRandom=Math.round(Math.random()* (widthWindow-20 ))
        // console.log(widthRandom)
        if (parseInt(element.style.top) > heightWindow){
            $(element).css({
                top:heightRandom,
                left:widthRandom
            })

        }else{
            apple.animate({"top":"+=100"},"fast")
        }
    })

  },1000)
//   const boy=$('.boy');

//   function moveLeft(){
//     boy.style.left=parseInt(boy.style.left)-5 +'px';

// function moveRight(){
//     boy.style.left=parseInt(boy.style.right)+5 +'px';
// }

// function moveSelection(){
//     evt = evt || window.event; 
//     switch (evt.keyCode){
//         case 37: //left arrow key
//             moveLeft();
//             break;
       
//         case 39: //right arrow key
//             moveRight();
//             break;
//         }				
//     };
const playBoy=$('.boy');
$(document).keydown (function(e){ 
    left=$(window).left
    right=$(window).right
    if (e.which == '37'){
        
    playBoy.finish().animate({"left":"-=50"},"faster")}
    else if (e.which == '39'){
    playBoy.finish().animate({"left":"+=50"},"faster")}
 })
