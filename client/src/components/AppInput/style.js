import styled from 'styled-components';

export const Input = styled.input`
    width:100%;
    height: 32px;
    background: rgba(255, 255, 255, 0.41);
    font-family: sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    color: gray;
    border: 1px solid #c8c6c6;
    letter-spacing: -0.5px;
`;

export const ErrorHint = styled.div`
    position:relative;
    &:before {
        content:'';
        display: ${props => (props.isError ? 'block' : 'none')};
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #801313;
        position:absolute;
        top:-2px;
        left:35px;
        z-index:8;
    }

    &:after {
        display:${props => (props.isError ? 'block' : 'none')};
        content:"Incorrect Value";
        position:absolute;
        top:3px;
        left:0px;
        padding:5px 8px;
        background:#801313;
        color:#fff;
        z-index:9;
        font-size: 0.75em;
        height:18px;
        line-height:18px;
        border-radius: 5px;
        white-space:nowrap;
        word-wrap:normal;
    }
}
`;
