
function beginQuiz(id) {
    alert("");
    location.href='./Quiz.html'
}

 function startQuiz() {
     alert("Called");
     getData();
    
}
async function getData() {
    await fetch("https://github.com/ishank-developer/Quiz-Game/blob/master/")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Work with JSON data here
            resData = data;
            console.log(resData);
        })
        .catch((err) => {
            // Do something for an error here
            console.error(err);
        });
}