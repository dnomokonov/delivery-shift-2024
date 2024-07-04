import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './utils/redux/store';
import { Provider } from 'react-redux';

import { RootPage } from './pages/root';
import { LoginPage } from './pages/login'
import { ProfilePage } from './pages/profile'
import { HistoryPage } from './pages/history'
import { ROUTES } from './utils/constants/router';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootPage/>
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage/>
  },
  {
    path: ROUTES.PROFILE,
    element: <ProfilePage/>
  },
  {
    path: ROUTES.HISTORY,
    element: <HistoryPage/>
  }
]);

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
