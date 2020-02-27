const store = require('./store')
const check = require('./validator')

module.exports = {
    getPosts(req, res) {
     res.status(201).send(store.posts)
    },
    addPost(req, res) {
  if(!check.istext(req.body.name, (e)=>res.status(401).send(e))||!check.istext(req.body.url, (e)=>res.status(401).send(e))||!check.istext(req.body.text, (e)=>res.status(401).send(e))) return
  let newPost = req.body
  id = store.posts.length
  store.posts.push(newPost)
  res.status(201).send({id: id})
    },
    updatePost(req, res) {
  if(!check.ispost(req.params.postid)) return
  if(!check.istext(req.body.name, (e)=>res.status(401).send(e))||!check.istext(req.body.url, (e)=>res.status(401).send(e))||!check.istext(req.body.text, (e)=>res.status(401).send(e))) return
    store.posts[req.params.id] = req.body
    res.status(201).send(store.posts[req.params.postid])
    },
    removePost(req, res) {
  store.posts.splice(req.params.postid, 1)
  res.status(201)
    }
  }