import initialStates from "../actions/initialStates"

const initialState = initialStates.DataReducer

const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}
export default DataReducer