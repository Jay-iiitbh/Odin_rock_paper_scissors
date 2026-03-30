   alert("Hello user!\nLet's play a Game of Rock-Paper-Scissors!\n");

   /* for this game let the following representation work
        0 == rock;
        1 == paper;
        2 == scissors; */

   let hum_point=0;
   let comp_point=0;
   alert('Rules!!\nEnter "rock" / "paper" / "scissor" only\nThe input is case sensitive\n');
   let p=prompt(" Enter number of rounds you want to play: ");

   function hum_choice(){
        let a=prompt("enter your choice for this round: \n");
        if(a=="rock") return 0;
        else if (a=="paper") return 1;
        else if(a=="scissor") return 2;
        else { alert(" invalid choicer , enter again");
               return hum_choice();
        }
   }     
  
   function comp_choice(){
        let n=3;
        return Math.floor(Math.random()*n);
   }
    function round(){

        let h=hum_choice();
        let c=comp_choice();

        if(h==c){
            alert("Draw!\n");
            alert(`current score is ${hum_point} wins , ${comp_point} lost`);
        }
        else if (c==0){
            if(h==1){
                alert("You win! \n");
                hum_point++;
                alert(`current score is ${hum_point} wins , ${comp_point} lost`);
            }
            if(h==2){
                alert("You lost! \n");
                comp_point++;
                alert(`current score is ${hum_point} wins , ${comp_point} lost`);
            }
        }
        else if (c==1){
            if(h==2){
                alert("You win! \n");
                hum_point++;
                alert(`current score is ${hum_point} wins , ${comp_point} lost`);
            }
            if(h==0){
                alert("You lost! \n");
                comp_point++;
                alert(`current score is ${hum_point} wins , ${comp_point} lost`);
            }
        }
        else if (c==2){
            if(h==0){
                alert("You win! \n");
                hum_point++;
                alert(`current score is ${hum_point} wins , ${comp_point} lost`);
            }
            if(h==1){
                alert("You lost! \n");
                comp_point++;
                alert(`current score is ${hum_point} wins , ${comp_point} lost`);
            }
        }
   }

   for(i=0;i<p;i++){
     round();
   }

   alert(`Game ended!\nThe final scores are \nwins ${hum_point}\nlost ${comp_point}\n`);
   if(hum_point>comp_point){
    alert("You won the Game!");
   }
   else if(hum_point<comp_point){
    alert("You Lost the game! ");
   }
   else alert("The game ended in a draw!");

   alert("Thanks you for playing\nPress ctrl+R to play again");


   

   