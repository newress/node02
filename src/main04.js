//객체   할당의 기본 시스템
const {a1, a2, a3} = {
  a1: 10, 
  a2: 20, 
  a3: 30, 
  a4: 40
}
console.log(a1);

const book = {
  type: 'it',
  title: 'html',
  price: '20,000',
  //level: '3'
}
//할당값이 없을 경우 추가로 데이터를 할당
//기본 할당값과 추가된 할당값이 충동할 경우 기본 할당값이 우선
const {type, title, price, level=0} = book;
console.log(type);
console.log(level);

//기본 할당 이름(key의 변경) -> 이름의 변경 필요
const welcome = type;
console.log(welcome);//위에 썻던 키값(type)을 반환한다

const graphic = {
  some: 'paint',
  bookname: 'painter'
}
const {some:subtitle, bookname} = graphic;
console.log(subtitle);//키값이 겹칠떄 새로운 키값을 넣는법
