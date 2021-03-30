/* SELECTORS */

export const getAllCountries = ({countries}) => countries;
export const getCountryByCode = ({countries}, countryCode) => countries[countryCode];

/* ACTIONS */

// action name creator
// const reducerName = 'countries';
// const createActionName = name => `app/${reducerName}/${name}`;

// action types
// export const SET_COUNTRY = createActionName('SET_COUNTRY');

// action creators
// export const set

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

