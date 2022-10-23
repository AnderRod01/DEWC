let listaTweets
let localStorage
let txtAreaTweet

window.onload = function (){
    localStorage = window.localStorage
    listaTweets = document.getElementById('lista-tweets')
    txtAreaTweet = document.getElementById("tweet")
    prepareEvents ()
}

function prepareEvents (){
    document.getElementById("formulario").addEventListener("submit", tweetear)

    listaTweets.addEventListener("click", borrarTweet)
}

//array.splice borrar posicion de array

function tweetear(e){
    e.preventDefault()

    let eleA_borrar = document.createElement("a")

    let tweet = txtAreaTweet.value
    eleA_borrar.classList = "borrar-tweet"
    eleA_borrar.innerHTML = "X"

    let eleLi_tweet = document.createElement("li")
    eleLi_tweet.innerHTML =tweet
    eleLi_tweet.appendChild (eleA_borrar)
    listaTweets.appendChild(eleLi_tweet)

   
    aniadirALocalStorage(tweet)
    txtAreaTweet.value =""
}

function borrarTweet (e){
    e.preventDefault();
     if(e.target.className === 'borrar-tweet') {
          e.target.parentElement.remove();
          borrarTweetDeLocalStorage(e.target.parentElement.innerText);
     } 
}

function prepararLocalStorage (){
    let tweets = getTweetsDeLocalStorage()

    tweets.forEach(function (tweet){
        let eleA_borrar = document.createElement("a")

        eleA_borrar.classList = "borrar-tweet"
        eleA_borrar.innerHTML = "X"

        let eleLi_tweet = document.createElement("li")
        eleLi_tweet.innerHTML =txtAreaTweet.value
        eleLi_tweet.appendChild (eleA_borrar)
        listaTweets.appendChild(eleLi_tweet)
    })
   
}

function borrarTweetDeLocalStorage (tweet){
    let lstTweets

    let tweetBorrar = tweet.substring(0, tweet.length - 1)

     lstTweets = getTweetsDeLocalStorage();

     lstTweets.forEach(function(tweet, index) {
          if(tweetBorrar === tweet) {
               lstTweets.splice(index, 1);
          }
     }) ;

     localStorage.setItem('tweets', JSON.stringify(lstTweets) );

}

function aniadirALocalStorage (tweet){
    let lstTweets = getTweetsDeLocalStorage()
    lstTweets.push(tweet)

    localStorage.setItem('tweets', JSON.stringify(lstTweets)) 
}

function getTweetsDeLocalStorage (){
    let lstTweets
    if(localStorage.getItem('tweets') === "null")
        lstTweets = []
    else
        lstTweets = JSON.parse (localStorage.getItem('tweets'))
    return lstTweets
}

