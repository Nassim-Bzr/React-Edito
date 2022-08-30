import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from 'src/store';

import Edito from 'src/components/Edito';

const rootReactElement = (
  <Provider store={store}>
    <Edito />
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
