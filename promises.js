// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve() // Change status to 'fulfilled'
//   }, 2000)
// })

// console.log('pendente: ', promise);
// setTimeout(() => console.log('resolvido: ', promise), 4000);

// function onSuccess () {
//   console.log('Success!')
// }

// function onError () {
//   console.log('💩')
// }

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject()
//   }, 2000)

//   return resolve()
// })

// promise.then(onSuccess)
// promise.catch(onError)

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  
};

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};  

fetch(API_URL, myObject).then(response => console.log(response));

window.onload = () => fetchJoke();
        

