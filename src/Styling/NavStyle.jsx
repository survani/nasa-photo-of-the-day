import styled from 'styled-components';

const NavContainer = styled.section `
    display:flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: 1rem; 
    background: whitesmoke;
`;

export const AnchorContainer = styled.a `
    color: black;
    text-decoration: none;
    margin-left: 1rem;
`;
export default NavContainer;