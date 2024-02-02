<?php

$arImages = [
        "Rectangle 764.png",
        "test_card_1.jpg",
        "test_card_2.jpg",
        "test_card_3.jpg",
        "test_card_4.jpeg",
        "test_card_5.webp",
        "test_card_6.jpeg",
        "test_card_7.jpeg",
        "test_card_8.png",
        "test_card_9.png",
        "test_card_10.png",
        "test_card_11.png",
        "test_card_12.png",
        "test_card_13.png",
        "test_card_14.png",
        "test_card_15.png",
        "test_card_16.png",
        "test_card_17.png",
        "test_card_18.png",
        "test_card_19.png",
        "test_card_20.png",
        "test_card_21.png",
        "test_card_22.png",
        "test_card_23.png",
        "test_card_24.png",
        "test_card_25.png"
    ];
?>
<!-- 566 * 360 -->
<div class="wrapp-gallery">
    <div class="card-gallery">
        <div class="swiper-wrapper">
            <?php foreach ($arImages as $hrefImage):?>
                <div class="swiper-slide">
                    <img src="../assets/img/goods/<?php echo $hrefImage; ?>" alt=""/>
                </div>
            <?php endforeach;?>
            <!-- <div class="swiper-slide">
                <img src="../assets/img/goods/Rectangle 764.png" alt=""/>
            </div>
            <div class="swiper-slide">
                <img src="../assets/img/goods/test_card_1.jpg" alt=""/>
            </div>
            <div class="swiper-slide">
                <img src="../assets/img/goods/test_card_2.jpg" alt=""/>
            </div>
            <div class="swiper-slide">
                <img src="../assets/img/goods/test_card_3.jpg" alt=""/>
            </div>
            <div class="swiper-slide">
                <img src="../assets/img/goods/test_card_4.jpeg" alt=""/>
            </div>
            <div class="swiper-slide">
                <img src="../assets/img/goods/test_card_5.webp" alt=""/>
            </div>
            <div class="swiper-slide">
                <img src="../assets/img/goods/test_card_6.jpeg" alt=""/>
            </div>
            <div class="swiper-slide">
                <img src="../assets/img/goods/test_card_7.jpeg" alt=""/>
            </div> -->
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev swiper-nav-buttons"></div>
        <div class="swiper-button-next swiper-nav-buttons"></div>
    </div>
    <div class="thumbs">
        <div class="swiper-nav-buttons swiper-button-prev"></div>
        <div class="image-thumbs">
            <div class="swiper-wrapper">
                <?php foreach ($arImages as $hrefImage):?>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/<?php echo $hrefImage;?>" alt=""/>
                        </div>
                    </div>
                <?php endforeach;?>
                <!--<div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/Rectangle 764.png" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_1.jpg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_2.jpg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_3.jpg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_4.jpeg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_5.webp" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_6.jpeg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_7.jpeg" alt=""/>
                    </div>
                </div> -->
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="swiper-nav-buttons swiper-button-next"></div>
    </div>
</div>

<div class="gallery-overlay">
    <div class="overlay__main-screen">
        <div class="overlay__card-gallery">
            <div class="overlay__card-gallery__close">
                <a href="#"></a>
            </div>
            <div class="overlay__card-gallery__wrapp">
                <div class="swiper-wrapper">
                    <?php foreach ($arImages as $hrefImage):?>
                        <div class="swiper-slide">
                            <div class="swiper-slide__content">
                                <img src="../assets/img/goods/<?php echo $hrefImage;?>" alt=""/>
                            </div>
                        </div>
                    <?php endforeach;?>
                    <!-- <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/Rectangle 764.png" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_1.jpg" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_2.jpg" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_3.jpg" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_4.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_5.webp" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_6.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_7.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_8.png" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_9.png" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_10.png" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_11.png" alt=""/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/test_card_12.png" alt=""/>
                        </div>
                    </div> -->
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-prev swiper-nav-buttons"></div>
            <div class="swiper-button-next swiper-nav-buttons"></div>
        </div>
    </div>
    <div class="overlay__thumbs">
        <div class="image-thumbs">
            <div class="swiper-wrapper">
                <?php foreach ($arImages as $hrefImage):?>
                    <div class="swiper-slide">
                        <div class="swiper-slide__content">
                            <img src="../assets/img/goods/<?php echo $hrefImage;?>" alt=""/>
                        </div>
                    </div>
                <?php endforeach;?>
                <!-- <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/Rectangle 764.png" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_1.jpg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_2.jpg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_3.jpg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_4.jpeg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_5.webp" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_6.jpeg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_7.jpeg" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_8.png" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_9.png" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_10.png" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_11.png" alt=""/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide__content">
                        <img src="../assets/img/goods/test_card_12.png" alt=""/>
                    </div>
                </div> -->
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="swiper-button-prev swiper-nav-buttons"></div>
        <div class="swiper-button-next swiper-nav-buttons"></div>
    </div>
    <div class="gallery-overlay__mobile-scrollbar"></div>
    <div class="gallery-overlay__mobile-stub"></div>
</div>
<!-- <div class="product_preview">
    <img src="../assets/img/goods/Rectangle 764.png" width="565" height="355" alt=""/>
    <img src="../assets/img/goods/test_card_1.jpg" width="565" height="355" alt=""/>
    <img src="../assets/img/goods/test_card_2.jpg" width="565" height="355" alt=""/>
    <img src="../assets/img/goods/test_card_3.jpg" width="565" height="355" alt=""/>
    <img src="../assets/img/goods/test_card_4.jpeg" width="565" height="355" alt=""/>
    <img src="../assets/img/goods/test_card_5.webp" width="565" height="355" alt=""/>
    <img src="../assets/img/goods/test_card_6.jpeg" width="565" height="355" alt=""/>
    <img src="../assets/img/goods/test_card_7.jpeg" width="565" height="355" alt=""/> -->
<!--</div> -->
<!--<ul class="product_minipreview">
    <li><img src="../assets/img/goods/mini/Rectangle 767.png" alt="" width="70" height="55"></li>
    <li><img src="../assets/img/goods/mini/Rectangle 768.png" alt="" width="70" height="55"></li>
    <li><img src="../assets/img/goods/mini/Rectangle 769.png" alt="" width="70" height="55"></li>
</ul> -->