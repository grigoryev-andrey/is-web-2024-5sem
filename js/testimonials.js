document.addEventListener("DOMContentLoaded", () => {
    const testimonialsGrid = document.querySelector(".testimonials-grid");
    const preloader = document.createElement("div");
    preloader.className = "preloader";
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    preloader.appendChild(spinner);
    testimonialsGrid.insertAdjacentElement("beforebegin", preloader);

    const API_URL_COMMENTS = "https://dummyjson.com/comments";
    const API_URL_USERS = "https://dummyjson.com/users";

    async function fetchTestimonials() {
        try {
            const commentsResponse = await fetch(API_URL_COMMENTS);
            if (!commentsResponse.ok) {
                throw new Error("Ошибка загрузки комментариев");
            }
            const commentsData = await commentsResponse.json();
            let comments = commentsData.comments;

            comments = comments.sort(() => Math.random() - 0.5).slice(0, 6);

            const usersResponse = await fetch(`${API_URL_USERS}?limit=1000`);
            if (!usersResponse.ok) {
                throw new Error("Ошибка загрузки пользователей");
            }
            const usersData = await usersResponse.json();
            const usersMap = {};
            usersData.users.forEach(user => {
                usersMap[user.id] = user;
            });

            preloader.style.display = "none";
            renderTestimonials(comments, usersMap);
        } catch (error) {
            preloader.style.display = "none";
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.textContent = "⚠ Что-то пошло не так. Попробуйте позже.";
            testimonialsGrid.insertAdjacentElement("beforebegin", errorMessage);
            console.error(error);
        }
    }

    function renderTestimonials(testimonials, usersMap) {
        testimonialsGrid.innerHTML = "";

        const rows = [];
        testimonials.forEach((testimonial, index) => {
            if (index % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(testimonial);
        });

        rows.forEach(row => {
            const testimonialsRow = document.createElement("div");
            testimonialsRow.className = "testimonials-row";

            row.forEach(({ body, user }) => {
                const column = document.createElement("div");
                column.className = "testimonial-column";

                const card = document.createElement("article");
                card.className = "testimonial-card";

                const header = document.createElement("div");
                header.className = "testimonial-header";

                const avatar = document.createElement("img");
                avatar.className = "testimonial-avatar";
                avatar.src = usersMap[user.id]?.image || "img/default-avatar.png";
                avatar.alt = `Фото ${usersMap[user.id]?.firstName || "Пользователь"}`;

                const info = document.createElement("div");
                info.className = "testimonial-info";

                const nameElement = document.createElement("h3");
                nameElement.className = "testimonial-name";
                nameElement.textContent = `${usersMap[user.id]?.firstName || "Пользователь"} ${usersMap[user.id]?.lastName || ""}`;

                const rating = document.createElement("img");
                rating.className = "testimonial-rating";
                rating.src = "img/stars.svg";
                rating.alt = "Рейтинг 5 звезд";

                const text = document.createElement("p");
                text.className = "testimonial-text";
                text.textContent = body;

                info.appendChild(nameElement);
                info.appendChild(rating);

                header.appendChild(avatar);
                header.appendChild(info);

                card.appendChild(header);
                card.appendChild(text);

                column.appendChild(card);
                testimonialsRow.appendChild(column);
            });

            testimonialsGrid.appendChild(testimonialsRow);
        });
    }

    fetchTestimonials();
});