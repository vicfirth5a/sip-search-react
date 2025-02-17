import React from "react";

function MemberSignup() {
  return (
    <>
      <div className="section-ms-1 mt-13">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-ms-left mt-lg-13 mb-lg-8 me-lg-10">
                <h2 className="text-primary-1 eng-font mb-lg-8 mt-12 mt-lg-0">
                  Sign up to sip&search
                </h2>
                <hr className="text-primary-1" />
                <h6 className="text-primary-1 mt-8">免費註冊您的帳號</h6>
                <p className="text-primary-1 fs-9 mb-lg-12 mb-10 mt-3 mt-lg-0">
                  更快速掌握網站的各種功能消息！
                </p>

                <form className="text-primary-1 mb-lg-12">
                  <div className="mb-3">
                    <label htmlFor="nickname" className="form-label fs-lg-6">
                      綽號
                    </label>
                    <input
                      type="text"
                      className="form-control text-primary-1"
                      id="nickname"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label fs-lg-6 mt-lg-8"
                    >
                      信箱
                    </label>
                    <input
                      type="email"
                      className="form-control text-primary-1"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="inputPassword5"
                      className="form-label fs-lg-6 mt-lg-8"
                    >
                      密碼
                    </label>
                    <input
                      type="password"
                      id="inputPassword5"
                      className="form-control text-primary-1"
                      aria-describedby="passwordHelpBlock"
                      required
                    />
                    <div id="passwordHelpBlock" className="form-text">
                      Your password must be 8-20 characters long, contain
                      letters and numbers, and must not contain spaces, special
                      characters, or emoji.
                    </div>
                  </div>

                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-index-primary1 px-lg-8 mb-13 mb-lg-0"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    創立一個新帳號
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body modal-border-primary-1">
                          <div className="decoration">
                            <div className="wrap-1"></div>
                          </div>
                          <div className="d-flex flex-column align-items-center">
                            <h4 className="text-primary-1 mb-lg-8 mt-lg-13">
                              會員註冊成功
                            </h4>
                            <span className="material-symbols-outlined ml-check">
                              task_alt
                            </span>
                            <div className="d-flex mt-lg-8 mb-lg-13">
                              <p className="fs-8">正在跳轉至首頁 5...</p>
                              <span className="material-symbols-outlined">
                                progress_activity
                              </span>
                            </div>
                          </div>
                          <div className="decoration">
                            <div className="wrap-2 ms-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSignup;