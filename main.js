const body = document.querySelector('body');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr = [];
const th = [];
const date = new Date();
const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const days = ['일', '월', '화', '수', '목', '금', '토'];

//html
body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
tr.push(document.createElement('tr'));
thead.appendChild(tr[0]);

// 요일 넣을 칸 만듬
for (let i = 0; i < 7; i++) {
    th.push(document.createElement('th'));
    tr[0].appendChild(th[i]);
    //css
    th[i].style.border = '1px solid black';
    th[i].style.width = '90px';
    th[i].style.height = '40px';
}



// 4주,5주,6주에 따라 맞게 칸 생성
if (firstDay.getDay() === 0 && lastDay.getDate() === 28) {
    for (let i = 1; i < 5; i++) {
        tr.push(document.createElement('tr'));
        tbody.appendChild(tr[i]);
        for (let j = i * 7; j < 7 + i * 7; j++) {
            th.push(document.createElement('th'));
            tr[i].appendChild(th[j]);
            //css
            th[j].style.border = '1px solid black';
            th[j].style.width = '90px';
            th[j].style.height = '40px';
        }
    }
} else if (lastDay.getDate() === 30 && firstDay.getDay() === 6 || lastDay.getDate() === 31 && firstDay.getDay() >= 5) {
    for (let i = 1; i < 7; i++) {
        tr.push(document.createElement('tr'));
        tbody.appendChild(tr[i]);
        for (let j = i * 7; j < 7 + i * 7; j++) {
            th.push(document.createElement('th'));
            tr[i].appendChild(th[j]);
            //css
            th[j].style.border = '1px solid black';
            th[j].style.width = '90px';
            th[j].style.height = '40px';
        }
    }
} else {
    for (let i = 1; i < 6; i++) {
        tr.push(document.createElement('tr'));
        tbody.appendChild(tr[i]);
        for (let j = i * 7; j < 7 + i * 7; j++) {
            th.push(document.createElement('th'));
            tr[i].appendChild(th[j]);
            //css
            th[j].style.border = '1px solid black';
            th[j].style.width = '90px';
            th[j].style.height = '40px';
        }
    }
}



//css
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.width = '100vw';
body.style.height = '100vh';

table.style.borderCollapse = 'collapse';

//첫번째 줄에 요일 배정
for (let i = 0; i < 7; i++) {
    th[i].textContent = days[i];
}

//달력 숫자로 채우기
for (let i = 0; i < lastDay.getDate(); i++) {
    th[firstDay.getDay() + 7 + i].textContent = i + 1;
}