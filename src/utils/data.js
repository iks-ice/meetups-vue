import { createIdGenerator } from "./index.js";

export const getNavigations = () => {
  const genId = createIdGenerator();
  return [
    {
      id: genId(),
      name: "login",
      title: "Вход",
    },
    {
      id: genId(),
      name: "register",
      title: "Регистрация",
    },
    {
      id: genId(),
      name: "meetup-form",
      title: "Создать митап",
    },
  ];
};

export const getCategories = () => {
  const genId = createIdGenerator();
  return [
    {
      id: genId(),
      value: "all",
      title: "Все",
    },
    {
      id: genId(),
      value: "past",
      title: "Прошедшие",
    },
    {
      id: genId(),
      value: "future",
      title: "Ожидаемые",
    },
  ];
};

export const getLoginForm = () => {
  const genId = createIdGenerator();
  return [
    {
      id: genId(),
      value: "",
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Введите e-mail",
      required: true,
    },
    {
      id: genId(),
      value: "",
      label: "Пароль",
      type: "password",
      name: "password",
      placeholder: "Введите пароль",
      required: true,
    },
  ];
};
export const getRegisterForm = () => {
  const genId = createIdGenerator();
  return [
    {
      id: genId(),
      value: "",
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Введите e-mail",
      required: true,
    },
    {
      id: genId(),
      value: "",
      label: "Имя",
      type: "text",
      name: "fullname",
      placeholder: "Введите имя",
      required: true,
    },
    {
      id: genId(),
      value: "",
      label: "Пароль",
      type: "password",
      name: "password",
      placeholder: "Введите пароль",
      required: true,
    },
    {
      id: genId(),
      value: "",
      label: "Повтор пароля",
      type: "password",
      name: "password",
      placeholder: "Введите пароль еще раз",
      required: true,
    },
    {
      id: genId(),
      value: false,
      label: "Я согласен с условиями",
      type: "checkbox",
      name: "termsAccepted",
      required: true,
    },
  ];
};

export const agendaItemTitles = {
  registration: "Регистрация",
  opening: "Открытие",
  break: "Перерыв",
  coffee: "Coffee Break",
  closing: "Закрытие",
  afterparty: "Afterparty",
  talk: "Доклад",
  other: "Другое",
};

export const agendaItemIcons = {
  registration: "key",
  opening: "cal-sm",
  talk: "tv",
  break: "clock",
  coffee: "coffee",
  closing: "key",
  afterparty: "cal-sm",
  other: "cal-sm",
};

export const formDataFromArray = (arr) =>
  arr.reduce(
    (acc, item) => ({
      ...acc,
      [item.name]: item.value,
    }),
    {}
  );
