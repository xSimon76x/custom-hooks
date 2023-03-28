import { useEffect, useReducer } from 'react'
import { todoReducer } from "../components/08-useReducer/todoReducer"

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }
        dispatch(action);
    };
    
    const handleRemoveTodo = (id) => {
        const action = {
            type: '[TODO] remove todo',
            payload: id
        }
        dispatch(action);
    };

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] toggle todo',
            payload: id
        }

        dispatch(action);
    };

    const todosCount = state.length;

    const pendingTodosCount = state.filter( todo => todo.done ).length;

    return {
        state,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}
