import React, { Component } from 'react';
import routes from '../routes';
import Menu from './Menu';
import NoMatch from './NoMatch';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />

        <Container>
          <Switch>
            {routes.map(({ path, exact, component: Component, ...rest }) => (
              <Route key={path} path={path} exact={exact} render={(props) => (
                  <Component {...props} {...rest} />
                )}
              />
            ))}
            <Route render={(props) => <NoMatch {...props} />} />
          </Switch>
        </Container>

        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;