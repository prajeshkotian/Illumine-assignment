// JavaScript source code
import { test_questions } from '../../Assets/Questions';

const initialState = {
    questions: test_questions,
    options: ['Yes', 'No', 'Sometimes'],
    answers: ['', '', '', '', '', ''],
    checked: [null, null, null, null, null, null],
    tracker: 0,
    finished: false
};

function Reducer(state=initialState,action) {
    if (action.type === 'RADIO-BUTTON') {
        var newanswers = [...state.answers];
        newanswers[state.tracker] = action.value.value;
        var newchecked = [...state.checked];
        console.log(action.value.id);
        newchecked[state.tracker] = action.value.id
        return {
            ...state,
            answers: newanswers,
            checked: newchecked
        }
        //event.target.checked = true;
    }
    else if (action.type === 'PAGE-BUTTON') {
        if (action.value.id === 'prev') {
            if (state.tracker > 0) {
                return {
                    ...state,
                    tracker: state.tracker - 1,
                    finished: false
                }
            }
        }
            else if(action.value.id === 'next'){
                if (state.tracker < 5) {
                    return {
                        ...state,
                        tracker: state.tracker + 1
                    }
                }
                else if(state.tracker >= 5) {
                    //this.props.method(this.state.answers);
                    //this.props.history.push('/Summary');
                    return {
                        ...state,
                        finished: true
                    }
                }
            }
    }
    else if (action.type === 'FINISHED') {
        console.log(state);
    }
    else {
        return state
    }
}

export default Reducer;
