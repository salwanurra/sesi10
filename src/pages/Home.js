import { useEffect, useState } from 'react';
import axios from "axios"
import UpdateBook from '../components/modals/UpdateBook';
import DeleteBook from '../components/modals/DeleteBook';
import CreateBook from '../components/modals/CreateBook';

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16;//random number between 0 and 16
    if(d > 0){//Use timestamp until depleted
      r = (d + r)%16 | 0;
      d = Math.floor(d/16);
    } else {//Use microseconds since page-load if supported
      r = (d2 + r)%16 | 0;
      d2 = Math.floor(d2/16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function Home() {
    const api = `https://jsonplaceholder.typicode.com/albums`
    let dataStorage = localStorage.getItem('books')
    const [listBooks, setListBooks] = useState([])
    const [book, setBook] = useState()
    const [bookId, setBookId] = useState()

    const modalBook = (i) => {
        setBook(i.title);
        setBookId(i.id)
    }

    useEffect(() => {
        const getProducts = async() => {
          try {
            const response = await axios.get(api)
            setListBooks(response.data);
            
          } catch (e) {
            // silent e
          }
        }
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      localStorage.setItem("book", JSON.stringify(listBooks))
    // console.log(listBooks)
  return (
    <div className="w-4/5 mx-auto py-8">
      <div className='flex justify-between'>
        <h1 className='text-[20px] font-bold text-white'>Book List Home</h1>
        <label htmlFor="my-modal-6" onClick={() => setBook(null)} className="btn modal-button">+ Add Book</label>
      </div>
      <div>
        {listBooks?.map((i) => (
          <div key={i.id} className="border border-info flex justify-between items-center p-4 my-4 rounded-md">
            <div>
              <h3>{i.title}</h3>
            </div>
            <div className='flex'>
              <label htmlFor="modalUpdate" onClick={() => modalBook(i)} className="btn modal-button mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="hsl(var(--a))" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </label>

              <label htmlFor="modalDelete" onClick={() => modalBook(i)} className="btn modal-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="hsl(var(--er))" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </label>
              <DeleteBook 
                book={book} 
                bookId={bookId} 
                setListBooks={setListBooks} 
                listBooks={listBooks} 
              />
            </div>
          </div>
        ))}
      </div>
      <CreateBook
        setListBooks={setListBooks}
        listBooks={listBooks}
        setBook={setBook}
        book={book}
        uuid={generateUUID()}
      />
      <UpdateBook 
        book={book} 
        setListBooks={setListBooks} 
        listBooks={listBooks} 
        bookId={bookId} 
      />
    </div>
  );
}

export default Home;
