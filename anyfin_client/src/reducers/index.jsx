import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { countries, country, search } from './countries.reducer';
import { alert } from './alert.reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  authentication,
  countries,
  country,
  search,
  alert,
  form: reduxFormReducer
});

export default rootReducer;