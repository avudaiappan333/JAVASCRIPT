
       var name=prompt("enter name"); 
       var letters=["A","E","I","O","U","a","e","i","o","u"];
	var vowels=["a","u"];
	var consonants=[];
      
       for(let i=0;i<name.length;i++) {
              for(let j=0;j<letters.length;j++){
       
	if(name[i]==(letters[j])){
	     consonants.push(name[i]);
}
	}
            
}
 console.log(consonants);
    