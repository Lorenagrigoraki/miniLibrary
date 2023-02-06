const form = document.querySelector('form');
let library = [];
let book;
let submitBtn = document.getElementById('submitBtn');

class NewBook{
   constructor(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}


function render() {
  const display = document.getElementById('libraryContainer');
  const books = document.querySelectorAll('.bookCard');
  books.forEach(book => display.removeChild(book));
  createCard();
};

submitBtn.onclick = function (evt) {
  evt.preventDefault();
  addBookToLibrary();
  render()
  deleteForm()
};


function addBookToLibrary(){
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  book = new NewBook(title, author, pages);
  if(title.length != 0 && author.lenght !=0 && pages.lenght != 0){
    library.push(book);
  }else{
    window.alert('You forgot something to fill the gaps in form!')
  }
  
}

function createCard(){
  library.forEach((el,i) => {
    const libraryContainer = document.getElementById('libraryContainer');
    let bookCard = document.createElement('div');
    bookCard.className = 'bookCard'; 
    bookCard.setAttribute('id', i)

    let parTitle = document.createElement('p');
    parTitle.className = 'parTitle';
    let parAuthor = document.createElement('p');
    parAuthor.className = 'parAuthor';
    let parPages = document.createElement('p');
    parPages.className = 'parPages';
    let removeBtn = document.createElement('button');
    removeBtn.className = 'removeBtn';
    removeBtn.innerHTML = 'Remove';

    parTitle.innerHTML = `Title: ${el.title}`;
    bookCard.appendChild(parTitle);
    parAuthor.innerHTML = `Author: ${el.author}`;
    bookCard.appendChild(parAuthor);
    parPages.innerHTML = `Pages: ${el.pages}`;
    bookCard.appendChild(parPages);
    bookCard.appendChild(removeBtn);

    libraryContainer.appendChild(bookCard);   

    removeBtn.addEventListener('click', () => {
      library.splice(i,1);
      console.log(library)
      render()
  });
    })
  }

  function pop(){
    let myForm = document.querySelector('.myForm_div')
    myForm.style.display = "block"
  }

  function deleteForm(){    
    let myFormDiv = document.querySelector('.myForm_div')
    myFormDiv.style.display = "none"

    const inputs = document.querySelectorAll('#title, #author, #pages');
    inputs.forEach(input => {
      input.value = '';
    });   
  }




 
  
  


