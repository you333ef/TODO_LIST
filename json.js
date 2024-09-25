let ADD = document.getElementById('add-btn');
let INPUT = document.getElementById('input');
let TASKS_PLACE = document.getElementById('task');
let arr = [];

ADD.onclick = function() {
    if (INPUT.value !== '') {
        ADD_TO_ARRAY(INPUT.value);
        INPUT.value = '';
    }
};

function ADD_TO_ARRAY(info_to_array) {
    let info = {
        title: info_to_array,
        id: Date.now(),
        status: false,
    };
    arr.push(info);
    ADD_TO_LOCALSTORAGE();
    ADD_TO_PAGE();
    LENGTN(); // تحديث طول المهام بعد الإضافة
}

function ADD_TO_PAGE() {
    let content = '';
    arr.forEach(function(task) {
        content += `
            <div class="task">
                <label for="checkbox-${task.id}" onclick="STATUS(this)"id="shshs" class="${task.status ? 'completed' : ''}"style="cursor: pointer;">${task.title}</label>
                <button class="delete-btn" onclick="DElete(${task.id})"><img src="./delete_8573128.png" id="photow"></button>
            </div>
        `;
    });
    TASKS_PLACE.innerHTML = content;
}

window.onload = function() {
    KHOOD();
    ADD_TO_PAGE();
    LENGTN(); // تحديث الطول عند تحميل الصفحة
};

function ADD_TO_LOCALSTORAGE() {
    localStorage.setItem('DATA', JSON.stringify(arr));
}

function KHOOD() {
    let DATA = localStorage.getItem('DATA');
    if (DATA) {
        arr = JSON.parse(DATA);
    }
}

function DElete(id) {
    arr = arr.filter(function(proo) {
        return proo.id !== id;
    });
    ADD_TO_PAGE();
    ADD_TO_LOCALSTORAGE();
    LENGTN(); // تحديث الطول بعد الحذف
}

function DELETEALL() {
    arr = []; // مسح المصفوفة بالكامل
    ADD_TO_LOCALSTORAGE();
    ADD_TO_PAGE();
    LENGTN(); // تحديث الطول بعد الحذف
}

function LENGTN() {
    let LENGTH = arr.length;
    document.querySelector('.span_length').textContent = LENGTH;
}



function STATUS(ele) {
    ele.classList.toggle('text');
}
function DARK_LIGHT(icon) {
   document.body.classList.toggle('TOGGLE')
  icon.classList.toggle('fa-cloud-sun')
  icon.classList.toggle('fa-cloud-moon')

}






