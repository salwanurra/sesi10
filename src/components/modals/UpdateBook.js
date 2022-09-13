import { useState } from "react";

function UpdateBook({book, setListBooks, listBooks, bookId}) {
    const [updateBook, setUpdateBook] = useState()

    const updateData = {book: updateBook, id: bookId}

    const saveUpdateBook = () => {
        const filteredBooks = listBooks.filter((book) => book.id !== bookId);
        setListBooks([updateData, ...filteredBooks])
        localStorage.setItem('books', JSON.stringify([updateData, ...filteredBooks]))
    }
    
    return (
        <div>
            <input type="checkbox" id="modalUpdate" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Book</h3>
                    <input type="text" placeholder="Name of Book" defaultValue={book} onChange={(e) => setUpdateBook(e.target.value)} className="input input-bordered input-accent w-full mt-3" />
                    <div className="modal-action">
                        <label htmlFor="modalUpdate" className="btn bg-[#9a9595] text-white">Cancel</label>
                        <label htmlFor="modalUpdate" onClick={saveUpdateBook} className="btn bg-accent text-white">Save</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateBook;