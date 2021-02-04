import React from 'react'
import styled from 'styled-components';

const FooterClass = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    border-top: black solid 1px;
    background: #282c34;
    color: white;
`;


function Footer(){
    return(
        <FooterClass>
            여기는 푸터
        </FooterClass>
    )
}

export default Footer;