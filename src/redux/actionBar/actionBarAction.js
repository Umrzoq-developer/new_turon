

export const ACTION_HIDE = 'ACTION_HIDE';
export const ACTION_OPEN = 'ACTION_OPEN';
export const ADD_CHOSEN = 'ADD_CHOSEN';
export const REMOVE_CHOSEN = 'REMOVE_CHOSEN';

export const ON_SELECT_CHANGE = 'ON_SELECT_CHANGE';


export const actionOpen = () => {
    return{
        type: ACTION_OPEN
    }
};

export const actionHide = () => {
    return{
        type: ACTION_HIDE
    }
};

export const addChosen = (chosen) => {
    return {
        type: ADD_CHOSEN,
        payload: chosen
    }
};

export const removeChosen = (id) => {
    return{
        type: REMOVE_CHOSEN,
        payload: id
    }
};

export const onSelectChange = (selectedRowKeys, selectedRows) => {
    return{
        type: ON_SELECT_CHANGE,
        selectedRowKeys,
        payload: selectedRows
    }
};
