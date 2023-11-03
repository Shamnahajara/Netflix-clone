
import NavBar from './components/navBar/NavBar'
import './App.css'
import Banner from './components/banner/Banner'
import RowPost from './components/rowPost/RowPost'
import { action, comedy, documetries, horror, orginal } from './constants/urls';
function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={orginal} title='Netflix orginals'/>
        <RowPost url={action} title='Action movies' isSmall/>
        <RowPost url={comedy} title='Comedy Movies' isSmall/>
        <RowPost url={horror} title='Horror Movies' isSmall/>
        <RowPost url={documetries} title='Documentries' isSmall/>
      </div>
    </>
  )
}

export default App
