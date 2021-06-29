import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { MapProvider } from '../service';
import MainPage from './MainPage';

export default function MainRoute(): React.ReactElement {
  const { url } = useRouteMatch();

  return (
    <MapProvider>
      <Switch>
        <Route path={`${url}`} component={MainPage} />
      </Switch>
    </MapProvider>
  );
}
