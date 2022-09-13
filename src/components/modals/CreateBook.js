function CreateBook ({ setListBooks, listBooks,setBook, book, uuid}) {
    const createBook = () => {
        localStorage.setItem('books', JSON.stringify([...listBooks, { book: book, id: uuid }]))
        setListBooks([...listBooks, { book: book, id: uuid }])
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Create New Book</h3>
                    <input type="text" placeholder="Name of Book" onChange={(e) => setBook(e.target.value)} className="input input-bordered input-accent w-full mt-3" />
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn bg-[#9a9595] text-white">Cancel</label>
                        <label htmlFor="my-modal-6" onClick={createBook} className="btn bg-accent text-white">Save</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook;