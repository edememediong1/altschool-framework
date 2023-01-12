const express = require("express")

const bookRouter = express.Router()

const books = [
    {
        title: "No room for war",
        id: 1,
        year: 1890,
    },
    {
        title: "No room for voilence",
        id: 2,
        year: 1935,
    },
    {
        title: "The Catcher in the eye",
        id: 3,
        year: 1942
    },
]

booksRouter.get("/", (req, res)=> {
    res.json(books)
})

booksRouter.get("/:id", (req , res)=> {
    const id = req.params.id
    const book = books.find(book => book.id == id)

    if(!book){
        res.status(401).end("Book not found")
    } res.end(book)
})

booksRouter.post("/", (req , res) => {
    const body = req.body;

    if(!body){
        res.status(401).end("Cannot add Empty Article")
    }
    books.push(body)
    res.json(books)
})

booksRouter.put("/:id", (req , res) => {
    const id = req.params.id
    const book = req.body
    const index = books.findIndex(book => book.id == id)

    if(index == -1){
        res.status(401).end("Not supported ")
        return
    }
    books[index] = book
    res.json(book)

})

booksRouter.delete("/:id", (req, res)=>{
    const id = req.params.id
    const index = books.findIndex(book => books.id == id)

    if(index == -1){
        res.status(401).end(" Cannot Delete")
    }

    books.splice(index, 1)
    res.end(books)
})


modules.exports = booksRouter