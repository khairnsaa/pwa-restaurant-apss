import RestaurantDbSource from "../../data/restaurantdb-source";
import UrlParser from "../../routes/url-parser";
import { renderRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {

    async render(){
        return `
            <section id="restaurantDetail" class="restaurant_detail"></section>
        `;
    },

    async afterRender(){
        const url = UrlParser.parseActiveWithoutCombiner();
        const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurantDetail');
        restaurantContainer.innerHTML += renderRestaurantDetailTemplate(restaurant);
        console.log(restaurant.restaurant);
    }

};

export default Detail;