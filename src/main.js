class Book{
  constructor(type, title){
    this.type = type;
    this.title = title;    
  }
  list(){
    document.write(
      `
      <p>
      ${this.type} : ${this.title}
      </p>
      `
    )
  }
}

const photo = new Book('graphic', 'photoshop')
const vetor = new Book('graphic', 'illustrater')
const code = new Book('it', 'html')
photo.list();
vetor.list();
code.list();