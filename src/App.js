import './App.scss';
import { TabsContainer, FormInstructor, FormStudent, FormTransport } from './components'

import { Container } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <header className="header p-md-3">
        <Container fluid>
          <h1 className="title text-center">База данных "Автошкола"</h1>
          <Container>
            <TabsContainer />
            {/* <FormInstructor />
            <FormTransport />
            <FormStudent /> */}
          </Container>
        </Container>
      </header>
    </div>
  );
}

export default App;
