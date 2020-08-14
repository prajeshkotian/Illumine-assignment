import React, { Component } from 'react';
import Output from './Components/Output/Output';
//import Output1 from './Components/Output/Output1';
import './App.css';
import QuizPage from './Containers/Quiz Page/QuizPage';
import { Route, Switch } from 'react-router';


class App extends Component {
    state = {
        answers: [],
        string:''
    };

    getAnswerHandler = (quiz_answers) => {
       
        this.arr = quiz_answers;
        //console.log(this.arr);
        this.setState({ answers: quiz_answers,string: 'Hey' });
        //console.log(this.state);

        
    }

    render() {
        console.log(this.arr)
        return (
            <div className="App">

                <Switch>
                    
                    <Route path='/' render={() => <QuizPage method={this.getAnswerHandler} />} exact />
                    <Route path='/Summary' render={() => <Output results={this.arr}  />} exact/>
                </Switch>
            </div>
        );
    }
}
export default App;
