
import createLoading from 'dva-loading';

const loading = createLoading();

export default {
  extraReducers:loading.extraReducers,
  onSaga:loading.onEffect,
}