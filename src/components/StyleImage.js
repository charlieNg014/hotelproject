import styled from 'styled-components';
import defaultImg from '../images/defaultBcg.jpeg';

const StyledImage = styled.header `
    min-height: calc(100vh - 66px);
    background: url(${props => props.img? props.img:defaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledImage;