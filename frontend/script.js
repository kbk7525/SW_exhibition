
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
        dDay: formattedDate,
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
                alert("작업 추가 성공");
                taskNameInput.value = "";
                todaylistWriteInput.value = "";
                todaylistDateInput.value = "";
                const _mod_todaylist = document.querySelector(".todaylist")
                _mod_todaylist.classList.remove("active");
            } else {
                alert("작업 추가 실패");
            }
        })
        .catch((error) => {
            console.error("에러 발생:", error);
            alert("작업 추가 요청 중 오류가 발생했습니다.");
        });
}







//그림일기 모달에서 데이터를 보내는 함수
function submitForm2(event) {
    event.preventDefault();

    // 입력 필드에서 데이터 가져오기
    const DrawingListInput = document.querySelector(".mod_drawing_list_write").value;
    const DrawingListDate = document.querySelector(".mod_drawing_list_date").value;
    const DrawingListSticker = document.querySelector(".mod_drawing_list_sticker");
    const DrawingListInputFocus = document.querySelector(".mod_drawing_list_write");
    const DrawingListDateFocus = document.querySelector(".mod_drawing_list_date");

    // 서버로 보낼 데이터 생성 (JSON 형식 또는 다른 형식으로도 가능)
    const data = {
        DLI: DrawingListInput,
        DLD: DrawingListDate,
        DLS: DrawingListSticker,
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
                DrawingListInputFocus.value == "";
                DrawingListDateFocus.value == "";
                const mod_drawing_list = document.querySelector(".mod_drawing_list");
                mod_drawing_list.classList.remove("active");


            } else {
                alert("작업 추가 실패");
            }
        })
        .catch((error) => {
            console.error("에러 발생:", error);
            alert("작업 추가 요청 중 오류가 발생했습니다.");
        });
};









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

function openModalForDate(date) {
    // 모달 창 열기
    const modal = document.querySelector(".calender_select");
    modal.style.display = "block";

    // 모달 창 내용을 초기화
    const modalSection = document.querySelector(".mod_calender_select_section");
    modalSection.innerHTML = "";

    // 날짜를 서버로 보내 데이터를 가져오는 요청을 보냅니다.
    fetch(`http://localhost:8082/mainpage/save${date}`, {
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

                // 클릭 이벤트를 추가하여 모달 열기
                cell.addEventListener("click", function () {
                    openModalForDate(`${year}-${month}-${nowDate}`);
                });

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


function displayTodoList() {
    const data1 = [
        {
            "boardId": 1,
            "title": "hi",
            "content": "1234",
            "today": "2023-09-26"
        },
        {
            "boardId": 2,
            "title": "hi",
            "content": "1234",
            "today": "2023-10-24"
        },
        {
            "boardId": 3,
            "title": "hi",
            "content": "12dsdf",
            "today": "2023-10-24"
        },
        {
            "boardId": 4,
            "title": "hi",
            "content": "1234",
            "today": "2023-10-18"
        }
    ]

    const todoList = document.getElementById("todoList");
    const todayDate = new Date();
    const todoItemDate = document.createElement("div")
    todoItemDate.innerHTML +=`
                <p>${todayDate.toISOString().split('T')[0]}</p>
                
            `;;
    todoItemDate.classList.add("todoItemDate");
    todoList.appendChild(todoItemDate);
    data1.forEach(item => {
        const todoItem = document.createElement("div");
        const todoItemList = document.createElement("div");
        
        todoItemList.classList.add("todoItemList");
        todoItem.classList.add("todo-item");

        // 새로운 <i> 요소를 생성하고 속성을 설정합니다.
        const xMark = document.createElement("i");
        xMark.classList.add("fa-solid", "fa-xmark");

        // xMark를 클릭했을 때 해당 todoItem을 제거하는 이벤트 리스너를 추가합니다.
        xMark.addEventListener("click", function () {
            // 클라이언트에서 서버로 삭제 요청을 보냅니다.
            const boardId = item.boardId; // 삭제할 항목의 boardId 가져오기
            fetch(`http://localhost:8082/mainpage/save${boardId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        // 서버에서 삭제가 성공한 경우 클라이언트에서도 삭제
                        todoList.removeChild(todoItem);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });

        // 현재 날짜를 가져옵니다.
        const todayDate = new Date();
        // item.today와 현재 날짜(todayDate)를 비교합니다.
        const itemDate = new Date(item.today);

        if (
            todayDate.getFullYear() === itemDate.getFullYear() &&
            todayDate.getMonth() === itemDate.getMonth() &&
            todayDate.getDate() === itemDate.getDate()
        ) {
            // 만약 item.today가 오늘 날짜와 일치하면 아래 내용을 출력합니다.
            todoItemList.innerHTML += `
                
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                
            `;
            
            
            
            todoList.appendChild(todoItem);
            todoItem.appendChild(todoItemList);
            todoItem.appendChild(xMark); // todoItem을 todoList에 추가합니다.
        }
    });
}

