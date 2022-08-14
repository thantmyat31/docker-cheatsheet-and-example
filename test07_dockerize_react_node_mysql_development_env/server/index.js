const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

const MYSQL_USER = 'MYSQL_USER';
const MYSQL_PASSWORD = 'MYSQL_PASSWORD';
// const MYSQL_USER = 'root';
// const MYSQL_PASSWORD = 'password';
const PORT = 5000;

const db = mysql.createPool({
    host: 'mysql_db', // the host name MYSQL_DATABASE: node_mysql for docker
    // host: 'localhost',
    user: MYSQL_USER, // database user MYSQL_USER: MYSQL_USER
    password: MYSQL_PASSWORD, // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
    //database: 'books' // database name MYSQL_HOST_IP: mysql_db
    database: 'book_store'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json('Hi there!');
});

//get all of the books in the database
app.get('/get', (req, res) => {
    const SelectQuery = " SELECT * FROM books_reviews";
    db.query(SelectQuery, (err, result) => {
        res.send(result)
    })
})

// add a book to the database
app.post("/insert", (req, res) => {
    const bookName = req.body.setBookName;
    const bookReview = req.body.setReview;
    const InsertQuery = "INSERT INTO books_reviews (book_name, book_review) VALUES (?, ?)";
    db.query(InsertQuery, [bookName, bookReview], (err, result) => {
        console.log(result)
    })
})

// delete a book from the database
app.delete("/delete/:bookId", (req, res) => {
    const bookId = req.params.bookId;
    const DeleteQuery = "DELETE FROM books_reviews WHERE id = ?";
    db.query(DeleteQuery, bookId, (err, result) => {
        if (err) console.log(err);
    })
})

// update a book review
app.put("/update/:bookId", (req, res) => {
    const bookReview = req.body.reviewUpdate;
    const bookId = req.params.bookId;
    const UpdateQuery = "UPDATE books_reviews SET book_review = ? WHERE id = ?";
    db.query(UpdateQuery, [bookReview, bookId], (err, result) => {
        if (err) console.log(err);
        if(result) res.send(result);
    })
})

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`))