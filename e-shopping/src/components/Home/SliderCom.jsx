import React from "react";
import Slider from "react-slick";

const SliderCom = () => {
  var settings = {
    //dots: true, alttakı noktallar
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <h1 className="text-6xl font-bold">Günlük Rahatlık İçin Tasarlandı...</h1>
            <p className="text-xl my-4">
              Konfor ve stil bir arada! Günlük kullanım için ideal olan bu ayakkabılar,
              tüm gün rahat etmeniz için tasarlandı. Şıklığı ve rahatlığı bir arada
              keşfedin.
            </p>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center justify-center bg-gray-200">
              Hemen İncele!
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/70fa5f7b-4d5f-4cb1-81bf-3be4c44a4045/W+NIKE+DUNK+LOW+NEXT+NATURE.png"
            alt="Sneaker Ayakkabı"
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <h1 className="text-6xl font-bold"> Sporun Gücünü Hissedin...</h1>
            <p className="text-xl my-4">
              Koşu, antrenman veya günlük aktiviteleriniz için en iyi spor ayakkabı
              seçenekleri burada. Performansınızı artıran teknolojilerle tanışın!
            </p>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center justify-center bg-gray-200">
              Keşfet!
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/150fafa5-6dea-43e1-ae4f-7f523128ccb9/W+DUNK+LOW+NEXT+NATURE.png"
            alt="Spor Ayakkabı"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCom;
