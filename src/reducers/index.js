import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './AuthReducer';
import producerReducer from './ProducerReducer';
import designerReducer from './DesignerReducer';
import productReducer from './ProductReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  producers: producerReducer,
  designers: designerReducer,
  form: formReducer,
  products: productReducer,
});

export default rootReducer;
