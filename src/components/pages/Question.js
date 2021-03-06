import React, { Component } from 'react'
import styled from 'styled-components'
import content from '../../content'
import SingleQuestion from '../test/SingleQuestion'

const Wrapper = styled.div`
.container {
    position: absolute;
    top: calc(50vh - 100px);
    left: 25vw;
    width: 50vw;
}
.result-text {
    font-size: xx-large
}
.result-list {
    font-size: large
}
`

class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionCounter: 0,
            questionIndex: 1,
            questionText: '',
            answerOptions: [],
            answer: null,
            answerText: '',
            stats: {
                사교: 0.,
                낭독: 0.,
                혼독: 0.,
                토론: 0.,
                기록: 0.,
                숙제: 0.,
                책린이: 0.,
                책청년: 0.,
                책른: 0.,
            },
            result: ''
        }
        this.handleAnswerSelect = this.handleAnswerSelect.bind(this)
    }

    componentWillMount() {
        this.setState({
            questionText: content[0].question,
            answerOptions: content[0].answers
        })
    }

    setAnswer(answer) {
        console.log(answer.scores)
        const stats = this.state.stats
        let applyAnswer = answer => {
            Object.keys(answer.scores).forEach(function (key) {
                stats[key] += answer.scores[key]
            })
            return stats
        }
        this.setState({
            answer: answer.text,
            stats: applyAnswer(answer)
        })
    }

    setNextQuestion() {
        const newCount = this.state.questionCounter + 1
        const newQuestionIndex = this.state.questionIndex + 1
        this.setState({
            questionCounter: newCount,
            questionIndex: newQuestionIndex,
            questionText: content[newCount].question,
            answerOptions: content[newCount].answers,
            answer: null,
            answerText: ''
        })
    }

    handleAnswerSelect(answer) {
        this.setAnswer(answer)
        if (this.state.questionIndex < content.length) {
            this.setNextQuestion()
        } else {
            const result = JSON.stringify(this.state.stats)
            this.setState({ result: result })
        }
    }

    render() {
        if (this.state.result) {
            const stats = this.state.stats
            var statsList = Object.keys(stats).map(function (key) {
                return [key, stats[key]];
            });
            statsList.sort(function (first, second) {
                return second[1] - first[1];
            });

            return (
                <Wrapper >
                    <div class='container'>
                        <h1 class='result-text'>당신의 독서 스타일은?</h1>
                        <ol>
                            <li>{statsList[0][0]}</li>
                            <li>{statsList[1][0]}</li>
                            <li>{statsList[2][0]}</li>
                        </ol>
                    </div>
                </Wrapper>
            )
        }
        else {
            return (
                <Wrapper>
                    <div class='container'>
                        <SingleQuestion
                            answerText={this.state.answerText}
                            answerOptions={this.state.answerOptions}
                            questionIndex={this.state.questionIndex}
                            questionText={this.state.questionText}
                            questionTotal={content.length}
                            onAnswerSelect={this.handleAnswerSelect}
                        />
                    </div>
                </Wrapper>
            )
        }
    }

}

export default Question