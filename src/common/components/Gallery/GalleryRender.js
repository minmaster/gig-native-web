'use strict';

import React from 'react';
import Slider from 'react-slick';

export default function () {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                <img src={require('../../../images/gallery01.jpg')} />
                <img src={require('../../../images/gallery02.jpg')} />
                <img src={require('../../../images/gallery03.jpg')} />
                <img src={require('../../../images/gallery04.jpg')} />
                <img src={require('../../../images/gallery05.jpg')} />
            </Slider>
        </div>
    );
}
