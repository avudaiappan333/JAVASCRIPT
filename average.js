
       var count=Number(prompt("HOW MANY NUMBERS WILL YOU EXPECT IN THE ARRAY"));
     var array=[];   
    var total=0;
               for (let j=0;j<count;j++){
	       var number=Number(prompt("enter the number"));
                      array[j]=number;
 	}
	console.log(array);
 
	for(let i=0; i<array.length;i++){
	         total=(total+array[i]);
	}
       console.log(array.length);
      console.log(total/array.length);
	