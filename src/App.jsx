import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import comics from "./components/comics";

export default function App() {

  return (
    <>
    <Header/>
    <Main comics = {comics}/>
    <Footer/>
    </>
  )
}

