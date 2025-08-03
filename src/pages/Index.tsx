import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scheduleData = [
    { day: "Понедельник", time: "18:00 - 19:30", type: "Лезгинка начинающие", instructor: "Амина Гаджиева" },
    { day: "Вторник", time: "19:00 - 20:30", type: "Кавказские барабаны", instructor: "Руслан Алиев" },
    { day: "Среда", time: "18:00 - 19:30", type: "Лезгинка продвинутые", instructor: "Амина Гаджиева" },
    { day: "Четверг", time: "17:00 - 18:30", type: "Детская группа", instructor: "Зарема Магомедова" },
    { day: "Пятница", time: "19:00 - 20:30", type: "Барабаны + танцы", instructor: "Руслан Алиев" },
    { day: "Суббота", time: "16:00 - 18:00", type: "Мастер-класс", instructor: "Различные мастера" }
  ];

  const instructors = [
    {
      name: "Амина Гаджиева",
      specialty: "Хореограф лезгинки",
      experience: "15 лет опыта",
      achievements: "Лауреат международных конкурсов"
    },
    {
      name: "Руслан Алиев",
      specialty: "Мастер кавказских барабанов",
      experience: "12 лет опыта", 
      achievements: "Солист ансамбля «Горцы»"
    },
    {
      name: "Зарема Магомедова",
      specialty: "Детский хореограф",
      experience: "8 лет опыта",
      achievements: "Специалист по работе с детьми"
    }
  ];

  const prices = [
    { type: "Разовое занятие", price: "1 500 ₽", description: "Одно занятие любого направления" },
    { type: "Абонемент 8 занятий", price: "9 600 ₽", description: "Действует 1 месяц, любые направления" },
    { type: "Безлимит месяц", price: "12 000 ₽", description: "Неограниченные посещения" },
    { type: "Детский абонемент", price: "7 200 ₽", description: "8 занятий для детей до 14 лет" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🎭</div>
            <span className="text-xl font-bold text-red-600">КАВКАЗАНИ</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-red-600 transition-colors">Главная</a>
            <a href="#directions" className="hover:text-red-600 transition-colors">Направления</a>
            <a href="#schedule" className="hover:text-red-600 transition-colors">Расписание</a>
            <a href="#instructors" className="hover:text-red-600 transition-colors">Преподаватели</a>
            <a href="#prices" className="hover:text-red-600 transition-colors">Цены</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Контакты</a>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Записаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-amber-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-red-100 text-red-800 mb-4">
                Школа танца и музыки в Санкт-Петербурге
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Почувствуй
                <span className="text-red-600 block">энергию Кавказа</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Изучай лезгинку и искусство игры на кавказских барабанах 
                в атмосфере настоящих горских традиций
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                  <Icon name="Users" size={20} className="mr-2" />
                  Записаться на занятие
                </Button>
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 text-lg px-8 py-3">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/img/9f5473a2-a597-4b46-8351-c56a6dc5bfa2.jpg" 
                  alt="Лезгинка танец"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-400 text-amber-900 px-6 py-3 rounded-lg font-semibold shadow-lg">
                15+ лет опыта
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши направления</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Два основных направления кавказской культуры для всех возрастов и уровней подготовки
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💃</div>
                <CardTitle className="text-2xl text-red-600">Лезгинка</CardTitle>
                <CardDescription className="text-lg">
                  Традиционный кавказский танец
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Группы для начинающих и продвинутых</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Мужская и женская техника</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Постановка концертных номеров</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Детские группы с 5 лет</span>
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Подробнее о лезгинке
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🥁</div>
                <CardTitle className="text-2xl text-amber-600">Кавказские барабаны</CardTitle>
                <CardDescription className="text-lg">
                  Дхол, нагара и другие инструменты
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Обучение игре на дхоле</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Традиционные ритмы</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Ансамблевая игра</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Сопровождение танцев</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Подробнее о барабанах
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Расписание занятий</h2>
            <p className="text-xl text-gray-600">
              Удобное время для всех возрастов и уровней
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {scheduleData.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="py-4">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="font-semibold text-gray-900">{item.day}</div>
                      <div className="flex items-center gap-2 text-red-600">
                        <Icon name="Clock" size={16} />
                        {item.time}
                      </div>
                      <div className="font-medium">{item.type}</div>
                      <div className="text-gray-600">{item.instructor}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши преподаватели</h2>
            <p className="text-xl text-gray-600">
              Мастера своего дела с многолетним опытом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="text-red-600 font-medium">
                    {instructor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Award" size={16} />
                      {instructor.experience}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Star" size={16} />
                      {instructor.achievements}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены на обучение</h2>
            <p className="text-xl text-gray-600">
              Доступные тарифы для всех желающих
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {prices.map((price, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg">{price.type}</CardTitle>
                  <div className="text-3xl font-bold text-red-600">{price.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{price.description}</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-xl text-gray-600">
              Результаты наших учеников говорят сами за себя
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Учеников обучили</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600">Лет работы</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Конкурсов выиграно</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Выступлений</div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">
            <img 
              src="/img/a687c715-c5d6-429f-aa75-e46b77479261.jpg" 
              alt="Кавказские барабаны"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Традиционные инструменты</h3>
                <p>Изучаем игру на настоящих кавказских барабанах</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-300">
              Приходите к нам или свяжитесь для записи на занятие
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <Icon name="MapPin" size={24} className="mx-auto mb-4 text-red-400" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">
                Санкт-Петербург<br />
                ул. Кавказская, 15<br />
                м. Площадь Восстания
              </p>
            </div>
            
            <div>
              <Icon name="Phone" size={24} className="mx-auto mb-4 text-red-400" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">
                +7 (812) 123-45-67<br />
                +7 (999) 876-54-32
              </p>
            </div>
            
            <div>
              <Icon name="Mail" size={24} className="mx-auto mb-4 text-red-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">
                info@kavkazani.ru<br />
                dance@kavkazani.ru
              </p>
            </div>
          </div>
          
          <Separator className="my-12 bg-gray-700" />
          
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
            <p className="text-gray-400">
              © 2024 Школа лезгинки и кавказских барабанов "КАВКАЗАНИ". Все права защищены.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}