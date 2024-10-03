const fixedIcon = () => {
    let content = `
            <a href="#"><img class="icon-size offIcon" src="img/icon/surfboard.svg" alt=""></a>
    `
    rocket.innerHTML = content
    rocket.onmouseover = () => {rocket.firstElementChild.firstElementChild.classList.remove("offIcon")}
    rocket.onmouseleave = () => {rocket.firstElementChild.firstElementChild.classList.add("offIcon")}
    document.addEventListener('scroll', () => {(window.scrollY > 150) ? rocket.classList.add("show-visible") : rocket.classList.remove("show-visible")})
    rocket.onclick = () => {
        rocket.style.transform = "translateY(-1000px)"
        rocket.style.transition = "1s"
        setTimeout(()=>{
            rocket.style.transform = "translateY(0)"
        }, 1500)
    }
}

const navbarHTML = () => {
    let contentHTML = `
            <div class="container-fluid ms-2 me-2">
                <a id="logo" class="logo-hover" href="index.html"><img src="img/logo.png"></a>
                <button class="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarToggle"
                        aria-controls="navbarToggle" 
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarToggle" class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-auto">
                        <li><a class="nav-link" href="index.html">首頁</a></li>
                        <li><a class="nav-link" href="about.html">關於耐茁</a></li>
                        <!-- <li><a class="nav-link" href="">最新消息</a></li> -->
                        <li id="cliffDropDown">
                            <a class="nav-link" href="cliff.html">【花蓮】清水斷崖 ▾</a>
                            <button>▾</button>
                            <div style="display: none; position:absolute">
                                <a class="d-block" href="">清水斷崖SUP立槳</a>
                                <a class="d-block" href="">清水斷崖KAYAK獨木舟</a>
                            </div>
                        </li>
                        <li id="liyuDropDown">
                            <a class="nav-link" href="">【花蓮】鯉魚潭 ▾</a>
                            <button>▾</button>
                            <div style="display: none; position:absolute">
                                <a class="d-block" href="">鯉魚潭SUP立槳</a>
                                <a class="d-block" href="">鯉魚潭KAYAK獨木舟</a>
                            </div>
                        </li>
                        <li id="roundDropDown">
                            <a class="nav-link" href="">【環島】SUP 各站 ▾</a>
                            <button>▾</button>
                            <div style="display: none; position:absolute">
                                <a class="d-block" href="">北台灣SUP立槳</a>
                                <a class="d-block" href="">宜蘭SUP立槳</a>
                                <a class="d-block" href="">台東SUP立槳</a>
                                <a class="d-block" href="">南投SUP立槳</a>
                            </div>
                        </li>
                        <li><a class="nav-link" href="partner.html">合作夥伴</a></li>
                        <li class="nav-link">常見Q&A</li>
                        <li id="contactDropDown">
                            <a class="nav-link" href="contact.html">聯絡我們 ▾</a>
                            <button>▾</button>
                            <div style="display: none; position:absolute">
                                <a class="d-block" href="locate.html">據點位置</a>
                                <a class="d-block" href="">加入耐茁</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    `
    navBar.innerHTML = contentHTML

    function widthDropDown(x) {
        if (x.matches) { // If media query matches
            cliffDropDown.lastElementChild.style.width = "100%"
            cliffDropDown.firstElementChild.innerText = "【花蓮】清水斷崖"
            cliffDropDown.querySelector("button").style.display = "inline-block"
            liyuDropDown.lastElementChild.style.width = "100%"
            liyuDropDown.firstElementChild.innerText = "【花蓮】鯉魚潭"
            liyuDropDown.querySelector("button").style.display = "inline-block"
            roundDropDown.lastElementChild.style.width = "100%"
            roundDropDown.firstElementChild.innerText = "【環島】SUP 各站"
            roundDropDown.querySelector("button").style.display = "inline-block"
            contactDropDown.lastElementChild.style.width = "100%"
            contactDropDown.firstElementChild.innerText = "聯絡我們"
            contactDropDown.querySelector("button").style.display = "inline-block"
            let countCliff = 0
            cliffDropDown.querySelector("button").onclick = () => {
                if (countCliff == 0) {
                    cliffDropDown.lastElementChild.style.display = "block"
                    countCliff += 1
                } else {
                    cliffDropDown.lastElementChild.style.display = "none"
                    countCliff -= 1
                }
                console.log(countCliff)
            }
            let countLiyu = 0
            liyuDropDown.querySelector("button").onclick = () => {
                if (countLiyu == 0) {
                    liyuDropDown.lastElementChild.style.display = "block"
                    countLiyu += 1
                } else {
                    liyuDropDown.lastElementChild.style.display = "none"
                    countLiyu -= 1
                }
            }
            let countRound = 0
            roundDropDown.querySelector("button").onclick = () => {

                if (countRound == 0) {
                    roundDropDown.lastElementChild.style.display = "block"
                    countRound += 1
                } else {
                    roundDropDown.lastElementChild.style.display = "none"
                    countRound -= 1
                }
            }
            let countContact = 0
            contactDropDown.querySelector("button").onclick = () => {

                if (countContact == 0) {
                    contactDropDown.lastElementChild.style.display = "block"
                    countContact += 1
                } else {
                    contactDropDown.lastElementChild.style.display = "none"
                    countContact -= 1
                }
            }
        } else {
            cliffDropDown.firstElementChild.innerText = "【花蓮】清水斷崖 ▾"
            cliffDropDown.querySelector("button").style.display = "none"
            cliffDropDown.lastElementChild.style.width = `${cliffDropDown.offsetWidth}px`
            liyuDropDown.firstElementChild.innerText = "【花蓮】鯉魚潭 ▾"
            liyuDropDown.querySelector("button").style.display = "none"
            liyuDropDown.lastElementChild.style.width = `${liyuDropDown.offsetWidth}px`
            roundDropDown.firstElementChild.innerText = "【環島】SUP 各站 ▾"
            roundDropDown.querySelector("button").style.display = "none"
            roundDropDown.lastElementChild.style.width = `${roundDropDown.offsetWidth}px`
            contactDropDown.firstElementChild.innerText = "聯絡我們 ▾"
            contactDropDown.querySelector("button").style.display = "none"
            contactDropDown.lastElementChild.style.width = `${contactDropDown.offsetWidth}px`
            cliffDropDown.onmouseover = () => { cliffDropDown.lastElementChild.style.display = "block" }
            cliffDropDown.onmouseleave = () => { cliffDropDown.lastElementChild.style.display = "none" }
            liyuDropDown.onmouseover = () => { liyuDropDown.lastElementChild.style.display = "block" }
            liyuDropDown.onmouseleave = () => { liyuDropDown.lastElementChild.style.display = "none" }
            roundDropDown.onmouseover = () => { roundDropDown.lastElementChild.style.display = "block" }
            roundDropDown.onmouseleave = () => { roundDropDown.lastElementChild.style.display = "none" }
            contactDropDown.onmouseover = () => { contactDropDown.lastElementChild.style.display = "block" }
            contactDropDown.onmouseleave = () => { contactDropDown.lastElementChild.style.display = "none" }
        }
    }

    let x = window.matchMedia("(max-width: 1200px)")

    widthDropDown(x)

    x.addEventListener("change", function () {
        widthDropDown(x);
    });
}

const foot = () => {
    let contentHTML = `
            <div>
                <div>
                    <a href="" class="logo-hover"><img src="img/icon/messenger_black.svg"></a>
                    <a href="" class="logo-hover"><img src="img/icon/facebook3.svg"></a>
                    <a href="" class="logo-hover"><img src="img/icon/instagram3.svg"></a>
                    <a href="" class="logo-hover"><img src="img/icon/phone1.svg"></a>
                    <a href="" class="logo-hover"><img src="img/icon/email.svg"></a>
                    <a href="" class="logo-hover"><img src="img/icon/line.svg"></a>
                </div>
                <p class="m-0 mt-3">耐茁戶外休閒事業 © 2018-2024 All Rights Reserved</p>
            </div>
    `
    allfooter.innerHTML = contentHTML
    allfooter.classList.add("p-3")
}

const qa = () => {
    const qaClick = () => {
        let qa = document.querySelectorAll('#navbarToggle ul li')[6]
        qa.onmouseover = () => {qa.style.cursor = "pointer"}
        qa.onclick = () => {qaDiv.style.display = "block"}
        
        let spanElem = document.getElementsByClassName("qaClose")[0]
        spanElem.onclick = () => {qaDiv.style.display = "none"}
    }
    
    const qalistClick = () => {
        let eleList = document.querySelectorAll("#qalist li")
        
        eleList.forEach(ele => {
            let count = 0
            ele.onclick = () => {
                if (count == 0){
                    ele.lastElementChild.style.display = "block"
                    ele.firstElementChild.classList.add("focus-underline")
                    count += 1
                } else {
                    ele.lastElementChild.style.display = "none"
                    ele.firstElementChild.classList.remove("focus-underline")
                    count -= 1
                }
            }
        })
    }

    let content = `
        <div class="qaDivContent">
            <span class="qaClose">&times;</span>
            <h1>常見 Q&A</h1>
            <div id="qalist">
                <div>
                    <h3>關於活動</h3>
                    <ul>
                        <li>
                            <h5>SUP一人一板跟兩人一板差在哪裡?</h5>
                            <p>一人一板通常拍照遊玩比較自由，適合平時有運動習慣的朋友，但就是得自己操控好自己的板子和有足夠的體力；
                                兩人一板的板子通常會提供較大較穩的尺寸，若有暈船或體力不佳時還有隊友可以幫忙唷!</p>
                        </li>
                        <li>
                            <h5>團體或初學者建議報名一人一板還是兩人一板?</h5>
                            <p>團體:建議可以混搭報名，因為出海都可以相互交換玩，而雙人板因為尺寸較大，若有體力不佳或暈船時都能請狀況好的朋友協助划槳。
                                初學:一人一板跟兩人一板的選擇和操作經驗無關，只要跟著我們怎樣都好玩~但若有體力疑慮建議兩人一板為主。</p>
                        </li>
                        <li>
                            <h5>兩人一板/船也可以拍個人照嗎?</h5>
                            <p>我們的行程不建議大家純划船，所以拍照也是重要的體驗之一。想拍個人照的時候可以輪流下水讓出板子、或到教練板上休息、或到其他隊友板上也都可以，在水上可以很隨興的。</p>
                        </li>
                        <li>
                            <h5>活動的照片如何索取呢?</h5>
                            <p>活動照片會於結束當天或隔天用Line傳連結(Google雲端)給大家，敬請各位耐心等候。
                                ※有預定活動記得要加活動方Line(@fun365)，才能拿到照片唷。同組旅客一位代表加入聯繫即可。</p>
                        </li>
                        <li>
                            <h5>不會游泳可以玩嗎?</h5>
                            <p>水上活動對於游泳技能並不要求，且都會提供救生衣及安全腳繩，只要不恐水且願意放鬆享受，在專業教練兼救生員的指導下，任何人都能安全愉快的參與我們的體驗行程。
                                ※SUP可以多種姿態來完成划槳，其實只要都坐著或跪著，穩定度跟坐船差不多呢~</p>
                        </li>
                        <li>
                            <h5>生理期可以玩嗎？</h5>
                            <p>可以自行評估身體狀況及準備衛生棉條等用品，一般來說都是可正常活動的。
                                ※也可以私下跟教練說，可以給您較不會落水或減少碰水的建議</p>
                        </li>
                        <li>
                            <h5>途中可以上岸休息嗎?</h5>
                            <p>行程中不一定會安排上岸休息，須由現場教練判斷團體狀況及海況決定之，團進團出為主。
                                ※嚴禁"自行"上下岸!在無教練引導之下進出浪可能發生危險，若有身體不適請跟教練反應，並聽由現場教練安排。</p>
                        </li>
                        <li>
                            <h5>可以自己帶手機、相機、空拍機、墨鏡、帽子...等個人物品下水嗎?</h5>
                            <p>可以。但個人裝備需自行負起照顧責任哦，教練無法幫您保管。
                                ※基本上這是可以只帶水就出發的體驗行程，東西越少牽掛越少～</p>
                        </li>
                        <li>
                            <h5>可以只租SUP板嗎?</h5>
                            <p>我們沒有提供租板服務。</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>關於取消 & 退費</h3>
                    <ul>
                        <li>
                            <h5>活動宣布取消如何退費呢?</h5>
                            <p>活動前教練宣布取消可以全額退款。退費請提供"中國信託"、"郵局"，如非上述銀行帳戶退費金額將扣除手跨行續費30元。
                                若為信用卡支付則會直接刷退，再請留意下期信用卡帳單。(若為超過3個月之訂單會扣取金流公司已收取之金流費)
                                其他平台預定請連繫平台協助處理。
                                ※若為活動當日因天氣驟變取消，則會扣取每人１５０元保險作業費後餘額退款。</p>
                        </li>
                        <li>
                            <h5>若可能因天候因素影響活動，什麼時候會通知呢？</h5>
                            <p>天氣預報多變，且現場教練尚須到海灘比對浪況及變化，故若有異動最晚會在活動前一日告知。</p>
                        </li>
                        <li>
                            <h5>報名後因個人因素想取消或改期怎麼辦?</h5>
                            <p>請聯繫活動方，並將依照網站內取消規定辦理。
                                ※https://is.gd/W55QRP，請詳讀過活動相關資訊再做報名。</p>
                        </li>
                        <li>
                            <h5></h5>
                            <p></p>
                        </li>
                        <li>
                            <h5></h5>
                            <p></p>
                        </li>
                        <li>
                            <h5></h5>
                            <p></p>
                        </li>
                        <li>
                            <h5></h5>
                            <p></p>
                        </li>
                        <li>
                            <h5></h5>
                            <p></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
    qaDiv.innerHTML = content
    qaClick()
    qalistClick()
}

navbarHTML()
fixedIcon()
foot()
qa()