//#region //Кнопки мессенджеров (если не нужно, можно удалить этот блок)
/*
const messenger_list = {

    'tg': 'https://tg', //линк на телегу

    'ws': 'https://ws', //линк на вацап

    'vk': 'https://vk', //линк на вк

    'in': 'https://in', //линк на инсту

    'yt': 'https://yt', //линк на ютуб

}*/
/*
window.addEventListener('load',function(){    

    const links = document.querySelectorAll('.messenger_buttons')



    let len = links.length

    while(len--){

        const a = links[len]

        a.addEventListener('click', function(e){

            e.preventDefault() //гасим клики от <a>

            clickMessenger(e.target.getAttribute('data-type'))

            return false

        })

    }

})

function clickMessenger(messenger) {     

    let link = messenger_list[messenger]

        

    //#region

    //актуализировать ссылки в messenger_list и можно этот блок убрать

    alert(link)

    link = ''

    //#endregion    



    if (link) {

        open(link, '_blank')

    }



    return false

}*/

//#endregion





window.addEventListener('load',function(){

    init_footer_to_bottom()

    init_breadcrumb_stop_click()

    init_main_menu_click_stop()

    init_tabcontrol()

    init_expanders()

    init_slider()

    init_numberedit()

    init_filter_show_all_buttons()

    init_price_slider()

    init_show_mode_block()

    init_close_buttons_of_cart()

    resize()

})

window.addEventListener('resize', () => {

    if (window.timeoutResize) clearTimeout(window.timeoutResize)        

    window.timeoutResize = setTimeout(resize, 30)

})



//#region Ресайз

function resize() {

    slidersUpdate(true)

    scrollFooterTrigger()

    products_menu_visible()

    burger_menu_visible() 
        
    paginationWeed()


    //в продуктах в дизайне каша с блоками, придется перемещать

    const h1 = document.querySelector('#product h1')

    const img = document.querySelector('#product .product_image')

    const desc = document.querySelector('#product .product_description')

    const cost = document.querySelector('#product .cost')

    const info = document.querySelector('#product .info>.tr')     

    const characters = document.querySelector('#product .characters')        

    const but = document.querySelector('#product .product_description>div>button')    

    const article = document.querySelector('#product .td.article')    

    const favorite = document.querySelector('#product .add_favorite')    

    if (h1 && img && info && cost) {

        if (window.innerWidth<=900) {

            h1.parentNode.remove()

            info.insertBefore(h1.parentNode, img)

            //

            but.parentNode.remove()

            desc.insertBefore(but.parentNode, characters)

            //

            favorite.parentNode.remove()

            article.parentNode.insertBefore(favorite.parentNode, article)

            favorite.parentNode.classList.remove('right')

        } else {

            h1.parentNode.remove()

            desc.insertBefore(h1.parentNode, cost)

            //

            but.parentNode.remove()

            desc.insertBefore(but.parentNode, cost.nextElementSibling)

            //            

            favorite.remove()

            if (favorite.innerHTML) {

                article.parentNode.querySelector('.right').appendChild(favorite)

            } else {

                h1.appendChild(favorite)

                favorite.parentNode.classList.remove('right')   

            }

        }

    }

    const my_index = document.getElementById('my_index')

    const my_city = document.getElementById('my_city')

    const my_appartament = document.getElementById('my_appartament')    

    if (my_index && my_city && my_appartament) {

        if (window.innerWidth<=900) {

            //

            my_index.parentNode.remove()

            my_city.parentNode.parentNode.insertBefore(my_index.parentNode, my_city.parentNode.nextSibling)

        }

        else {

            //

            my_index.parentNode.remove()

            my_appartament.parentNode.parentNode.insertBefore(my_index.parentNode, my_appartament.parentNode.nextSibling)    

        }

    }

    //\

}

//#endregion

//#region //Убрает или возвращает прижатие футера к низу, в зависимости от наличия скрола

function init_footer_to_bottom() {

    scrollFooterTrigger()

}

function scrollFooterTrigger(){

    const footer = document.querySelector('footer')    

    if (!footer && !footer.style) return

    if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {

        footer.style.position = 'relative'

        document.body.style.paddingBottom = 0

    } else {

        footer.style.position = ''

        document.body.style.paddingBottom = ''

    }

}

//#endregion



//#region Главное меню

function init_main_menu_click_stop(){       

    //заглушки на нажатия

    const links = document.querySelectorAll('#topmenu a')



    let len = links.length

    while(len--){

        const a = links[len]

        a.addEventListener('click', function(e){

            e.preventDefault() //гасим клики от <a>

        })

    }

}

//#endregion



//#region Кнопки фильтра

function products_menu_visible() {

    const filter = document.querySelector('#left_side')

    if (!filter) return

    let fbutton = document.querySelector('.filter_burger_button')

    let burgerCover = document.querySelector('.burger_menu_cover')    

    if (window.innerWidth<=800) {

        if (fbutton || burgerCover) return

        fbutton = document.createElement('button')  

        fbutton.innerHTML = 'Фильтр'      

        fbutton.classList.add('filter_burger_button')

        fbutton.addEventListener('click', products_menu_up)



        const burgerButton = document.querySelector('.burger_menu_button')

        if (!burgerButton)

            topmenu.querySelector('nav').appendChild(fbutton)

        else

            topmenu.insertBefore(fbutton, burgerButton) 

    } else {

        if (fbutton) fbutton.remove()

        if (burgerCover) burgerCover.remove()        

        const menuBurger = document.querySelector('.burger_menu')   

        if (menuBurger)    

            document.getElementById('left_side').appendChild(menuBurger.firstChild)

    }

}

function products_menu_up() {

    document.body.style.position = 'relative'

    const burgerCover = document.createElement('div')            



    const menuBurger = document.createElement('div')          

    menuBurger.classList.add('burger_menu')

    document.body.appendChild(menuBurger)

    menuBurger.classList.add('burger_menu_animation') 

    setTimeout((menuBurger)=>{if (menuBurger) menuBurger.style.right = 0}, 200, menuBurger)

    burgerCover.addEventListener('click', _products_menu_close)



    menuBurger.appendChild(document.querySelector('#left_side .side.filter'))

}

function _products_menu_close(e) {

    products_menu_close(e.target)

}

function products_menu_close(t) {

    if (t.classList.contains('burger_menu')) return

    const menuBurger = document.querySelector('.burger_menu')

    menuBurger.style.right = -menuBurger.clientWidth + 'px'

    document.getElementById('left_side').appendChild(menuBurger.firstChild)

    setTimeout(burger_menu_remove, 400)

}

//#endregion



//#region Бургер-меню

function burger_menu_visible() {

    const topmenu = document.querySelector('#topmenu > .content')

    if (!topmenu) return



    let burgerCover = document.querySelector('.burger_menu_cover')

    let burgerButton = document.querySelector('.burger_menu_button')

}

function burger_menu_up() {

    document.body.style.position = 'relative'

    const burgerCover = document.createElement('div')            

    burgerCover.classList.add('burger_menu_cover')

    document.body.appendChild(burgerCover)

    const menuBurger = document.createElement('div')          

    menuBurger.classList.add('burger_menu')

    burgerCover.appendChild(menuBurger)

    menuBurger.classList.add('burger_menu_animation') 

    setTimeout((menuBurger)=>{if (menuBurger) menuBurger.style.right = 0}, 200, menuBurger)

    burgerCover.addEventListener('click', burger_menu_close)



    menuBurger.appendChild(document.querySelector('#topmenu > .content > ul:first-child'))

}

function show(){

    document.querySelector('.burger_menu_cover').classList.toggle('hide');

    document.querySelector('.burger_menu_button').classList.toggle('bg');

    if (document.querySelector('#fixmenu_menu'))
        document.querySelector('#fixmenu_menu').classList.toggle('bg');

}


function burger_menu_close(e) {

    if (e.target.classList.contains('burger_menu')) return

    const menuBurger = document.querySelector('.burger_menu')

    menuBurger.style.right = -menuBurger.clientWidth + 'px'

    document.querySelector('#topmenu > .content').insertBefore(

        menuBurger.querySelector('ul'), 

        document.querySelector('#topmenu > .content>ul'))

    setTimeout(burger_menu_remove, 400)

}

function burger_menu_remove() {

    const menuBurger = document.querySelectorAll('.burger_menu')

    if (menuBurger && menuBurger.length) {

        let len = menuBurger.length

        while(len--) {

            menuBurger[len].remove()

        }

    }        

    const menuBurgerCover = document.querySelector('.burger_menu_cover')

    if (menuBurgerCover)

        menuBurgerCover.remove()        

    document.body.style.position = ''

}

//#endregion



//#region Breadcrumb

function init_breadcrumb_stop_click(){       

    //заглушки на нажатия

    const links = document.querySelectorAll('#breadcrumb a')



    let len = links.length

    while(len--){

        const a = links[len]

        a.addEventListener('click', function(e){

            e.preventDefault() //гасим клики от <a>

        })

    }

}

//#endregion



//#region Tabcontrol (инициализация)

function init_tabcontrol(){           

    const tcs = document.querySelectorAll('.tab_control')

    let len = tcs.length

    while(len--){

        const tc = tcs[len]        

        const btns = tc.querySelectorAll('.tabs button')

        let btn_len = btns.length

        while(btn_len--) {

            btns[btn_len].addEventListener('click', function(e){

                e.preventDefault() //гасим клики от <a>                

                if (!e.target) return                               

                const btns = e.target.parentNode.querySelectorAll('.tabs button')

                let btn_len = btns.length

                while(btn_len--) {

                    btns[btn_len].classList.remove('active')

                }

                e.target.classList.add('active');

                tabControlSelect(e.target.closest('.tab_control'))

            })

        }

        tabControlSelect(tc)

    }

}

function tabControlSelect(tc) {

    const active = tc.querySelector('button.active')

    if (!active) return

    const idx = active.getAttribute('data-index')        

    const tabs = tc.querySelectorAll('.tab_item')

    let tabs_len = tabs.length

    while(tabs_len--) {

        const _tab = tabs[tabs_len]

        if (_tab.getAttribute('data-id') == idx) {

            _tab.style.display = 'block'

        } else {

            _tab.style.display = ''

        }

    }

    scrollFooterTrigger()

}

//#endregion



//#region NumberEdit (инициализация)

function init_numberedit(){           

    const nmbs = document.querySelectorAll('.number_edit')

    let len = nmbs.length

    while(len--){

        const num = nmbs[len]

        num.addEventListener('keypress', function(e){

            if (!/^[0-9]*$/.test(e.key)) {

                e.preventDefault()

                return false;

            }

        })

        num.querySelector('.minus').addEventListener('click', function(e){

            e.preventDefault()

            if (!e.target) return 

            const inp = e.target.parentNode.querySelector('input')

            let value = parseInt(inp.value)            

            inp.value = (isNaN(value) || !isFinite(value)) ? 1 : Math.max(--value, 1)

        })

        num.querySelector('.plus').addEventListener('click', function(e){

            e.preventDefault()

            if (!e.target) return 

            const inp = e.target.parentNode.querySelector('input')

            let value = parseInt(inp.value)            

            inp.value = (isNaN(value) || !isFinite(value)) ? 1 : ++value

        })

    }

}

//#endregion



//#region Отправка запроса поиска

function find() {

    return false

}

//#endregion



//#region Экспандеры

function init_expanders(){

    const exp = document.querySelectorAll('.expander')

    if (exp && exp.length) {

        let len = exp.length

        while(len--) {            

            const expn = document.createElement('div')

            expn.className = 'expand_button'

            exp[len].appendChild(expn)

            expn.addEventListener(

                'click', e => {

                    if (!e || !e.target || !e.target.parentNode.classList.contains('expander')) return

                    e.target.parentNode.classList.toggle('expanded')

                }

            )

        }

    }

}

//#endregion



//#region Фильтры: Показать все

function init_filter_show_all_buttons(){

    const exp = document.querySelectorAll('.filter .load_data_place>a')

    if (exp && exp.length) {

        let len = exp.length

        while(len--) {

            exp[len].addEventListener(

                'click', e => {

                    e.preventDefault();

                    if (!e || !e.target) return

                    e.target.style.display = 'none'

                    e.target.parentNode.querySelector('div').style.display = 'block'

                }

            )

        }

    }

}

//#endregion



//#region Слайдеры

function calcSlideItems(dom_slider, l) {
    return false;
    if (!dom_slider) return {}

    const slides = dom_slider.querySelector('.custom_slider_slides>div')
    if (!slides) return {}

    const slide_els = slides.children
    if (!slide_els || !slide_els.length) return {}

    let left = -dom_slider.querySelector('.opacity_appear')?.offsetLeft
    if (isNaN(left)) left = 0

    const computeStyle = getComputedStyle(slides.parentNode)
    const pr = parseInt(computeStyle.paddingRight)
    const pl = parseInt(computeStyle.paddingLeft)

    let slides_width = slides.parentNode.offsetWidth
    slides_width -= pr
    slides_width += pl

    const column_count = Math.max(0,Math.ceil(slides.scrollWidth / (slides_width+pr+pl))-1)
    const item_w = slide_els[0].offsetWidth //ширина карточки
    const mr = +getComputedStyle(slide_els[0], null).getPropertyValue("margin-right").replace("px", "")
    const visible_count = Math.floor((slides_width+mr)/(item_w+mr)) //сколько должно влезть карточек
    const items_w = (item_w + mr) * visible_count //ширина карточек

    if (l!==undefined) left = l

    //видимость
    const appears = slides.querySelectorAll('div>.opacity_appear')
    if (appears && appears.length) {
        let tmp = appears.length
        while(tmp--) {
            if (appears[tmp])
                appears[tmp].classList.remove('opacity_appear')
        }
    }

    let range_start = Math.round(Math.abs(left) / items_w) * (visible_count)
    let len = slide_els.length
    const middle = (!!slides.closest('.custom_slider_two_rows')) ? Math.ceil(len/2): 0
    let first = null
    let lastMax = 0
    let last = null
    let lol = -1
    for(let i=range_start;i<range_start+visible_count+middle;i++){
        if (   (i>=range_start && i<range_start+visible_count)
            || (i>=range_start+middle && i<range_start+visible_count+middle)) {
            if (!slide_els[i]) continue
            lol = slide_els[i].offsetLeft
            if (lol>lastMax) {
                lastMax = lol
                last = slide_els[i]
            }
            if (!first) first = slide_els[i]
            slide_els[i].classList.add('opacity_appear')
        }
    }

    if (l !== undefined && first) {
        left = -first.offsetLeft
        let fault_px = Math.floor(((slides_width-pr-pl) - ((lastMax + item_w) - first.offsetLeft))/2) //центровка
        first.parentNode.style.left = (left + fault_px)  + 'px'
    }

    let last_slide = Math.max(slide_els[slide_els.length-1].offsetLeft, last ? last.offsetLeft : 0)

    return {
        visible_count: visible_count,
        slides_width: slides_width,
        item_w: item_w,
        items_w: items_w,
        left: left,
        firstOffset: first?.offsetLeft || 0,
        lastSlideOffset: last_slide,
        column_count: column_count,
        slides: slides,
        mr: mr,
        pr: pr,
        pl: pl
    }
}
function slidersUpdate(correct) {
    return false;
    const sl = document.querySelectorAll('.cards_custom_slider.custom_slider_two_rows')

    if (sl && sl.length) {

        let len_2 = sl.length

        //все двойные слайдеры
        for(let len=0;len<len_2;len++) {
            //let two_lines = sl[len].classList.contains('custom_slider_two_rows') //признак слайдера в неск.рядов

            const sl2 = sl[len].querySelectorAll('.custom_slider_slides>div')
            let len2 = sl2.length

            //слайды
            while(len2--) {

                const items = sl2[len2].children
                if (items.length <= 1) continue

                let container_w = items[0].parentNode.offsetWidth

                const item_w = items[0].offsetWidth //ширина карточки
                const visible_count = Math.floor(container_w/(item_w+5)) //сколько должно влезть карточек
                let mr = 5

                mr = +getComputedStyle(items[0], null).getPropertyValue("margin-right").replace("px", "");
                let ml = items[1] ? +getComputedStyle(items[1], null).getPropertyValue("margin-left").replace("px", "") : 0

                if (visible_count !== 0) {
                    const max = Math.min(Math.floor((container_w + mr)/(item_w + mr + ml)), Math.min(items.length, 6)) //макс карточек, но не больше 6
                    //const margin = Math.floor((container_w - (max * item_w + (max - 1) * mr)) / 2) //отступ слева и справа
                    //let marginB = mr //отступ снизу, чтобы было ровно

                    sl2[len2].style.width = (Math.ceil(items.length/2) * (item_w+mr + ml) + 1) + 'px'

                    let len3 = items.length
                    const half = Math.floor(len3 / 2);
                    let i = 0;
                    while(len3--) {
                        i = /* !two_lines ||  */len3<half ? len3 : len3 - half;
                        /* if (i === 0) {
                            //правая видимая карточка обрамляется отступом слева
                            items[len3].style.marginRight = mr + 'px'
                            items[len3].style.marginLeft = 0
                        } else if (i % max === 0) {
                            //следующая видимая карточка обрамляется отступом справа и слева тоже
                            items[len3].style.marginRight = mr + 'px'
                            items[len3].style.marginLeft =  0
                        } else {
                            items[len3].style.marginRight = mr + 'px'
                            items[len3].style.marginLeft = 0
                        }

                        //if (two_lines) {
                            items[len3].style.marginTop = 0
                            items[len3].style.marginBottom = (items.length/2<=len3) ? 0 : marginB + 'px'
                       // } */
                    }
                    // if (two_lines) {
                    // sl2[len2].style.width = (items.length/2 * item_w + items.length/2 * mr + items.length/max*mr+2*mr) + 'px'
                    //}
                    //sl2[len2].style.left = 0; //при ресайзе скролим в начало
                }
            }
        }

    }

    if (correct) {
        const custom_sliders = document.querySelectorAll('.custom_slider')
        let len = custom_sliders.length
        while(len--) {
            //custom_sliders[len].querySelector('.custom_slider_slides>div').style.left=0;
            calcSlideItems(custom_sliders[len], 0);
        }

        const slide_wide = document.querySelectorAll('.custom_wide_slider>.custom_slider_buttons>.custom_slider_button')
        if (slide_wide.length) {
            let len = slide_wide.length
            while(len--) {
                slide_wide[len].style.width = 0
            }
        }
        const cntnt = document.querySelector('.content')
        const w = (window.innerWidth - cntnt.offsetWidth)/2 + 4
        if (slide_wide.length) {
            let len = slide_wide.length
            while(len--) {
                slide_wide[len].style.width = Math.min(window.innerWidth/2, (w + 36 + w)) + 'px'
            }
        }

    }
}

function init_slider() {
    return false;
    const sl = document.querySelectorAll('.custom_slider')

    if (sl && sl.length) {

        let len = sl.length

        while(len--) {

            //навигация

            const nav = sl[len].querySelector('.custom_slider_navs')
            slidersUpdate()
            calcSlideItems(sl[len], 0)
            if (nav) {

                let slen = sl[len].querySelector('.custom_slider_slides>div>div').length

                nav.innerHTML = ''

                while(slen--) {

                    const span = document.createElement('span')

                    if (!nav.childElementCount) {

                        span.classList.add('active')

                    }

                    span.addEventListener('click', ()=>sliderTo(slen, sl[len]))

                    nav.appendChild(span)

                }

            }

            const btns = sl[len].querySelectorAll('.custom_slider_button')

            let lbtns = btns.length

            while(lbtns--) {

                btns[lbtns].addEventListener('click', (e) => {

                    if (!e || !e.target) return

                    const direction = (e.target.classList.contains('custom_slider_left')) ? 1 : -1
                    const sldr = e.target.closest('.custom_slider')
                    const bsl = sldr.querySelectorAll('.custom_slider_button')
                    //let _len = bsl.length
                    /* let bsum = 0
                    while(_len--) {
                        bsum += bsl[_len].scrollWidth
                    }
 */
                    const csi = calcSlideItems(sldr)

                    const left = -csi.firstOffset
                    const items_w = csi.items_w
                    const slides_width = csi.slides_width
                    const pr = csi.pr
                    const pl = csi.pl
                    const slides = csi.slides

                    let l = left + items_w*direction

                    const w = Math.max(0,Math.ceil(slides.scrollWidth / items_w)-1)

                    if (Math.abs(l)<=csi.lastSlideOffset){//w*(items_w+pr+pl)) {
                        slides.style.left = Math.min(l,0) + 'px';
                        calcSlideItems(sldr, Math.min(l,0))
                    }

                })

            }

        }

    }

}

function sliderTo(num, slider) {



}
//#endregion Слайдеры



//#region Слайдер с фильтром по цене

function init_price_slider(){

    const ps = document.querySelectorAll('.price_slider')

    if (ps && ps.length) {        

        let len = ps.length

        while(len--) {

            const pslider = ps[len]

            const length = pslider.querySelector('.length')

            let min = length.getAttribute('data-min')

            let max = length.getAttribute('data-max')

            if (min > max) {

                let tmp = max

                max = min

                min = tmp

            }



            const items = pslider.querySelectorAll('.length>div')

            let len2 = items.length

            while(len2--) {

                const item = items[len2]

                refresh_price_slider_item(item)

                item.addEventListener(

                    'mousedown', e => {

                        if (!e || !e.target) return

                        startDrag(e.target, dragPriceSliderItem)

                    }

                ) 

                item.addEventListener(

                    'touchstart', e => {

                        if (!e || !e.target) return

                        startDrag(e.target, dragPriceSliderItem)

                    }

                )

            }



            const values = pslider.querySelectorAll('.values input')

            for(let i=0;i<values.length;i++){

                values[i].addEventListener('change',e => {

                    const index = document.querySelector('.start_value+input') == e.target ? 0 : 1

                    const inp = parseInt(e.target.value)

                    const lngth = pslider.querySelector('.length')

                    const min = lngth.getAttribute('data-min')

                    const max = lngth.getAttribute('data-max')

                    const items = pslider.querySelectorAll('.length>div')

                    const item = items[index]

                    if (!isNaN(inp) && isFinite(inp)

                        && inp >= min && inp <= max) {

                        item.setAttribute('data-value', inp)

                        refresh_price_slider_item(item)

                    }

                })

            }

        }

    }

}

function refresh_price_slider_item(item) {

    const length = item.parentNode

    let min = parseInt(length.getAttribute('data-min'))

    let max = parseInt(length.getAttribute('data-max'))

    if (min > max) {

        let tmp = max

        max = min

        min = tmp

    }

    let length_px = length.clientWidth



    let val = parseInt(item.getAttribute('data-value'))

    if (val < min)

        val = min

    else if (val > max) {

        val = max

    }



    item.style.left = (length_px/(max - min) * (val-min) ) + 'px'

}

function refresh_price_slider_item_x(item) {

    const length = item.parentNode

    let min = parseInt(length.getAttribute('data-min'))

    let max = parseInt(length.getAttribute('data-max'))

    if (min > max) {

        let tmp = max

        max = min

        min = tmp

    }

    let length_px = length.clientWidth



    let x = parseInt(item.style.left)

    const val = min + ((max - min)/length_px) * x

    item.setAttribute('data-value', Math.round(val))



    const items = item.parentNode.children

    const inputs = item.closest('.price_slider').querySelectorAll('.values input')

    let len = inputs.length

    while(len--) {        

        inputs[len].value = items[len].getAttribute('data-value')

    }

}

function dragPriceSliderItem(e) {

    if (!e) return



    if (e.type === 'mouseup' || e.type === 'touchend') {

        dragPriceSliderItemFinish(e)

        finishDrag(this)

        return

    }



    if (window.timeoutMove) clearTimeout(window.timeoutMove)

    window.timeoutMove = setTimeout(dragPriceSliderItemMove, 0, e)

}

function dragPriceSliderItemCoord(cX) {

    if (!window.targetDrag) return



    const itemCenter = window.targetDrag.clientWidth/2

    const target = window.targetDrag.parentNode

    if (!target) return

    const targetX = target.getBoundingClientRect().x

    const targetLength = target.clientWidth

    

    //не должны пересекаться. Переберем до (макс) и после (мин)

    const items = target.children

    let len = items.length

    const minmax = [0, targetLength] 

    //также снимем z-index

    let mm = false   

    while(len--) {

        const it = items[len]

        it.style.zIndex = 0

        if (!mm && it == window.targetDrag) {            

            if (items[len+1]) {

                minmax[1] = Math.min(parseInt(items[len+1].style.left))

            }

            if (items[len-1]) {

                minmax[0] = Math.max(parseInt(items[len-1].style.left))

            }

            mm = true

        }

    }    

    const x = Math.max(Math.min((cX - itemCenter) - targetX, minmax[1]), minmax[0])

    window.targetDrag.style.left = x + 'px';

    window.targetDrag.style.zIndex = 1

}

function dragPriceSliderItemMove(e) {

    if (!e) return

    dragPriceSliderItemCoord(e.clientX || e.targetTouches[0].clientX)

}

function dragPriceSliderItemFinish(e) {

    if (!e || !window.targetDrag) return

    dragPriceSliderItemCoord(e.clientX || e.changedTouches[0].clientX)

    refresh_price_slider_item_x(window.targetDrag)



}

//#endregion



//#region Переключатели вида

function init_show_mode_block() {

    const group_buttons = document.querySelector('.show_mode')

    if (!group_buttons) return

    const active_node = document.querySelector('.show_mode a.active')

    const prod_res = document.querySelector('.products_result')

    let index = 1

    if (prod_res) {        

        if (active_node.classList.contains('showFor3')) {

            index = 0

        } else if (active_node.classList.contains('showFor4')) {

            index = 1

        } else {

            index = 2

        }

        prod_res.setAttribute('data-show_mode', index)

    }    



    group_buttons.addEventListener('click', e =>{

        if (!e || !e.target || e.target.nodeName !== 'A') return

        e.preventDefault()

        const ul = e.target.closest('.show_mode')

        const lies = ul.querySelectorAll('li>a')

        let len = lies.length

        let index = len

        while(len--) {

            if (lies[len] == e.target) {

                index = len

                e.target.classList.add('active')

            } else {

                lies[len].classList.remove('active')

            }

        }        

        const prod_res = document.querySelector('.products_result')

        if (prod_res) {

            prod_res.setAttribute('data-show_mode', index)

        }

    })

}

//#endregion



//#region Кнопки удаления товаров в корзине

function init_close_buttons_of_cart() {

    const ps = document.querySelectorAll('.close_button')

    if (ps && ps.length) {        

        let len = ps.length

        while(len--) {

            const button = ps[len]

            if (!button) continue



            button.addEventListener(

                'click', e => {

                    e.preventDefault();

                    if (!e || !e.target) return

                    const parent = e.target.closest('.tr')

                    if (parent)

                        parent.remove()

                }

            )

        }

    }

}

//#endregion



//#region Функции перетаскивания

function startDrag(target, func) {

    if (!target) return

    window.targetDrag = target

    document.documentElement.addEventListener('selectstart', (e)=>{

        e.preventDefault()

    })

    document.documentElement.addEventListener('touchend', func)

    document.documentElement.addEventListener('touchmove', func)

    document.documentElement.addEventListener('mousemove', func)

    document.documentElement.addEventListener('mouseup', func)

}

function finishDrag(func) {

    delete window.targetDrag

    document.documentElement.removeEventListener('selectstart', func)

    document.documentElement.removeEventListener('touchmove', func)

    document.documentElement.removeEventListener('touchend', func);

    document.documentElement.removeEventListener('mousemove', func)

    document.documentElement.removeEventListener('mouseup', func)

}

//#endregion Функции перетаскивания



//#region Прореживаем пагинацию

function paginationWeed() {

    const pagination = document.querySelector('.pagination') 

    if (!pagination) {

        return

    }

    

    const fb = document.querySelector('.pagination__right-arrow') 

    let b = fb

    while(b = b.previousElementSibling) {          

        b.style.display = ''

    }   

    b = fb

    while((b = b.previousElementSibling) && pagination.clientHeight>25) {   

        if (b.classList.contains('active') || b.classList.contains('first_page')) continue     

        b.style.display = 'none'

    }

}

//#endregion

var pagination = document.querySelector('.pagination');
var pagSpans = document.querySelectorAll('.pagination span')
var previous = pagSpans[1];
var next = pagSpans[pagSpans.length - 2];
var theFisrt = pagSpans[0];
var theLast = pagSpans[pagSpans.length - 1];
var spans = [];
pagSpans.forEach((node) => {
    spans.push(node);
});

if(pagination){
    pagination.addEventListener('click', (e) => {
        if(Number(e.target.parentNode.innerText != 0 && isNaN(e.target.parentNode.innerText) == false)){
            for(var i = 0; i < spans.length; i++){
                if(spans[i].classList.contains('active')){
                    spans[i].classList.remove('active');
                    break;
                }
            }
            e.target.parentNode.classList.add('active');
        }
    });
    next.addEventListener('click', () => {

        for (var i = 0; i < spans.length; i++){
    
            if(spans[i].classList.contains('active')){
                if(i+1 < spans.length - 2){
                    spans[i].classList.remove('active');
                    spans[i+1].classList.add('active');
                    break
                }
            }
    
        }
    
    });
    previous.addEventListener('click', () => {

        for (var i = 0; i < spans.length; i++){
    
            if(spans[i].classList.contains('active')){
                if(i-1 > 1){
                    spans[i].classList.remove('active');
                    spans[i-1].classList.add('active');
                    break
                }
            }
    
        }
    
    });
    theFisrt.addEventListener('click', () => {

        for (var i = 0; i < spans.length; i++){
    
            if(spans[i].classList.contains('active')){
                spans[i].classList.remove('active');
                spans[2].classList.add('active');
            }
    
        }
    
    });
    theLast.addEventListener('click', () => {

        for (var i = 0; i < spans.length; i++){
    
            if(spans[i].classList.contains('active')){
                spans[i].classList.remove('active');
                spans[spans.length-3].classList.add('active');
            }
    
        }
    
    });
}
var productsAmount = document.querySelectorAll('#manufacturers .product_item').length;
if (document.querySelector('#all'))
    document.querySelector('#all').textContent = "Все " + productsAmount;

/*
function openCatalog(){
    document.querySelector('#popup_catalog').classList.toggle('opened');
    document.querySelector('.blackscreen').classList.toggle('active');
    document.querySelector('#fixmenu_cat').classList.toggle('bg');
    document.querySelector('body').classList.toggle('open-popup-catalog');
};*/


/*
let listCarousels = document.getElementsByClassName('swiper');

for (let carousel of listCarousels) {

    let navigationBlock = carousel.parentNode.parentNode.getElementsByClassName('custom_slider_buttons');
    let swiperSettings = {
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 1,
        navigation: {
            nextEl: navigationBlock[0].getElementsByClassName('custom_slider_right')[0],
            prevEl: navigationBlock[0].getElementsByClassName('custom_slider_left')[0]
        },
        loop: true,
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
                }
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

    new Swiper(carousel, swiperSettings);
}
*/

// new Swiper('.test-swipe', {
//     speed: 400,
//     slidesPerView: 1,
//     navigation: {
//         nextEl: '.nav-prev',
//         prevEl: '.nav-right'
//     },
//     loop: true
// });

/*
new Swiper('.swiper-full', {
    speed: 400,
    slidesPerView: 1,
    navigation: {
        nextEl: document.getElementsByClassName('custom_wide_slider__nav-right')[0],
        prevEl: document.getElementsByClassName('custom_wide_slider__nav-left')[0]
    },
    loop: true
});*/
/*
window.addEventListener('load',function(){
    let parentLinks = document.querySelectorAll('#popup_catalog .catalog_list .parent > a')
    if (parentLinks.length > 0) {
        for (let key in parentLinks) {
            parentLinks.item(key).addEventListener('click', function (event) {
                event.preventDefault()
                console.log(event.target.parentNode.classList.toggle('opened'))

                return false;
            })
        }
    }
})*/