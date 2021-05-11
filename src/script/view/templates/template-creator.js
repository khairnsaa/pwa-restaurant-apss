import CONFIG from "../../global/config";

const renderRestaurantDetailTemplate = restaurant => `
    <h2>${restaurant.restaurant.name}</h2>
        <div class="restaurant_detail_wrapper">
            <div class="resto_img">
                <img src="${CONFIG.BASE_IMG_URL + restaurant.restaurant.pictureId}" alt="${restaurant.name}">
            </div>
            <div class="resto_detail">
                <div class="resto_review">
                    <h3 class="content_review">"${restaurant.restaurant.customerReviews[0].review}"</h3> 
                    <p class="reviewer_name">- ${restaurant.restaurant.customerReviews[0].name} -</p>
                </div>
                <p class="resto_rating"><i class="fas fa-star"></i>${restaurant.restaurant.rating}</p>
                <p class="resto_address_txt">address :</p>
                <p class="resto_address">${restaurant.restaurant.address}</p>
                <div class="resto_food_menu">
                    <h3>Food Menu</h3>
                    <ul>
                        <li>apa kek menu nya</li>
                        <li>apa kek menu nya</li>
                    </ul>
                </div>
                <div class="resto_drink_menu">
                    <h3>Drink Menu</h3>
                    <ul>
                        <li>apa kek menu nya</li>
                        <li>apa kek menu nya</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
`;

const renderRestaurantItemTemplate = restaurant => `
    <div class="explore_wrapper">
        <div class="explore_restaurant_img">
            <img  src="${CONFIG.BASE_IMG_URL + restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="details">
            <h2 class="explore_restaurant_name"><a href="#">${restaurant.name}</a></h2>
            <p class="explore_restaurant_detail">${restaurant.description}</p>
            <p class="explore_restaurant_city"><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
            <p class="explore_restaurant_rating"><i class="fas fa-star"></i> ${restaurant.rating} </p>
            <a href="#/detail/" class="explore_restaurant_btn">Detail</a>
        </div>
`

export { renderRestaurantDetailTemplate, renderRestaurantItemTemplate}