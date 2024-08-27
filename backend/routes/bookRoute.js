import { Router } from "express";
import { Book } from "../models/bookModel.js";
const router = Router();

router.get('/',async(req,res)=>{
  try {
    const books = await Book.find({});
    res.status(200).json({
      count:books.length,
      data:books
    })
  } catch (error) {
    console.error(error.message);
    res.status(500).send({message:error.message})
  }
})
router.post('/',async(req,res)=>{
  try {
    
    if(!req.body.title ||
      !req.body.price ||
      !req.body.publishYear||
      !req.body.author
    ){
      return res.status(400).send({
        message:'send all the fields title author and publishYear'
      })
    }

    const newBook = {
      title:req.body.title,
      author:req.body.author,
      price:req.body.price,
      publishedYear:req.body.publishYear
    }

    const bookCreated = await Book.create(newBook) ;
      return res.status(201).send(bookCreated)
  } catch (error) {
    console.log(error.message);
    res.status(500).send({message: error.message})
  }
})
router.get('/:id',async(req,res)=>{
  try {
    const {id} = req.params
    const book = await Book.findById(id);
    res.status(200).json(book)
  } catch (error) {
    console.error(error.message);
    res.status(500).send({message:error.message})
  }
})

router.put('/:id',async(req,res)=>{
  try {
    if(!req.body.title ||
      !req.body.price ||
      !req.body.publishYear||
      !req.body.author
    ){
      return res.status(400).send({
        message:'send all the fields title author and publishYear'
      })
    }
    const {id} = req.params
    const result = await Book.findByIdAndUpdate(id,req.body);
    if(!result){
      return res.status(404).json({message:'Book not found'});
    }else{
      return res.status(200).send({message:'Book updated successfully'})
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({message:error.message})
  }
})

router.delete('/:id',async(req,res)=>{
  try {
    const {id} = req.params;
    const deleted = await Book.findByIdAndDelete(id)
    if(!deleted){
      return res.status(404).json({message:'Book not found'})
    }else{
      return res.status(200).send({message:'Book deleted successfully'})
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({message:error.message})
  }
})



export default router;