const myLibrary = [];

function Book(author, title, pages, read){

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

const errorMessageSpace = document.querySelector('.error-message-space');
let messageExists = false;

function addBookToLibrary(newBook){
    const exists = myLibrary.find(book => book.title === newBook.title);
    if(!exists){
        myLibrary.push(newBook);
    } else {
        console.log(newBook.title + " exists in your library already");
        const message = document.createElement("p");
        message.id = "errorMessage";
        message.textContent = newBook.title + " exists in your library already";
        errorMessageSpace.appendChild(message);
        messageExists = true;
    }
    
}

const book1 = new Book("Jeff Kinney", "Diary of a Wimpy Kid", 150, false);

addBookToLibrary(book1);


const addButton = document.querySelector('.add-button');
const modal = document.querySelector('.modal');


addButton.addEventListener('click', () =>{
    if(messageExists){
        const target = document.getElementById("errorMessage");
        target.remove();
        messageExists = false;
        modal.showModal();
    }
    else{
        modal.showModal();
    }
})

const submitButton = document.querySelector('.submit-button')
const bookForm = document.querySelector('.book-form')

submitButton.addEventListener('click', () =>{
    const newBook = new Book(bookForm.author.value, bookForm.title.value, bookForm.pages.value, bookForm.read.checked);
    addBookToLibrary(newBook);
})