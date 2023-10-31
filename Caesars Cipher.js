function rot13(str) {
    let l = [];
    str = str.split(' ');
    for(let i =0;i<str.length;i++){//iterate words in str
      let sl = "";
      for(let j =0;j<str[i].length;j++){// iterate the character in words
        const isSymbol = /[^a-zA-Z]/.test(str[i][j]); // check if it a symbol using regex 
        if(isSymbol){
          sl+=str[i][j];// if it is a symbol just add it to the string 
        }
        else if(str[i][j].charCodeAt(0)>77){ //check for characters which go out of range when it is added with 13 
          let num = 13-(90-str[i][j].charCodeAt(0))+64;//logic for getting the ASCII number
          sl+=(String.fromCharCode(num));
        }
        else{
          sl+=(String.fromCharCode(str[i][j].charCodeAt(0)+13));//characters which are in range
        }
        
  
      }
      l.push(sl)  
    }
    return l.join(' ');
  }
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));//check with this example