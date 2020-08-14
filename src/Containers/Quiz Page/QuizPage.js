// JavaScript source code
import React, { Component } from 'react';
import { test_questions } from '../../Assets/Questions';
import QuestionPage from '../../Components/QuestionPage/QuestionPage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Finished from '../../Components/Finished/Finished';

class QuizPage extends Component {
    //state = {
    //    questions: [],
    //    options: ['Yes', 'No', 'Sometimes'],
    //    answers: ['', '', '', '', '', ''],
    //    checked: [null,null,null,null,null,null],
    //    tracker: 0,
    //    finished: false
    //};

    //componentDidMount() {
    //    this.setState({ questions: test_questions });
    //    //console.log(this.props.history);
        
    //}

  

    onFinishedClick = () => {
        
        this.props.history.push('/Summary');
    }

    render() {
        
        var display;
        var finishedDisplay
        if (this.props.finished === false) {
            display = <QuestionPage question={this.props.questions[this.props.tracker]} options={this.props.options} radioclicked={this.props.onSelectRadioButton} buttonclicked={this.props.onButtonClick} qno={this.props.tracker} checker={this.props.checked[this.props.tracker]} />
        }
        else {
            finishedDisplay = <Finished buttonclicked={this.props.onButtonClick} finalclicked={this.onFinishedClick} />
        }

        return (
            <div>
                <QuestionPage question={this.props.questions[this.props.tracker]} options={this.props.options} radioclicked={this.props.onSelectRadioButton} buttonclicked={this.props.onButtonClick} qno={this.props.tracker} checker={this.props.checked[this.props.tracker]} tracker={ this.props.tracker}/>
                {finishedDisplay}
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        options: state.options,
        answers: state.answers,
        checked: state.checked,
        tracker: state.tracker,
        finished: state.finished
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectRadioButton: (event) => dispatch({ type: 'RADIO-BUTTON', value: event.target }),
        onButtonClick: (event) => dispatch({ type: 'PAGE-BUTTON', value: event.target }),
        onFinish: () => dispatch({type: 'FINISHED'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(QuizPage));