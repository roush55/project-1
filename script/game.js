let sec =15;
let point = 0
$(function(){
 let start = false;

   const startGame = function(){ //THE GAME START HERE
        setTimeout(function(){
            if(point >= 4){
                alert('You Won (: ')      
            }
            else {
                alert("Try again ): ")
            }
        }, sec*1000 + 1000)//THIS FUNCTION WILL RUN AFTER THE TIME FINISH 

        const timer = setInterval(function(){ 
            sec--;
            $("#time").text(sec)
            if(sec <= 0){
                clearInterval(dropApple);
                clearInterval(timer)
                if(point >= 25){
                   
                }
                else {
                    
                }
            }
        }, 1000);
             
            const dropApple = setInterval(function(){
                const apple =$('.apple img')
                apple.each(function(index,element){
                //heightWindow
                const heightWindow = $(window).height()
                //heightRandom -100 to -200
                const heightRandom =  Math.round(Math.random() * -100) - 100
                
                //widthRandom
                    const widthWindow=$('#contanier').width()
                    const widthRandom=Math.round(Math.random()* (widthWindow-10 ))
                    // console.log(widthRandom)
                    if (parseInt(element.style.top) > heightWindow){
                        $(element).css({
                            top:heightRandom,
                            left:widthRandom
                        })

                    }else{
                        apple.animate({"top":"+=70"},"fast")
                    }
                    if( collision(element,$('#boy')) === true ){
                        console.log('touched it (: ')
                        gamePoint();
                         
                        
                        
                        
            
                    }
                })


            },400)
            const playBoy=$('.boy');
            
    
            const maxLeft = $('#contanier').width()-playBoy.width();
           
            //this is the boy
           //const widthWindow=$('contanier').width()
          
            $(document).keydown (function(e){ 
               
                
                    if (e.which == '39' && playBoy.position().left < maxLeft){
                        
                            
                        
                playBoy.finish().animate({"left":"+=40px" },90)}
                
                 if (e.which == '37' && playBoy.position().right !== maxLeft){
                    
                    
                playBoy.finish().animate({"left":"-40px" },100)}
                
                
            })

            //select the left div
            let leftArrow =$('#left')
            
            leftArrow.on('touchstart',function(){
                if(playBoy.position().right !== maxLeft){
                playBoy.finish().animate({"left":"-40"},50)}
            })


            //select the right div
            let rightArrow =$('#right')
            
            rightArrow.on('touchstart',function(){
                if (playBoy.position().left < maxLeft){
                playBoy.finish().animate({"left":"=+90"},50)}
            })



            // function collision START HERE
            function collision(firstElment,secondElement){
                // console.log('collision starting...')
                // First element
                let x1 = $(firstElment).offset().left
                let y1 = $(firstElment).offset().top
                let h1 = $(firstElment).outerHeight(true);
                let w1 = $(firstElment).outerWidth(true);
                let b1 = y1 + h1;
                let r1 = x1 + w1;
                // Second element
                let x2 = $(secondElement).offset().left
                let y2 = $(secondElement).offset().top
                let h2 = $(secondElement).outerHeight(true);
                let w2 = $(secondElement).outerWidth(true);
                let b2 = y2 + h2;
                let r2 = x2 + w2;
                if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
                    return false
                }

                return true;
            }

            const fElement = $('#apple1')
            const sElement = $('#boy')
            collision(fElement,sElement)
            // function collision END HERE




            function gamePoint(){
            point++;
            let pointE=$('#point');
                pointE.text(point);
            
            }

    } //THE GAME END HERE


    setTimeout(startGame,1000)

    
})




