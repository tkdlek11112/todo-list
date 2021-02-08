import React from 'react'
import styled from 'styled-components';

const FooterClass = styled.div`
    width: 100%;
    border-top: black solid 1px;
    background: #282c34;
    color: white;
    padding: 10px;
`;


function Footer({screen}){
    console.log('Footer screen number')
    console.log(screen)
    switch (screen){
        case 1:
        case 101:
            return(
                <FooterClass>
                    <h2> 로그인/로그아웃/회원가입 API만들기 </h2>
                    <b>기능</b> <br/>
                    - 아이디와 비밀번호를 입력하고 회원가입 버튼을 누르면 회원가입 API를 호출한다. <br/>
                    - 기존에 있는 아이디일 경우 ERROR 응답 <br/>
                    - 로그인/회원가입 시 아이디가 빈값일경우 ERROR 응답 <br/>
                    - 비밀번호가 틀릴경우 ERROR 응답 <br/>
                    - 아이디/비밀번호 일치할 경우 로그인 성공 메시지 + 사용자 ID 응답 <br/>
                    <h2>* 로그인 API ( 실습 )</h2>
                    URL : http://localhost:8000/login/app_login <br/><br/>
                    <b>입력필드</b> <br/>
                    user_id (string): 사용자 아이디 <br/>
                    user_pw (string): 사용자 비밀번호 <br/><br/>
                    <b>출력필드</b> <br/>
                    msg (string): 결과 메세지 <br/>
                    user_id (string, option): 사용자 아이디 (성공시) <br/>

                    <br/>
                    <h2>* 회원가입 API </h2>
                    URL : http://localhost:8000/login/regist_user <br/><br/>
                    <b>입력필드</b> <br/>
                    user_id (string): 사용자 아이디 <br/>
                    user_pw (string): 사용자 비밀번호 <br/><br/>
                    <b>출력필드</b> <br/>
                    msg (string): 결과 메세지 <br/>
                    user_id (string, option): 사용자 아이디 (성공시) <br/>
                </FooterClass>
            )
        case 2:
        case 102:
            return(
                <FooterClass>
                    <h2>To-Do 목록 조회 </h2>
                    <b>기능</b> <br/>
                    - 서버에 있는 To-Do 목록을 가져와서 화면에 표시한다. <br/>
                    - To-Do 체크 버튼을 누르면 Done을 True(or False)로 바꿔준다. <br/>
                    - To-Do 삭제 버튼을 누르면 리스트(DB)에서 삭제한다. <br/>
                    - +버튼을 눌러 만들기를 하면 새로 To-Do를 만든다. <br/>
                    <br/>

                    <h2>* To-Do 목록 조회 API </h2>
                    URL : http://localhost:8000/todo/select <br/><br/>
                    <b>입력필드</b> <br/>
                    없음 <br/><br/>
                    <b>출력필드</b> <br/>
                    id (string): To-Do Task 고유 아이디 <br/>
                    name (string): To-Do Task 이름 <br/>
                    done (boolean): To-Do Task 완료 여부 <br/>
                    <br/>
                </FooterClass>
            )

        default:
            return(
                <></>
            )
    }

}

export default Footer;