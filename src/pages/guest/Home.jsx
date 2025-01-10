import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h1>Home page</h1>
        <section>
          <h2>Best sales!</h2>
          <p>
            Il miglio prodotto di questo mese è il{" "}
            <Link to="/products/3">Prodotto 3</Link>
          </p>
        </section>
        <hr />
        <section>
          <h2>Vuoi sapere di più su di noi?</h2>
          <NavLink to="/contacts">Contattaci!</NavLink>
        </section>
      </main>
    </>
  );
}

export default Home;
