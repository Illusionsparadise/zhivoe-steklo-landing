import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3efe8] text-gray-900 relative overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.95),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.45),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(220,220,220,0.12)_100%)]" />

        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-white/30 blur-3xl" />
        <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-white/20 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.9)_20%,transparent_40%,rgba(220,220,220,0.6)_60%,transparent_80%)] bg-[length:500px_500px]" />

        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')] mix-blend-overlay" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-16">
        <section className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight">Живое стекло</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Набор свечей «Живое стекло» — эстетика, которая остается с вами на годы.
            Стеклянная текстура, сформированная вручную, напоминает природные кристаллы,
            заключающие в себе мягкое пламя.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <img src="/images/candle1.jpg" className="rounded-3xl object-cover w-full" />
            <img src="/images/candle2.jpg" className="rounded-3xl object-cover w-full" />
          </div>
        </section>

        <section className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 border border-white/40 shadow-[0_10px_40px_rgba(180,180,180,0.18)]">
          <h2 className="text-3xl font-light text-center mb-4">Видеообзор набора «Живое стекло»</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Созданная вручную из стеклянной крошки и залитая натуральным пальмовым воском, она образует уникальный кристаллический узор на поверхности — словно застывший лед, в котором живёт огонь. Каждая свеча неповторима.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            <video
              controls
              playsInline
              className="rounded-2xl w-full shadow-lg"
              src="/video/product-video.mp4"
            />

            <div className="flex justify-center">
              <video
                controls
                playsInline
                className="rounded-2xl w-full max-w-sm shadow-lg"
                src="/video/product-video-vertical.mp4"
              />
            </div>
          </div>
        </section>

        <section className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 border border-white/40 shadow-[0_10px_40px_rgba(180,180,180,0.18)]">
          <h2 className="text-3xl font-light mb-8 text-center">Семейный очаг ручной работы, который станет частью вашей истории</h2>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
              <img src="/images/gallery1.jpg" className="snap-center shrink-0 w-[280px] md:w-[340px] aspect-[3/4] object-cover rounded-3xl shadow-lg" />
              <img src="/images/gallery2.jpg" className="snap-center shrink-0 w-[280px] md:w-[340px] aspect-[3/4] object-cover rounded-3xl shadow-lg" />
              <img src="/images/gallery3.jpg" className="snap-center shrink-0 w-[280px] md:w-[340px] aspect-[3/4] object-cover rounded-3xl shadow-lg" />
              <img src="/images/gallery4.jpg" className="snap-center shrink-0 w-[280px] md:w-[340px] aspect-[3/4] object-cover rounded-3xl shadow-lg" />
              <img src="/images/gallery5.jpg" className="snap-center shrink-0 w-[280px] md:w-[340px] aspect-[3/4] object-cover rounded-3xl shadow-lg" />
              <img src="/images/gallery6.jpg" className="snap-center shrink-0 w-[280px] md:w-[340px] aspect-[3/4] object-cover rounded-3xl shadow-lg" />
            </div>

            <p className="text-center text-sm text-gray-400 mt-4">
              Листайте галерею вправо и влево
            </p>
          </div>
        </section>

        <section className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 border border-white/40 shadow-[0_10px_40px_rgba(180,180,180,0.18)]">
          <h2 className="text-3xl font-light text-center mb-2">Почему выбирают «Живое стекло»</h2>
          <p className="text-center text-gray-500 mb-8">Создано для особенных моментов и красивых воспоминаний</p>

          <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
            <div className="p-6 border border-[#e8e4de] rounded-2xl">
              <h3 className="font-medium mb-3">Свечи не как у всех</h3>
              <p className="text-gray-600 text-sm">Эксклюзивный дизайн и уникальная текстура crushed glass effect.</p>
            </div>

            <div className="p-6 border border-[#e8e4de] rounded-2xl">
              <h3 className="font-medium mb-3">Безопасная доставка</h3>
              <p className="text-gray-600 text-sm">Многоуровневая упаковка защищает комплект при доставке по всей стране.</p>
            </div>

            <div className="p-6 border border-[#e8e4de] rounded-2xl">
              <h3 className="font-medium mb-3">Семейная традиция</h3>
              <p className="text-gray-600 text-sm">Дополнительный воск и фитиль позволяют использовать очаг снова и снова.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e4de]">
              <img src="/images/gallery1.jpg" className="aspect-[3/4] object-cover w-full" />
              <div className="p-5 text-center space-y-3">
                <h3 className="font-medium">Комплект свечей</h3>
                <p className="text-gray-600">от 4800 ₽</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e4de]">
              <img src="/images/gallery2.jpg" className="aspect-[3/4] object-cover w-full" />
              <div className="p-5 text-center space-y-3">
                <h3 className="font-medium">Основная свеча</h3>
                <p className="text-gray-600">от 2900 ₽</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e4de]">
              <img src="/images/gallery3.jpg" className="aspect-[3/4] object-cover w-full" />
              <div className="p-5 text-center space-y-3">
                <h3 className="font-medium">2 родительские свечи</h3>
                <p className="text-gray-600">от 2900 ₽</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mb-8">Можно собрать свой набор под ваш формат торжества.</p>

          <div className="flex justify-center mb-10">
            <a
              href="https://vk.com/ip_candles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl shadow-lg"
            >
              Заказать свой аромат
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 border border-[#e8e4de] rounded-2xl">Уникальная текстура crushed glass effect</div>
            <div className="p-6 border border-[#e8e4de] rounded-2xl">Безопасная многоуровневая упаковка</div>
            <div className="p-6 border border-[#e8e4de] rounded-2xl">Дополнительный воск и фитиль в комплекте</div>
          </div>
        </section>

        <section className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 border border-white/40 shadow-[0_10px_40px_rgba(180,180,180,0.18)]">
          <h2 className="text-3xl font-light text-center mb-6">Доставка</h2>
          <p className="text-center text-gray-600">Подберем удобный способ доставки: СДЭК, Почта России, Ozon, 5Post и другие сервисы по всей России.</p>
        </section>

        <section id="order" className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 border border-white/40 shadow-[0_10px_40px_rgba(180,180,180,0.18)] text-center space-y-6">
          <h2 className="text-3xl font-light">Оформить заказ</h2>
          <p className="text-gray-600">Оставьте заявку или напишите напрямую в VK / Telegram</p>
          <a href="mailto:irenpetkoglo@yandex.ru" className="inline-block bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl">Заказать набор</a>
          <div className="flex justify-center gap-4 text-sm">
            <a href="https://vk.com/ip_candles" target="_blank" rel="noopener noreferrer" className="underline">Написать в VK</a>
            <a href="https://t.me/irinapetkoglo" target="_blank" rel="noopener noreferrer" className="underline">Telegram</a>
            <a href="mailto:irenpetkoglo@yandex.ru" className="underline">irenpetkoglo@yandex.ru</a>
          </div>
        </section>

        <footer className="border-t border-[#e8e4de] pt-10 text-sm text-gray-500 space-y-3">
          <p>Самозанятая: Петкогло Ирина Федоровна</p>
          <p>ИНН: 402806174487</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="underline">Публичная оферта</a>
            <a href="#" className="underline">Политика конфиденциальности</a>
            <a href="#" className="underline">Пользовательское соглашение</a>
            <a href="#" className="underline">Реквизиты продавца</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
