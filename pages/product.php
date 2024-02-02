<?php require __DIR__ . '/../templates/header.php'; ?>
<?php require __DIR__ . '/../templates/breadcrumb.php'; ?>
    <section class="product_card">
        <div class="content content__mobile-full-width">
            <div class="product_card__main">
                <!-- <h1 id="product_header__mobile">Terra Aquatica TriPart Grow 1 л </h1>-->
                <div class="product_description__row title-row h1-mobile-title">
                    <h1>Terra Aquatica TriPart Grow 1 л</h1>
<!--                    <div class="add_favorite">-->
<!--                        <a class="add_favorite__link" href="/">-->
<!--                            <span class="add_favorite__text">Добавить в избранное</span>-->
<!--                        </a>-->
<!--                    </div>-->
                </div>
                <div class="product_image">
                    <?php require __DIR__ . '/../templates/gallery.php'; ?>
                </div>
                <div class="product_description">
                    <div class="product_description__row article-row">
                        <div class="article">Артикул: 0058434</div>
                        <div class="right"></div>
                    </div>
                    <div class="product_description__row title-row h1-desktop-title">
                        <h1>Terra Aquatica TriPart Grow 1 л</h1>
                    </div>
                    <div class="product_description__row vertical-center" style="margin-bottom: 9px;">
                        <span class="product_description__row__sub-title">Цена:</span>
                        <span class="rub">1659</span>
                        <div class="cart__button only-middle" style="margin-left: 19px;">
                            <button>В корзину</button>
                        </div>
                    </div>
                    <div class="product_description__row add-cart__row vertical-center" style="margin-bottom: 11px;">
                        <span class="product_description__row__sub-title">Количество:</span>
                        <div class="number_edit">
                            <div>
                                <div class="controls">
                                    <input value="1" type="">
                                    <span class="button minus"></span>
                                    <span class="button plus"></span>
                                </div>
                                <div class="mera">шт</div>
                            </div>
                        </div>
                        <div class="cart__button only-desktop">
                            <button>В корзину</button>
                        </div>
                        <div class="add_favorite">
                            <a class="add_favorite__link" href="/">
                                <span class="add_favorite__text">Добавить в избранное</span>
                            </a>
                        </div>
                    </div>
                    <div class="product_description__row" style="margin-bottom: 5px;">
                        <span class="stocks__title product_description__row__sub-title">Остаток в магазине:</span>
                        <span class="stocks__value">В наличии</span>
                    </div>
                    <div class="product_description__row" style="margin-bottom: 25px;">
                        <span class="stocks__title product_description__row__sub-title">Остаток на складе:</span>
                        <span class="stocks__value">В наличии</span>
                    </div>
                    <div class="product_description__row only-mobile cart-mobile-row">
                        <div class="cart__button">
                            <button>В корзину</button>
                        </div>
                    </div>
                    <div class="product_description__row" style="margin-bottom: 10px;">
                        <div class="short_characters">Краткие характеристики</div>
                    </div>
                    <div class="product_description__row characters">
                        <div class="characters__row">
                            <div class="characters__row__title">Производитель:</div>
                            <div class="characters__row__value">Terra Aquatica (GHE)</div>
                        </div>
                        <div class="characters__row">
                            <div class="characters__row__title">Страна:</div>
                            <div class="characters__row__value">Франция</div>
                        </div>
                        <div class="characters__row">
                            <div class="characters__row__title">Тип удобрения:</div>
                            <div class="characters__row__value">Минеральные удобрения</div>
                        </div>
                        <div class="characters__row">
                            <div class="characters__row__title">Метод выращивания:</div>
                            <div class="characters__row__value">Почва / Субстраты / Гидропоника</div>
                        </div>
                        <div class="characters__row">
                            <div class="characters__row__title">Объём:</div>
                            <div class="characters__row__value">1л</div>
                        </div>
                        <div class="characters__row">
                            <div class="characters__row__title">Вес:</div>
                            <div class="characters__row__value">1,2 кг</div>
                        </div>
                    </div>
                    <!--<div class="product_description__row">
                        <button>В корзину</button>
                    </div> -->
                </div>
            </div>
            <div class="tab_control">
                <?php require __DIR__ . '/../templates/card/tabs.php'; ?>
            </div>
        </div>
    </section>

    <section id="reference_goods">
        <div class="content">
            <h2 class="novelties_header">Похожие товары</h2>
        </div>
        <?php require __DIR__ . '/../templates/simple-row-slider.php'; ?>
    </section>
<?php require __DIR__ . '/../templates/footer.php'; ?>