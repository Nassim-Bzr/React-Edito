import { legacy_createStore as CreateStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

const store = CreateStore(

  reducer,

  devToolsEnhancer(),
);

export default store;
