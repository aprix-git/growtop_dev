import SocialCode from "./types/SocialCodes";
import {SwiperOptions} from "swiper/types";

function clickMessenger(messenger: SocialCode): boolean {
    const messenger_list = {
        'tg': 'https://tg',
        'ws': 'https://ws',
        'vk': 'https://vk',
        'in': 'https://in',
        'yt': 'https://yt',
    }

    if (messenger_list.hasOwnProperty(messenger)) {
        let link = messenger_list[messenger]
        alert(link)
        link = ''
        if (link) {
            open(link, '_blank')
        }
    }

    return false
}

function slideToggle(element: HTMLElement) {
    var displayStyle = window.getComputedStyle(element).display;

    if (displayStyle === 'none') {
        element.style.display = 'block';
        element.style.height = element.scrollHeight + 'px';
        setTimeout(function () {
            element.style.height = '';
            let parentNode = element.parentNode as HTMLElement
            parentNode.classList.toggle('opened')
            // element.classList.toggle('opened')
        }, 500);
    } else {
        element.style.height = element.scrollHeight + 'px';
        setTimeout(function () {
            element.style.height = '0';
        }, 0);
        setTimeout(function () {
            element.style.display = 'none';
            let parentNode = element.parentNode as HTMLElement
            parentNode.classList.toggle('opened')
            // element.classList.toggle('opened')
        }, 500);
    }
}

function formatListBreakpoints(listBreakpoints: {[key: string | number] : number}): {[key: string | number]: SwiperOptions}  {
    let arReturn: {[key: string | number]: SwiperOptions} = {}
    for (let pxValue in listBreakpoints) {
        arReturn[String(pxValue)] = {
            slidesPerView: listBreakpoints[pxValue],
            slidesPerGroup: listBreakpoints[pxValue]
        }
    }

    return arReturn
}

export {
    slideToggle,
    clickMessenger,
    formatListBreakpoints
}