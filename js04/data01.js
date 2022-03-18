//주소 기억 데이터가 저장이 된다.
localStorage.setItem('book', 'javascript');
localStorage.setItem('it', 'html');
const str = localStorage.getItem('book');
console.log(str);

//객체
const color = {
  title: 'red',
  sample: 'apple',
  no: ['no01', 'no02']
}
//localStorage.setItem('sample', color);  //이렇게 보내면 안된다.
//localStorage.removeItem('sample');  //뒷처리

//객체 -> json형태의 string으로 만듬(stingfy) -> storage에 넣는다
const som = JSON.stringify(color);
localStorage.setItem('som' ,som);
//쓸려면 다시 객체형태로 만들어야 한다
const obj = JSON.parse(localStorage.getItem('som'));
console.log(obj);
console.log(obj.sample);
console.log(obj.no);
console.log(obj.no[0]);