// JavaScript source code
import React from 'react';
import './QuestionPage.css';


function QuestionPage(props) {

    
    const options = props.options.map((ele,index) => {
        console.log(props.qno);
        
        if (props.checker !== null) {
            if (parseInt(props.checker) === index) {
                return (
                    <div className="Question1">
                        <input type='radio' value={ele} key={ele} id={index} name={'question' + props.qno} onChange={props.radioclicked} checked/>
                        <label htmlFor={ele}>{ele}</label>
                    </div>
                );
            }
        }
        return (
                <div className="Question1">
                    <input type='radio' value={ele} key={ele} id={index} name={'question' + props.qno} onChange={props.radioclicked} />
                    <label htmlFor={ele}>{ele}</label>
                </div>
                );
            })
    return (
        <div className="Question">
            <h3>{'(Q'+props.tracker+')   '+props.question}</h3>
            {options}
            <button id='prev' onClick={props.buttonclicked}>Previous</button>
            <button id='next' onClick={props.buttonclicked}>Next</button>
        </div>
        );
}

export default QuestionPage;