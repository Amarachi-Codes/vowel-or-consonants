function winner(str,vowels,consonants){
    let sumVow = 0;
    let sumCon = 0;
    for(let i=0; i<str.length; i++){
        for(let j=0; j< vowels.length; j++){
            if(str.charAt(i) === vowels.charAt(j)){
                sumVow++
            }
        }for(let k=0; k< consonants.length;k++){
            if(str.charAt(i) === consonants.charAt(k)){
                sumCon++
            }
        } if(sumCon > sumVow){
            return "consonant"
        }if(sumVow > sumCon){
            return "vowels"
        } 
            return "draw"
        
        }
    }console.log(winner("mike","aeiou","b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z"))