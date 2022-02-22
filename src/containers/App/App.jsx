import { Route, Routes } from 'react-router-dom';
import Layout from '@containers/Layout';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage'
import FavouritePage from '@containers/FavouritePage'
import SearchPage from '@containers/SearchPage'
// import styles from './App.module.css';

const App = () => {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<HomePage/>} />
            <Route path="people/"  element={<PeoplePage/>} />
            <Route path="*"  element={<NotFoundPage/>} />
            <Route path="not-found"  element={<NotFoundPage/>} />
            <Route path="people/:id"  element={<PersonPage/>} />
            <Route path="favourites"  element={<FavouritePage/>} />
            <Route path="search"  element={<SearchPage/>} />
            <Route path="fail"  element={<ErrorMessage/>} />
          </Route>
        </Routes>
    </>
  )
}

export default App;



