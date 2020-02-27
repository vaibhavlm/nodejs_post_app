const store = require('./store')
//const {check, vr} = require('express-validator')

module.exports.istext = (p, callback)=>{
 if(typeof p !== "string"){
 callback("the data is not a string") 
 return false
}
// if(p.trim()==""){
// callback("the string is empty")
// return false
// }
return true
}


module.exports.ispost = (postid , callback)=>{
     if(!store.posts[postid]){
     callback("the post doesnt exist")
     return false
}
return true
}

module.exports.iscomment = (commentid, postid, callback)=>{
    if(!store.posts[postid].comments[commentid]){
        callback("the comment doesnt exist")
        return false
    }
    return true
}

