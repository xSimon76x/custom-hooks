

export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        
        case '[TODO] add todo':    
            return [ ...initialState, action.payload ];
        
        case '[TODO] remove todo':    
            return initialState.filter( state => state.id !== action.payload);

        case '[TODO] toggle todo':    
            return initialState.map(state =>{
                if (state.id === action.payload) {
                    return {
                        ...state,
                        done: !state.done
                    }
                }
                return state;
            })
    
        default:
            return initialState;
    }
}