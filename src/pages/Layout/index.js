import {
  Outlet,
  Link,
} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/">Pokedex</Link>
      </header>
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
}