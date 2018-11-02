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

        <Container className='page-container'>
          <Switch>
            {routes.map(({ config, path, exact, component: Page, ...rest }) => (
              <Route key={path} path={path} exact={exact}
                render={(props) => {
                  if (__isBrowser__) {
                    document.title = config.title;
                  }
                  return <Page {...props} {...rest} />;
                }}
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