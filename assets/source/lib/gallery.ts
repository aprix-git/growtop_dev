import {PaginationOptions, SwiperOptions} from "swiper/types";
import Swiper from "swiper/bundle";
import {fromEvent} from "rxjs";
import {formatListBreakpoints} from "../src/functions";

const initCardGallery = () => {
    // Навигация для основного слайдера карточки
    let thumbCarouselElement = document.querySelector('.wrapp-gallery .thumbs .image-thumbs');
    let thumbBlock = document.querySelector('.wrapp-gallery .thumbs');
    let thumbCarouselSettings: SwiperOptions = {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: thumbBlock.querySelector('.swiper-button-next') as HTMLElement,
            prevEl: thumbBlock.querySelector('.swiper-button-prev') as HTMLElement
        },
    };
    let thumbCarousel;
    if (thumbCarouselElement instanceof HTMLElement) {
        thumbCarousel = new Swiper(thumbCarouselElement, thumbCarouselSettings);
    }

    // Основной слайдер карточки
    let gallery = document.querySelector('.wrapp-gallery .card-gallery');

    let swiperSettings: SwiperOptions = {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 1,
        navigation: {
            nextEl: gallery.querySelector('.swiper-button-next') as HTMLElement,
            prevEl: gallery.querySelector('.swiper-button-prev') as HTMLElement
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        } as PaginationOptions,
        thumbs: {
            swiper: thumbCarousel
        },
        loop: false,
    };

    let mainCardSlider: Swiper;
    if (gallery instanceof HTMLElement) {
        mainCardSlider = new Swiper(gallery, swiperSettings);
    }

    mainCardSlider.on("click", function (e) {
        //if (window.outerWidth > 869) {
            let slideIndex = e.clickedIndex
            overlay.classList.add('active')
            overlayGallerySwiper.slideTo(slideIndex)
        //}
    })

    // Навигация для слайдера оверлея
    let wrappOverlayThumbs = document.querySelector('.overlay__thumbs');
    let thumbOverlayCarouselElement = document.querySelector('.overlay__thumbs .image-thumbs');
    let thumbOverlayCarouselSettings: SwiperOptions = {
        spaceBetween: 10,
        slidesPerView: 8,
        watchSlidesProgress: true,
        navigation: {
            nextEl: wrappOverlayThumbs.querySelector('.swiper-button-next') as HTMLElement,
            prevEl: wrappOverlayThumbs.querySelector('.swiper-button-prev') as HTMLElement
        },
    };

    const listCountSlidersBreakpoints  = {
        3150: 20,
        2800: 19,
        2680: 18,
        2500: 18,
        2350: 16,
        2200: 15,
        2100: 14,
        1900: 13,
        1800: 12,
        1600: 11,
        1460: 10,
        1276: 9,
        1110: 8,
        995: 7,
        870: 6,
        869: 6,
        750: 7,
        567: 6,
        465: 5,
        375: 4,
        // 728: 5,
        // 592: 4,
        // 467: 4,
        // 100: 2,
        0: 3
    }

    thumbOverlayCarouselSettings.breakpoints = formatListBreakpoints(listCountSlidersBreakpoints)

    const mobileScrollbar: HTMLElement = document.querySelector(".gallery-overlay .gallery-overlay__mobile-scrollbar")
    // мобильный слайдер
    thumbOverlayCarouselSettings.breakpoints[869].scrollbar = {
        enabled: false,
    };
    thumbOverlayCarouselSettings.breakpoints[0].scrollbar = {
        enabled: true,
        el: mobileScrollbar,
        draggable: true,
    };

    console.log('breakpoints', thumbOverlayCarouselSettings.breakpoints)

    let thumbOverlayCarousel;
    if (thumbOverlayCarouselElement instanceof HTMLElement) {
        thumbOverlayCarousel = new Swiper(thumbOverlayCarouselElement, thumbOverlayCarouselSettings);
    }

    // Слайдер оверлея

    let overlayGalleryApp = document.querySelector('.overlay__card-gallery');
    let overlayGallery = overlayGalleryApp.querySelector('.overlay__card-gallery__wrapp');


    let swiperOverlaySettings: SwiperOptions = {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 1,
        thumbs: {
            swiper: thumbOverlayCarousel
        },
        navigation: {
            nextEl: overlayGalleryApp.querySelector('.swiper-button-next') as HTMLElement,
            prevEl: overlayGalleryApp.querySelector('.swiper-button-prev') as HTMLElement
        },
        loop: false,
    };

    let overlayGallerySwiper: Swiper;
    if (overlayGallery instanceof HTMLElement) {
        overlayGallerySwiper = new Swiper(overlayGallery, swiperOverlaySettings);
    }

    const overlay = document.querySelector<HTMLElement>('.gallery-overlay');
    const overlayCloseButton = overlay.querySelector<HTMLElement>('.overlay__card-gallery__close a')
    const closeButtonStream$ = fromEvent(overlayCloseButton, 'click');
    closeButtonStream$
        .subscribe((e: Event) => {
            overlay.classList.remove('active')
            e.preventDefault()
        })
    //const list = document.querySelectorAll<HTMLElement>('.card-gallery .swiper-slide img');



    /*const clickImgGallery = fromEvent(list, 'click');

    clickImgGallery
        .subscribe((e: Event) => {

        })*/


}

export {
    initCardGallery
};