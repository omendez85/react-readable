import * as Api from '../utils/api';

export const INIT_CATEGORIES = 'INIT_CATEGORIES'

export function setCategories (categories) {
    return {
        type: INIT_CATEGORIES,
        data: categories
    }
}

export function getCategories() {
    return dispatch => {
        Api.getCategories()
            .then((res) => {
                dispatch(setCategories(res));
            });
      };
}
