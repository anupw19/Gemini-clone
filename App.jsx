import Sidebar from "./components/sidebar/sidebar"
import Main from "./components/Main/main"
import ContextProvider from "./context/context";


const App = () => {
  return (
    <>
    <Sidebar/>
    <ContextProvider>
    <Main />
    </ContextProvider>
    </>
  )
}

export default App;