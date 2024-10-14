import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="box-border w-full h-screen flex justify-between flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
