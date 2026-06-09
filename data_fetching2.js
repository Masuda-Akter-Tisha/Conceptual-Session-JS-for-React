
// const dataLoad = () => {
//       fetch ('https://jsonplaceholder.typicode.com/todos/1')
//      .then (res => res.json ()) 
//      .then (data => console.log(data))
//       console.log('address');
//       console.log ('hello');
// }
// dataLoad ();

//     const dataLoad = async () => {
//       const res = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
//       const data = await res.json ();
//       console.log(data);
       
//       console.log('address');
//       console.log ('hello');
// }
// dataLoad ();

// console.log('hey, there!');


const userLoad = async () => {
      // loading spinner
      try {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const res = await fetch (url);
      const data = await res.json ();
      console.log(data);
      }
      catch (error) {
            console.log(error.message, ', triggered catch block');     
      }
      finally {
            console.log('always run code');
            // loading spinner
      }
       
}
userLoad ();