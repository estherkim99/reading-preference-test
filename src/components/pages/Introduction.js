import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.container {
    position: absolute;
    top: calc(50vh - 100px);
    left: 25vw;
    width: 50vw;
}
.title-text {
    font-size: xx-large
}
.start-button {
    font-size: large;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: seashell;
    border: none;
}
`

const Introduction = ({ title, _onStartTest }) => {
    return (
        <Wrapper>
            <div class='container'>
                <h1 class='title-text'>{title}</h1>
                <button class='start-button' onClick={_onStartTest}>
                    <span>테스트 시작하기</span>
                </button>
            </div>
        </Wrapper>
    )

}

export default Introduction