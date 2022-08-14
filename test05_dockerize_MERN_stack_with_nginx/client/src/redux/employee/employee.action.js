import { employeeActionTypes } from "./employee.type";

const API_URL = `${process.env.REACT_APP_API}/employee`;

export const getAllEmployeeAction = () => {
    return (dispatch) => {
        dispatch({ type: employeeActionTypes.GET_ALL_EMPLOYEE_START });

        fetch(`${API_URL}/all` , {
            method: 'GET'
        }).then(response => response.json())
        .then(result => {
            if(result.success) dispatch({ type: employeeActionTypes.GET_ALL_EMPLOYEE_SUCCESS, payload: result.result});
        }).catch(error => dispatch({ type: employeeActionTypes.GET_ALL_EMPLOYEE_FAILURE, payload: error }));
    }
}

export const createEmployeeAction = (employee) => {
    return (dispatch) => {
        dispatch({ type: employeeActionTypes.CREATE_EMPLOYEE_START });

        fetch(`${API_URL}/create` , {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(response => response.json())
        .then(result => {
            if(result.success) {
                dispatch({ type: employeeActionTypes.CREATE_EMPLOYEE_SUCCESS, payload: result.result});
                dispatch(getAllEmployeeAction());
            } else {
                dispatch({ type: employeeActionTypes.CREATE_EMPLOYEE_FAILURE, payload: result});
            }

        })
        .catch(error => dispatch({ type: employeeActionTypes.CREATE_EMPLOYEE_FAILURE, payload: error }));
    }
}

export const deleteEmployeeAction = (employee) => {
    return (dispatch) => {
        dispatch({ type: employeeActionTypes.DELETE_EMPLOYEE_START});

        fetch(`${API_URL}/delete` , {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(response => response.json())
        .then(result => {
            if(result.success) {
                dispatch({ type: employeeActionTypes.DELETE_EMPLOYEE_SUCCESS, payload: result.result});
                dispatch(getAllEmployeeAction());
            } else {
                dispatch({ type: employeeActionTypes.DELETE_EMPLOYEE_FAILURE, payload: result});
            }

        })
        .catch(error => dispatch({ type: employeeActionTypes.DELETE_EMPLOYEE_FAILURE, payload: error }));
    } 
}

export const updateEmployeeAction = (employee) => {
    return (dispatch) => {
        dispatch({ type: employeeActionTypes.UPDATE_EMPLOYEE_START});

        fetch(`${API_URL}/update` , {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(response => response.json())
        .then(result => {
            if(result.success) {
                dispatch({ type: employeeActionTypes.UPDATE_EMPLOYEE_SUCCESS, payload: result.result});
                dispatch(getAllEmployeeAction());
            } else {
                dispatch({ type: employeeActionTypes.UPDATE_EMPLOYEE_FAILURE, payload: result});
            }

        })
        .catch(error => dispatch({ type: employeeActionTypes.UPDATE_EMPLOYEE_FAILURE, payload: error }));
    } 
}

export const removeMessageAction = () => {
    return { type: employeeActionTypes.REMOVE_MESSAGE }
}