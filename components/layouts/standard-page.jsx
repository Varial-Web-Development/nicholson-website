import Footer from "./standard-footer";
import Nav from "./standard-nav";

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen relative">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
