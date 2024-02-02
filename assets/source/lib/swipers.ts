import {PaginationOptions, SwiperOptions} from "swiper/types";
import Swiper from "swiper/bundle";

const initSlider = () => {
    let listCarousels = document.querySelectorAll('.swiper');

    for (let carousel of listCarousels) {
        let navigationBlock = carousel.parentNode.parentNode.querySelector('.custom_slider_buttons');
        let swiperSettings: SwiperOptions = {
            speed: 400,
            slidesPerView: 3,
            spaceBetween: 1,
            navigation: {
                nextEl: navigationBlock.querySelector('.custom_slider_right') as HTMLElement,
                prevEl: navigationBlock.querySelector('.custom_slider_left') as HTMLElement
            },
            loop: false,
            breakpoints: {
                1725: {
                    slidesPerView: 6,
                    slidesPerGroup: 6
                },
                1440: {
                    slidesPerView: 5,
                    slidesPerGroup: 5
                },
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 4
                },
                868: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                641: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                618: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                150: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            }
        };

        if (carousel.hasAttribute('data-type')) {
            let typeCarousel = carousel.getAttribute('data-type');
            switch (typeCarousel) {
                case 'brand':
                    swiperSettings.breakpoints = {
                        1725: {
                            slidesPerView: 8,
                            slidesPerGroup: 8
                        },
                        1440: {
                            slidesPerView: 7,
                            slidesPerGroup: 7
                        },
                        1200: {
                            slidesPerView: 5,
                            slidesPerGroup: 5
                        },
                        868: {
                            slidesPerView: 4,
                            slidesPerGroup: 4
                        },
                        0: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        }
                    }
                    break;
                case 'main':
                    swiperSettings.spaceBetween = 0
                    swiperSettings.slidesPerView = 1
                    swiperSettings.breakpoints = {
                        0: {
                            slidesPerView: 1,
                        }
                    }
                    swiperSettings.pagination = {
                        el: '.custom_slider_navs',
                        type: 'bullets',
                        clickable: true
                    } as PaginationOptions
                    break;
                case 'footer':
                    swiperSettings.spaceBetween = 15
                    swiperSettings.slidesPerView = 6
                    swiperSettings.slidesPerGroup = 6
                    swiperSettings.breakpoints = {
                        1725: {
                            slidesPerView: 6,
                            slidesPerGroup: 6
                        },
                        1440: {
                            slidesPerView: 5,
                            slidesPerGroup: 5
                        },
                        1201: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },
                        990: {
                            slidesPerView: 2,
                            slidesPerGroup: 2
                        },
                        870: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },
                        0: {
                            slidesPerView: 2,
                            slidesPerGroup: 2
                        }
                    }
                    break;
                case "news":
                    swiperSettings.breakpoints = {
                        1725: {
                            slidesPerView: 8,
                            slidesPerGroup: 8
                        },
                        1440: {
                            slidesPerView: 6,
                            slidesPerGroup: 6
                        },
                        1200: {
                            slidesPerView: 5,
                            slidesPerGroup: 5
                        },
                        868: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },
                        641: {
                            slidesPerView: 2,
                            slidesPerGroup: 2
                        },
                        618: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },
                        150: {
                            slidesPerView: 2,
                            slidesPerGroup: 2
                        },
                        0: {
                            slidesPerView: 1,
                            slidesPerGroup: 1
                        }
                    }
                    break;
            }
        }

        if (carousel instanceof HTMLElement) {
            new Swiper(carousel, swiperSettings);
        }
    }
}

export {
    initSlider
};