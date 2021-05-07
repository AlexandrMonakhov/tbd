import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { TabsContainer, FormContracts } from './components';

import { Container } from 'reactstrap';
import Instructors from './views/Instructors';
import Contracts from './views/Contracts';
import FileCab from './views/FileCab';
import Questionnaire from './views/Questionnaire';
import Receipt from './views/Receipt';
import Students from './views/Students';
import Transport from './views/Transport';

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
                <Route exact path={"/instructors"} component={Instructors} />

                <Route exact path={"/contracts"} component={Contracts} />
                <Route path={"/contracts/add/:id?"} component={FormContracts} />

                <Route exact path={"/files"} component={FileCab} />

                <Route exact path={"/questionnaires"} component={Questionnaire} />

                <Route exact path={"/receipts"} component={Receipt} />

                <Route exact path={"/students"} component={Students} />

                <Route exact path={"/transports"} component={Transport} />

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
