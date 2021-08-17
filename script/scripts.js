class Tasks {
    constructor(title_, description_, dueDate_, done_) {
        // this.taskId = taskId_;
        this.title = title_;
        this.description = description_;
        this.dueDate = dueDate_;
        this.done = done_;
    }
}

let taskList = [
    new Tasks('Научиться спать не более 5 часов в сутки', 'Здесь какое-то описание', '2024.05.10', true),
    new Tasks('Начать ходить к психотерапевту', 'Здесь какое-то описание', '2047.11.05', false),
    new Tasks('Увидеть вживую Илона Маска', 'Здесь какое-то описание', '', false),
    new Tasks('Получить первый госзакз', '', '', false),
    new Tasks('Сменить бизнес модель', '', '', true),
    new Tasks('Попасть в список Forbes', '', '1993.03.15', true),
    new Tasks('Поужинать в компании Джеффа Безоса', 'Здесь какое-то описание', '1981.07.05', false),
];



const listItem = document.getElementById('taskList');
function addTask(task) {
    // listItem.innerHTML += `<div>${task.title}</div>`
    listItem.innerHTML +=
        '<div class="tasks-container">' +
        '<div class="task">' +
        `<h3 class="task__title${isComplete(task.done)}">
            ${task.title}
        </h3>` +
        `<p class="task__text">
            ${task.description}
        </p>` +
        `<p class="task__date${OverDueDate(task.dueDate, task.done)}">
            ${task.dueDate}
        </p>` +
        `<input class = "task__check" type="checkbox" ${isCheck(task.done)}>` +
        '<button class="task__toggle">' +
        '<i class="fas fa-chevron-down"></i>' +
        '<i class="fas fa-times"></i>' +
        '</button>'
    '</div>' +
        '</div>';
}

function isComplete(done) {
    return done ? '__complete' : '';
}
function isCheck(done) {
    return done ? 'checked' : '';
}

function OverDueDate(dueDate, done) {
    let date = new Date(dueDate);
    let now = new Date();
    return date < now && !done ? '__over' : '';
}

taskList.forEach(addTask);

const toggles = document.querySelectorAll('.task__toggle')
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})