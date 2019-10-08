import { put } from 'redux-saga/effects'
export function *increment(){
    yield put({ type: 'INCREMENT' });
}