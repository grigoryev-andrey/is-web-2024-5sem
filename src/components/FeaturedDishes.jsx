function FeaturedDishes() {
    const dishes = [
        {
            name: "Маргарита",
            description: "Классическая пицца с томатным соусом, моцареллой и базиликом.",
            category: "Вегетарианская",
            price: "$12.99",
            img: "../assets/margherita.png",
        },
        {
            name: "Пепперони",
            description: "Пицца с пикантной колбасой пепперони и сыром моцарелла.",
            category: "Острые",
            price: "$14.99",
            img: "../assets/pepperoni.png",
        },
        {
            name: "Овощное наслаждение",
            description: "С овощами: болгарским перцем, луком, оливками и сыром.",
            category: "Вегетарианская",
            price: "$13.99",
            img: "../assets/veggie.png",
        },
        {
            name: "Цыплёнок BBQ",
            description: "С курицей, барбекю-соусом и красным луком.",
            category: "Новинка",
            price: "$15.99",
            img: "../assets/bbq.png",
        },
    ];

    return (
        <section className="featured-dishes">
            <div className="featured-dishes-content">
                <h2 className="featured-dishes-title">Популярные блюда</h2>
                <div className="dishes-grid">
                    <div className="dishes-row">
                        {dishes.slice(0, 2).map((dish, index) => (
                            <div key={index} className="dish-column">
                                <article className="dish-card">
                                    <div className="dish-content">
                                        <div className="dish-info">
                                            <div className="dish-details">
                                                <h3 className="dish-name">{dish.name}</h3>
                                                <p className="dish-description">{dish.description}</p>
                                                <p className="dish-category-price">
                                                    Категория: {dish.category} | Цена: {dish.price}
                                                </p>
                                                <button className="dish-button">Выбрать</button>
                                            </div>
                                        </div>
                                        <div className="dish-image-container">
                                            <img src={dish.img} alt={dish.name} className="dish-image" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                    <div className="dishes-row">
                        {dishes.slice(2).map((dish, index) => (
                            <div key={index} className="dish-column">
                                <article className="dish-card">
                                    <div className="dish-content">
                                        <div className="dish-info">
                                            <div className="dish-details">
                                                <h3 className="dish-name">{dish.name}</h3>
                                                <p className="dish-description">{dish.description}</p>
                                                <p className="dish-category-price">
                                                    Категория: {dish.category} | Цена: {dish.price}
                                                </p>
                                                <button className="dish-button">Выбрать</button>
                                            </div>
                                        </div>
                                        <div className="dish-image-container">
                                            <img src={dish.img} alt={dish.name} className="dish-image" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedDishes;
