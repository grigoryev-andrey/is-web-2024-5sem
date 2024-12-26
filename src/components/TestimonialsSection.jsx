import { useEffect, useState } from "react";

const API_URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";
const API_URL_PHOTOS = "https://jsonplaceholder.typicode.com/photos";

function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const [commentsResponse, photosResponse] = await Promise.all([
                    fetch(API_URL_COMMENTS),
                    fetch(API_URL_PHOTOS),
                ]);

                if (!commentsResponse.ok || !photosResponse.ok) {
                    throw new Error("Ошибка загрузки данных");
                }

                const comments = await commentsResponse.json();
                const photos = await photosResponse.json();

                const mergedData = comments.slice(0, 6).map((comment, index) => ({
                    name: comment.name,
                    text: comment.body,
                    photo: photos[index]?.thumbnailUrl || "../assets/default-avatar.png",
                }));

                setTestimonials(mergedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <section className="testimonials-section">
            <div className="testimonials-content">
                <h2 className="testimonials-title">Отзывы</h2>
                {loading && <div className="spinner"></div>}
                {error && <div className="error-message">{error}</div>}
                {!loading && !error && (
                    <div className="testimonials-grid">
                        <div className="testimonials-row">
                            {testimonials.slice(0, 3).map((testimonial, index) => (
                                <div key={index} className="testimonial-column">
                                    <article className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src={testimonial.photo}
                                                alt={`Фото ${testimonial.name}`}
                                                className="testimonial-avatar"
                                            />
                                            <div className="testimonial-info">
                                                <h3 className="testimonial-name">{testimonial.name}</h3>
                                                <img
                                                    src="../assets/stars.svg"
                                                    alt="Рейтинг 5 звезд"
                                                    className="testimonial-rating"
                                                />
                                            </div>
                                        </div>
                                        <p className="testimonial-text">{testimonial.text}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                        <div className="testimonials-row">
                            {testimonials.slice(3).map((testimonial, index) => (
                                <div key={index} className="testimonial-column">
                                    <article className="testimonial-card">
                                        <div className="testimonial-header">
                                            <img
                                                src={testimonial.photo}
                                                alt={`Фото ${testimonial.name}`}
                                                className="testimonial-avatar"
                                            />
                                            <div className="testimonial-info">
                                                <h3 className="testimonial-name">{testimonial.name}</h3>
                                                <img
                                                    src="../assets/stars.svg"
                                                    alt="Рейтинг 5 звезд"
                                                    className="testimonial-rating"
                                                />
                                            </div>
                                        </div>
                                        <p className="testimonial-text">{testimonial.text}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default TestimonialsSection;
