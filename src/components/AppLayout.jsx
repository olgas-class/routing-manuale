import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <>
      <header>
        <MainNav />
      </header>

      {/* Segnaposto per i contenuti di ogni pagina */}
      <Outlet />

      <footer>FOOTER</footer>
    </>
  );
}

export default AppLayout;
