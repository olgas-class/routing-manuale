import { NavLink } from "react-router-dom";

function MainNav() {
  const menu = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Prodotti",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contacts",
      title: "Contacts",
    },
    {
      path: "/admin/login",
      title: "Area riservata",
    },
  ];

  return (
    <nav>
      <ul>
        {menu.map((curItem) => (
          <li key={curItem.title}>
            <NavLink to={curItem.path}>{curItem.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
