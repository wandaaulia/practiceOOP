function find(lines) {
       
    let arr = [];
    for(let i = 1; i < lines.length; i++ ) {
        let oneNum= "";
    
       
        let a = lines[i].split("");
    
        for(let j = 0; j < a.length; j++) {
            if(a[j] != ' ') {
                oneNum += a[j];
              }
        }
        
    
    
    
        let itu = Number(oneNum);
    
        arr.push(itu);
        
       }

   let findMax = Math.max(...arr);

   console.log(findMax);
   console.log(findMax.length);


   

}

find(["1", "3"]);