import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.7),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.45)_0%,_rgba(240,240,240,0.15)_100%)] text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-20 bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
          <div>
            <h1 className="text-5xl font-light tracking-tight mb-6">
              Семейный очаг ручной работы, который станет частью вашей истории
            </h1>
            <p className="text-gray-600 mb-8">
              Набор свечей «Живое стекло» — эстетика, которая остается с вами на годы. Стеклянная текстура, сформированная вручную, напоминает природные кристаллы, заключающие в себе мягкое пламя.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#order" target="_blank" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-xl">Заказать комплект</a>
              <a href="#order" target="_blank" className="border px-6 py-3 rounded-xl">Заказать отдельно</a>
              <a href="#order" target="_blank" className="border px-6 py-3 rounded-xl">2 родительские свечи</a>
              <a href="https://vk.com/ip_candles" target="_blank" rel="noopener noreferrer" className="bg-gray-100 px-6 py-3 rounded-xl">Заказать свой аромат</a>
            </div>
          </div>

          <div className="grid gap-4">
            <img src="/images/candle1.jpg" className="rounded-2xl shadow" />
            <img src="/images/candle2.jpg" className="rounded-2xl shadow" />
          </div>
        </section>

        {/* VIDEO */}
        <section className="mb-20 bg-[#f5f1eb] rounded-3xl p-10">
          <h2 className="text-3xl font-light mb-4">Видеообзор набора «Живое стекло»</h2>
          <p className="text-gray-600 mb-6">Созданная вручную из стеклянной крошки и залитая натуральным пальмовым воском, она образует уникальный кристаллический узор на поверхности — словно застывший лед, в котором живёт огонь. Каждая свеча неповторима.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow max-w-sm mx-auto w-full">
              <video className="w-full h-full object-cover" controls playsInline preload="metadata" poster="/images/candle1.jpg">
                <source src="/video/product-video-vertical.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow">
              <video className="w-full h-full object-cover" controls playsInline preload="metadata" poster="/images/candle2.jpg">
                <source src="/video/product-video.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mb-20 bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
          <h2 className="text-3xl font-light mb-8 text-center">Почему выбирают «Живое стекло»</h2>
          <p className="text-center text-gray-600 mb-10">Создано для особенных моментов и красивых воспоминаний</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 border border-[#e8e4de] rounded-2xl">
              <h3 className="font-medium mb-2">Свечи не как у всех</h3>
              <p className="text-gray-600 text-sm">Эксклюзивный дизайн и уникальная текстура crushed glass effect.</p>
            </div>
            <div className="p-6 border border-[#e8e4de] rounded-2xl">
              <h3 className="font-medium mb-2">Безопасная доставка</h3>
              <p className="text-gray-600 text-sm">Многоуровневая упаковка защищает комплект при доставке по всей стране.</p>
            </div>
            <div className="p-6 border border-[#e8e4de] rounded-2xl">
              <h3 className="font-medium mb-2">Семейная традиция</h3>
              <p className="text-gray-600 text-sm">Дополнительный воск и фитиль позволяют использовать очаг снова и снова.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-[#e8e4de] rounded-2xl p-6 text-center">
              <img src="/images/gallery1.jpg" className="rounded-xl mb-4" />
              <h3 className="font-medium">Комплект</h3>
              <p className="text-gray-600 mb-4">от 4800 ₽</p>
              <a href="#order" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-xl inline-block">Заказать</a>
            </div>
            <div className="border border-[#e8e4de] rounded-2xl p-6 text-center">
              <img src="/images/gallery2.jpg" className="rounded-xl mb-4" />
              <h3 className="font-medium">Основная свеча</h3>
              <p className="text-gray-600 mb-4">от 2900 ₽</p>
              <a href="#order" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-xl inline-block">Заказать</a>
            </div>
            <div className="border border-[#e8e4de] rounded-2xl p-6 text-center">
              <img src="/images/candle2.jpg" className="rounded-xl mb-4" />
              <h3 className="font-medium">2 родительские свечи</h3>
              <p className="text-gray-600 mb-4">от 2900 ₽</p>
              <a href="#order" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-xl inline-block">Заказать</a>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">Можно собрать свой набор под ваш формат торжества</p>
        </section>

        <section className="mb-20 bg-[#f8f5f0] rounded-3xl p-10">
          <h2 className="text-3xl font-light mb-8 text-center">Доставка по всей России</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Подберем удобный способ доставки именно для вас: СДЭК, Почта России, Ozon, 5Post и другие сервисы. Также возможна интеграция с Ozon и Яндекс Доставкой.
          </p>
        </section>

        <section className="mb-20 bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
          <h2 className="text-3xl font-light mb-2 text-center">Семейный очаг ручной работы, который станет частью вашей истории</h2>
          <p className="text-center text-gray-600 mb-8">Галерея</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/gallery1.jpg" className="aspect-[3/4] object-cover rounded-2xl" />
            <img src="/images/gallery2.jpg" className="aspect-[3/4] object-cover rounded-2xl" />
            <img src="/images/gallery3.jpg" className="aspect-[3/4] object-cover rounded-2xl" />
            <img src="/images/gallery4.jpg" className="aspect-[3/4] object-cover rounded-2xl" />
          </div>
        </section>

        {/* REVIEWS */}
        <section className="mb-20 bg-[#f8f5f0] rounded-3xl p-10">
          <h2 className="text-3xl font-light mb-8 text-center">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-[#e8e4de] rounded-2xl shadow-sm">
              <p className="text-gray-700 mb-4">«Очень переживала за доставку, но свечи пришли идеально упакованными. Вживую еще красивее, чем на фото.»</p>
              <span className="text-sm text-gray-500">— Алина</span>
            </div>
            <div className="p-6 border border-[#e8e4de] rounded-2xl shadow-sm">
              <p className="text-gray-700 mb-4">«На фото и видео свадебный очаг смотрелся просто роскошно. Гости спрашивали, где заказывали.»</p>
              <span className="text-sm text-gray-500">— Мария</span>
            </div>
            <div className="p-6 border border-[#e8e4de] rounded-2xl shadow-sm">
              <p className="text-gray-700 mb-4">«Очень понравилась идея, что свечу можно использовать повторно на годовщины. Это уже семейная традиция.»</p>
              <span className="text-sm text-gray-500">— Екатерина</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="order" className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60">
          <h2 className="text-3xl font-light mb-4">Оформить заказ</h2>
          <form action="mailto:irenpetkoglo@yandex.ru" method="post" encType="text/plain" className="max-w-xl mx-auto flex flex-col gap-4 text-left">
            <input type="text" placeholder="Ваше имя" className="border border-[#ddd7cf] p-3 rounded-xl bg-white/80" />
            <input type="tel" placeholder="Телефон" className="border border-[#ddd7cf] p-3 rounded-xl bg-white/80" />
            <input type="email" placeholder="E-mail" className="border border-[#ddd7cf] p-3 rounded-xl bg-white/80" />
            <textarea placeholder="Комментарий к заказу" className="border border-[#ddd7cf] p-3 rounded-xl min-h-[120px] bg-white/80" />
            <label className="flex gap-2 text-sm text-gray-600">
              <input type="checkbox" required /> Согласен(а) на обработку персональных данных
            </label>
            <button type="submit" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl">Отправить заявку</button>
            <p className="text-sm text-gray-500">Если вам неудобно оставлять телефон, можете написать напрямую в группе VK.</p>
          </form>
          <div className="flex flex-col items-center gap-4 mt-8">
            <a href="https://vk.com/ip_candles" target="_blank" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl text-lg">Написать в VK</a>
            <a href="https://t.me/irinapetkoglo" target="_blank" className="text-xl opacity-70 hover:opacity-100">✈️</a>
            <a href="mailto:irenpetkoglo@yandex.ru" className="text-gray-600 underline">irenpetkoglo@yandex.ru</a>
          </div>
        </section>

      </div>
    </div>
  )
}

  
            