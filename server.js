const express = require("express")
const app = express()

const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.json())

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postid', routes.posts.updatePost)
app.delete('/posts/:postid', routes.posts.removePost)

app.get('/posts/:postid/comments' , routes.comments.getComments)
app.post('/posts/:postid/comments', routes.comments.addComment)
app.put('/posts/:postid/comments/:commentid', routes.comments.updateComment)
app.delete('/posts/:postid/comments/:commentid', routes.comments.removeComment)

app.listen(3000)