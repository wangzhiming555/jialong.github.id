
   let num=0,next=0;
   let width=$('.bannertu').eq(0).width();
   console.log(width);
   let t=setInterval(move,2000);
   let flag=true;
   $('.bannertu').css('left',`${width}px`);
   $('.bannertu').eq(0).css('left',0+'px');
   $('.diandian').first().css('background','#e40077');
   function move(type='l'){
      if(type=='l'){
         flag=false;
         next++;
         if(next==$('.bannertu').length){
            next=0;
         }
         $('.bannertu').eq(num).animate({left:-width},function(){
            $(this).css('left',`${width}px`);
         });
         $('.bannertu').eq(next).animate({left:0},function(){
            flag=true;
            $('.diandian').eq(next).css('background','#e40077').siblings().css('background','#bbb');
         })
         num=next;
      }
      else if(type=='r'){
         flag=false;
         next--;
         if(next<0){
            next=$('.bannertu').length-1;
         }
         $('.bannertu').eq(num).animate({left:width},function(){
            $(this).css('left',`${-width}px`);
         })
         $('.bannertu').eq(next).animate({left:0},function(){
            flag=true;
            $('.diandian').eq(next).css('background','#e40077').siblings().css('background','#bbb');
         });
         num=next;
      }
   }
   $('.bannerleft').click(function(){
      if(flag){
         move('r');
      }
   })
   $('.bannerright').click(function(){
      if(flag){
         move('l');
      }
   })
   $('.bannerk').mouseover(function(){
      clearInterval(t);
   }).mouseout(function(){
      t=setInterval(move,2000);
   })
   $('.diandian').click(function(){
      flag=false;
      let index=$(this).index();
      if(index>num){
         $('.bannertu').eq(num).css('left',0).animate({left:-width});
         $('.bannertu').eq(index).css('left',`${width}px`).animate({left:0},function(){
            $('.bannertu').eq(num).css('left',`${width}px`);
            $('.diandian').eq(index).css('background','#e40077').siblings().css('background','#bbb');
            flag=true;
            num=index; next=index;
         });
      }
      else if(index<num){
         $('.bannertu').eq(num).css('left',0).animate({left:width});
         $('.bannertu').eq(index).css('left',`${-width}px`).animate({left:0},function(){
            $('.bannertu').eq(num).css('left',`${width}px`);
            $('.diandian').eq(index).css('background','#e40077').siblings().css('background','#bbb');
            flag=true;
            num=index; next=index;
         })
      }
      else{
         return;
      }
   })

   $('.xzhuafei li').eq(1).css('background','#e40077');
   $('.xzhuafei li').click(function(){
      $(this).css('background','#e40077').siblings().css('background','');
   })
   let t1=setInterval(move1,2000);
   let width1=$('.lunbotu').eq(0).width()+10;
   console.log(width1);
   let flag1=true;
   function move1(type='l'){
      if(type=='l'){
         flag1=false;
         $('.yhcx1').animate({left:-width1},function(){
            let first=$(this).find('.lunbotu').first();
            let last =$(this).find('.lunbotu').last();
            first.insertAfter(last);
         $(this).css('left',0+'px');
         flag1=true;
      });
      }
      else if(type=='r'){
         flag1=false;
         let first=$('.lunbotu').first();
         let last=$('.lunbotu').last();
         first.insertBefore(last);
         $('.yhcx1').css('left',`${-width}px`).animate({left:0},function(){
            flag1=true;
         });
      }
   }
   $('.lunboleft').click(function(){
      if(flag1){
         move1('r');
      }
   }).next().click(function(){
      if(flag1){
         move1();
      }
   })
   $('.yhcx').mouseover(function(){
      clearInterval(t1);
   }).mouseout(function(){
      t1=setInterval(move1,2000);
   })

   let t2=setInterval(move2,2000);
   // let width2=$('.ggbannerbox').eq(0).width;
         
   function move2(type='l'){
      if(type=='l'){
         $('.ggbannertu').eq(0).appendTo($('.ggbannerbox'));
      }
      else if(type=='r'){
         let ind=$('.ggbannertu').length;
         $('.ggbannertu').eq(ind-1).insertBefore($('.ggbannertu').eq(0));
      }
   }
   $('.gonggao').mouseover(function(){
      clearInterval(t2);
   }).mouseout(function(){
      t2=setInterval(move2,2000);
   })
   $('.zuozuo').click(function(){
      move2('r');
   }).next().click(function(){
      move2();
   })