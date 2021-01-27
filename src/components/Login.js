import React from 'react';
import styled, {css} from 'styled-components';
import Button, {NormalButton} from "./Button";

const LoginTemplateBlock = styled.div`
    width: 512px;
    height: 128px;
    
    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);
    
    margin: 0 auto;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    
`;


const IdInput = styled.input`
    margin: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 128px;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

const PasswordInput = styled.input`
    margin: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 128px;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

const ExplainText = styled.p`
    font-size: 16px;
    color: #495057;
    display: inline-block;
`;

function Login() {
    return (
        <>
            <LoginTemplateBlock>
                <div>
                    <ExplainText>아이디</ExplainText>
                    <IdInput/>
                    <ExplainText>비밀번호</ExplainText>

                    <PasswordInput/>
                </div>
                <div>
                    <NormalButton outline={true} > 로그인   </NormalButton>
                    <NormalButton outline={true} > 회원가입 </NormalButton>
                    <NormalButton outline={true} > 로그아웃 </NormalButton>
                </div>
            </LoginTemplateBlock>

        </>
    );
}

export default Login;
