
//형식 중요

class Book{
	constructor(type, title){
		this.type = type;
		this.title = title;
	}
	list(){
		console.log(`${this.type}`);
	}
}
//const myBook = new Book('it', 'html');
//myBook.list();
class graphic extends Book{
	constructor(type, title, level){
		super(type,title);
		this.level = level;
	}
	list(){
		super.list();
		document.write(
			`
			<p>
			${this.type} : ${this.title} : ${this.level}
			</p>
			`
		)
	}
}

const myGraphic = [
	new graphic('photo', 'photoshop', '1'),
	new graphic('vector', 'photoshop', '3'),
	new graphic('paint', 'photoshop', '1')
]

myGraphic[1].list();

for(i of myGraphic){
	i.list();
}