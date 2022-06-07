const AuthorModel= require("../models/authorModel");
const BookModel= require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    if(!data.author_id){
        return res.send({ msg: "author_id is required"})
    }
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})

}

    const createBook= async function (req, res) {
    let data= req.body
    if(!data.author_id){
        return res.send({ msg: "author_id is required"})
    }
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

    const writtenByChetanBhagat = async function (req, res){
    let data = await AuthorModel.find({ authorName: "Chetan Bhagat" }).select ("author_id")
    let bookData = await BookModel.find({author_id: data[0].author_id})
    res.send({ msg: bookData})
}



module.exports.createAuthor = createAuthor
module.exports.createBook= createBook
module.exports.writtenByChetanBhagat= writtenByChetanBhagat