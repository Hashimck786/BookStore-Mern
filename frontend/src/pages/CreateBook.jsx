import React, {useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useSnackbar } from 'notistack';

const CreateBook = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [price,setPrice] = useState('');
  const [publishYear,setPublishYear] = useState('');
  const [loading,setLoading] = useState(false);
  const {enqueueSnackbar} = useSnackbar()
  const navigate = useNavigate();
  const handleSaveBook = ()=>{
    setLoading(true);
    const book = {
      title,
      author,
      price,
      publishYear,
    }
    axios.post('http://localhost:5005/books',book)
    .then(()=>{
      setLoading(false);
      console.log('created successfully')
      enqueueSnackbar('Book created Successfully',{variant: 'success'})
      navigate('/');
    }).catch(err=>{
      console.log(err);
      enqueueSnackbar('Error',{variant: 'error'})
      setLoading(false)
    })
  } 
  return (
    <div className='p-4'>
    <BackButton />
    <h1 className='text-3xl my-4'>Create Book</h1>
    {loading ? <Spinner /> : ''}
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Author</label>
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full '
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Price</label>
        <input
          type='text'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full '
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
        <input
          type='number'
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full '
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
        Save
      </button>
    </div>
  </div>
  )
}

export default CreateBook
