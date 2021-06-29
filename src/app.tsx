import AuthProvider from '@core/auth/sandbox/AuthProvider';
import MainRoutes from '@modules/main/pages';
import { ConfigProvider } from 'antd';
import fa_IR from 'antd/lib/locale/fa_IR';
import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Loader } from './shared';

export const App = (): React.ReactElement => (
  <Suspense fallback={<Loader isFullPage />}>
    <ConfigProvider locale={fa_IR} direction="rtl">
      <AuthProvider>
        <BrowserRouter>
          <Route path="/" component={MainRoutes} />
        </BrowserRouter>
      </AuthProvider>
    </ConfigProvider>
  </Suspense>
);
