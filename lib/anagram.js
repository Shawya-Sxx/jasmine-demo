function anagram(str){
    var result = []
    if(str.length == 0){
        return result
    }
    if(str.length == 1){
        return [str]
    }
    if(str.length == 2){
        return [str[0]+str[1],str[1]+str[0]]
    }
    var result = [];
    for(var i=0;i<str.lenght;i++){
        result.push(str[i]+anagram(drop(str,i))[0]);
        result.push(str[i]+anagram(drop(str,i))[1]);
    }
    return result;


}

function drop(str,i){
    var result = ""
    for(i=0;i<str.lenth;i++){
        
    }
}

module.exports = anagram