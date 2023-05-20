const Book = ({ image, tittle, author, number }) => (
  <article className="book">
    <Image image={image} alt={tittle} />
    <h2>{tittle}</h2>
    <h2>{author}</h2>
  </article>
);
const Image = ({ image, alt }) => <img src={image} alt={alt} />;
export default Book;
