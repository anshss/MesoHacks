// import Navbar from "./navbar";
// import NewsSection from "./newsSection";
import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
