import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import routes from '../routes';
import Menu from './Menu';
import NoMatch from './NoMatch';
import Language from '../classes/Language';

class App extends Component {
  constructor(props) {
    super(props);
    if (__isBrowser__) {
      Language.setCurrentLang(props.language);
    }
  }

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
                    document.title = Language.take(config.title);
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
