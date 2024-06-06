import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Amazon1 from "../../img/amazon1.jpg";
import Amazon2 from "../../img/amazon2.jpg";
import Amazon3 from "../../img/amazon3.jpg";
import Amazon4 from "../../img/amazon4.jpg";
import Amazon5 from "../../img/amazon5.jpg";
import Amazon6 from "../../img/amazon6.jpg";
import Amazon7 from "../../img/amazon7.jpg";
import "./Slider.css";

const data = [
    {
        name: `JUGTE Motivational Water Bottle 1 litre Sipper Bottle For Adults With Time Measurement Non-Toxic Water bottle for office,Water bottle for gym (Pink) |Plastic`,
        img: Amazon6,
        price: `₹383`,
        stars: 4,
        link: `https://www.amazon.in/JUGTE-Motivational-Water-Bottle-Measurement/dp/B0C3ZNLC5Y?crid=1VVOK24XAXRMW&dib=eyJ2IjoiMSJ9.5kzsTg3MZkHwI_qKqbWQXsT1-uUOQhY_LEgAteD05rHsQXxL3_T0TAAwOtkwsNBtyRX0mnoMt-KVU3bP5kKaNXObBfpP6g-be1cITyFoJcpbYp91jnNg-CRayBR378g84UQYrDomlX9yioQQZ6ZJdyrYoD389Hy7KAMDBmR6-c7kle4hzqb40VkPWFGXBSQLMe0VvG4pFKDv_L0xfeLqeBLSWrQk0bQC93jeItr88XwXe1pW0NwGN0NTTScJQqg6-9ReP0KAIxnNLDkcs1QnAj4kBGMxRgv2W31OUZwa2tw.HaAXHIrKxq1j9VsZ0N6Z5cwU1QE0ijlwluOUClWB8ns&dib_tag=se&keywords=water%2Bbottle%2Bfor%2Bhome&qid=1716447784&refinements=p_n_format_browse-bin%3A19560801031&rnid=14277549031&s=kitchen&sprefix=waterb%2Caps%2C194&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=genaigifts-21&linkId=cc345d67672a52a69fcbe7521f6254ea&language=en_IN&ref_=as_li_ss_tl`
    },
    {
        name: `Clara 925 Sterling Silver Heart Pendant Necklace | With or Without Chain | Gift for Women and Girls`,
        img: Amazon1,
        price: `₹2057`,
        stars: 3,
        link: `https://www.amazon.in/Sterling-Pendant-Necklace-Rhodium-Zirconia/dp/B09XNB3DZX?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=24T4YV94DEENMF2GX90W&linkCode=ll1&tag=genaigifts-21&linkId=28813b7cfe29d1353c36425292578222&language=en_IN&ref_=as_li_ss_tl`
    },
    {
        name: `ZAVERI PEARLS Set Of 2 Rose Gold Dazzling Austrian Diamonds Bracelet For Women-ZPFK16864`,
        img: Amazon2,
        price: `₹488`,
        stars: 4,
        link: `https://www.amazon.in/ZAVERI-PEARLS-Dazzling-Austrian-Women-ZPFK16864/dp/B0CLJL9FCS?crid=2Y3Z8AIMY85S2&dib=eyJ2IjoiMSJ9.-08jI0CCEQ0UGh_eZ1-uAPgdruXKIc-xehk23PqNzQ5IJYCbiJdjK0O8sO5FLeeRSb0WPoQTBuKr4Xt6yb9ZYX623GJEhnijsSENZYiNH8pchySgxVk2qN7d2QI2EnxPEbYcg9XzCbM_llNV2Pk9JROct5X9M8f4pO4tJQk-DIBSw9hyphjyqnv5fIXEgT4A7QFrUk7oFH6w7TbBmm5Er68zroACz4e5k3qU5zD6FYoX2n2r-3MPdkTg3vy3T3wUGKlGIcS7zh8AygAZBiAJMvsfzT_jzvYlaqMGfmcywDo.u4sEpLdDtYtejLHBYlTBZ32ELLjedHiSRl0GfyX6iks&dib_tag=se&keywords=women+jewellery&qid=1716056381&s=jewelry&sprefix=women+%2Cjewelry%2C224&sr=1-7&linkCode=ll1&tag=genaigifts-21&linkId=4f075341f7bc9e052814dabd7f84225a&language=en_IN&ref_=as_li_ss_tl`
    },
    {
        name: `Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)`,
        img: Amazon3,
        price: `₹649`,
        stars: 3.8,
        link: `https://www.amazon.in/Lymio-Cargo-Cotton-Cargos-Cargo-01-04/dp/B0CTQCP2BZ?crid=33PG2ACNJYYWI&dib=eyJ2IjoiMSJ9.kRgEYwRxnS_S6jIfPMaFcKCDA69yXX0c9L-QQH1yHIn2l80RZjd0_E2IX5Ho7bx97DHeM0uv7N2sKko6K9RrwsnZ7Nwa0-YbWgHvmG9F1gukx_Vx6b7kCTJFAet-PvhE4muauIX4Ddz0PY3h4A_L-P_kt7v9YfRhsbCoNwo7UtCp6AAFlf1gcd3oIhz0RR7exzljk6A3eVGHzW5rzOYnep-THbFmvWmVGlNkfhPPcMY-K3idFPNeiVZDeW31SyLJtJvvcshzxF_Uht6AtEGZMr27yfg.C44D1qPrc0iVqqicmsV-N5VxtK0t39ddds2sPxZJ9Kg&dib_tag=se&keywords=men%27s+fashion+clothing&qid=1715633288&refinements=p_n_style_browse-bin%3A19556480031&rnid=19556479031&s=apparel&sprefix=men%27s+fa%2Cfashion%2C220&sr=1-34&linkCode=ll1&tag=genaigifts-21&linkId=6ac24d5f16b57a86f06cf6fdfba69c98&language=en_IN&ref_=as_li_ss_tl`
    },
    {
        name: `Nintendo Switch OLED model With Neon Red & Neon Blue Joy-Con`,
        img: Amazon4,
        price: `₹30,999`,
        stars: 3.9,
        https:'//www.amazon.in/s?k=nintendo+switch&crid=2VGUW8V12XO01&sprefix=nin%2Caps%2C238&ref=nb_sb_ss_ts-doa-p_1_3'
        },
    {
        name: `NIVIA 4981-C PITCH-3.0 Football Studs Shoes For Men(White)`,
        img: Amazon5,
        price: `₹823`,
        stars: 3.4,
        link: `https://www.amazon.in/NIVIA-4981-C-PITCH-3-0-Football-White/dp/B0C27W29P8?crid=4SYAJLOHDQZX&dib=eyJ2IjoiMSJ9.-ZTdmXKibiy6HfpbhF_lMP6_JcprwrWuPbCdeEDgDAH-O7XIdIYeJ2TxKslLE-cIC1cDEK_Y21gONSk28UyN_1gmGFmnOTXKRTpZ-ES6Tx_fTBruK-t5sZo8RgnU5iUys9wSk38fQXZrPLOaYZ7YhXekSxVDCqByRB1Z8zP8lmMkADdu2CEmo-0U56mnGulE9Y6iFgfZZRTQF6NbA6TYXmVHLHzkFX8FO2S8bDCQqCLx-lyFDZx-m9_6tNGt0_6eQm04kbiHrThUMowW31gGzSgLqZimvgrG.2y8I72CnYvLZB3hbHf5T0H5pDNW7hWV9G5n7m-0IfrPKdnSQ&dib_tag=se&keywords=men+shoes&qid=1716015315&s=apparel&sprefix=men%27s+sho%2Cfashion%2C259&sr=1-30&linkCode=ll1&tag=genaigifts-21&linkId=351ce40f3f2036c5b145500b2ea755d6&language=en_IN&ref_=as_li_ss_tl`
    },
    {
        name: `Nerf Elite 2.0 Volt SD-1 Blaster -- 6 Official Nerf Darts, Light Beam, Built-in Dart Storage -- Compatible with Nerf Elite Darts`,
        img: Amazon7,
        price: `₹529`,
        stars: 4.3,
        link: `https://www.amazon.in/Nerf-Elite-2-0-Volt-Blaster/dp/B08SLL5Z3S?crid=2ISDBUWE4UAWG&dib=eyJ2IjoiMSJ9.kA0-0KPyxSg1p7k7CIUQumwSPgNesbZjUom5itqlZGuFoqHqYHdWyZBdDFpC0NkXk-4xwyGuCNqj-l75UN-6VS4Aa8rKoKbbUmyDhwoaDL5H11C-SFffiy_YYmtqcfmn95kUsy6FM7nUE95e3Uz2L4yP0mT_w4KpKZJlR9NFlz-PoxZxlBpd6ZKRLsZQEFgw5M9ZFsAFT-JJCMydAN4MkmRbOXZqxPSSUlqIdVLMnBtzXn-m81Luh9yMoUjDLmAYo-5mPF9mnb8RsJ6G3v2a3HR5ojxPPY1Kg.3RJbZ4wqEoJDf_zMC8vxu3H8ajNyCdAlZjS50-n0PknM&dib_tag=se&keywords=kids+toys&qid=1715897582&refinements=p_89%3ANERF&rnid=3837712031&s=toys&sprefix=kid%2Ctoys%2C195&sr=1-1&linkCode=ll1&tag=genaigifts-21&linkId=7f9f20e5ae9fa154f907206e0d6b88d8&language=en_IN&ref_=as_li_ss_tl`
    }
];

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return (
        <span>
            {text.substring(0, maxLength)}
            <br />
            <span style={{ color: 'orange' }}> ...Read more</span>
        </span>
    );
};

const Slider = () => {
    return (
        <div className="slider-container">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10} // Reduce the gap between cards
                slidesPerView={5}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Automatic sliding
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="slider-item">
                            <div className="slider-image">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="slider-content">
                                <h3 className="slider-title">{truncateText(item.name, 18)}</h3>
                                <p className="slider-price">{item.price}</p>
                                <p>
                                    Rating:
                                    {[...Array(Math.round(item.stars))].map((_, i) => (
                                        <span key={i} className="text-yellow-500">&#9733;</span>
                                    ))}
                                </p>
                                <a href={item.link} className="slider-link">View on Amazon</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
