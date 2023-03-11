fetch("https://upadhayay.github.io/db.json")
    .then(function (response) {
        return response.json();
        })
    .then(function (db) {
        let books = db.books;
        let noBooks = books.length;
        let authorcount = {};
        for (let i = 0; i < noBooks; i++) {
            let author = books[i].author;
                if (authorcount[author]) {
                    authorcount[author]++;
                    } else {
                        authorcount[author] = 1;
                }
                    }
        let bookContainer = document.getElementById("paper-data");
        for (let i = 0; i < noBooks; i++) {
            let bookDiv = document.createElement("div");
            bookDiv.id = `book-${i + 1}`;
            bookContainer.appendChild(bookDiv);

            let placeholder = document.querySelector(`#book-${i + 1}`);
            let out = "";
            out += `<br>` +`<h2><u> Id:- ${books[i].id}</h2></u>` + `<br>` + `<h2> Title:- ${books[i].title}</h2>` + `<br>` +
                    `<h2>Published Year:- ${books[i].year}</h2>`;
            let author = books[i].author;
            if (authorcount[author] === 1) {
                 out += `<h2>Author:- ${author}</h2>`;
                    }
                placeholder.innerHTML = out;
                }
    });