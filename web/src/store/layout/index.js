const INITIAL_STATE = {
    showMessage: false
};

export default (state = INITIAL_STATE,action) =>{
    switch (action.type){
        case 'SHOW_MESSAGE':
            return { ...state, showMessage: true};
        case 'HIDE_MESSAGE':
                return { ...state, showMessage: false};
        default:
            return state;
    }
};

/**
 * * ActionTypes:
 * * Objeto contendo todas as actions types
 */
 export const Types = {
    SHOW_MESSAGE: 'SHOW_MESSAGE',
    HIDE_MESSAGE: 'HIDE_MESSAGE'
 };

 /**
  * Action Creators
  */
export const Creators = {
    showMessage: () =>({ type: Types.SHOW_MESSAGE
    }),
    hideMessage: () =>({ type: Types.HIDE_MESSAGE
    })
    
};