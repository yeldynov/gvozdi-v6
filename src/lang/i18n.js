import { I18n } from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const i18n = new I18n({
  en: {
    // Drawer
    tellAFriendText: 'Tell a Friend',
    signOutText: 'Sign Out',
    homeLinkText: 'Practice',
    guideLinkText: 'Guide',
    contactLinkText: 'Contact Developer',
    // SignUp / SignIn Screens
    signUpHeaderText: 'Create an Account ✍️',
    signInHeaderText: 'Sign In 🚪🚶',
    passwordText: 'Password',
    confirmPasswordText: 'Confirm Password',
    signUpBtnText: 'Sign Up',
    signInBtnText: 'Sign In',
    alreadyHaveLinkText: 'Already have an account?',
    signinText: 'Sign In!',
    dontHaveLinkText: "Don't have an account?",
    registerText: ' Sign Up!',
    passwordsDontMatchErrorText: 'Passwords do not match.',
    // SessionList Screen
    historyTitleText: 'The History',
    historyNavigationText: 'History',
    cleanHistoryText: "There are no records yet. Let's stand on nails...",
    loadingText: 'Loading Sessions...',

    // Account Screen
    settingsTitleText: 'Account Settings',
    signOutBtnText: 'Sign Out',
    lightThemeText: 'Light Theme',
    darkThemeText: 'Dark Theme',
    // Session Details Screen
    dateKeyText: 'Date:',
    durationKeyText: 'Duration:',
    feedbackKeyText: 'Feedback:',
    removeRecordBtnText: 'Delete Record',
    confirmModalMessage: 'Are you sure you want to delete this session?',
    confirmModalBtnMessage: 'Delete',
    confirmModalrejectBtnText: 'Cancel',
    confirmModalTitleText: 'Confirmation',
    // StopWatch
    confirmModalPrepareMessage:
      'Relax. Take a deep breath. As you exhale, stand on the nails. For the first few minutes, there may be discomfort in the feet. Take a deep breath and exhale to relax. Soon the pain will pass and the real practice will begin...',
    confirmModalPrepareBtnText: 'Start!',
    confirmModalPrepareTitleText: 'Steady!',
    stopwatchStopButtonText: 'Stop!',
    stopwatchStartButtonText: 'Start!',
    // Feedback Modal
    howDoYouFeelText: 'How do You feel now?',
    howDoYouFeelBtnText: 'Save',
    alertErrorText: 'Data has not been saved.',
    // Statistics
    statisticsTitleText: 'Statistics',
    cleanStatisticsText: "There are no records yet. Let's stand on nails...",
    statisticsTotal: 'Total: ',
    statisticsSessionsForText: ' sessions in ',
    statisticsDaysText: ' days',
    statisticsAllText: 'Total: ',
    statisticsHourText: ' hours ',
    statisticsMinText: ' min ',
    statisticSecText: ' sec ',
    statisticsAveragePerSessionText: 'Average per Session: ',
    statisticsAveragePerDayText: 'Average per Day: ',
    statisticsLastTimeText: 'Last Time: ',
    statisticsTimeText: 'Time: ',
    statisticsDateText: 'Date: ',
    chartTitle: 'Last 7 days',
    chart2Title: 'Accumulated Total',
    // Chart
    chartStatsPerDayText: 'Daily statistics:',
    chartStatsAccumulatedText: 'Accumulated total:',
    // Instruction Screen
    instructionTitleText: 'How to stand on Sadhu Boards',
    step1Text: 'Place the Sadhu Boards on a flat surface.',
    step2Text:
      "Stand with your bare feet on the Boards of the Sadhu. It's best to have someone help you up by holding your hands. You can stand alone, holding on to some kind of support (table, wall).",
    step3Text: 'Relax and tune in for a long stay on the Sadhu Boards.',
    step4Text: 'Look at an arbitrary point in front of you. Concentrate.',
    step5Text: 'Breath rate is arbitrary.',
    step6Text: 'Start slowly.',
    step7Text:
      'Listening to yourself, increase your standing time to 2 minutes.',
    step8Text:
      'You will feel the effect from the first time, but serious changes and the realization of the intention will begin from the second minute of standing.',
    // Contact Page
    contactTitleText: 'Contact Developer',
    contactText1: 'Hello!',
    contactText2:
      "If you have questions, need help or want to share your opinion, we are always in touch. We value your opinion and strive to provide excellent service. Get in touch now, and together we'll make your experience with StepSure even more informed and enjoyable!",
    contactText3: 'Please, take care of yourself',
    contactText4: 'StepSure Team😌',
    telegramButtonText: 'Write in Telegram',
  },
  //
  // УКРАЇНСЬКА МОВА
  //
  uk: {
    // Drawer
    tellAFriendText: 'Поділитися',
    signOutText: 'Вийти',
    homeLinkText: 'Практика',
    guideLinkText: 'Інструкція',
    contactLinkText: 'Залишити відгук',
    // SignUp / SignIn Screens
    signUpHeaderText: 'Створити Акаунт ✍️',
    signInHeaderText: 'Увійти в Акаунт 🚪🚶',
    passwordText: 'Пароль',
    confirmPasswordText: 'Підтвердіть Пароль',
    signUpBtnText: 'Реєстрація',
    signInBtnText: 'Увійти',
    alreadyHaveLinkText: 'Вже є акаунт?',
    signinText: 'Увійти!',
    dontHaveLinkText: 'Немає акаунту?',
    registerText: 'Зареєструйтесь!',
    passwordsDontMatchErrorText: 'Паролі не співпадають.',
    // SessionList Screen
    historyTitleText: 'Історія Цвяхостоянь',
    historyNavigationText: 'Історія',
    cleanHistoryText: 'Поки що записів немає. Давайте встанемо на цвяхи...',
    loadingText: 'Завантаження даних...',
    // Account Screen
    settingsTitleText: 'Налаштування Акаунту',
    signOutBtnText: 'Змінити Користувача',
    lightThemeText: 'Світла Тема',
    darkThemeText: 'Темна Тема',
    // Session Details Screen
    dateKeyText: 'Дата:',
    durationKeyText: 'Тривалість:',
    feedbackKeyText: 'Відгук:',
    removeRecordBtnText: 'Видалити Сесію',
    confirmModalMessage: 'Ви впевнені, що хочете видалити цю сесію?',
    confirmModalBtnMessage: 'Видалити',
    confirmModalrejectBtnText: 'Назад',
    confirmModalTitleText: 'Підтвердження',
    // StopWatch
    confirmModalPrepareMessage:
      'Розслабтеся. Глибоко вдихніть. На видиху, встаньте на цвяхи. Перші кілька хвилин можуть бути неприємні відчуття у ступнях. Глибоко вдихайте і видихайте, щоб відволіктися. Незабаром біль пройде і почнеться справжня практика...',
    confirmModalPrepareBtnText: 'Старт!',
    confirmModalPrepareTitleText: 'Приготуйтесь!',
    stopwatchStopButtonText: 'Стоп!',
    stopwatchStartButtonText: 'Почати!',
    // Feedback Modal
    howDoYouFeelText: 'Як Ви себе почуваєте?',
    howDoYouFeelBtnText: 'Зберегти',
    alertErrorText: 'Дані не були збережені.',
    // Statistics
    statisticsTitleText: 'Статистика',
    cleanStatisticsText: 'Поки що записів немає. Давайте встанемо на цвяхи...',
    statisticsTotal: 'Разом: ',
    statisticsSessionsForText: ' сесій за ',
    statisticsDaysText: ' днів',
    statisticsAllText: 'Усього: ',
    statisticsHourText: ' год ',
    statisticsMinText: ' хв ',
    statisticSecText: ' сек ',
    statisticsAveragePerSessionText: 'В середньому на сессию: ',
    statisticsAveragePerDayText: 'В середньому на день: ',
    statisticsLastTimeText: 'Останній раз: ',
    statisticsTimeText: 'Час: ',
    statisticsDateText: 'Дата: ',
    chartTitle: 'Останні 7 днів',
    chart2Title: 'Накопичений Підсумок',
    // Chart
    chartStatsPerDayText: 'Поденна Статистика:',
    chartStatsAccumulatedText: 'Накопичений підсумок:',
    // Instruction Screen
    instructionTitleText: 'Як стояти на Дошках Садху',
    step1Text: 'Поставте Дошки Садху на рівну поверню.',
    step2Text:
      'Босими ступнями встаньте на Дошки Садху. Краще, якщо хтось допоможе вам підвестися, тримаючи за руки. Можна встати і одному, тримаючись за якусь опору (стіл, стіна).',
    step3Text:
      'Розслабтеся та налаштуйтеся на довге перебування на Дошках Садху.',
    step4Text:
      'Поглядом зафіксуйте довільну точку перед собою. Сконцентруйтеся.',
    step5Text: 'Темп дихання довільний.',
    step6Text: 'Починати треба поступово.',
    step7Text: 'Прислухаючись до себе, доведіть час стояння до 2 хвилин.',
    step8Text:
      'Ефект Ви зможете відчути з першого разу, а от серйозні зміни та реалізація наміру розпочнуться з другої хвилини стояння.',
    // Contact Page
    contactTitleText: "Зв'язок з Розробником",
    contactText1: 'Привіт!',
    contactText2:
      " Якщо ти маєш запитання, потрібна допомога чи ти хочеш поділитися своєю думкою, ми завжди на зв'язку. Ми цінуємо твою думку та прагнемо забезпечити чудове обслуговування. Звертайся прямо зараз, і разом ми зробимо твій досвід із StepSure ще більш усвідомленим та приємним!",
    contactText3: 'Будь уважний і дбай про себе,',
    contactText4: 'Команда StepSure😌',
    telegramButtonText: 'Написати в Телеграм',
  },
  //
  // РУССКИЙ ЯЗЫК
  //
  ru: {
    // Drawer
    tellAFriendText: 'Поделиться',
    signOutText: 'Выйти',
    homeLinkText: 'Практика',
    guideLinkText: 'Инструкция',
    contactLinkText: 'Оставить отзыв',
    // SignUp / SignIn Screens
    signUpHeaderText: 'Создать Аккаунт ✍️',
    signInHeaderText: 'Войти в Аккаунт 🚪🚶',
    passwordText: 'Пароль',
    confirmPasswordText: 'Подтвердите Пароль',
    signUpBtnText: 'Регистрация',
    signInBtnText: 'Войти',
    alreadyHaveLinkText: 'Уже есть аккаунт?',
    signinText: 'Войти.',
    dontHaveLinkText: 'Нет аккаунта?',
    registerText: 'Зарегистрируйтесь!',
    passwordsDontMatchErrorText: 'Пароли не совпадают.',
    // SessionList Screen
    historyTitleText: 'История гвоздестояний',
    historyNavigationText: 'История',
    cleanHistoryText: 'Пока что записей нет. Давайте встанем на гвозди...',
    loadingText: 'Загрузка данных...',
    // Account Screen
    settingsTitleText: 'Настройки Аккаунта',
    signOutBtnText: 'Сменить Пользователя',
    lightThemeText: 'Светлая Тема',
    darkThemeText: 'Темная Тема',
    // Session Details Screen
    dateKeyText: 'Дата:',
    durationKeyText: 'Длительность:',
    feedbackKeyText: 'Отзыв:',
    removeRecordBtnText: 'Удалить Сессию',
    confirmModalMessage: 'Вы уверены, что хотите удалить эту сессию?',
    confirmModalBtnMessage: 'Удалить',
    confirmModalrejectBtnText: 'Отмена',
    confirmModalTitleText: 'Подтверждение',
    // StopWatch
    confirmModalPrepareMessage:
      'Расслабтесь. Глубоко вдохните. На выдохе, встаньте на гвозди. Первые несколько минут могут быть неприятные ощущения в ступнях. Глубоко вдыхайте и выдыхайте, чтобы отвлечься. Скоро боль пройдет и начнется настоящая практика...',
    confirmModalPrepareBtnText: 'Старт!',
    confirmModalPrepareTitleText: 'Приготовьтесь!',
    stopwatchStopButtonText: 'Стоп!',
    stopwatchStartButtonText: 'Начать!',
    // Feedback Modal
    howDoYouFeelText: 'Как вы себя чувствуете?',
    howDoYouFeelBtnText: 'Сохранить',
    alertErrorText: 'Данные не были сохранены.',
    // Statistics
    statisticsTitleText: 'Статистика',
    cleanStatisticsText: 'Пока что записей нет. Давайте встанем на гвозди...',
    statisticsTotal: 'Итого: ',
    statisticsSessionsForText: ' сессий за ',
    statisticsDaysText: ' дней',
    statisticsAllText: 'Всего: ',
    statisticsHourText: ' час ',
    statisticsMinText: ' мин ',
    statisticSecText: ' сек ',
    statisticsAveragePerSessionText: 'Средне на сессию: ',
    statisticsAveragePerDayText: 'Средне в день: ',
    statisticsLastTimeText: 'Последний раз: ',
    statisticsTimeText: 'Время: ',
    statisticsDateText: 'Дата: ',
    chartTitle: 'Последние 7 дней',
    chart2Title: 'Накопленный Итог',
    // Chart
    chartStatsPerDayText: 'Статистика по дням:',
    chartStatsAccumulatedText: 'Накопленный итог:',
    // Instruction Screen
    instructionTitleText: 'Как стоять на Досках Садху',
    step1Text: 'Поставьте Доски Садху на ровную поверхность.',
    step2Text:
      'Босыми ступнями встаньте на Доски Садху. Лучше, если кто-нибудь поможет вам встать, держа за руки. Можно встать и одному, держась за какую-то опору (стол, стена).',
    step3Text:
      'Расслабьтесь и настройтесь на длительное пребывание на Досках Садху.',
    step4Text:
      'Взглядом зафиксируйте произвольную точку перед собой. Сконцентрируйтесь.',
    step5Text: 'Темп дыхания произвольный.',
    step6Text: 'Начинать нужно постепенно.',
    step7Text: 'Прислушиваясь к себе, доведите время стояния до 2 минут.',
    step8Text:
      'Эффект Вы почувствуете с первого раза, а вот серьезные изменения и реализация намерения начнутся со второй минуты стояния.',

    // Contact Page
    contactTitleText: 'Связь с Разработчиком',
    contactText1: 'Привет!',
    contactText2:
      ' Если у тебя есть вопросы, нужна помощь или ты хочешь поделиться своим мнением, мы всегда на связи. Мы ценим твое мнение и стремимся обеспечить превосходное обслуживание. Обращайся прямо сейчас, и вместе мы сделаем твой опыт с StepSure еще более осознанным и приятным!',
    contactText3: 'Будь внимателен и заботься о себе,',
    contactText4: 'Команда StepSure😌',
    telegramButtonText: 'Написать в Телеграм',
  },
});

i18n.defaultLocale = 'uk';
i18n.locale = 'uk';

const loadLanguagePreference = async () => {
  try {
    const language = await AsyncStorage.getItem('language');
    if (language) i18n.locale = language;
  } catch (error) {
    console.error('Error loading language preference:', error);
  }
};

loadLanguagePreference();

export const switchLanguage = async (language, setLang) => {
  try {
    await AsyncStorage.setItem('language', language);
    const langu = await AsyncStorage.getItem('language');
    i18n.locale = langu;
    setLang(langu);
  } catch (error) {
    console.error('Error saving language preference', error);
  }
};

export default i18n;
