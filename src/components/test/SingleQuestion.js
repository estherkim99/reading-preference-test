import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.question-text {
    text-align: center;
    font-size: x-large;
    width: 100%;
}
.answer-button {
    padding: 10px 20px;
    width: 100%;
    border-radius: 5px;
    background-color: seashell;
    border: none;
    color: black;
}

.answer-text {
    font-size: large
}
`

const SingleQuestion = props => {
    const renderOption = answer => {
        const handleSelected = () => {
            props.onAnswerSelect(answer)
        }
        return (
            <div>
                <button
                    id={answer.index}
                    onClick={handleSelected}
                    class='answer-button'
                ><span class='answer-text'>{answer.text}</span></button>
            </div>
        )
    }
    return (
        <Wrapper>
            <h1 class='question-text'>{props.questionText}</h1>
            <div>
                {props.answerOptions.map(renderOption)}
            </div>
        </Wrapper>
    )
}

export default SingleQuestion