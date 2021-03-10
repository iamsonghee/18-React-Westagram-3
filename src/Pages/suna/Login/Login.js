import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Login.scss';

class LoginSuna extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      ready: "",
      name: "hello",
    };
  }

  componentDidMount() {
  }

  goToMain = (e) => {
    e.preventDefault();
    if(this.state.ready === true){
    //   fetch("http://10.58.5.212:8000/user/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: this.state.id,
    //     password: this.state.pw,
    //     username: this.state.name,
    //   }),
    // })
      // .then((response) => response.json())
      // .then((result) => console.log("결과: ", result));
      this.props.history.push('/main-suna');
      } else {
        alert("아이디와 비밀번호를 확인해주세요")
        this.props.history.push('/login-suna');
      }
  };
  
  handleInputValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name] : value,
      ready : this.state.pw.length>5 && this.state.id.includes("@") ? true : false
    });
  };

  render() {
    console.log(this.state.id, this.state.pw)
    return (
      <div className="background">
        <section className="login-page">
          <div className="logo">
            <h1>
              <a href="https://wecode.co.kr">Westagram</a>
            </h1>
          </div>

          <form className="login-box" id="loginForm" method="post" action="#">
            <div>
              <div className="input-box">
                <input
                  name="id"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일
                  "
                  className="login data"
                  id="user"
                  autoComplete="off"
                  onChange={this.handleInputValue}
                />
                <input
                  name="pw"
                  type="password"
                  placeholder="비밀번호"
                  className="login data"
                  id="password"
                  autoComplete="off"
                  onChange={this.handleInputValue}
                />
              </div>
              <div className="button-box">
                <button type="submit" 
                className={this.state.ready ? 
                  "login button active" : "login button"}
                onClick={(e) => this.goToMain(e)}
                >
                  <Link to="/main-suna">로그인</Link>
                </button>
              </div>
            </div>
          </form>
          <div className="find-password" onClick={this.goToMain}>
            <Link to="/main-suna">비밀번호를 잊으셨나요?</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(LoginSuna);