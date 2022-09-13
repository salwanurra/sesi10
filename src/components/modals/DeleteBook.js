function DeleteBook({book, bookId, listBooks, setListBooks}) {

    const deleteBook = () => {
        const filteredBook = listBooks.filter((book) => (book.id !== bookId))
        setListBooks([...filteredBook])
        localStorage.setItem('books', JSON.stringify(filteredBook));
    }
    return (
        <div>
            <input type="checkbox" id="modalDelete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Are you sure to delete {book}?</h3>
                    <div className="modal-action flex justify-center">
                        <label htmlFor="modalDelete" className="btn bg-[#9a9595] text-white mr-3">Cancel</label>
                        <label htmlFor="modalDelete" className="btn bg-error text-white" onClick={deleteBook}>Delete</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBook;