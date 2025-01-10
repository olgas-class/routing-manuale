import { Link, useNavigate, useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams(); 

  // navigazione programmatica
  const navigate = useNavigate();

  return (
    <>
      <main>
        {/* Navigazione programmatica */}
        <button onClick={() => navigate(-1)}>Indietro</button>
        {/* Navigazione statica */}
        <Link to="/products">Lista di prodotti</Link>
        <h1>Dettagli di un prodotto numero {id}</h1>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            voluptates cupiditate laborum repellendus commodi odio nesciunt,
            excepturi perspiciatis. Blanditiis at voluptatem accusantium vero
            tempora? Ad molestias totam quisquam aliquid voluptatem!
          </p>
        </section>
      </main>
    </>
  );
}

export default SingleProduct;
