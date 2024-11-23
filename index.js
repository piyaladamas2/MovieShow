      const movieList= [
      {
        id: 533535,
        title: "Deadpool & Wolverine",
        release_date: "2024-07-24",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        category: "Action",
      },
      {
        id: 718821,
        title: "Twisters",
        release_date: "2024-07-10",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/58D6ZAvOKxlHjyX9S8qNKSBE9Y.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
        category: "Thriller",
      },
      {
        id: 1022789,
        title: "Inside Out 2",
        release_date: "2024-06-11",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
        category: "Animation",
      },
      {
        id: 519182,
        title: "Despicable Me 4",
        release_date: "2024-06-20",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
        category: "Animation",
      },
      {
        id: 573435,
        title: "Bad Boys: Ride or Die",
        release_date: "2024-06-05",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/oGythE98MYleE6mZlGs5oBGkux1.jpg",
        category: "Action",
      },
      {
        id: 1160018,
        title: "Kill",
        release_date: "2024-07-03",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg",
        category: "Thriller",
      },
      {
        id: 762441,
        title: "A Quiet Place: Day One",
        release_date: "2024-06-26",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/hU42CRk14JuPEdqZG3AWmagiPAP.jpg",
        category: "Horror",
      },
      {
        id: 831815,
        title: "Saving Bikini Bottom: The Sandy Cheeks Movie",
        release_date: "2024-08-01",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg",
        category: "Animation",
      },
      {
        id: 1079091,
        title: "It Ends with Us",
        release_date: "2024-08-07",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/8yPSYhooj8nyBbmV3GVdLDwuE7e.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/AjV6jFJ2YFIluYo4GQf13AA1tqu.jpg",
        category: "Drama",
      },
      {
        id: 945961,
        title: "Alien: Romulus",
        release_date: "2024-08-13",
        backdrop_path:
          "https://image.tmdb.org/t/p/original/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
        poster_path:
          "https://image.tmdb.org/t/p/original/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
        category: "Sci-Fi",
      },
                  ];

       let movieContainer= document.querySelector(".movie_container");

       let actionBtn= document.querySelector("#action");
       let thrillerBtn= document.querySelector("#thriller");
       let animationBtn= document.querySelector("#animation");
       let dramaBtn= document.querySelector("#drama");
       let horrorBtn= document.querySelector("#horror");
       let comedyBtn= document.querySelector("#comedy");
       let fictionBtn= document.querySelector("#fiction");
       let allBtn= document.querySelector("#all");
       
       const showMovies=(movieList)=>{
            movieContainer.innerHTML= movieList.map((movie)=>
                  `<div style="max-width:280px; text-align:center; ">
                  <div class="imageContainer">
                  <img src="${movie.poster_path}" alt="movies" class="posterImage"/>
                  </div>
                  <h5>${movie.title}</h5>
                  <p>${movie.release_date}</p>
                  </div>`
             ).join("");
       }
       showMovies(movieList);

       actionBtn.addEventListener("click",()=>{
            let actionMovie= movieList.filter((movie)=>movie.category=='Action')
            showMovies(actionMovie)
       })

       thrillerBtn.addEventListener("click",()=>{
            let thrillerMovie= movieList.filter((movie)=>movie.category=='Thriller')
            showMovies(thrillerMovie)
       })

       animationBtn.addEventListener("click",()=>{
            let animationMovie= movieList.filter((movie)=>movie.category=='Animation')
            showMovies(animationMovie)
       })

       dramaBtn.addEventListener("click",()=>{
            let dramaMovie= movieList.filter((movie)=>movie.category=='Drama')
            showMovies(dramaMovie)
       })

       horrorBtn.addEventListener("click",()=>{
            let horrorMovie= movieList.filter((movie)=>movie.category=='Horror')
            showMovies(horrorMovie)
       })

       comedyBtn.addEventListener("click",()=>{
            let comedyMovie= movieList.filter((movie)=>movie.category=='Comedy')
            showMovies(comedyMovie)
       })

       fictionBtn.addEventListener("click",()=>{
            let fictionMovie= movieList.filter((movie)=>movie.category=='Sci-Fi')
            showMovies(fictionMovie)
       })

       allBtn.addEventListener("click",()=>{
            
            showMovies(movieList)
       })
     
    