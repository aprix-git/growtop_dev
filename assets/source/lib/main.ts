import {debounceTime, fromEvent, tap} from "rxjs";
import {clickMessenger, slideToggle} from "../src/functions";
import SocialCode from "../src/types/SocialCodes";
import {initSlider} from "./swipers";
import {initCardGallery} from "./gallery";

const loadWindow = fromEvent(window, 'load')
const resizeWindow = fromEvent(window, 'resize')

loadWindow
    .subscribe(() => {
        fromEvent<InputEvent>(document.querySelectorAll('.messenger_buttons'), 'click')
            .subscribe((e) => {
                e.preventDefault()
                if (e.target instanceof HTMLElement) {
                    let typeLink = e.target.getAttribute('data-type') as SocialCode;
                    if (typeLink) {
                        clickMessenger(typeLink)
                    }
                }

                return false;
            })
    });

loadWindow
    .subscribe(() => {
        let parentLinks = document.querySelectorAll<HTMLElement>('#popup_catalog .catalog_list .parent > a')
        fromEvent<MouseEvent>(parentLinks, 'click')
            .pipe(
                tap((event) => {
                    event.preventDefault();
                })
            )
            .subscribe((e) => {
                if (e.target instanceof HTMLElement) {
                    const parentLi = e.target.parentNode as HTMLElement
                    let nestedList = parentLi.querySelector<HTMLElement>('ul')
                    slideToggle(nestedList)
                }
            })
    })

loadWindow
    .subscribe(() => {
        if (window.outerWidth <= 869) {
            const breadcrumb = document.querySelector<HTMLElement>('#breadcrumb')
            const listLinksForHide = breadcrumb.querySelectorAll<HTMLElement>("ul li:not(.active_item)")
            listLinksForHide.forEach(function (navLink: HTMLElement) {
                navLink.style.display = 'none'
            });
            breadcrumb.classList.add('collapsed')
        }
    })

loadWindow.subscribe(initSlider)
loadWindow.subscribe(initCardGallery)

resizeWindow
    .pipe(debounceTime(30))
    .subscribe(() => {
        const breadcrumb = document.querySelector<HTMLElement>('#breadcrumb')
        if (breadcrumb) {
            const liDisplay = (window.outerWidth <= 869 ? 'none' : 'inline-block')
            console.log('liDisplay', liDisplay, window.outerWidth)
            const listLinksForHide = breadcrumb.querySelectorAll<HTMLElement>("ul li:not(.active_item)")
            listLinksForHide.forEach(function (navLink: HTMLElement) {
                navLink.style.display = liDisplay
            });

            const moreLinkBreadcrumb = breadcrumb.querySelector<HTMLElement>('.breadcrumb__more-link')
            if (window.outerWidth <= 869) {
                breadcrumb.classList.add('collapsed')
                moreLinkBreadcrumb.style.display = 'inline-block'
            } else {
                breadcrumb.classList.remove('collapsed')
                moreLinkBreadcrumb.style.display = 'none'
            }
        }
    })

const list = document.querySelectorAll<HTMLElement>('.catalog-toggle-drawer');
const clickOpenDrawer  = fromEvent(list, 'click');

clickOpenDrawer
    .subscribe((e: Event) => {
        document.querySelector<HTMLElement>('#popup_catalog').classList.toggle('opened');
        document.querySelector<HTMLElement>('.blackscreen').classList.toggle('active');
        document.querySelector<HTMLElement>('#fixmenu_cat').classList.toggle('bg');
        document.querySelector<HTMLElement>('body').classList.toggle('open-popup-catalog');

        e.preventDefault()
    })

const mobileButtonBreadcrumb = document.querySelector<HTMLElement>('.breadcrumb__more-link');
const clickMobileButtonBreadcrumb = fromEvent(mobileButtonBreadcrumb, 'click');
clickMobileButtonBreadcrumb
    .subscribe((e: Event) => {
        const breadcrumb = document.querySelector<HTMLElement>('#breadcrumb')
        if (breadcrumb) {
            const listLinksForHide = breadcrumb.querySelectorAll<HTMLElement>("ul li:not(.active_item)")
            listLinksForHide.forEach(function (navLink: HTMLElement) {
                navLink.style.display = 'inline-block'
            });

            breadcrumb.classList.remove('collapsed')
            const moreLinkBreadcrumb = breadcrumb.querySelector<HTMLElement>('.breadcrumb__more-link')
            moreLinkBreadcrumb.style.display = 'none'
        }

        e.preventDefault()
    })
