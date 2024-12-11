document.addEventListener("DOMContentLoaded", () => {
    const testimonialsGrid = document.querySelector(".testimonials-grid");
    const preloader = document.createElement("div");
    preloader.className = "preloader";
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    preloader.appendChild(spinner);
    testimonialsGrid.insertAdjacentElement("beforebegin", preloader);

    const API_URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";
    const API_URL_PHOTOS = "https://jsonplaceholder.typicode.com/photos";

    async function fetchTestimonials() {
        try {
            const randomFilter = Math.random() > 0.5 ? "id_gte=100" : "id_lte=200";

            const [commentsResponse, photosResponse] = await Promise.all([
                fetch(`${API_URL_COMMENTS}?${randomFilter}`),
                fetch(`${API_URL_PHOTOS}`)
            ]);

            if (!commentsResponse.ok || !photosResponse.ok) {
                throw new Error("Ошибка загрузки данных");
            }

            const comments = await commentsResponse.json();
            const photos = await photosResponse.json();

            preloader.style.display = "none";
            renderTestimonials(comments.slice(0, 6), photos);
        } catch (error) {
            preloader.style.display = "none";
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.textContent = "⚠ Что-то пошло не так. Попробуйте позже.";
            testimonialsGrid.insertAdjacentElement("beforebegin", errorMessage);
            console.error(error);
        }
    }

    function renderTestimonials(testimonials, photos) {
        testimonialsGrid.innerHTML = "";

        const rows = [];
        testimonials.forEach((testimonial, index) => {
            if (index % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(testimonial);
        });

        rows.forEach(row => {
            const testimonialsRow = document.createElement("div");
            testimonialsRow.className = "testimonials-row";

            row.forEach(({ name, email, body, id }) => {
                const column = document.createElement("div");
                column.className = "testimonial-column";

                const card = document.createElement("article");
                card.className = "testimonial-card";

                const header = document.createElement("div");
                header.className = "testimonial-header";

                const avatar = document.createElement("img");
                avatar.className = "testimonial-avatar";
                avatar.src = photos[id]?.thumbnailUrl || "img/default-avatar.png";
                avatar.alt = `Фото ${name}`;

                const info = document.createElement("div");
                info.className = "testimonial-info";

                const nameElement = document.createElement("h3");
                nameElement.className = "testimonial-name";
                nameElement.textContent = name;

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