import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>404 NOT FOUND</h1>
      <button onClick={() => navigate(-1)}>Ritorna indietro</button>
    </main>
  );
}

export default NotFoundPage;
