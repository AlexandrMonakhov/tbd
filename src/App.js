import './App.scss';

import { Container } from 'react-bootstrap';

import { TabsContainer, FormInstructor, FormStudent, TableContainer } from './components'


function App() {
  return (
    <div className="App">
      <header className="header p-md-3">
        <Container fluid>
          <h1 className="title text-center">База данных "Автошкола"</h1>
          <Container>
            <TabsContainer />
            <TableContainer />
            <FormInstructor />
            <FormStudent />
          </Container>
        </Container>
      </header>
    </div>
  );
}

export default App;
