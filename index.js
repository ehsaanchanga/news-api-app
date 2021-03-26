console.log("connected");

// initializing the news api parameters
let category = 'technology';


// creating api key variable
let apiKey = '##.........####';


// grab the news container
let newsAccordian = document.getElementById("news-accordian");

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`, true);

// what to do when response is ready
xhr.onload = function () {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach((element,index) => {
            let news = `<div class="card" id="news-accordian">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button
                                class="btn btn-link collapsed "
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse${index}"
                                aria-expanded="true"
                                aria-controls="collapse${index}"
                            >
                               <b>Breaking News ${index+1} : </b> ${element['title']}
                            </button>
                            </h2>
                        </div>

                        <div
                            id="collapse${index}"
                            class="collapse"
                            aria-labelledby="heading${index}"
                            data-parent="#news-accordian"
                        >
                            <div class="card-body">${element['content']}. <a href="${element['url']}" target="_blank">Read More Here</a> </div>
                        </div>
                        </div> `;
            newsHtml += news;

        });
        newsAccordian.innerHTML = newsHtml;
    } else {
        console.log("some error occured");
    }
}
// sending the request
xhr.send();


