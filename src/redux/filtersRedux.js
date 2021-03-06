/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName ('CHANGE_DURATION');
export const ADD_TAG = createActionName ('ADD_TAG');
export const REMOVE_TAG = createActionName ('REMOVE_TAG');
export const SORT_BY_PRICE = createActionName ('SORT_BY_PRICE');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const addTag = payload => ({ payload, type: ADD_TAG });
export const removeTag = payload => ({ payload, type: REMOVE_TAG });
export const sortByPrice = payload => ({ payload, type: SORT_BY_PRICE});
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
      case CHANGE_DURATION:
        return {
          ...statePart,
          duration: action.payload,
        }
      case ADD_TAG:
        return {
          ...statePart,
          tags: action.payload,
        }
        case REMOVE_TAG:
          return {
            ...statePart,
            tags: action.payload,
          }
          case SORT_BY_PRICE:
            return {
              ...statePart,
              price: action.payload,
            }
    // TODO - handle other action types
    default:
      return statePart;
  }
}
