
    var tamil=Number(prompt("TAMIL MARK"));
    var english=Number(prompt("ENGLISH MARK")); 
    var maths=Number(prompt("MATHS MARK")); 
    var science=Number(prompt("SCIENCE MARK"));
    var social=Number(prompt("SOCIAL MARK")); 
    let sub=[tamil,english,maths,science,social];

    var total=tamil+english+maths+science+social;
    var avg=total/5;
    console.log("TAMIL MARK",tamil);
    console.log("english MARK",english);
    console.log("maths MARK",maths);
    console.log("science MARK",science);
    console.log("social MARK",sub);
    

    console.log("percentage:",avg);
    if (avg>=90){
       
        document.getElementById("op3").innerText+="FIRST CLASS";
    } else if (avg>=50){
        console.log("second CLASS");
    } else if (avg>=35){
        console.log("third CLASS");
    }
     else {
        console.log(" fail");
    }