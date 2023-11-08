import Navigation from '../components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contacts from '../components/Contacts';
import NotFound from '../components/NotFound';
import CharacterDetails from '../components/CharacterDetails';
import CharactersList from '../components/CharacterList';
import AboutUs from '../components/AboutUs';
import Mission from '../components/Mission';
import Else from '../components/Else';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/' element={<About />}>
          <Route path='us' element={<AboutUs />} />
          <Route path='mission' element={<Mission />} />
          <Route path='else' element={<Else />} />
        </Route>
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/characters' element={<CharactersList />} />
        <Route path='/characters/:id' element={<CharacterDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer>Footer!!!!</footer>
    </>
  );
}
export default App;
