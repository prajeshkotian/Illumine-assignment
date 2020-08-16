// JavaScript source code
import React from 'react';
import './Output.css';
import {connect} from 'react-redux';


function getCSSClass(id) {
    if (id === 'Yes') {
        return 'dot3';
    }
    else if (id === 'No') {
        return 'dot1';
    }
    else if(id === 'Sometimes'){
        return 'dot2';
    }
}

function Output(props) {
    //const result = ['0', '1', '0', '2', '0', '2'];

    console.log(props.result);
    const summary = props.result.map((ele,index) => {
        return (
            <li>
                <div className='text'>


                    <div className={getCSSClass(ele)} >


                        <span className="tooltiptext">{index+': ' +ele}</span>

                        {/* <p className="img__descriptionma">hi</p> */}
                    </div>
                </div>


            </li>
        );
    })

    const textsummary = props.result.map((ele,index) => {
        var text;
        if (ele === '' || ele === null) {
            ele = "Question not Answered";
        }
        else {

        }
        return (
            
            <li className="flexer" >
                <p className="hoverdata">{'Question:' + index}</p>

                    <p className="hoverdata">{'Answer:' + ele}</p>
                </li>
            
        );
    })

    return (
        <div className="Body">
            <ul className="SummaryBox">
                {textsummary}
            </ul>
        <ul className="circle">
            {summary}
            <div className="circle-middle" />
            <div className="circle-low" />
        </ul>
        </div>
        );
}
const mapStateToProps = (state) => {
    return {
        result: state.answers
    }
}
export default connect(mapStateToProps)(Output);