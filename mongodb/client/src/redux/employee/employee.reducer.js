import { employeeActionTypes } from "./employee.type";

const INITITAL_STATE = {
    employees: [],
    loading: false,
    error: null,
    successMessage: false
}

const employeeReducer = (state = INITITAL_STATE, action) => {
    switch(action.type) {
        case employeeActionTypes.GET_ALL_EMPLOYEE_START:
        case employeeActionTypes.CREATE_EMPLOYEE_START:
        case employeeActionTypes.DELETE_EMPLOYEE_START:
        case employeeActionTypes.UPDATE_EMPLOYEE_START:
            return {
                ...state,
                loading: true
            }

        case employeeActionTypes.GET_ALL_EMPLOYEE_FAILURE:
        case employeeActionTypes.CREATE_EMPLOYEE_FAILURE:
        case employeeActionTypes.DELETE_EMPLOYEE_FAILURE:
        case employeeActionTypes.UPDATE_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }

        case employeeActionTypes.GET_ALL_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: action.payload
            }

        case employeeActionTypes.CREATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: true
            }

        case employeeActionTypes.DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: true
            }
            
        case employeeActionTypes.UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: true
            }

        case employeeActionTypes.REMOVE_MESSAGE:
            return {
                ...state,
                loading: false,
                successMessage: false,
                error: null
            }

        default:
            return state;
    }
}

export default employeeReducer;