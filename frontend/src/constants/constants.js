import { API_BASE_PATH } from './config';

const BASE_ROUTE = '/';

export const ROUTE_URLS = {
    login: `${BASE_ROUTE}login`,
    signup: `${BASE_ROUTE}signup`,
    home: `${BASE_ROUTE}home`
};

export const API_URLS = {
    login: `${API_BASE_PATH}users/signin/`,
    signup: `${API_BASE_PATH}users/signup/`,
    jobsList: `${API_BASE_PATH}jobs/list/`,
    getCandidatesList: jobId => `${API_BASE_PATH}candidates/list/?job_id=${jobId}`
};

export const LOGIN_INIT_STATE = { 
    username: '', password: ''
};

export const SIGNUP_INIT_STATE = {
    username: '', password: '', email: '',
    first_name: '', last_name: ''
};
