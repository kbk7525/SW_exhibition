
// const userid = {
//     id: "20196630",
//     password: "gunsang11@"
// }
function open_mod_newlogin() {
    const _mod_newloginbox = document.querySelector(".mod_newloginbox");
    _mod_newloginbox.classList.add("active"); // active 클래스 추가
}

function close_mod_newlogin() {
    const _mod_newloginbox = document.querySelector(".mod_newloginbox");
    _mod_newloginbox.classList.remove("active"); // active 클래스 제거
}
// function login() {
//     const loginid = document.querySelector(".username");
//     const loginpassword = document.querySelector(".password");
//     if (loginid.value == userid.id && loginpassword.value == userid.password) {
//         alert("로그인 성공");
//         window.location.href = "mainpage.html";

//     }
//     else {
//         alert("로그인 실패");
//     }
// }
// 로그인 버튼 클릭 이벤트 리스너
document.getElementById("loginButton").addEventListener("click", async function () {
    // 입력 필드에서 아이디와 비밀번호 가져오기
    const userId = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 서버로 보낼 데이터 생성 (JSON 형식)
    const data = {
        userId: userId,
        password: password
    };

    // 서버 URL 설정
    const serverUrl = "http://localhost:8082/index"; // 실제 백엔드 서버 URL로 대체해야 합니다.

    // Fetch API를 사용하여 서버로 POST 요청 보내기
    fetch(serverUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
        //.then(response => response.json()) // JSON 응답 데이터 파싱
        .then(data => {
            // 서버 응답에 따른 처리
            if (data.status === 200) {
                // 로그인 성공
                alert("로그인 성공");
                window.location.href = "mainpage.html"
                // 다음 로직을 추가하세요 (예: 페이지 리디렉션)
            } else {
                // 로그인 실패
                console.log(data);
                alert("로그인 실패");
            }
        })
        .catch(error => {
            console.error("에러 발생:", error);
            alert("로그인 요청 중 오류가 발생했습니다.");
        });
});
function submitForm(event) {
    event.preventDefault();

    // 입력 필드에서 데이터 가져오기
    const taskName = document.getElementById("taskName").value;
    const todaylistWrite = document.getElementById("todaylist_write").value;
    const todaylistDate = document.getElementById("todaylist_date").value;
    const taskNameInput = document.getElementById("taskName");
    const todaylistWriteInput = document.getElementById("todaylist_write");
    const todaylistDateInput = document.getElementById("todaylist_date");

    // 서버로 보낼 데이터 생성 (JSON 형식 또는 다른 형식으로도 가능)
    const data = {
        title: taskName,
        content: todaylistWrite,
        dDay: todaylistDate,
    };

    // 서버 URL 설정 (실제 백엔드 서버 URL로 대체해야 합니다)
    const serverUrl = "http://localhost:8082/mainpage/save"; // 예시 URL

    // Fetch API를 사용하여 서버로 POST 요청 보내기
    fetch(serverUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8", // JSON 형식으로 데이터 전송
        },
        body: JSON.stringify(data), // JSON 데이터 문자열로 변환하여 전송
    })
        .then((responseData) => {
            // 서버 응답에 따른 처리
            if (responseData.status === 200) {
                alert("작업 추가 성공");
                // 다음 로직을 추가하세요 (예: 페이지 리디렉션)
                taskNameInput.value = "";
                todaylistWriteInput.value = "";
                todaylistDateInput.value = "";
                const _mod_todaylist = document.querySelector(".todaylist")
                _mod_todaylist.classList.remove("active")

            } else {
                alert("작업 추가 실패");
            }
        })
        .catch((error) => {
            console.error("에러 발생:", error);
            alert("작업 추가 요청 중 오류가 발생했습니다.");
        });
};

/* 서버에 데이터 요청*/
const serverUrl = "http://localhost:8082/mainpage/save";
fetch(serverUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("서버 응답 오류");
        }
        return response.json(); // JSON 형식의 응답 데이터를 파싱
    })
    .then(data => {
        // 서버로부터 받은 데이터(data)를 처리합니다.
        console.log(data);
    })
    .catch(error => {
        console.error("에러 발생:", error);
    });



function open_todaylist() {
    const _mod_todaylist = document.querySelector(".todaylist")
    _mod_todaylist.classList.add("active")
}
function close_todaylist() {
    const _mod_todaylist = document.querySelector(".todaylist")
    _mod_todaylist.classList.remove("active")
}
/*달력 위에 년 월 */
const now = new Date();
const options = { year: 'numeric', month: 'long' };
const formattedDate = now.toLocaleDateString(undefined, options);

const calenderHead = document.querySelector(".mod_calender_head");
calenderHead.textContent = formattedDate;

/*달력 몸통 만든 함수 */
function createCalendar(year, month) {
    const calenderBody = document.querySelector(".calender_body");
    calenderBody.innerHTML = "";




    const date = new Date(year, month - 1, 1);
    const lastDate = new Date(year, month, 0);

    let nowDate = 1;
    let nextmonthdate = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < date.getDay()) {
                cell.textContent = ".";

            }
            else if (nowDate <= lastDate.getDate()) {
                cell.textContent = nowDate;
                nowDate++;
            }
            else {
                cell.textContent = nextmonthdate;
                nextmonthdate++;

            }
            row.appendChild(cell);
        }

        calenderBody.appendChild(row);
        if (nowDate > lastDate.getDate()) {
            break;
        }



    }
}
function opencalender() {
    const modCalender = document.querySelector(".calender_main");
    modCalender.classList.add("active");

}
function closecalender() {
    const modCalender = document.querySelector(".calender_main");
    modCalender.classList.remove("active");
}

/*작업 등록 버튼을 했을 시 창이 부드럽게 닫히게 */
document.querySelector(".todaylist_upload").addEventListener("click", function (event) {
    // 폼 전송 방지
    event.preventDefault();


    const taskNameInput = document.getElementById("taskName");
    const todaylistWriteInput = document.getElementById("todaylist_write");
    const todaylistDateInput = document.getElementById("todaylist_date");

    // 필수 입력 필드 검증
    if (!taskNameInput.checkValidity() || !todaylistWriteInput.checkValidity() || !todaylistDateInput.checkValidity()) {

        alert("모든 필수 입력 필드를 완료하세요.");
    } else {

        close_todaylist();
        taskNameInput.value = "";
        todaylistWriteInput.value = "";
        todaylistDateInput.value = "";
    }
});
function open_calender_select() {
    const _mod_todaylist = document.querySelector(".calender_select");
    _mod_todaylist.classList.add("active");
}
function close_calender_select() {
    const _mod_todaylist = document.querySelector(".calender_select");
    _mod_todaylist.classList.remove("active");
}
function open_drawing_list() {
    const drawing_list = document.querySelector(".drawing_list_main");
    drawing_list.classList.add("active");
}
function close_drawing_list() {
    const drawing_list = document.querySelector(".drawing_list_main");
    drawing_list.classList.remove("active");
}
function open_mod_drawing_list() {
    const mod_drawing_list = document.querySelector(".mod_drawing_list");
    mod_drawing_list.classList.add("active");
}
function close_mod_drawing_list() {
    const mod_drawing_list = document.querySelector(".mod_drawing_list");
    mod_drawing_list.classList.remove("active");
}
