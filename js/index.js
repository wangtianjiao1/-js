
var slide=document.getElementById("slide").getElementsByTagName("div");
var timer=0;
var index=0;
var dots=document.getElementById("dots").getElementsByTagName("span");
var prev=document.getElementById('prev');
var next=document.getElementById('next');
function changImage(){
	var contain=document.getElementById("contain");
	contain.onmouseover=function(){
           if(timer)
           	clearInterval(timer);

	}
	contain.onmouseout=function(){
		timer=setInterval(function(){
			index++;
		    if(index>=slide.length){
			index=0;
		    }
		    slideImage();
		},2000)
        
	}
	contain.onmouseout();//使其不在区域内也可以自动切换图片
	// 圆点切换图片
    for(var j=0;j<dots.length;j++){
	       dots[j].id=j;
	       dots[j].onclick=function(){
                  index=this.id;
                  console.log(index);
                  this.className="dots-active";
                  slideImage();
	                              }
             }
    // 箭头切换事件
    
    prev.onclick=function(){
    	index++;
    	if(index>=slide.length){
    		index=0;
    	}
    	slideImage();
    }
   
    next.onclick=function(){
    	index++;
    	if(index>=slide.length){
    		index=0;
    	}
    	slideImage();
    }
 }


//图片滑动事件
function slideImage(){
	for(var i=0;i<slide.length;i++){
		slide[i].style.display="none";
		dots[i].className="";
	}
	slide[index].style.display="block";
	dots[index].className="dots-active";
}
changImage();

