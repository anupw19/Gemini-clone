import Sidebar from "./components/sidebar/sidebar"
import Main from "./components/Main/main"
import ContextProvider from "./context/context";


const App = () => {
  return (
    <>
   
    <ContextProvider>
    <Sidebar/>
    <Main />
    </ContextProvider>
    </>
  )
}

export default App;