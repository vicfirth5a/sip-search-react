import React from "react";
import images from "../images"

function AdminPage() {

    return (<>
        <div className="container admin-bg">
            <div className="title">
                <h2 className="fs-4 d-flex align-items-center"><span className="material-symbols-outlined  me-4 fs-4">
                    Settings
                </span>管理中心</h2>
            </div>
            <div className="mt-10 d-flex justify-content-between">
                <div className="admin-sidebar">
                    <ul className="text-primary-1">
                        <li className="sidebar-title">會員管理中心</li>
                        <li>
                            <a class="text-primary-1 btn-toggle sidebar-title w-100 d-flex justify-content-between" role="button" data-bs-toggle="collapse" href="#recipeCollapse" aria-expanded="false" aria-controls="recipeCollapse">
                                酒譜<span class="material-symbols-outlined">
                                    keyboard_arrow_down
                                </span>
                            </a>
                            <div class="collapse" id="recipeCollapse">
                                <ul className="btn-toggle-nav">
                                    <li><a href="#">編輯酒譜</a></li>
                                    <li><a href="#">新增酒譜</a></li>
                                    <li><a href="#">酒譜草稿</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a class="text-primary-1 btn-toggle align-items-center sidebar-title w-100 d-flex justify-content-between" role="button" data-bs-toggle="collapse" href="#barCollapse" aria-expanded="false" aria-controls="barCollapse">酒吧<span class="material-symbols-outlined">
                                keyboard_arrow_down
                            </span>
                            </a>
                            <div class="collapse" id="barCollapse">
                                <ul className="btn-toggle-nav">
                                    <li><a href="#">編輯酒吧</a></li>
                                    <li><a href="#">新增酒吧</a></li>
                                    <li><a href="#">酒吧草稿</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="admin-list">
                    <div className="d-flex justify-content-between admin-form mb-6">
                        <h3 className="form-title fs-7">所有酒譜</h3>
                        <form className="d-flex bg-neutral-1 border-primary-4">
                            <input className="form-control me-2 bg-transparent" type="search" placeholder="搜尋酒譜" aria-label="Search" />
                            <button className="btn" type="submit"><span class="material-symbols-outlined align-middle text-neutral-4">
                                search
                            </span></button>
                        </form>
                    </div>
                    <div className="px-5">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col" className=" text-primary-1">序號</th>
                                    <th scope="col" className=" text-primary-1">名稱</th>
                                    <th scope="col" className=" text-primary-1">照片</th>
                                    <th scope="col" className=" text-primary-1">功能</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="recipe-list">
                                    <th scope="row" className="align-middle">1</th>
                                    <td className="align-middle">尼格羅尼(Gin & Tonic)</td>
                                    <td><img src="https://images.unsplash.com/photo-1617524455170-ca63c7f0d472?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2luJTIwdG9uaWN8ZW58MHx8MHx8fDA%3D" alt="ginTonic" className="img-fluid object-fit-cover" /></td>
                                    <td className="f-btn">
                                        <ul className="d-flex justify-content-between">
                                            <li><a href="#">編輯</a></li>
                                            <li><a href="#">下架</a></li>
                                            <li><a href="#" className="text-primary-3">刪除</a></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-11">
                        <ul className="d-flex justify-content-end page-list gap-3">
                            <li><a href="#" className="page-btn">1</a></li>
                            <li><a href="#" className="page-btn">2</a></li>
                            <li><a href="#" className="page-btn">3</a></li>
                            <li><a href="#" className="page-arrow"><span class="material-symbols-outlined fs-8">
                                arrow_forward_ios
                            </span></a></li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-between admin-form mt-11 mb-10">
                        <h3 className="form-title fs-7">編輯酒譜</h3>
                    </div>
                    <div className="edit-recipe-form w-100 px-5">
                        <div className="mb-10">
                            <label htmlFor="recipeName" className="form-label mb-6" required>酒譜名稱</label>
                            <input type="text" className="form-control recipe-input" id="recipeName" placeholder="琴通寧" />
                        </div>
                        <div className="d-flex justify-content-between gap-3 mb-10">
                            <div>
                                <div className="recipe-intro">
                                    <label for="exampleFormControlTextarea1" className="form-label mb-6">酒譜介紹</label>
                                    <textarea className="form-control intro-text" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="recipe-img">
                                    <label for="formFile" className="form-label mb-6">照片</label>
                                    <div className="mb-6 d-flex">
                                        <input className="form-control me-6" placeholder="圖片網址" />
                                        <button className="bg-primary-3 border-0 text-neutral-1 text-nowrap px-3 py-2">上傳網址</button>
                                    </div>

                                    <img src="https://images.unsplash.com/photo-1617524455170-ca63c7f0d472?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2luJTIwdG9uaWN8ZW58MHx8MHx8fDA%3D" alt="ginTonic" className="img-fluid object-fit-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-10 gap-3">
                            <div className="ingredients">
                                <p className="mb-6">材料比例</p>
                                <div className="px-6 py-4">
                                    <div className="mb-6 d-flex justify-content-between gap-3">
                                        <p className="ingredients-title">材料</p>
                                        <p className="ingredients-title">用量</p>
                                        {/* <label htmlFor="ingredientsItems" className=" ingredients-items">材料</label> */}
                                        {/* <label htmlFor="ingredientsRatio" className="ingredients-items">用量</label> */}

                                    </div>
                                    <div className="ingredients-items d-flex justify-content-between mb-6">
                                        <input type="text" id="ingredientsItems" placeholder="輸入材料" className="form-control ingredients-input" />
                                        <input type="text" id="ingredientsRatio" placeholder="輸入用量" className="form-control ingredients-input" />
                                        <button type="button" className="rounded-circle bg-primary-4 border-0" ><span class="material-symbols-outlined text-align-center align-middle">
                                            add
                                        </span></button>
                                    </div>
                                    <div className="mb-6 d-flex justify-content-between  ingredients-list fw-lighter">
                                        <p className="rounded-pill text-center align-items-center py-2">琴酒</p>
                                        <p className="rounded-pill text-center align-items-center py-2">50 毫升</p>
                                        <button className="bg-transparent border-0"><span class="material-symbols-outlined align-middle">
                                            close
                                        </span></button>
                                    </div>


                                </div>

                            </div>
                            <div className="garnish">
                                <p className="mb-6">點綴物</p>
                                <div className="px-6 py-4">
                                    <div className="mb-6 d-flex justify-content-between gap-3">
                                        <p className="ingredients-title">材料</p>
                                        <p className="ingredients-title">用量</p>
                                        {/* <label htmlFor="ingredientsItems" className=" ingredients-items">材料</label> */}
                                        {/* <label htmlFor="ingredientsRatio" className="ingredients-items">用量</label> */}

                                    </div>
                                    <div className="ingredients-items d-flex justify-content-between mb-6">
                                        <input type="text" id="ingredientsItems" placeholder="輸入材料" className="form-control ingredients-input" />
                                        <input type="text" id="ingredientsRatio" placeholder="輸入用量" className="form-control ingredients-input" />
                                        <button type="button" className="rounded-circle bg-primary-4 border-0" ><span class="material-symbols-outlined text-align-center align-middle">
                                            add
                                        </span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10">
                            <p>步驟</p>
                            <table class="table recipe-steps table-borderless">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <th className="text-center py-4"><span class="material-symbols-outlined text-neutral-1">
                                            counter_1
                                        </span></th>
                                        <td className="py-4">在一個玻璃杯中加入適量冰塊，填滿大約三分之二。</td>
                                        <td className="text-center py-4">
                                            <button className="bg-transparent border-0"><span class="material-symbols-outlined align-middle text-neutral-1">
                                                menu
                                            </span></button>
                                            <button className="bg-transparent border-0"><span class="material-symbols-outlined align-middle text-neutral-1">
                                                close
                                            </span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-center align-middle py-4"><span class="material-symbols-outlined text-align-center ">
                                            add
                                        </span></th>
                                        <td className="py-4">
                                            <textarea className="form-control recipe-input" rows="2"></textarea>
                                        </td>
                                        <td className="text-center align-middle py-4">
                                            <button className="bg-transparent border-1 border-primary-1 text-primary-1 py-2 px-6">儲存
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mb-11 add-tags">
                            <p className="mb-6">標籤</p>
                            <div className="d-flex align-items-center">
                                <input type="text" placeholder="輸入標籤" className="bg-transparent border-1 border-neutral-1 me-6 form-control" />
                                <button type="button" className="rounded-circle bg-primary-4 border-0 add-tags-btn" >
                                    <span class="material-symbols-outlined text-align-center align-middle">
                                        add
                                    </span>
                                </button>
                            </div>
                            <ul className="added-tags">
                                <li >
                                    <button className="index-rounded-btn"></button>

                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    </>)

}

export default AdminPage;