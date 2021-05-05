import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { TabsContainer, FormContracts } from './components';

import { Container } from 'reactstrap';
import Instructors from './views/Instructors';
import Contracts from './views/Contracts';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header p-md-3">
          <Container fluid>
            <h1 className="title text-center">База данных "Автошкола"</h1>
            <Container>
              <TabsContainer />
              <Switch>
                <Route path={"/instructors"} component={Instructors} />
                <Route exact path={"/contracts"} component={Contracts} />
                <Route path={"/contracts/add/:id?"} component={FormContracts} />

                <Redirect from={"/"} to={"/instructors"} />
              </Switch>
            </Container>
          </Container>
        </header>
      </div>
    </Router>
  );
}

export default App;
