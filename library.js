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
        const message = document.createElement("p");
        message.id = "errorMessage";
        message.textContent = newBook.title + " exists in your library already";
        errorMessageSpace.appendChild(message);
        messageExists = true;
    }
    
}

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

submitButton.addEventListener('click', (book) =>{
    const titleExists = myLibrary.some(book => book.title.toLowerCase() === bookForm.title.value.toLowerCase());
    if (titleExists) {
        if(messageExists){
            const target = document.getElementById("errorMessage");
            target.remove();
            messageExists = false;
            modal.close();
            return
        }
        else{
            const message = document.createElement("p");
            message.id = "errorMessage";
            message.textContent = bookForm.title.value + " exists in your library already";
            errorMessageSpace.appendChild(message);
            messageExists = true;
            return

        }
    }
    else if(bookForm.author.value === ""|| bookForm.title.value === "" || bookForm.pages.value ===""){
        return
    }
    const newBook = new Book(bookForm.author.value, bookForm.title.value, bookForm.pages.value, bookForm.read.checked);
    addBookToLibrary(newBook);

    const books = document.querySelector('.books');
    const box = document.createElement("div");
    const bookInfo = document.createElement("p");

    const addedBook = myLibrary[myLibrary.length - 1]

    
    bookInfo.innerHTML = `<div class = delete> </div>`;
    bookInfo.innerHTML = `<strong>Author: </strong>`;
    bookInfo.appendChild(document.createTextNode(addedBook.author));
    bookInfo.innerHTML += `<br><strong>Title: </strong>`;
    bookInfo.appendChild(document.createTextNode(addedBook.title));
    bookInfo.innerHTML += `<br> <strong>Pages: </strong>`;
    bookInfo.appendChild(document.createTextNode(addedBook.pages));
    const readButton = document.createElement("button");
    readButton.textContent = addedBook.read ? "Read" : "Not Read";
    readButton.style.backgroundColor = addedBook.read ? "green" : "red";
    readButton.classList.add("read-button");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.classList.add("delete-button");

    readButton.addEventListener('click', function() {
        addedBook.read = !addedBook.read;
        readButton.textContent = addedBook.read ? "Read" : "Not Read";
        readButton.style.backgroundColor = addedBook.read ? "green" : "red";
    });

    deleteButton.addEventListener('click', function(){
        const index = myLibrary.findIndex(book => book.title === addedBook.title);
        console.log(index);

        if (index !== -1) {
            myLibrary.splice(index, 1);
        }
        this.closest('.book').remove();
    })

    bookInfo.appendChild(document.createElement("br"));
    bookInfo.appendChild(readButton);
    bookInfo.appendChild(document.createElement("br"));
    bookInfo.appendChild(deleteButton);

    box.classList.add("book");
    books.appendChild(box);
    box.appendChild(bookInfo);
}
)



