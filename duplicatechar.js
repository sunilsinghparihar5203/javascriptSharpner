const string = "This is a test string. aaaa"

const myobject = {};
function duplicateChecker(str) {
  for (let i = 0; i < str.length; i++) {
    
    if(myobject[str[i]]){
      myobject[str[i]] +=  1
    }else{
      myobject[str[i]] =  1
    }
  }

  for(const key in myobject){
    if(myobject[key] > 1 && key!=" " ){
      console.log(`${key} exists ${myobject[key]} times \n `)
    }
  }

}

duplicateChecker(string)