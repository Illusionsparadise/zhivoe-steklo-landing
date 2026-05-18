import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-20 bg-white rounded-3xl p-10 shadow-sm">
          <div>
            <h1 className="text-5xl font-light mb-6">
              Свадебный очаг, который сохраняет момент навсегда
            </h1>
            <p className="text-gray-600 mb-8">
              Набор свечей «Живое стекло» — эстетика, которая выглядит дорого на фото и остается с вами на годы.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#order" className="bg-black text-white px-6 py-3 rounded-xl">Купить комплект</a>
              <a href="#order" className="border px-6 py-3 rounded-xl">Купить отдельно</a>
              <a href="#order" className="bg-gray-100 px-6 py-3 rounded-xl">Свой аромат</a>
            </div>
          </div>

          <div className="grid gap-4">
            <img src="/images/candle1.jpg" className="rounded-2xl shadow" />
            <img src="/images/candle2.jpg" className="rounded-2xl shadow" />
          </div>
        </section>

        {/* VIDEO */}
        <section className="mb-20 bg-[#f5f1eb] rounded-3xl p-10">
          <h2 className="text-3xl font-light mb-4">Посмотрите, как это выглядит вживую</h2>
          <p className="text-gray-600 mb-6">Видео показывает фактуру стекла и эффект при горении</p>

          <div className="aspect-video rounded-2xl overflow-hidden shadow">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/candle1.jpg"
            >
              <source src="/video/product-video.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mb-20 grid md:grid-cols-2 gap-6 bg-white rounded-3xl p-10 shadow-sm">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-medium mb-2">Безопасная доставка</h3>
            <p className="text-gray-600 text-sm">Многоуровневая упаковка — свечи доезжают целыми в любую точку страны</p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-medium mb-2">Можно использовать снова</h3>
            <p className="text-gray-600 text-sm">Дополнительный воск и фитиль — зажигайте очаг на годовщины и праздники</p>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="mb-20 bg-[#f8f5f0] rounded-3xl p-10">
          <h2 className="text-3xl font-light mb-8 text-center">Отзывы невест</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-2xl shadow-sm">
              <p className="text-gray-700 mb-4">«Очень переживала за доставку, но свечи пришли идеально упакованными. Вживую еще красивее, чем на фото.»</p>
              <span className="text-sm text-gray-500">— Алина</span>
            </div>
            <div className="p-6 border rounded-2xl shadow-sm">
              <p className="text-gray-700 mb-4">«На фото и видео свадебный очаг смотрелся просто роскошно. Гости спрашивали, где заказывали.»</p>
              <span className="text-sm text-gray-500">— Мария</span>
            </div>
            <div className="p-6 border rounded-2xl shadow-sm">
              <p className="text-gray-700 mb-4">«Очень понравилась идея, что свечу можно использовать повторно на годовщины. Это уже семейная традиция.»</p>
              <span className="text-sm text-gray-500">— Екатерина</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="order" className="text-center bg-white rounded-3xl p-10 shadow-sm">
          <h2 className="text-3xl font-light mb-4">Оформить заказ</h2>

          <div className="flex flex-col items-center gap-4">
            <a href="https://t.me/irinapetkoglo" className="bg-black text-white px-8 py-4 rounded-2xl">Написать в Telegram</a>
            <a href="https://vk.com/ip_candles" className="border px-8 py-4 rounded-2xl">Группа VK</a>
            <a href="mailto:irenpetkoglo@yandex.ru" className="text-gray-600 underline">irenpetkoglo@yandex.ru</a>
          </div>
        </section>

      </div>
    </div>
  )
}
