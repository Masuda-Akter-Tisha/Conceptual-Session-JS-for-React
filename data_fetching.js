// // 1
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//       // 2
//       const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
//       fetch (url)
//       .then (res => res.json ())
//       .then (data => {
//         const meal = data.meals;
//         meal.forEach (me => {
//             console.log(me.strArea);
            
//         })
//       })


      const loadUser = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch (url)
        .then (res => res.json ())
        .then (data => {
          // console.log (data);
          throw new Error ('Unknown Error');
        })
        .catch (error => {
          console.log(error, 'catch block triggered');
          
        })
      }
      loadUser ();
