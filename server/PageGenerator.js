import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../src/components/App';
import routes from '../src/routes';


class PageGenerator {
  /**
   * Renders html page.
   *
   * @param  {Object} params Page params
   * @return {string}        Page html
   */
  static page({state, head, body}) {
    return [
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      `<title>${head.title}</title>`,
      '<meta name="viewport" content="width=device-width, initial-scale=1"/>',
      '<meta charset="utf-8">',
      '<script src="/bundle.js" defer></script>',
      `<script>window.__INITIAL_DATA__ = ${serialize(state)}</script>`,
      '</head>',

      '<body>',
      `<div id="app">${body}</div>`,
      '</body>',
      '</html>',
    ].join('\n');
  }

  /**
   * Returns page html.
   *
   * @param  {Object}  reducers  App reducers.
   * @param  {Object}  state     Initial state.
   * @return {string}            Page html.
   */
  static getPage(reducers = {}, state = {}, url = '/') {

    const body = renderToString(
      <StaticRouter location={url} context={{state}}>
        <App />
      </StaticRouter>
    );

    // const store = initStore(reducers, state);

    // const body = renderToString(
    //     <LocalizeProvider store={store}>
    //         <Provider store={store}>
    //             <App/>
    //         </Provider>
    //     </LocalizeProvider>
    // );

    // const helmet = Helmet.renderStatic();

    return this.page({
      state,
      head: {
        title: '123',
      },
      body,
    });
  }

  /**
   * Returns page 404.
   *
   * @return {string} Page html.
   */
  static notFound() {
    return [
      '<!DOCTYPE html>',
      '<html lang="ru">',
      '<head>',
      '</head>',

      '<body>',
      '<div id="notFound">',
      '<p>Запрашиваемая страница не существует</p>',
      '<a href="/">Вернуться на главную страницу</a>',
      '</div>',
      '</body>',
      '</html>',
    ].join('\n');
  }
}

export default PageGenerator;
