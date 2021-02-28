import React,{useContext, useState, useMemo, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Button, {NormalButton} from "../Button";
import {useUserIdProvider, usePasswordContext, useSetPasswordContext, useSetUserIdContext} from "../../LoginContext";
import {useAsync} from "react-async";
import {PostJoin, PostLogin} from "../../api";

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

const LoginFormDiv = styled.div`
    text-align: center;
`;

const TextMessage = styled.p`
    font-size: 20px;
`;

const ResponseMsgDiv = styled.div`
    text-align: center;
    margin: 8px;
`;

function setGlobalUserId(user_id, setUserId){
    setUserId(user_id);
}


function Login() {
    const userId = useUserIdProvider(); // 이건 전체 id로 사용하자
    const setUserId = useSetUserIdContext();

    const [dummyUserId, setDummyUserId] = useState('');

    const password = usePasswordContext();
    const setPassword = useSetPasswordContext();
    const [show, setShow] = useState(true);
    const [msg, setMsg] = useState('');
    const [inputUserId, setInputUserId] = useState(''); // 이게 로그인 텍스트 창에 입력한 id
    const [inputPassword, setInputPassword] = useState(''); // 이게 로그인 텍스트 창에 입력한 id

    const LoginDummy = () => {
        setDummyUserId(inputUserId);
    };

    const {data: response, error, isLoading, run} = useAsync({
        deferFn: PostLogin,
        inputUserId,
        inputPassword,
        initialValue:{
            msg:'아이디와 비밀번호를 입력해주세요.'
        }
    });

    const Join = () =>{
        if(inputUserId == ''){
            setMsg("아이디는 공백이 될 수 없습니다.");
        }else{
            setMsg("회원가입이 완료되었습니다. (DUMMY)");
        }
    };

    const LogOut = () =>{
        setMsg('아이디와 비밀번호를 입력해주세요.');
        setDummyUserId('');
        setGlobalUserId('', setUserId)
        setShow(true);
        setInputUserId( '');
        setInputPassword('');
    };

    console.log(response);
    useEffect(() =>{
        if (dummyUserId){
            setGlobalUserId(dummyUserId, setUserId);
            setShow(false);
        }
    }, [dummyUserId]);

    useEffect(()=>{
        setMsg(response.msg)
    },[response.msg]);

    if(show)
        return (
            <>
                <LoginTemplateBlock>
                    <LoginFormDiv>
                        <ExplainText>아이디</ExplainText>
                        <IdInput value={inputUserId} onChange={(e)=>setInputUserId(e.target.value)} />
                        <ExplainText>비밀번호</ExplainText>
                        <PasswordInput value={inputPassword} onChange={(e)=> setInputPassword(e.target.value)}/>
                    </LoginFormDiv>
                    <LoginFormDiv>
                        <NormalButton outline={true} onClick={LoginDummy} > 로그인   </NormalButton>
                        <NormalButton outline={true} color={'deeppink'} onClick={Join}  > 회원가입 </NormalButton>
                    </LoginFormDiv>
                    <ResponseMsgDiv>
                        {msg}
                    </ResponseMsgDiv>
                </LoginTemplateBlock>
            </>
        );
    else
        return (
            <>
                <LoginTemplateBlock>
                    <LoginFormDiv>
                        <TextMessage>
                            안녕하세요. <b>{inputUserId}</b> 님
                        </TextMessage>
                    </LoginFormDiv>
                    <LoginFormDiv>
                        <NormalButton outline={true} onClick={LogOut}> 로그아웃 </NormalButton>
                    </LoginFormDiv>
                </LoginTemplateBlock>
            </>
        );
}

export default React.memo(Login);
