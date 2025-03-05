require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const commands = [
    {
        command: 'start',
        description: 'Запуск бота',
    },
    {
        command: 'about',
        description: 'Обо мне',
    },
    {
        command: 'skills',
        description: 'Навыки',
    },
    {
        command: 'projects',
        description: 'Проекты',
    },
    {
        command: 'contacts',
        description: 'Мои контакты',
    },
];

const bot = new TelegramBot(process.env.API_KEY_BOT, {
    polling: {
        interval: 300,
        autoStart: true,
    },
});

bot.on('polling_error', err => console.log(err.data.error.message));

bot.setMyCommands(commands);

bot.on('text', async msg => {
    try {
        if (msg.text === '/start') {
            await bot.sendMessage(msg.chat.id, `Добро пожаловать!`);
            await bot.sendMessage(msg.chat.id, `Для взаимодействия с ботом, воспользуйтесь меню`, {
                reply_markup: {
                    keyboard: [
                        ['Обо мне', 'Навыки'],
                        ['Проекты', 'Контакты'],
                    ],
                    resize_keyboard: true,
                },
            });
            await bot.sendMessage(
                msg.chat.id,
                `Веб-версия портфолио: <a href="https://evgeny-dogonadze.vercel.app">https://evgeny-dogonadze.vercel.app</a>`,
                {
                    parse_mode: 'HTML',
                },
            );
        } else if (msg.text === 'Обо мне' || msg.text === '/about') {
            await bot.sendMessage(
                msg.chat.id,
                `Привет! Меня зовут Евгений, мне 25 лет, и я фронтенд-разработчик.\n\nОкончил Уфимский государственный нефтяной технический университет по программе бакалавриата «Прикладная информатика», профиль «Информационные технологии и компьютерное моделирование».\n\nМоя страсть к созданию удобных и современных интерфейсов помогает мне разрабатывать качественные и интуитивно понятные решения для пользователей. Я постоянно совершенствую свои навыки, слежу за трендами в веб-разработке и стремлюсь к профессиональному росту.\n\n<b>Личные качества</b>\n<b>Ответственность:</b> всегда довожу задачи до конца и соблюдаю дедлайны.\n<b>Внимательность:</b> уделяю внимание деталям, чтобы создавать качественный код и интерфейсы.\n<b>Коммуникабельность:</b> легко нахожу общий язык с командой и клиентами, что помогает эффективно решать задачи.\n\nЕсли вы ищете ответственного и увлеченного фронтенд-разработчика, готового воплотить ваши идеи в жизнь, буду рад сотрудничеству!`,
                {
                    parse_mode: 'HTML',
                },
            );
        } else if (msg.text === 'Навыки' || msg.text === '/skills') {
            await bot.sendMessage(
                msg.chat.id,
                `Я обладаю широким спектром технических навыков, которые позволяют мне создавать современные, интерактивные и адаптивные веб-приложения. Вот что я умею:\n
HTML: Создаю семантически правильную и доступную разметку, что обеспечивает удобство для пользователей и поисковых систем.\n
CSS: Пишу чистый и поддерживаемый код, чтобы создавать стильные и адаптивные интерфейсы.\n
SCSS: Использую препроцессоры для упрощения работы с CSS, что позволяет писать более структурированный и модульный код.\n
JavaScript: Разрабатываю интерактивные и динамические элементы, чтобы оживить веб-страницы и улучшить пользовательский опыт.\n
Vue.js, Nuxt.js: Создаю компонентные и реактивные приложения, используя один из самых популярных фреймворков для фронтенд-разработки.\n
Git: Эффективно работаю с системами контроля версий, чтобы обеспечивать отслеживать изменения в коде.\n
Tailwind CSS: Использую утилитарный CSS-фреймворк для быстрого создания современных и отзывчивых интерфейсов.\n
Bootstrap: Применяю этот популярный фреймворк для ускорения разработки и создания адаптивных дизайнов.\n
Photoshop: Работаю с графикой, подготавливаю макеты и оптимизирую изображения для веб-использования.\n
Vuex, Pinia: Управляю состоянием приложений, обеспечивая предсказуемость и масштабируемость кода.\n
WebSockets: Реализую создаю интерактивные функции в реальном времени, такие как чаты и уведомления.\n
Эти навыки позволяют мне не только разрабатывать качественные продукты, но и постоянно развиваться, осваивая новые технологии и подходы. Я стремлюсь к тому, чтобы каждый проект был не только функциональным, но и эстетически привлекательным.
`,
                {
                    parse_mode: 'HTML',
                },
            );
        } else if (msg.text === '/contacts' || msg.text === 'Контакты') {
            await bot.sendMessage(
                msg.chat.id,
                `E-mail:\n<a href="mailto:dogonadze1999@mail.ru">dogonadze1999@mail.ru</a>\nTelegram:\n<a href="t.me/skullage">t.me/skullage</a>\nGithub:\n<a href="https://github.com/Skullage">https://github.com/Skullage</a>`,
                {
                    parse_mode: 'HTML',
                    disable_web_page_preview: true,
                },
            );
        } else if (msg.text === 'Проекты' || msg.text === '/projects') {
            await bot.sendMessage(
                msg.chat.id,
                `<b>Dart</b>\nСтек: HTML, CSS, JavaScript, Gulp\nКод: <a href="https://github.com/Skullage/Dart">https://github.com/Skullage/Dart</a>\nДемо: <a href="https://skullage.github.io/Dart/">https://skullage.github.io/Dart/</a>`,
                {
                    parse_mode: 'HTML',
                    disable_web_page_preview: true,
                },
            );
            await bot.sendPhoto(
                msg.chat.id,
                `https://evgeny-dogonadze.vercel.app/_vercel/image?url=%2Fimg%2Fportfolio%2Fdart%2Fdart.png&w=1536&q=100`,
            );

            await bot.sendMessage(
                msg.chat.id,
                `<b>Delivery</b>\nСтек: HTML, CSS, JavaScript, Gulp\nКод: <a href="https://github.com/Skullage/Delivery">https://github.com/Skullage/Delivery</a>\nДемо: <a href="https://skullage.github.io/Delivery/">https://skullage.github.io/Delivery/</a>`,
                {
                    parse_mode: 'HTML',
                    disable_web_page_preview: true,
                },
            );
            await bot.sendPhoto(
                msg.chat.id,
                `https://evgeny-dogonadze.vercel.app/_vercel/image?url=%2Fimg%2Fportfolio%2Fdelivery%2Fdelivery.png&w=1536&q=100`,
            );

            await bot.sendMessage(
                msg.chat.id,
                `<b>Le Corte</b>\nСтек: HTML, CSS, JavaScript, Gulp\nКод: <a href="https://github.com/Skullage/LeCorte">https://github.com/Skullage/LeCorte</a>\nДемо: <a href="https://skullage.github.io/LeCorte/">https://skullage.github.io/LeCorte/</a>`,
                {
                    parse_mode: 'HTML',
                    disable_web_page_preview: true,
                },
            );
            await bot.sendPhoto(
                msg.chat.id,
                `https://evgeny-dogonadze.vercel.app/_vercel/image?url=%2Fimg%2Fportfolio%2Flecorte%2Flecorte.png&w=1536&q=100`,
            );

            await bot.sendMessage(
                msg.chat.id,
                `<b>Porten</b>\nСтек: HTML, CSS, JavaScript, Gulp\nКод: <a href="https://github.com/Skullage/Porten">https://github.com/Skullage/Porten</a>\nДемо: <a href="https://skullage.github.io/Porten/">https://skullage.github.io/Porten/</a>`,
                {
                    parse_mode: 'HTML',
                    disable_web_page_preview: true,
                },
            );
            await bot.sendPhoto(
                msg.chat.id,
                `https://evgeny-dogonadze.vercel.app/_vercel/image?url=%2Fimg%2Fportfolio%2Fporten%2Fporten.png&w=1536&q=100`,
            );

            await bot.sendMessage(
                msg.chat.id,
                `<b>Saka</b>\nСтек: HTML, CSS, JavaScript, Gulp\nКод: <a href="https://github.com/Skullage/Saka">https://github.com/Skullage/Saka</a>\nДемо: <a href="https://skullage.github.io/Saka/">https://skullage.github.io/Saka/</a>`,
                {
                    parse_mode: 'HTML',
                    disable_web_page_preview: true,
                },
            );
            await bot.sendPhoto(
                msg.chat.id,
                `https://evgeny-dogonadze.vercel.app/_vercel/image?url=%2Fimg%2Fportfolio%2Fsaka%2Fsaka.png&w=1536&q=100`,
            );

            await bot.sendMessage(
                msg.chat.id,
                `<b>Play Together</b>\nСтек: HTML, CSS, JavaScript, Vue 3, Vuex, Vue router, Tailwind CSS, Socket.io, Node JS, Express, Vite\nКод: <a href="https://github.com/Skullage/hangman">https://github.com/Skullage/hangman</a>\nДемо: <a href="http://play-together.ru/">http://play-together.ru/</a>`,
                {
                    parse_mode: 'HTML',
                    disable_web_page_preview: true,
                },
            );
            await bot.sendPhoto(
                msg.chat.id,
                `https://evgeny-dogonadze.vercel.app/_vercel/image?url=%2Fimg%2Fportfolio%2Fhangman%2F1.png&w=1536&q=100`,
            );

            await bot.sendMessage(
                msg.chat.id,
                `Более подробную информацию о проектах вы можете посмотреть на сайте <a href="https://evgeny-dogonadze.vercel.app/#projects">https://evgeny-dogonadze.vercel.app/#projects</a>`,
                {
                    parse_mode: 'HTML',
                    disable_web_page_preview: true,
                },
            );
        } else {
            await bot.sendMessage(msg.chat.id, 'Неизвестная команда');
        }
    } catch (error) {
        console.log(error);
    }
});
