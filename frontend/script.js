
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






//오늘 할 일 모달창에서 데이터를 보내는 함수
function submitForm(event) {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const todaylistWrite = document.getElementById("todaylist_write").value;
    const todaylistDate = document.getElementById("todaylist_date").value;
    const taskNameInput = document.getElementById("taskName");
    const todaylistWriteInput = document.getElementById("todaylist_write");
    const todaylistDateInput = document.getElementById("todaylist_date");

    // 날짜 값을 년-월-일 형식으로 가공
    const selectedDate = new Date(todaylistDate);
    const formattedDate = selectedDate.getFullYear() + '-' +
        String(selectedDate.getMonth() + 1).padStart(2, '0') + '-' +
        String(selectedDate.getDate()).padStart(2, '0');

    const data = {
        title: taskName,
        content: todaylistWrite,
        today: formattedDate,
    };
    console.log(data);
    const serverUrl = "http://localhost:8082/mainpage/save";

    fetch(serverUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
    })
        .then((responseData) => {
            if (responseData.status === 200) {
                // alert("작업 추가 성공");
                taskNameInput.value = "";
                todaylistWriteInput.value = "";
                todaylistDateInput.value = "";
                const _mod_todaylist = document.querySelector(".todaylist")
                _mod_todaylist.classList.remove("active");
                window.location.href = "mainpage.html";
            } else {
                alert("작업 추가 실패");
            }
        })
        .catch((error) => {
            console.error("에러 발생:", error);
            alert("작업 추가 요청 중 오류가 발생했습니다.");
        });
}



function submitForm2(event) {
    event.preventDefault();

    // 입력 필드에서 데이터 가져오기
    const DrawingListInput = document.querySelector(".mod_drawing_list_write").value;
    const DrawingListDate = document.querySelector(".mod_drawing_list_date").value;

    const DrawingListInputFocus = document.querySelector(".mod_drawing_list_write");
    const DrawingListDateFocus = document.querySelector(".mod_drawing_list_date");

    // 서버로 보낼 데이터 생성 (JSON 형식 또는 다른 형식으로도 가능)
    const data = {
        content: DrawingListInput,
        today: DrawingListDate,
       
    };

    // 서버 URL 설정 (실제 백엔드 서버 URL로 대체해야 합니다)
    const serverUrl = "http://localhost:8082/mainpage/diarySave"; // 예시 URL

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
                // alert("작업 추가 성공");
                // 다음 로직을 추가하세요 (예: 페이지 리디렉션)
                DrawingListInputFocus.value == "";
                DrawingListDateFocus.value == "";
                const mod_drawing_list = document.querySelector(".mod_drawing_list");
                mod_drawing_list.classList.remove("active");
                const diary = document.querySelector(".drawing_list_main");
                diary.classList.remove(".active");
                window.location.href = "mainpage.html";
                diary.classList.add(".active");



            } else {
                alert("작업 추가 실패");

            }
        })
        .catch((error) => {
            console.error("에러 발생:", error);
            alert("작업 추가 요청 중 오류가 발생했습니다.");
        });
};


function displayDairy() {
    const dairyList = document.querySelector(".drawing_list_main_section");
    dairyList.innerHTML = ""; // 기존 목록을 모두 제거

    fetch('http://localhost:8082/mainpage/diaryPrint')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const todoItem = document.createElement("div");
                const todoItemList = document.createElement("div");
                todoItemList.classList.add("todoItemList");
                todoItem.classList.add("todo-item");

                const xMark = document.createElement("i");
                xMark.classList.add("fa-solid", "fa-xmark");

                xMark.addEventListener("click", function () {
                    const diaryId = item.diaryId;
                    fetch(`http://localhost:8082/mainpage/diaryDelete/${diaryId}`, { // URL 경로 수정
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => {
                            if (response.status === 200) {
                                // 삭제에 성공하면 해당 아이템을 목록에서 제거
                                dairyList.removeChild(todoItem);
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                });

                todoItemList.innerHTML = `
                    <p>${item.today}</p>
                    <p>${item.content}</p>
                `;

                todoItem.appendChild(todoItemList);
                todoItem.appendChild(xMark);
                dairyList.appendChild(todoItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}




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
const formattedDate = now.toLocaleDateString(options);

const calenderHead = document.querySelector(".mod_calender_head");
calenderHead.textContent = formattedDate;

function openModalForDate(date) {
    // 모달 창 열기
    const modal = document.querySelector(".calender_select");
    modal.classList.add("active");

    // 모달 창 내용을 초기화
    const modalSection = document.querySelector(".mod_calender_select_section");
    modalSection.innerHTML = "";

    // 날짜를 서버로 보내 데이터를 가져오는 요청을 보냅니다.
    fetch(`http://localhost:8082/mainpage/calendar/${date}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // 데이터를 모달 창에 추가
        data.forEach(item => {
            const todoItem = document.createElement("div");
            todoItem.classList.add("todo-item");
            todoItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                
            `;
            console.log(todoItem);
            modalSection.appendChild(todoItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
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

                cell.addEventListener("click", function (event) {
                    const clickedDate = event.target.textContent; // 클릭한 TD 요소의 텍스트 내용
                    openModalForDate(`${year}-${month}-${clickedDate}`);
                    console.log(`${year}-${month}-${clickedDate}`);
                });

                nowDate++;
            }
            else {
                cell.textContent = nextmonthdate;
                nextmonthdate++;
            }
            row.appendChild(cell);
            if (j == 0) {
                const firstColumnCell = row.querySelector("td");
                firstColumnCell.classList.add("first-column");
            }
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
function open_mod_star() {
    const modCalender = document.querySelector(".main_container");
    modCalender.classList.add("active");

}
function close_mod_star() {
    const modCalender = document.querySelector(".main_container");
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

function displayTodoList() {
    const todoList = document.getElementById("todoList");
    const todayDate = new Date();
    const todoItemDate = document.createElement("div");
    todoItemDate.innerHTML = `
        <p>${todayDate.toISOString().split('T')[0]}</p>
    `;
    todoItemDate.classList.add("todoItemDate");
    todoList.appendChild(todoItemDate);

    // 서버에서 데이터를 가져오기 위한 GET 요청
    fetch('http://localhost:8082/mainpage/print') // 서버의 주소와 엔드포인트를 맞춰야 합니다.
        .then(response => response.json()) // JSON 데이터로 파싱
        .then(data => {
            data.forEach(item => {
                const todoItem = document.createElement("div");
                const todoItemList = document.createElement("div");

                todoItemList.classList.add("todoItemList");
                todoItem.classList.add("todo-item");

                const xMark = document.createElement("i");
                xMark.classList.add("fa-solid", "fa-xmark");

                xMark.addEventListener("click", function () {
                    const boardId = item.boardId;
                    fetch(`http://localhost:8082/mainpage/delete/${boardId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => {
                            if (response.status === 200) {
                                todoList.removeChild(todoItem);
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                });

                const todayDate = new Date();
                const itemDate = new Date(item.today);

                if (
                    todayDate.getFullYear() === itemDate.getFullYear() &&
                    todayDate.getMonth() === itemDate.getMonth() &&
                    todayDate.getDate() === itemDate.getDate()
                ) {
                    todoItemList.innerHTML += `
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                    `;

                    todoList.appendChild(todoItem);
                    todoItem.appendChild(todoItemList);
                    todoItem.appendChild(xMark);
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}