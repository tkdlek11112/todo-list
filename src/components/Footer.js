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
        default:
        case 1:
        case 101:
            return(
                <FooterClass>
                    <h1> 로그인/로그아웃/회원가입 API만들기 </h1>
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
                    <h1>To-Do 목록 조회/완료/추가/삭제 </h1>
                    <b>기능</b> <br/>
                    - 서버에 있는 To-Do 목록을 가져와서 화면에 표시한다. <br/>
                    - To-Do 체크 버튼을 누르면 Done을 True(or False)로 바꿔준다. <br/>
                    - To-Do 삭제 버튼을 누르면 리스트(DB)에서 삭제한다. <br/>
                    - +버튼을 눌러 만들기를 하면 새로 To-Do를 만든다. <br/>
                    <br/>

                    <h2>* 전체 조회 API </h2>
                    URL : http://localhost:8000/todo/select <br/><br/>
                    <b>입력필드</b> <br/>
                    없음 <br/><br/>
                    <b>출력필드</b> <br/>
                    tasks (Array) : [ <br/>
                    id (int): To-Do 고유 아이디 <br/>
                    name (string): To-Do 이름 <br/>
                    done (boolean): To-Do 완료 여부 <br/>
                    ]
                    <br/>
                    <br/>
                    <h2>* To-Do 추가 API </h2>
                    URL : http://localhost:8000/todo/create <br/><br/>
                    <b>입력필드</b> <br/>
                    user_id (string) : 사용자 id <br/>
                    todo_id (int) : To-Do 고유 아이디 <br/>
                    name (string) : To-Do 이름<br/><br/>
                    <b>출력필드</b> <br/>
                    없음
                    <br/>
                    <br/>
                    <h2>* To-Do 삭제 API </h2>
                    URL : http://localhost:8000/todo/delete <br/><br/>
                    <b>입력필드</b> <br/>
                    todo_id (int) : To-Do 고유 아이디 <br/><br/>
                    <b>출력필드</b> <br/>
                    없음
                    <br/>
                    <br/>
                    <h2>* To-Do 완료 API </h2>
                    URL : http://localhost:8000/todo/toggle <br/><br/>
                    <b>입력필드</b> <br/>
                    todo_id (int) : To-Do 고유 아이디 <br/><br/>
                    <b>출력필드</b> <br/>
                    없음
                    <br/>
                </FooterClass>
            )
        case 3:
        case 103:
            return(
                <FooterClass>
                    <h1>로그인 + To-Do C.R.U.D </h1>
                    <b>기능</b> <br/>
                    - 실습 1 + 실습 2 <br/>
                    - 로그인하면 로그인 한 ID로만 To-Do 조회 <br/>
                    - 10개씩 페이징 처리 <br/>
                    <br/>

                    <h2>* To-Do 조회 API </h2>
                    URL : http://localhost:8000/todo/select <br/><br/>
                    <b>입력필드</b> <br/>
                    user_id (string) : 사용자 id <br/>
                    page_number (int) : 페이지 번호 <br/>
                    <br/><br/>
                    <b>출력필드</b> <br/>
                    tasks (Array) : [ <br/>
                    id (int): To-Do 고유 아이디 <br/>
                    name (string): To-Do 이름 <br/>
                    userId (string): 사용자 id <br/>
                    done (boolean): To-Do 완료 여부 <br/>
                    ] <br/>
                    isLastPage (boolean): 마지막 페이지 여부
                    <br/>
                    <br/>
                    <h2>* To-Do 추가 API </h2>
                    URL : http://localhost:8000/todo/create <br/><br/>
                    <b>입력필드</b> <br/>
                    user_id (string) : 사용자 id <br/>
                    name (string) : To-Do 이름<br/><br/>
                    <b>출력필드</b> <br/>
                    id (int) : 생성된 To-Do의 ID<br/>
                    <br/>
                    <br/>
                    <h2>* To-Do 삭제 API </h2>
                    URL : http://localhost:8000/todo/delete <br/><br/>
                    <b>입력필드</b> <br/>
                    todo_id (int) : To-Do 고유 아이디 <br/><br/>
                    <b>출력필드</b> <br/>
                    없음
                    <br/>
                    <br/>
                    <h2>* To-Do 완료 API </h2>
                    URL : http://localhost:8000/todo/toggle <br/><br/>
                    <b>입력필드</b> <br/>
                    todo_id (int) : To-Do 고유 아이디 <br/><br/>
                    <b>출력필드</b> <br/>
                    없음
                    <br/>
                </FooterClass>
            )
        case 4:
        case 104:
            return(
                <FooterClass>
                    <h1>로그인 + To-Do C.R.U.D </h1>
                    <b>기능</b> <br/>
                    - 실습 1 + 실습 2 + 실습 3 <br/>
                    - 헤더에 user_id, version 필드 추가 <br/>
                    <br/>

                    <h2>* To-Do 조회 API </h2>
                    URL : http://localhost:8000/todo/select <br/><br/>
                    <b>입력 헤더 </b> <br/>
                    user_id (string) : 사용자 id <br/>
                    version (string) : 클라이언트 버전 <br/>
                    <br/>
                    <b>입력필드</b> <br/>
                    page_number (int) : 페이지 번호 <br/>
                    <br/>
                    <b>출력필드</b> <br/>
                    <b>result_code (string): 결과코드 </b><br/>
                    <b>result_msg (msg) : 결과메시지 </b><br/>
                    <b>data (object): 결과데이터 </b><br/>
                    &nbsp; tasks (Array) : [ <br/>
                    &nbsp;&nbsp; id (int): To-Do 고유 아이디 <br/>
                    &nbsp;&nbsp; name (string): To-Do 이름 <br/>
                    &nbsp;&nbsp; userId (string): 사용자 id <br/>
                    &nbsp;&nbsp; done (boolean): To-Do 완료 여부 <br/>
                    &nbsp;] <br/>
                    &nbsp;isLastPage (boolean): 마지막 페이지 여부
                    <br/>
                    <br/>
                    <h2>* To-Do 추가 API </h2>
                    URL : http://localhost:8000/todo/create <br/><br/>
                    <b>입력 헤더 </b> <br/>
                    user_id (string) : 사용자 id <br/>
                    version (string) : 클라이언트 버전 <br/>
                    <br/>
                    <b>입력필드</b> <br/>
                    name (string) : To-Do 이름<br/><br/>
                    <b>출력필드</b> <br/>
                    <b>result_code (string): 결과코드 </b><br/>
                    <b>result_msg (msg) : 결과메시지 </b><br/>
                    <b>data (object): 결과데이터 </b><br/>
                    &nbsp;id (int) : 생성된 To-Do의 ID<br/>
                    <br/>
                    <br/>
                    <h2>* To-Do 삭제 API </h2>
                    URL : http://localhost:8000/todo/delete <br/><br/>
                    <b>입력 헤더 </b> <br/>
                    version (string) : 클라이언트 버전 <br/>
                    <br/>
                    <b>입력필드</b> <br/>
                    todo_id (int) : To-Do 고유 아이디 <br/><br/>
                    <b>출력필드</b> <br/>
                    <b>result_code (string): 결과코드 </b><br/>
                    <b>result_msg (msg) : 결과메시지 </b><br/>
                    <br/>
                    <br/>
                    <h2>* To-Do 완료 API </h2>
                    URL : http://localhost:8000/todo/toggle <br/><br/>
                    <b>입력 헤더 </b> <br/>
                    version (string) : 클라이언트 버전 <br/>
                    <br/>
                    <b>입력필드</b> <br/>
                    todo_id (int) : To-Do 고유 아이디 <br/><br/>
                    <b>출력필드</b> <br/>
                    <b>result_code (string): 결과코드 </b><br/>
                    <b>result_msg (msg) : 결과메시지 </b><br/>
                    <br/>
                </FooterClass>
            )
        case 5:
        case 105:
            return(
                <FooterClass>
                    <h1> 강의 준비중입니다. 조금만 기다려주세요 !!!</h1>
                    <h1> Blog : <a href='https://cholol.tistory.com' target="_blank">마이쮸 블로그로 이동</a></h1>
                    <h1> YouTube : <a href='https://www.youtube.com/channel/UCUe5vJxFkS2Cel78mdTgpYQ' target="_blank">마이쮸 유튜브로 이동</a></h1>
                </FooterClass>
            );
    }

}

export default Footer;