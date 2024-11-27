document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scheduleForm');
    const scheduleContainer = document.getElementById('scheduleContainer');
    const saveButton = document.getElementById('saveSchedule');
    const loadButton = document.getElementById('loadSchedule');

    const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];

    const tables = {};
    days.forEach(day => {
        const table = document.createElement('table');
        table.id = `table-${day}`;
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const subjectHeader = document.createElement('th');
        subjectHeader.textContent = 'Предмет';
        const timeHeader = document.createElement('th');
        timeHeader.textContent = 'Время';
        headerRow.appendChild(subjectHeader);
        headerRow.appendChild(timeHeader);
        thead.appendChild(headerRow);
        const tbody = document.createElement('tbody');
        table.appendChild(thead);
        table.appendChild(tbody);
        const section = document.createElement('div');
        const dayTitle = document.createElement('h3');
        dayTitle.textContent = day;
        section.appendChild(dayTitle);
        section.appendChild(table);
        scheduleContainer.appendChild(section);
        tables[day] = tbody;
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const subject = form.subject.value;
        const day = form.day.value;
        const time = form.time.value;
        const row = document.createElement('tr');
        const subjectCell = document.createElement('td');
        subjectCell.textContent = subject;
        const timeCell = document.createElement('td');
        timeCell.textContent = time;
        row.appendChild(subjectCell);
        row.appendChild(timeCell);
        tables[day].appendChild(row);
        form.reset();
    });

    saveButton.addEventListener('click', () => {
        const schedule = {};
        days.forEach(day => {
            const rows = [];
            tables[day].querySelectorAll('tr').forEach(row => {
                const cells = row.querySelectorAll('td');
                rows.push({
                    subject: cells[0].textContent,
                    time: cells[1].textContent
                });
            });
            schedule[day] = rows;
        });
        localStorage.setItem('schedule', JSON.stringify(schedule));
        alert('Расписание сохранено!');
    });

    loadButton.addEventListener('click', () => {
        const schedule = JSON.parse(localStorage.getItem('schedule') || '{}');
        days.forEach(day => {
            while (tables[day].firstChild) {
                tables[day].removeChild(tables[day].firstChild);
            }
            (schedule[day] || []).forEach(item => {
                const row = document.createElement('tr');
                const subjectCell = document.createElement('td');
                subjectCell.textContent = item.subject;
                const timeCell = document.createElement('td');
                timeCell.textContent = item.time;
                row.appendChild(subjectCell);
                row.appendChild(timeCell);
                tables[day].appendChild(row);
            });
        });
        alert('Расписание загружено!');
    });
});