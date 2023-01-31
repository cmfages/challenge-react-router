import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Form from './components/Form';
import List from './components/List';


function App () {
    return (
        <div className="App">
            <Menu />
            <Routes>
                <Route path='/' element={<Form />} />
                <Route path='/form-list' element={<List />} />
            </Routes>
        </div>
    )
}

export default App;