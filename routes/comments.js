const store =require('./store')
const check = require('./validator')

module.exports = {
    getComments(req, res) {
        if(!check.ispost(req.params.postid, (e)=> res.status(401).send(e))) return
      res.status(201).send(store.posts[req.params.postid].comments)
    }, 
    addComment(req, res) {
        let errorcallback = (e)=> res.status(401).send(e)
        if(!check.ispost(req.params.postid, errorcallback)) return
       // if(!check.istext(req.body.text, errorcallback)) return
        let newComment = req.body.text
       let commentarr = store.posts[req.params.postid].comments
       id = commentarr.length
       console.log(JSON.stringify(req.body, 2));
       
        commentarr.push(newComment)
        res.status(201).send({id: id})
    },
    updateComment(req, res) {
        let errorcallback = (e)=> res.status(401).send(e)
        if(!check.ispost(req.params.postid,errorcallback)) return
        if(!check.iscomment(req.params.commentid, req.params.postid, errorcallback)) return
       // if(!check.istext(req.body.text, errorcallback)) return
        store.posts[req.params.postid].comments[req.params.commentid] = Object.assign(store.posts[req.params.postid].comments[req.params.commentid], req.body)
        res.status(201).send()
    },
    removeComment(req, res) {
        let errorcallback = (e)=> res.status(401).send(e)
        if(!check.ispost(req.params.postid, errorcallback)) return
        if(!check.iscomment(req.params.commentid, req.params.postid, errorcallback)) return
        store.posts[req.params.postid].comments.splice(req.params.commentid, 1)
        res.status(201).send()
    }  
  }