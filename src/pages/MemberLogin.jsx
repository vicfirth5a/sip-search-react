import React, { use } from "react";
import { Link } from "react-router";

function MemberLogin() {

// const [account, setAccount] = useState({
//     username: "test@test.com",
//     password:"example",
// });

  return (
    <>
      <div className="section-ml-1 mt-13">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-ml-left mt-lg-13 mb-lg-8 me-lg-10">
                <h2 className="text-primary-1 eng-font mb-lg-8 mt-12 mt-lg-0">
                  Log in to sip&search
                </h2>
                <hr className="text-primary-1" />
                <h6 className="text-primary-1 mt-8 mb-lg-12 mb-10">
                  已有帳號，使用註冊信箱登入
                </h6>

                <form className="text-primary-1 mb-lg-12">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label fs-lg-6"
                    >
                      信箱
                    </label>
                    <input
                      type="email"
                      className="form-control text-primary-1"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label fs-lg-6 mt-lg-8"
                    >
                      密碼
                    </label>
                    <input
                      type="password"
                      className="form-control text-primary-1 mb-10"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-index-primary1 px-lg-8 me-6"
                  >
                    登入
                  </button>
                  <a className="text-primary-1 fs-lg-9 align-bottom" href="#">
                    忘記您的密碼？
                  </a>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mt-12 mt-lg-0">
              <div className="section-ml-right mt-lg-13 mb-lg-8 ms-lg-10">
                <h4 className="text-primary-1 mb-lg-10">新用戶</h4>
                <hr className="text-primary-1" />
                <h6 className="text-primary-1 mt-8 mb-3">免費註冊您的帳號</h6>
                <p className="text-primary-1 fs-9 mb-lg-13 mb-12">
                  更快速掌握網站的各種功能消息！
                </p>
                <Link
                  className="btn btn-index-primary1 px-lg-8 mb-13 mb-lg-0"
                  to="/membersignup"
                >
                  創立一個新帳號
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberLogin;
