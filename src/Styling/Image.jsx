import styled from 'styled-components';

const Image = styled.section`
display:flex;
justify-content: center;
`;

export const InnerImage = styled.img`
    width: 50rem;
    height: 30rem;
    border: 5px solid black;
    margin-top: 1.2rem;
`;

export const InnerTextContainer = styled.div `
    margin-left: 44px;
    text-align: center;
`;


export default Image;