const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res){
    let allBookList= await BookModel.find().select({bookName:1,authorName:1,_id:0}) 
    res.send({msg: allBookList})
}

const getBooksInYear = async function (req, res){
    let allBookYear = await BookModel.find().select(year)
    res.send({msg: allBookYear})
} 
  
module.exports.createBook= createBook
module.exports.bookList = bookList 
module.exports.getBooksInYear = getBooksInYear   