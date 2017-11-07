import * as CATEGORIES_ACTIONS from '../actions/categories';

const initialCategoriesState = {
    listCategories: []
}

const comments = function (state = initialCategoriesState, action) {
    switch (action.type) {
        case CATEGORIES_ACTIONS.INIT_CATEGORIES:
            return  { ...state, listCategories: [...action.data] }
        default:
            return state
    }
}

export default comments;
