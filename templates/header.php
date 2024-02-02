<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Главная</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../assets/css/css_custom.css">
    <link rel="stylesheet" href="../assets/css/custom.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
    <!--    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.js"></script> -->
</head>

<body>

<?php require __DIR__ . '/page_selector.php'; ?>

<!--—BEGIN HEADER -->

<header>
    <div class="content">
        <section class="phones">
            <a class="with_phone" href="tel:+79531270078">+7 953 127-00-78</a>
            <button class="with_phone request_call">Заказать звонок</button>
        </section>

        <section class="logo"><img src="../assets/img/svg/logo.svg" width="345" height="68" alt=""/></section>
        <section class="contacts">
            <ul class="messenger_buttons">
                <li><a href="/" target="_blank" data-type="tg" class="telegram_icon"></a></li>
                <li><a href="/" target="_blank" data-type="ws" class="whatsapp_icon"></a></li>
                <li><a href="/" target="_blank" data-type="vk" class="vk_icon"></a></li>
                <li><a href="/" target="_blank" data-type="in" class="instagram_icon"></a></li>
                <li><a href="/" target="_blank" data-type="yt" class="youtube_icon"></a></li>
            </ul>
            <div>
                <span class="with_geo">Санкт-Петербург</span><br/>
                <a class="with_email" href="mailto:infoTep@mail.ru">infoTep@mail.ru</a>
            </div>
        </section>
    </div>
</header>
<!--—END HEADER -->

<!-- BEGIN TopMenu-->

<section id="topmenu">
    <nav class="content">
        <ul>
            <li><a href="/">Каталог товаров</a></li>
            <li><a href="manufacturers.html">Производители</a></li>
            <li><a href="/">Доставка и оплата</a></li>
            <li><a href="/">Возврат и обмен</a></li>
            <li><a href="/">Информация</a></li>
            <li><a href="/">О компании</a></li>
        </ul>
        <ul>
            <li><a href="/" class="menu_heart"></a></li>
            <li><a href="/" class="menu_find"></a></li>
            <li><a href="/" class="menu_user"></a></li>
            <li><a href="/" class="menu_cart" data-count="0"></a></li>
        </ul>
        <div class="burger_menu_button" onclick="show()"></div>
    </nav>
</section>

<div class="burger_menu_cover">
    <div class="burger_menu burger_menu_animation content" style="right: 0px;">
        <ul>
            <li><a href="/">Каталог товаров</a></li>
            <li><a href="manufacturers.html">Производители</a></li>
            <li><a href="/">Доставка и оплата</a></li>
            <li><a href="/">Возврат и обмен</a></li>
            <li><a href="/">Информация</a></li>
            <li><a href="/">О компании</a></li>
        </ul>
        <br>
        <ul class="burger_menu-secondlist">
            <li class="burger_menu-secondlist__favorite">Избранное</li>
            <li class="burger_menu-secondlist__search search-icon">Поиск</li>
            <li class="burger_menu-secondlist__lk">Личный кабинет</li>
            <li data-count="0" class="burger_menu-secondlist__last burger_menu-secondlist__cart">Корзина</li>
        </ul>
    </div>
</div>

<div id="popup_catalog">
    <div class="popup_catalog__top-row">
        <h2>Каталог</h2>
        <a href="#" class="catalog-toggle-drawer">
            <img src="../assets/img/svg/menu/drawer/close_drawer.svg" alt="">
        </a>
    </div>
    <ul class="catalog_list">
        <li>
            <a href="?type=groutens">Гроутенты</a>
        </li>
        <li>
            <a href="?type=light">Освещение</a>
        </li>
        <li class="parent opened">
            <a href="?type=wind">Вентиляция</a>
            <ul>
                <li>
                    <a href="?type=chanel">Вентиляторы канальные</a>
                </li>
                <li>
                    <a href="?type=channelforwind">Вентиляторы для обдува</a>
                </li>
                <li>
                    <a href="?type=access">Воздуховоды, аксессуары</a>
                </li>
                <li>
                    <a href="?type=co2">Углекислый газ</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="?type=clear">Очистка воздуха</a>
        </li>
        <li>
            <a href="?type=grow">Системы выращивания</a>
        </li>
        <li>
            <a href="?type=pit">Питание растений</a>
        </li>
        <li class="parent">
            <a href="?type=sub">Субстраты</a>
            <ul>
                <li>
                    <a href="?type=chanel">Подраздел 1</a>
                </li>
                <li>
                    <a href="?type=channelforwind">Подраздел 2</a>
                </li>
                <li>
                    <a href="?type=access">Подраздел 3</a>
                </li>
                <li>
                    <a href="?type=co2">Подраздел 4</a>
                </li>
            </ul>
        </li>
        <li class="parent">
            <a href="?type=range">Горшки</a>
            <ul>
                <li>
                    <a href="?type=chanel">Подраздел 5</a>
                </li>
                <li>
                    <a href="?type=channelforwind">Подраздел 6</a>
                </li>
                <li>
                    <a href="?type=access">Подраздел 7</a>
                </li>
                <li>
                    <a href="?type=co2">Подраздел 8</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="?type=control">Контроль EC pH</a>
        </li>
        <li class="parent">
            <a href="?type=control">Микроклимат и автоматизация</a>
            <ul>
                <li>
                    <a href="?type=chanel">Подраздел 9</a>
                </li>
                <li>
                    <a href="?type=channelforwind">Подраздел 10</a>
                </li>
                <li>
                    <a href="?type=access">Подраздел 11</a>
                </li>
                <li>
                    <a href="?type=co2">Подраздел 12</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="?type=outhers">Разное</a>
        </li>
        <li>
            <a href="?type=action">Акции</a>
        </li>
    </ul>
</div>

<div class="blackscreen"></div>
<!--END TopMenu-->
