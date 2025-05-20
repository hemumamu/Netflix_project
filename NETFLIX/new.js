let movies=[
    {
        name:'Kalki',
        poster:'https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        imdb:9
    },
    {
        name:'Deadpool',
        poster:'https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png',
        imdb:9

    },
    {
        name:'Fifth road',
        poster:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d3130c112617081.60181f67660c8.jpg',
        imdb:9

    },
    {
        name:'End game',
        poster:'https://images-cdn.ubuy.co.in/634d0a48023cd2292277f3df-avengers-endgame-marvel-studios-framed.jpg',
        imdb:9

    }
    ,
    {
        name:'Batman',
        poster:'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
        imdb:9

    },
    {
        name:'Flash',
        poster:'https://img.posterstore.com/zoom/wb0202-8theflash-movie50x70.jpg',
        imdb:9

    },
    {
        name:'Archer',
        poster:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
        imdb:9

    },
    {
        name:'Joker',
        poster:'https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF1000,1000_QL80_.jpg',
        imdb:9

    }
]
function display(data){
    document.getElementById('list').innerHTML=""
let list=``
for(let i=0;i<data.length;i++){
    list=list+`
    
        <div class="movie">
            <div class="overlay">
                  <div class="vedio">

                </div>
                <div class="details">
                    <h1>${data[i].name}</h1>
                    <h5>IMDB:${data[i].imdb}</h5>
                    <p>prabhas  .  kamalhasan  .  amithabachan  .  deepika</p>

                </div>

            </div>
            <div class="movie-img">
                <img class="movie-image" src="${data[i].poster}" alt="">
            </div>
            

        </div>
    
        
    `
  
}
document.getElementById('list').innerHTML=list
}
display(movies)




  

function searchMovie(){
    let a=document.getElementById('search').value
    if(a!==""){
        let result=movies.filter(function(movie){
            return movie.name.toUpperCase().includes(a.toUpperCase())
        })
        display(result)
        console.log(result)

    }
    else{
        display(movies)
    }
 

   
}

