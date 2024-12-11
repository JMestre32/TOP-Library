const myLibrary = [];

function Book(author, title, pages, read){

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook){
    const exists = myLibrary.find(book => book.title === newBook.title);
    if(!exists){
        myLibrary.push(newBook);
    } else {
        console.log(newBook.title + " exists in your library already");
    }
    
}

const book1 = new Book("Jeff Kinney", "Diary of a Wimpy Kid", 150, false);

addBookToLibrary(book1);


const addButton = document.querySelector('.add-button');
const modal = document.querySelector('.modal');


addButton.addEventListener('click', () =>{
    modal.showModal();
})