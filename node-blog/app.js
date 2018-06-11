/* app.js */

var app = require('express')()

var posts = [
    {
        id: 1,
        author: 'Dr. Li',
        title: 'The Treatment of Cancer',
        body: 'Blog post number 1'
    },
    {
        id: 2,
        author: 'Suki Sun',
        title: 'The Best 10 Receipes of Chinese Food',
        body: 'Blog post number 2'
    },
    {
        id: 3,
        author: 'Mindy Li',
        title: 'How to Be a Good Software Developer',
        body: 'Blog post number 3'
    },
]

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // render `home.ejs` with the list of posts
    res.render('home', { posts: posts })
})

app.get('/post/:id', (req, res) => {
    // find the post in the `posts` array
    var post = posts.filter((post) => {
        return post.id == req.params.id
    })[0]

    res.render('post', {
        author: post.author,
        title: post.title,
        body: post.body
    })
})

app.listen(8080)

console.log('listening on port 8080')