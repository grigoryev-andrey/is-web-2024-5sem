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
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Время</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        const section = document.createElement('div');
        section.innerHTML = `<h3>${day}</h3>`;
        section.appendChild(table);
        scheduleContainer.appendChild(section);
        tables[day] = table.querySelector('tbody');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const subject = form.subject.value;
        const day = form.day.value;
        const time = form.time.value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subject}</td>
            <td>${time}</td>
        `;
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
            tables[day].innerHTML = '';
            (schedule[day] || []).forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.subject}</td>
                    <td>${item.time}</td>
                `;
                tables[day].appendChild(row);
            });
        });
        alert('Расписание загружено!');
    });
});