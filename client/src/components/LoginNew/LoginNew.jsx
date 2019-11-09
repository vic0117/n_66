import React from "react";
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

//IMAGE SVG
import { ReactComponent as Logo } from "./img/logo.svg";
//CSS
// import "../Login/login.css";
import "./LoginNew.css";

class LoginNew extends React.Component {
    componentDidMount() {
        let wantSignUp = false;
        let windowWidth = window.innerWidth;
        
        let signIn = document.querySelector('.signIn');
        let registered = document.querySelector('.registered');
        let mountainBg = document.querySelector('.mountainBg');
        let titleUp =  document.querySelector('#titleUp');
        let titleIn =  document.querySelector('#titleIn');
        
        let signInForm = document.querySelector('.sign-in');
        let signUpForm = document.querySelector('.sign-up');
        let signUpBtn = document.querySelector('.__btn');
        let mUp = document.querySelector('#mUp');
        let mIn = document.querySelector('#mIn');

        window.addEventListener('resize', ()=>{
            windowWidth = window.innerWidth;
            console.log(windowWidth);
        })

        function horizonMove(){
            wantSignUp = !wantSignUp;

            if(wantSignUp){
                registered.style.transform = 'translate(-610px, 0)';
                mountainBg.style.transform = 'translate(610px, 0)'
                signIn.style.transform ='translate(350px, 0)';
                signInForm.style.opacity = '0';
                signUpForm.style.top = '0';
                signUpForm.style.opacity = '1';
                titleUp.style.transform = 'translate(0, -100px)';
                titleIn.style.transform = 'translate(0, -100px)';
                mUp.style.transform = 'translate(0, 50px)';
                mIn.style.transform = 'translate(0, 0px)';
            }
            else{
                registered.style.transform = 'translate(0, 0)';
                mountainBg.style.transform = 'translate(0, 0)'
                signIn.style.transform ='translate(0, 0)';
                signInForm.style.opacity = '1';
                signUpForm.style.top = '200%';
                signUpForm.style.opacity = '0';
                titleUp.style.transform = 'translate(0, 0)';
                titleIn.style.transform = 'translate(0, 0)';
                mUp.style.transform = 'translate(0, 0px)';
                mIn.style.transform = 'translate(0, -50px)';
            }
        }


        function verticalMove(){
            wantSignUp = !wantSignUp;

            if(wantSignUp){
                registered.style.transform = 'translate(0, -550px)';
                mountainBg.style.opacity = '0'
                signIn.style.transform ='translate(0, 550px)';
                signInForm.style.opacity = '0';
                signUpForm.style.top = '0';
                signUpForm.style.opacity = '1';
                titleUp.style.transform = 'translate(0, -100px)';
                titleIn.style.transform = 'translate(0, -100px)';
                mUp.style.transform = 'translate(0, 50px)';
                mIn.style.transform = 'translate(0, 0px)';
            }
            else{
                registered.style.transform = 'translate(0, 0)';
                mountainBg.style.opacity = '1'
                signIn.style.transform ='translate(0, 0)';
                signInForm.style.opacity = '1';
                signUpForm.style.top = '200%';
                signUpForm.style.opacity = '0';
                titleUp.style.transform = 'translate(0, 0)';
                titleIn.style.transform = 'translate(0, 0)';
                mUp.style.transform = 'translate(0, 0px)';
                mIn.style.transform = 'translate(0, -50px)';
            }
        }

        signUpBtn.addEventListener('click', ()=>{
            if(windowWidth > 981){
                horizonMove();
            }
            else{
                verticalMove();
            }
        });
    }

    render() {
        return (
            <Container  className="cont">
                <Row className="loginRow">
                    <div className="signIn">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="position-relative">
                            <form className="form sign-in" method="">
                                <h2>會員登入</h2>
                                <label>
                                    <input type="email" placeholder="電子信箱" />
                                </label>
                                <label>
                                    <input type="password" placeholder="密碼" />
                                </label>
                                <a href="#6" className="forgot-pass">忘記密碼?</a>
                                <button type="submit" className="submit">
                                    登入
                                </button>
                            </form>

                            <form className="form sign-up" method="">
                                <div className=" ">
                                    <h2>會員註冊</h2>
                                    <label>
                                        <input type="email" placeholder="電子信箱" />
                                    </label>
                                    <label>
                                        <input type="password" placeholder="密碼" />
                                    </label>
                                    <label>
                                        <input type="password" placeholder="確認密碼" />
                                    </label>
                                    <button type="submit" className="submit register">
                                        註冊
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="registered">
                        <div className="mountainBg"></div>
                        <div className="sub-cont" >
                            <div className="img">
                                <div className="inner">
                                    <div id="titleUp" className="__text m--up" style={{'transition': '1.2s ease-in-out'}}>
                                        <h2>加入</h2>
                                        <p>探索更多旅程</p>
                                    </div>
                                    <div id="titleIn" className="__text m--in" style={{'transition': '1.2s ease-in-out'}}>
                                        <h2>發現</h2>
                                        <p>獨一無二的冒險</p>
                                    </div>
                                </div>

                                <div className="__btn">
                                    <a id="mUp" href="#2" role="button" className="m--up">註冊</a>
                                    <a id="mIn" href="#3" role="button" className="m--in">登入</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default LoginNew;