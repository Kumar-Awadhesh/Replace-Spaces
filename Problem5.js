function ReplaceSpaces(str){
    let arr=""
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            arr+="-"
        }
        else{
            arr+=str[i]
        }
    }
    return(arr)
}

let array=ReplaceSpaces("The quick brown fox jumps over the lazy dog")
console.log(array)