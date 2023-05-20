import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Seller Books</h1>
      <section className="bookList">
        {books.map((book, index) => {
          const { src, author, tittle, id } = book;
          return (
            <Book
              key={id}
              image={src}
              tittle={tittle}
              author={author}
              number={index}
            />
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
