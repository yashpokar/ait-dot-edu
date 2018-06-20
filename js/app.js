Vue.component('navigation', {
    template: `
    <nav class="navigation">
        <a href="javascript:void(0)" class="navigation__logo">AIT</a>

        <ul class="navigation__menu" :class="{ 'is-active' : isNavigationMenuActive }">
            <li v-for="link in links">
                <a :href="link.href" 
                    v-text="link.name" 
                    :key="link.id"></a>
            </li>
        </ul>
        
        <button class="navigation__menu-toggle" @click="toggleNavigationMenu">
            <i class="fa" :class="navigationMenuToggleButton"></i>
        </button>
    </nav>
    `,

    data: function () {
        return {
            isNavigationMenuActive: false,
            links: [
                { id: 1, href: 'javascript:void(0)', name: 'Home' },
                { id: 2, href: 'javascript:void(0)', name: 'Admissions' },
                { id: 3, href: 'javascript:void(0)', name: 'Academics' },
                { id: 4, href: 'javascript:void(0)', name: 'Contact' },
            ]
        };
    },

    computed: {
        navigationMenuToggleButton: function () {
            return this.isNavigationMenuActive ? 'fa-close' : 'fa-bars';
        },
    },

    methods: {
        toggleNavigationMenu: function () {
            this.isNavigationMenuActive = ! this.isNavigationMenuActive;
        },
    },
});

Vue.component('carousel', {
    template: 
    `
        <div class="carousel">
            <img v-for="image in images" 
                :src="image.src" 
                :alt="image.src" 
                :key="image.id"
                :style="{ opacity: image.opacity }"
                class="carousel__image"/>
        </div>
    `,

    data: function () {
        return {
            images: [
                { id: 1, src: 'images/carousel/a-block.jpg', alt: 'A Block', opacity: 1, },
                { id: 2, src: 'images/carousel/d-block.jpg', alt: 'D Block', opacity: 1, },
            ],
        };
    },

    methods: {
        stratCarousel: function () {
            let currentImage = 0;

            setInterval(function(){
                for (var image = 0;image < this.images.length; image++) {
                    this.images[image].opacity = 0;
                }

                currentImage = (currentImage != (this.images.length - 1)) ? currentImage + 1 : 0;
                this.images[currentImage].opacity = 1;
            }.bind(this), 3000);
        },
    },

    mounted: function () {
        this.stratCarousel();
    },
});

Vue.component('event-container', {
    template: `
        <div class="event-container">
            <h2 class="event-container__title">
                Events

                <span>What is going over here?</span>
            </h2>
            
            <slot></slot>

            <button class="event-container__action">See More Events</button>
        </div>
    `,
});

Vue.component('event', {
    template: `
        <div class="event">
            <img class="event__image" :src="src" :alt="alt"/>
            
            <span class="event__duration">
                <slot name="duration"></slot>
            </span>

            <div class="event__footer">
                <slot></slot>
            </div>
        </div>  
    `,
    props: {
        src: { required: true },
        alt: { default: 'Image' },
    },
});

Vue.component('news-letter', {
    template: `
        <div class="news-letter">
            <h3 class="news-letter__title">
                Get the latest Ait news delivered to your inbox.
            </h3>

            <form action="javascript:void(0)" class="news-letter__form">
                <input type="email" 
                    name="email" 
                    id="email" 
                    placeholder="you@domain.com"
                    v-model="email"
                    class="news-letter__form-mail-address" 
                    autocomplete="off"/>

                <button type="submit" class="news-letter__form-subscribe-button">SUBSCRIBE</button>
            </form>
        </div>
    `,

    data: function () {
        return {
            email: '',
        };
    },

});

Vue.component('illusion-of-typed-text', {
    template: `
        <div class="illusion-of-typed-text">
            <span class="in-desktop">Ahmedabad Institute Of Technology</span>
            <span class="in-mobile">AIT DOT EDU</span>
        </div>
    `,
});

new Vue({
    el: '#app',
});

window.onload = function () {
    let carousel_image_height = (document.querySelector('.carousel__image').height) + 'px';
    document.querySelector('.carousel').style.height = carousel_image_height;
    document.querySelector('.preloader').remove();
};
