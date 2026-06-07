fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
      fetch (url)
      .then (res => res.json ())
      .then (data => {
        const meal = data.meals;
        meal.forEach (me => {
            console.log(me.strArea);
            
        })
      })
