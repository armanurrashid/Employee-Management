import {Routes, Route} from 'react-router-dom';
import {Home} from './components/Home'
import AddMember from './components/AddMember'
import {Navbar} from './Navbar'
function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='addmember' element={<AddMember />}/>
        </Routes>
    </div>
  );
}

export default App;
