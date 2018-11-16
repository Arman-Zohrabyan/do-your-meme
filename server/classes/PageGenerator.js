import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
// import { Helmet } from 'react-helmet';

import Store from '../../src/store/Store';
import App from '../../src/components/App';
import Language from '../../src/classes/Language';
import stats from '../../public/react-loadable.json';


class PageGenerator {
  /**
   * Renders html page.
   *
   * @param  {Object} params Page params
   * @return {string}        Page html
   */
  static page({state, head, body, bundles}) {
    return [
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">',
      `<title>${Language.take(head.title)}</title>`,
      '<meta name="viewport" content="width=600, initial-scale=0.6, maximum-scale=1"/>',
      '<meta charset="utf-8">',
      `<script>window.__INITIAL_STATE__ = ${serialize(state)}</script>`,
      '</head>',

      `<body>`,
      `<div id="app">${body}</div>`,
      '<script src="/manifest.js"></script>',
      '<link href="/bundle.css" rel="stylesheet">',
      ...bundles.map(bundle => `<script src="${bundle.publicPath}"></script>`),
      '<script src="/bundle.<?= hash ?>.js"></script>',
      '</body>',
      '</html>',
    ].join('\n');
  }

  /**
   * Returns page html.
   *
   * @param  {Object}  state     Initial state.
   * @return {string}            Page html.
   */
  static getPage(state = {}, head = {}, url = '/') {
    let modules = [];
    Language.setCurrentLang(state.app.language);

    const store = Store.init(state);

    const body = renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <StaticRouter location={url} context={{state}}>
            <App language={state.app.language} />
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
    );

    const bundles = getBundles(stats, modules);

    // const helmet = Helmet.renderStatic();
    return this.page({
      state: store.getState(),
      head,
      body,
      bundles
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
