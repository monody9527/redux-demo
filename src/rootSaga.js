import { fork } from 'redux-saga/effects';
import {addItemFlow} from './sagas/inputSaga'
import {removeItemFlow, toggleItemFlow, updateItemFlow} from './sagas/listSaga'

export default function* rootSaga() {
  yield fork(addItemFlow);
  yield fork(removeItemFlow);
  yield fork(toggleItemFlow);
  yield fork(updateItemFlow);
}