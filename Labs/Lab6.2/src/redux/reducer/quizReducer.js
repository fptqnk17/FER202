import {QUIZ_START , QUIZ_RESET , QUIZ_NEXT,QUIZ_SUBMIT, QUIZ_PREV , QUIZ_TIMEOUT} from '../constant/quizConstant'

const initialState = {
    step : 1,
    activeQuestion: 0,
    answers: [],
    time: 60
}

const quizReducer = (state = initialState , action) =>{
    const {type , payload} = action
    switch (type) {
        case QUIZ_START:
            return {
                ...state,step:2 , time: payload
            }
        case QUIZ_NEXT:
            return{
                ...state,answers: [...payload],activeQuestion: state?.activeQuestion+1
            }
        case QUIZ_SUBMIT:
            return{
                ...state,step:3,answers:[...payload?.answers] , time: payload?.time
            }
        case QUIZ_RESET:
            return{
                ...state,step:1,activeQuestion:0,answers:[], time: 60
            }
        case QUIZ_PREV:
            return{
                ...state,activeQuestion:state?.activeQuestion-1
            }
        case QUIZ_TIMEOUT:
            return{
                ...state, time: 0,step:3
            }
        default:
            return state;
    }
}

export default quizReducer;