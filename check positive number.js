
    function positive(){
         var arr=Number(prompt("enter array length"));
        var array=[];
         for(let i=0;i<arr;i++){
                var number=Number(prompt("enter the number"));
	
                if(number>0){
                    array.push(number);
               } 


          }	
 	console.log("Array=>",array);
	
    }
positive();