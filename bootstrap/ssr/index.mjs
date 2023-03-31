import * as jsxRuntime from "react/jsx-runtime";
import { forwardRef, useRef, useEffect, createContext, useState, useContext, Fragment as Fragment$1, Component, useCallback } from "react";
import { Link as Link$1, useForm, Head, usePage, createInertiaApp } from "@inertiajs/react";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Transition, Dialog } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";
import Slider from "react-slick";
import { useForm as useForm$1, InertiaLink, usePage as usePage$1 } from "@inertiajs/inertia-react";
import { Link as Link$2, animateScroll } from "react-scroll";
import { createRoot } from "react-dom/client";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
function getBodyMassIndex(massIndex) {
  let description = "";
  if (massIndex < 16) {
    description = "Дефицит массы тела (истощение)";
  }
  if (massIndex >= 16 && massIndex < 18.5) {
    description = "Недостаточная масса тела (дефицит)";
  }
  if (massIndex >= 18.5 && massIndex < 25) {
    description = "Норма";
  }
  if (massIndex >= 25 && massIndex < 30) {
    description = "Избыточная масса тела (предожирение)";
  }
  if (massIndex >= 30 && massIndex < 35) {
    description = "Ожирение первой степени";
  }
  if (massIndex >= 35 && massIndex < 40) {
    description = "Ожирение второй степени";
  }
  if (massIndex >= 40) {
    description = "Ожирение третьей степени (морбидное)";
  }
  return description;
}
const account = "";
function Advice({ profile }) {
  let bodyMassIndexDescription = getBodyMassIndex(profile.mass_index);
  console.log(profile);
  return /* @__PURE__ */ jsxs("div", { className: "account", children: [
    /* @__PURE__ */ jsxs("main", { className: "account__box advice__wrap", children: [
      /* @__PURE__ */ jsx("h1", { className: "advice__heading", children: "Рекомендации" }),
      /* @__PURE__ */ jsxs("div", { className: "advice", children: [
        /* @__PURE__ */ jsx("h3", { children: "Норма калорий" }),
        /* @__PURE__ */ jsx("p", { className: "advice__text", children: "Ваша суточная норма килокалорий" }),
        /* @__PURE__ */ jsx("h4", { children: profile.caloric_norm })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "advice", children: [
        /* @__PURE__ */ jsx("h3", { children: "Белки" }),
        /* @__PURE__ */ jsx("p", { className: "advice__text", children: "Рекомендуемое количество белка в граммах" }),
        /* @__PURE__ */ jsxs("p", { className: "advice__result", children: [
          " от  ",
          /* @__PURE__ */ jsx("span", { children: profile.proteins_min }),
          "   до  ",
          /* @__PURE__ */ jsx("span", { children: profile.proteins_max })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "advice", children: [
        /* @__PURE__ */ jsx("h3", { children: "Жиры" }),
        /* @__PURE__ */ jsx("p", { className: "advice__text", children: "Рекомендуемое количество жиров в граммах" }),
        /* @__PURE__ */ jsxs("p", { className: "advice__result", children: [
          " от  ",
          /* @__PURE__ */ jsx("span", { children: profile.fats_min }),
          "   до  ",
          /* @__PURE__ */ jsx("span", { children: profile.fats_max })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "advice", children: [
        /* @__PURE__ */ jsx("h3", { children: "Углеводы" }),
        /* @__PURE__ */ jsx("p", { className: "advice__text", children: "Рекомендуемое количество углеводов в граммах" }),
        /* @__PURE__ */ jsxs("p", { className: "advice__result", children: [
          " от  ",
          /* @__PURE__ */ jsx("span", { children: profile.carbohydrates_min }),
          "   до  ",
          /* @__PURE__ */ jsx("span", { children: profile.carbohydrates_max })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "advice", children: [
        /* @__PURE__ */ jsx("h3", { children: "Индекс массы тела" }),
        /* @__PURE__ */ jsx("p", { className: "advice__text", children: "ИМТ – величина, позволяющая оценить степень соответствия массы человека и его роста и тем самым косвенно оценить, является ли масса недостаточной, нормальной или избыточной. Данный параметр не подходит для оценки спортсменов ввиду развитой мускулатуры и как следствие высокого ИМТ." }),
        /* @__PURE__ */ jsxs("p", { className: "advice__result", children: [
          /* @__PURE__ */ jsx("span", { children: profile.mass_index }),
          "   - ",
          bodyMassIndexDescription
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "account__menu", children: /* @__PURE__ */ jsx("nuv", { children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/account", children: "Мой профиль" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/advice", children: "Мои рекомендации" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Меню на неделю" }) })
    ] }) }) })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Advice
}, Symbol.toStringTag, { value: "Module" }));
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...props,
      width: "50px",
      height: "50px",
      viewBox: "0 0 128 128",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "iconify iconify--noto",
      preserveAspectRatio: "xMidYMid meet",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M55.88 32.41S17.4 43.11 14.4 47.24S6.23 59.02 5.76 75.4c-.38 13.14 6.95 46.93 42.98 48.05c36.79 1.15 50.49-23.09 57.06-38.1c5.92-13.54 5.82-29.09 9.57-36.23s7.13-13.33 6.95-21.4s-3.19-15.02-8.45-18.4c-5.26-3.38-9.76-2.82-12.01-3.38S55.88 32.41 55.88 32.41z",
            fill: "#757e40"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M62.63 18.9c-15.96 6.57-37.17 12.76-47.3 27.03c-9.15 12.88-12.2 28.9.19 47.67c11.31 17.14 41.46 24.45 64.01 8.26c20.65-14.83 22.52-36.6 28.72-51.06s19.24-33.46 3.57-42.8c-16.71-9.94-36.58 5.71-49.19 10.9z",
            fill: "#afb42a"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M108.25 12.14c-7.59-4.38-17.27-2.44-27.97 2.82s-18.96 9.2-22.71 10.51C53.81 26.78 21.87 38.48 15.71 54c-5.07 12.76-3.75 29.47 9.57 41.67s46.93 11.45 59.88-6.95s13.51-33.22 16.33-39.79s8.96-16.19 10.7-21.4c2.06-6.19.94-12.57-3.94-15.39z",
            fill: "#fff69d"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M71.45 47.8c-6.01-7.13-28.91-4.88-36.79 6.38s-4.6 20.41-.75 25.34C38.6 85.53 51.37 90.97 63 82.9s15.04-27.28 8.45-35.1z",
            fill: "#855c52"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M47.32 60.62c-2.96 4.34-1.48 11.34-6.57 11.67s-8.05-7.84-4.44-14.68c3.9-7.38 13.14-10.67 15.77-7.17c2.64 3.51-1.95 6.06-4.76 10.18z",
            fill: "#d67659"
          }
        )
      ]
    }
  );
}
const vk$1 = "/build/assets/icons-vk-1ddf1da9.png";
const yt = "/build/assets/icons-youtube-a2cec731.png";
const tg = "/build/assets/icons-telegram-21c7ff98.png";
const FooterList$1 = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "section section_footer", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "footer", children: [
    /* @__PURE__ */ jsxs("ul", { className: "footer_menu", children: [
      /* @__PURE__ */ jsx("li", { className: "footer_menu_item", children: /* @__PURE__ */ jsx(Link, { className: "footer_menu_color", to: "/", children: "Главная" }) }),
      /* @__PURE__ */ jsx("li", { className: "footer_menu_item", children: /* @__PURE__ */ jsx(Link, { className: "footer_menu_color", to: "/builder", children: "Конструктор меню" }) }),
      /* @__PURE__ */ jsx("li", { className: "footer_menu_item", children: /* @__PURE__ */ jsx(Link, { className: "footer_menu_color", to: "/recipes", children: "Рецепты" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer_contacts", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer_contacts_item", children: [
        /* @__PURE__ */ jsx("a", { href: "#", target: "_blank", children: /* @__PURE__ */ jsx("img", { className: "footer_menu_icons", src: vk$1 }) }),
        " ",
        /* @__PURE__ */ jsx("a", { href: "#", target: "_blank", children: /* @__PURE__ */ jsx("img", { className: "footer_menu_icons", src: yt }) }),
        " ",
        /* @__PURE__ */ jsx("a", { href: "#", target: "_blank", children: /* @__PURE__ */ jsx("img", { className: "footer_menu_icons", src: tg }) }),
        " "
      ] }),
      /* @__PURE__ */ jsx("div", { className: "footer_contacts_item", children: /* @__PURE__ */ jsx("a", { className: "footer_menu_color", href: "#", target: "_blank", children: "admin@avocado.pro" }) }),
      /* @__PURE__ */ jsx("div", { className: "footer_contacts_item", children: /* @__PURE__ */ jsx("a", { className: "footer_menu_color", href: "#", children: "Политика конфиденциальности" }) })
    ] })
  ] }) }) }) });
};
function Guest({ header: header2, children, footer: footer2 }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Link$1, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-20 h-20 fill-current text-gray-500" }) }),
      /* @__PURE__ */ jsxs("div", { className: " space-x-8 sm:-my-px sm:ml-10 sm:flex", children: [
        /* @__PURE__ */ jsx(Link$1, { href: "/home", className: "w-20 h-20 fill-current text-red-400 ", children: '"Home"' }),
        /* @__PURE__ */ jsx(Link$1, { href: "/about", className: "w-20 h-20 fill-current text-yellow-500  ", children: '"О нас"' }),
        /* @__PURE__ */ jsx(Link$1, { href: "/contact", className: "w-20 h-20 fill-current text-green-500  ", children: '"Контакты"' })
      ] })
    ] }),
    header2 && /* @__PURE__ */ jsx("header", { className: "bg-grey-100 shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header2 }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-green-500 shadow-md overflow-hidden sm:rounded-lg", children }),
    footer2 && (/* @__PURE__ */ jsx("footer", { className: "bg-grey-100 shadow", children: /* @__PURE__ */ jsx("div", { className: "mr-2 flex items-center sm:hidden max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: footer2 }) }) && /* @__PURE__ */ jsx("footer", { className: "flex justify-between h-16", children: /* @__PURE__ */ jsx(FooterList$1, {}) }))
  ] });
}
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-900 " + className, children: message }) : null;
}
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 ` + className, children: value ? value : children });
}
function PrimaryButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-green-800 border border-transparent  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 focus:border ring-green-500 focus:green-500  shadow-sm " + className,
      ref: input
    }
  ) });
});
function ConfirmPassword$1() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Это защищенная область приложения. Пожалуйста, подтвердите свой пароль, прежде чем продолжить." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: handleOnChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Подтвердить" }) })
    ] })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword$1
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword$1({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Забыли свой пароль? Без проблем. Просто сообщите нам свой адрес электронной почты, и мы вышлем вам по электронной почте ссылку для сброса пароля, которая позволит вам выбрать новый." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: onHandleChange
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Ссылка для сброса пароля электронной почты" }) })
    ] })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword$1
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: " border-gray-300 text-green-600 shadow-sm focus:ring-green-500 " + className
    }
  );
}
function Login$1({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: handleOnChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: handleOnChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Checkbox, { name: "remember", value: data.remember, onChange: handleOnChange }),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600", children: "Запомнить меня" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link$1,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700",
            children: "Забыли свой пароль?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Залогиниться!" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login$1
}, Symbol.toStringTag, { value: "Module" }));
function Register$1() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Имя" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Подтверждение пароля" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Link$1,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Уже зарегистрированы?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Зарегистрироваться" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register$1
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword$1({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Подтвердите пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Reset Password" }) })
    ] })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword$1
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail$1({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Спасибо, что зарегистрировались! Прежде чем приступить, не могли бы вы подтвердить свой адрес электронной почты, перейдя по ссылке, которую мы только что отправили вам по электронной почте? Если вы не получили электронное письмо, мы с радостью отправим вам другое." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: "Новая ссылка для подтверждения была отправлена на адрес электронной почты, который вы указали при регистрации." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link$1,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gren-700",
          children: "Выйти"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail$1
}, Symbol.toStringTag, { value: "Module" }));
const App$1 = "";
const img1 = "/build/assets/2-5a9cf8d3.jpg";
function Category() {
  const recipes = [
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" }
  ];
  const img = img1;
  return /* @__PURE__ */ jsxs("div", { className: "recipeListMain", children: [
    /* @__PURE__ */ jsx("h2", { children: "Категория" }),
    /* @__PURE__ */ jsxs("div", { className: "container recipes_main", children: [
      /* @__PURE__ */ jsx("div", { className: "recipeList", children: recipes.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "product-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "product-item", children: [
          /* @__PURE__ */ jsx("div", { className: "product-buttons", children: /* @__PURE__ */ jsx("a", { href: "", className: "button", children: "Перейти" }) }),
          /* @__PURE__ */ jsx("img", { src: img, alt: "atata" })
        ] }, item.title),
        /* @__PURE__ */ jsxs("div", { className: "product-title", children: [
          /* @__PURE__ */ jsx("a", { href: "", children: item.title }),
          /* @__PURE__ */ jsx("span", { className: "product-price", children: item.nutrition })
        ] })
      ] })) }),
      /* @__PURE__ */ jsxs("nav", { className: "navigation", children: [
        /* @__PURE__ */ jsxs("ul", { children: [
          " ",
          /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " Список по категориям " }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "/category", children: "Завтрак" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "/category", children: "Обед" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "/category", children: "Перекус" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "/category", children: "Ужин" }) })
        ] }),
        /* @__PURE__ */ jsxs("ul", { children: [
          " ",
          /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " menu-list " }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) })
        ] }),
        /* @__PURE__ */ jsxs("ul", { children: [
          " ",
          /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " menu-list " }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) })
        ] })
      ] })
    ] })
  ] });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Category
}, Symbol.toStringTag, { value: "Module" }));
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2  shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: ` ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link$1,
    {
      ...props,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
const header = "";
const footer = "";
const logo = "/build/assets/2023-03-16_17-05-10ede1c1.png";
const instagram = "/build/assets/instagram-f-svgrepo-com-bb0dc06b.svg";
const telegram = "/build/assets/telegram-fill-svgrepo-com-bc02e72d.svg";
const youtube = "/build/assets/youtube-round-svgrepo-com-7f238d43.svg";
const vk = "/build/assets/vk-with-circle-svgrepo-com-d2fa5db9.svg";
function Layout$2({ children }) {
  return /* @__PURE__ */ jsxs("main", { className: "main", children: [
    /* @__PURE__ */ jsx(MenuList, {}),
    /* @__PURE__ */ jsx("main", { className: "container", children: /* @__PURE__ */ jsx("article", { children }) }),
    /* @__PURE__ */ jsx(FooterList, {})
  ] });
}
const MenuList = (props) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "section1 section_grey1", children: /* @__PURE__ */ jsxs("div", { className: "container1 wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "inner", children: [
      /* @__PURE__ */ jsxs("div", { id: "up", children: [
        /* @__PURE__ */ jsx("img", { className: "logo", src: logo }),
        /* @__PURE__ */ jsx("p", { className: "logo__text", children: "AVOCADO" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "social__wrap", children: [
        /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: telegram, className: "social" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: instagram, className: "social" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: youtube, className: "social" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: vk, className: "social" }) }),
        /* @__PURE__ */ jsx("a", { href: "/account", className: "account__logo", children: "Личный кабинет" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "main_menu1", children: /* @__PURE__ */ jsxs("ul", { className: "main_menu_items1", style: { justifyContent: "flex-start" }, children: [
      /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx("a", { href: "/", children: "Главная" }) }),
      /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx("a", { href: "/menu/builder/1", children: "Конструктор меню" }) }),
      /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx("a", { href: "/form", children: "Калькулятор БЖУ" }) }),
      /* @__PURE__ */ jsx("li", { className: "main_menu_item1", children: /* @__PURE__ */ jsx("a", { href: "/recipes", children: "Рецепты" }) })
    ] }) })
  ] }) }) });
};
const FooterList = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "section2", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "footer2", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer__top", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer__box text", children: [
        /* @__PURE__ */ jsx("h3", { children: "AVOCADO" }),
        /* @__PURE__ */ jsx("p", { children: "Советы, которые работают. Рецепты, которые вы хотите приготовить. Рекомендации, которым вы доверяете." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "footer__box", children: /* @__PURE__ */ jsxs("ul", { className: "footer_menu2", children: [
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link$1, { href: "/", children: "Главная" }) }),
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link$1, { href: "/menu/builder", children: "Конструктор меню" }) }),
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link$1, { href: "/recipes", children: "Рецепты" }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "footer__box", children: [
        /* @__PURE__ */ jsx("h4", { children: "Контакты" }),
        /* @__PURE__ */ jsx("p", { children: "✉ avocado@mail.ru" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer__bottom", children: [
      /* @__PURE__ */ jsx("p", { children: "2023 © Конструктор питания Avocado" }),
      /* @__PURE__ */ jsx("div", { className: "anchor", children: /* @__PURE__ */ jsx("a", { href: "#up", children: "^" }) })
    ] })
  ] }) }) }) });
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout$2
}, Symbol.toStringTag, { value: "Module" }));
function Authenticated({ auth, header: header2, children, footer: footer2 }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsx("nav", { className: "bg-white border-b border-gray-100", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
      /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium  text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
          children: [
            auth.user.name,
            /* @__PURE__ */ jsx("svg", { className: "ml-2 -mr-0.5 h-4 w-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
        /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Профиль" }),
        /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Выйти" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(Layout$2, { children: [
      "   ",
      /* @__PURE__ */ jsx("header", { children: header2 }),
      /* @__PURE__ */ jsx("main", { children }),
      footer2
    ] })
  ] });
}
function Dashboard(props) {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      auth: props.auth,
      errors: props.errors,
      header: /* @__PURE__ */ jsxs("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: [
        "Страница Авторизованного пользователя:  ",
        auth.user.name,
        "!"
      ] }),
      footer: /* @__PURE__ */ jsxs("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: [
        "footer пользователя:  ",
        auth.user.name,
        "!"
      ] }),
      children: [
        /* @__PURE__ */ jsxs("main", { children: [
          /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
          /* @__PURE__ */ jsxs("div", { className: "scroll-py-11", children: [
            /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm ", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900", children: [
              "Привет:  ",
              auth.user.name,
              "!"
            ] }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm ", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900", children: [
              "Привет user ",
              auth.user.name,
              " твой  id: № ",
              auth.user.id,
              "!"
            ] }) }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("footer", { className: "font-semibold text-xl text-gray-500 leading-tight" })
      ]
    }
  );
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const form = "";
function getStorageValue(key, defaultValue) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : defaultValue;
  }
}
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
const female = "/build/assets/9517cc177b7e3dd42d02c9c8c63af3f5-6f9441e5.jpg";
const male = "/build/assets/1c8bfd7f0bf260a5d131f9ed96f2475e-3af13a3a.jpg";
const quotientLow = "/build/assets/1-95e3f09d.jpg";
const quotientSmall = "/build/assets/2-3aa8ca11.jpg";
const quotientMiddle = "/build/assets/3-764491fa.jpg";
const quotientHigh = "/build/assets/4-f42e9977.jpg";
const quotientHighest = "/build/assets/5-3fdd4b9d.jpg";
const weightLose = "/build/assets/6-1104a0aa.jpg";
const weightSave = "/build/assets/7-99956ce6.png";
const weightAdd = "/build/assets/8-fe062bb3.jpg";
function Form() {
  const [gender, setGender] = useLocalStorage("gender", "");
  const [weight, setWeight] = useLocalStorage("weight", "");
  const [height, setHeight] = useLocalStorage("height", "");
  const [age, setAge] = useLocalStorage("age", "");
  const [quotient, setQuotient] = useLocalStorage("quotient", 0);
  const [target, setTarget] = useLocalStorage("target", 0);
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const values = {
      "gender": gender,
      "weight": weight,
      "height": height,
      "age": age,
      "quotient": quotient,
      "target": target
    };
    Inertia.post("/form", values);
  }
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === "step1") {
      setStep1(false);
      setStep2(true);
    }
    if (e.target.id === "step2") {
      setStep2(false);
      setStep3(true);
    }
    if (e.target.id === "step3") {
      setStep3(false);
      setStep4(true);
    }
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "box", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("h1", { className: "box__heading", children: "Калькулятор БЖУ" }),
    step1 && /* @__PURE__ */ jsxs("div", { className: "form", children: [
      /* @__PURE__ */ jsx("h4", { children: "Выберите ваш пол:" }),
      /* @__PURE__ */ jsxs("div", { className: "gender", children: [
        /* @__PURE__ */ jsx("div", { className: "gender__item", children: /* @__PURE__ */ jsxs("label", { className: "gender__label", htmlFor: "female", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "female",
              type: "radio",
              name: "gender",
              checked: gender === "female",
              onChange: (e) => setGender("female")
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "gender__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "gender__img", src: female, alt: "female" }),
            /* @__PURE__ */ jsx("span", { className: "gender__name", children: "Женский" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "gender__item", children: /* @__PURE__ */ jsxs("label", { className: "gender__label", htmlFor: "male", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "male",
              type: "radio",
              name: "gender",
              checked: gender === "male",
              onChange: (e) => setGender("male")
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "gender__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "gender__img", src: male, alt: "male" }),
            /* @__PURE__ */ jsx("span", { className: "gender__name", children: "Мужской" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("button", { id: "step1", className: "form__btn", onClick: handleClick, children: "Продолжить" })
    ] }),
    step2 && /* @__PURE__ */ jsxs("div", { className: "form", children: [
      /* @__PURE__ */ jsx("h4", { children: "Выберите уровень ежедневной активности:" }),
      /* @__PURE__ */ jsxs("div", { className: "action", children: [
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientLow", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientLow",
              type: "radio",
              name: "quotient",
              checked: quotient === 1.2,
              onChange: (e) => setQuotient(1.2)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientLow, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "1.2" }),
              /* @__PURE__ */ jsx("p", { children: "Для малоподвижных людей, тренировок мало или они отсутствуют" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientSmall", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientSmall",
              type: "radio",
              name: "quotient",
              checked: quotient === 1.38,
              onChange: (e) => setQuotient(1.38)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientSmall, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "1.38" }),
              /* @__PURE__ */ jsx("p", { children: "Для людей с низкой активностью, легкие тренировки 1-3 раза в неделю или в виде эквивалента другой активности." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientMiddle", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientMiddle",
              type: "radio",
              name: "quotient",
              checked: quotient === 1.55,
              onChange: (e) => setQuotient(1.55)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientMiddle, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "1.55" }),
              /* @__PURE__ */ jsx("p", { children: "Для умеренно активных людей: физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientHigh", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientHigh",
              type: "radio",
              name: "quotient",
              checked: quotient === 1.73,
              onChange: (e) => setQuotient(1.73)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientHigh, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "1.73" }),
              /* @__PURE__ */ jsx("p", { children: "Для очень активных людей: физическая работа полный день или интенсивные тренировки 6-7 раз в неделю." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientHighest", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientHighest",
              type: "radio",
              name: "quotient",
              checked: quotient === 2.2,
              onChange: (e) => setQuotient(2.2)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientHighest, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "2.2" }),
              /* @__PURE__ */ jsx("p", { children: "Для предельно активных людей: тяжелая физическая работа и интенсивные тренировки/занятия спортом." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("button", { id: "step2", className: "form__btn", onClick: handleClick, children: "Продолжить" })
    ] }),
    step3 && /* @__PURE__ */ jsxs("div", { className: "form", children: [
      /* @__PURE__ */ jsx("h4", { children: "Внесите свои данные:" }),
      /* @__PURE__ */ jsxs("div", { className: "parameters", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "weight", children: "Вес" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "parameters__input",
            id: "weight",
            type: "text",
            name: "weight",
            value: weight,
            placeholder: "Введите ваш вес (кг)",
            onChange: (e) => setWeight(+e.target.value)
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "height", children: "Рост" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "parameters__input",
            id: "height",
            type: "text",
            name: "height",
            value: height,
            placeholder: "Введите ваш рост (см)",
            onChange: (e) => setHeight(+e.target.value)
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "age", children: "Возраст" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "parameters__input",
            id: "age",
            type: "text",
            name: "age",
            value: age,
            placeholder: "Введите ваш возраст (лет)",
            onChange: (e) => setAge(+e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx("button", { id: "step3", className: "form__btn", onClick: handleClick, children: "Продолжить" })
    ] }),
    step4 && /* @__PURE__ */ jsxs("div", { className: "form big", children: [
      /* @__PURE__ */ jsx("h4", { children: "Выберите цель:" }),
      /* @__PURE__ */ jsxs("div", { className: "target", children: [
        /* @__PURE__ */ jsx("div", { className: "target__item", children: /* @__PURE__ */ jsxs("label", { className: "target__label", htmlFor: "weightLose", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "weightLose",
              type: "radio",
              name: "target",
              checked: target === 0.9,
              onChange: (e) => setTarget(0.9)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "target__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "target__img", src: weightLose, alt: "female" }),
            /* @__PURE__ */ jsx("span", { className: "target__name", children: "Похудение       " })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "target__item", children: /* @__PURE__ */ jsxs("label", { className: "target__label", htmlFor: "weightSave", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "weightSave",
              type: "radio",
              name: "target",
              checked: target === 1,
              onChange: (e) => setTarget(1)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "target__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "target__img", src: weightSave, alt: "female" }),
            /* @__PURE__ */ jsx("span", { className: "target__name", children: "Поддержание веса" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "target__item", children: /* @__PURE__ */ jsxs("label", { className: "target__label", htmlFor: "weightAdd", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "weightAdd",
              type: "radio",
              name: "target",
              checked: target === 1.1,
              onChange: (e) => setTarget(1.1)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "target__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "target__img", src: weightAdd, alt: "female" }),
            /* @__PURE__ */ jsx("span", { className: "target__name", children: "Набор массы" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "form__btn", children: "Рассчитать" })
    ] })
  ] }) });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Form
}, Symbol.toStringTag, { value: "Module" }));
function About() {
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx("h1", { children: "О нас" }),
    /* @__PURE__ */ jsx("p", { children: "Привет, здесь ты узнаешь, что мы даем миру!" })
  ] });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Contact() {
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Контакты" }),
    /* @__PURE__ */ jsx("p", { children: "Привет еще раз, Здесь ты наЙдешь как с нами контактировать!" })
  ] });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
function Home$1() {
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Домашняя страница" }),
    /* @__PURE__ */ jsx("p", { children: "Приветствуем на домашней странице!" })
  ] });
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home$1
}, Symbol.toStringTag, { value: "Module" }));
const home = "";
class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 8e3,
      cssEase: "linear"
    };
    const slidesData = [
      {
        image: "/assets/home/fon1.jpg",
        title: "Добро пожаловать",
        description: "Мы поможем вам создать здоровое, сильное и красивое тело  с помощью вкусных, полезных и разнообразных рецептов",
        isDarkBg: true
      },
      {
        image: "/assets/home/fon2.jpg",
        title: "Что мы предлагаем",
        description: "На основании ваших параметров мы рассчитаем необходимое количество калорий и создадим вам меню на неделю с подробными рецептами на каждый день",
        isDarkBg: false
      },
      {
        image: "/assets/home/fon3.jpg",
        title: "Всего в два клика",
        description: "Вам нужно зарегистрироваться на нашем сайте, заполнить анкету с вашими данными и  вы получите доступ к вашему меню и ко всем рецептам в целом",
        isDarkBg: true
      }
    ];
    return /* @__PURE__ */ jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ jsx(Slider, { ...settings, children: slidesData.map((d) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "slide-block ", style: { backgroundImage: `url(${d.image})` }, children: [
      /* @__PURE__ */ jsx("h3", { className: "slide-text " + (d.isDarkBg ? "" : "slide-text-blacк"), children: d.title }),
      /* @__PURE__ */ jsx("h2", { className: "slide-desc " + (d.isDarkBg ? "" : "slide-desc-blacк"), children: d.description })
    ] }) })) }) });
  }
}
const Home = (props) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(SimpleSlider, {}) });
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
function Main(auth) {
  return /* @__PURE__ */ jsxs(Layout$2, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Main" }),
    auth.user ? /* @__PURE__ */ jsx(Link$1, { href: route("dashboard"), className: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Link$1, { href: route("login"), className: "font-bold text-green-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500", children: "Залогиниться" }),
      /* @__PURE__ */ jsx(Link$1, { href: route("register"), className: "ml-4 font-semibold text-blue-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500", children: "Зарегистрироваться" })
    ] }),
    /* @__PURE__ */ jsx(SimpleSlider, {})
  ] });
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Main
}, Symbol.toStringTag, { value: "Module" }));
const menu_builder = "";
const plus = "/build/assets/plus-14c06bc0.svg";
const image$1 = "/build/assets/4-af5c209f.jpg";
const logo3 = "/build/assets/portions-fe7343ce.svg";
function MenuBuilder$2({ menu, recipes }) {
  const [menuAll, setMenuAll] = useState(menu);
  const [menuList, setMenuList] = useState(menuAll);
  const [idDay, setIdDay] = useState(0);
  const [idRecipe, setIdRecipe] = useState(0);
  const [recipeId, setRecipeId] = useState("");
  const [newRecipeId, setNewRecipeId] = useState(recipeId);
  const [newRecipe, setNewRecipe] = useState({});
  const [dataDay, setDataDay] = useState("");
  const [show, setShow] = useState(false);
  const openModal = () => {
    document.body.setAttribute("style", "overflow-y:hidden");
    setShow(true);
  };
  const closeModal = () => {
    document.body.setAttribute("style", "overflow-y:scroll");
    setShow(false);
  };
  useEffect(() => {
    if (newRecipeId !== "") {
      menuList[idDay].menu_recipes[idRecipe] = newRecipeId;
    }
  });
  function handleUpdateRecipes(idE) {
    recipes.forEach((item) => {
      if (item.id == idE) {
        return setNewRecipeId(item);
      }
    });
    menuList.forEach((recipes2, index) => {
      if (recipes2.menu_id == dataDay) {
        setIdDay(index);
        recipes2.menu_recipes.forEach((recipe2, id) => {
          if (recipe2 == recipeId) {
            setIdRecipe(id);
            setRecipeId(newRecipeId);
          }
        });
      }
    });
    if (menuAll !== menuList) {
      setMenuAll(menuList);
    }
  }
  function handleRecipeId(id, category, day) {
    setNewRecipe(() => recipes.filter((recipe2) => recipe2.category_id == category));
    setDataDay(day);
    menuAll.map(function(recipes2, index) {
      if (recipes2.menu_id == day) {
        recipes2.menu_recipes.map((recipe2) => {
          if (recipe2.id == id) {
            return setRecipeId(recipe2);
          }
        });
      }
    });
  }
  function weekDay(dayIndex) {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return days[dayIndex];
  }
  function MenuList2() {
    return /* @__PURE__ */ jsxs("div", { className: "constructor", children: [
      /* @__PURE__ */ jsxs("div", { className: "cons_row cons_row0", children: [
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col0" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col1", children: "Завтрак" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col2", children: "Перекус" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col3", children: "Обед" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col4", children: "Перекус" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col5", children: "Ужин" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col5", children: "Итог дня" })
      ] }),
      menuAll.map((item, index) => /* @__PURE__ */ jsx("div", { className: "constructor", children: /* @__PURE__ */ jsxs("div", { className: "cons_row cons_row1", id: item.menu_id, children: [
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col0", style: { height: "233px" }, children: /* @__PURE__ */ jsx("div", { className: "cons_day", children: weekDay(index) }) }),
        item.menu_recipes.map((menuRecipe) => /* @__PURE__ */ jsxs("div", { className: "cons_col cons_col1", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "cons_pic cons_add",
              style: { backgroundImage: `url(${image$1})`, cursor: "auto" },
              children: !show && /* @__PURE__ */ jsx(
                "button",
                {
                  className: "menu__btn",
                  onClick: () => {
                    openModal();
                    handleRecipeId(menuRecipe.id, menuRecipe.category_id, item.menu_id);
                  },
                  "data-day": item.menu_id,
                  id: menuRecipe.id,
                  "data-category": menuRecipe.category_id,
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "cons_pic_img",
                      src: plus,
                      title: "Добавить рецепт",
                      alt: "Добавить рецепт"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "cons_txt", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_title_menu", children: /* @__PURE__ */ jsx("a", { href: "/recipe/" + menuRecipe.id, children: menuRecipe.title }) }),
            /* @__PURE__ */ jsxs("div", { className: "cons_calorie", children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "cons_title_logo", src: logo3 }) }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "cons_title_calorie", children: [
                "ККАЛОРИЙ: ",
                menuRecipe.calorie
              ] }) })
            ] })
          ] })
        ] })),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col1", children: /* @__PURE__ */ jsxs("div", { className: "cons_pic cons_itog", children: [
          /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "ККалории" }),
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: item.totalCalories })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "Белки, г" }),
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: item.totalProteins })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "Жиры, г" }),
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: item.totalFats })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "Углеводы, г" }),
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: item.totalCarbohydrates })
          ] })
        ] }) })
      ] }) }))
    ] });
  }
  function CategoryList(props) {
    const { show: show2, closeModal: closeModal2 } = props;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: show2 ? "overlay" : "hide", onClick: closeModal2 }),
      /* @__PURE__ */ jsxs("div", { className: show2 ? "modal" : "hide", children: [
        /* @__PURE__ */ jsx("div", { id: "element", className: "modal__box", children: newRecipe.map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "modal__card red",
            "data-day": "1",
            "data-rectype": "1",
            id: item.id,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "cons_pic cons_add",
                  style: { backgroundImage: `url(${image$1})`, cursor: "auto", width: "100%" },
                  "data-day": "1",
                  "data-rectype": "1",
                  "data-category": item.category_id,
                  id: item.id
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "cons_txt modal__text", children: [
                /* @__PURE__ */ jsx("div", { className: "cons_title_menu", children: /* @__PURE__ */ jsx("a", { href: "/recipe/", children: item.title }) }),
                /* @__PURE__ */ jsxs("div", { className: "cons_calorie", children: [
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "cons_title_logo", src: logo3 }) }),
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "cons_title_calorie", children: [
                    "ККАЛОРИЙ: ",
                    item.calorie,
                    " "
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx("a", { href: "#" + item.id, children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    id: "btn",
                    className: "modal__btn",
                    "data-day": "1",
                    "data-rectype": "1",
                    "data-category": item.category_id,
                    id: item.id,
                    onClick: () => {
                      handleRecipeId(item.id, item.category_id, dataDay);
                      handleUpdateRecipes(item.id);
                    },
                    children: "Добавить рецепт"
                  }
                ) })
              ] })
            ]
          }
        )) }),
        /* @__PURE__ */ jsx("button", { className: "modal__button", onClick: closeModal2, children: "Х" })
      ] })
    ] });
  }
  console.log(newRecipe);
  function ShowCategoryList(props) {
    if (!show) {
      return /* @__PURE__ */ jsx(MenuList2, {});
    }
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(MenuList2, {}),
      /* @__PURE__ */ jsx(CategoryList, { closeModal, show })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "section section_grey section_submenu1 hidden nomobile", children: /* @__PURE__ */ jsx("div", { className: "container" }) }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_big" }),
    /* @__PURE__ */ jsx("div", { className: "section bg_hr_green", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "title_h1", children: /* @__PURE__ */ jsx("h1", { className: "title_main bg_white", children: "Конструктор меню" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "text_center", children: /* @__PURE__ */ jsx("div", { className: "simple_text_500", children: "Добавьте рецепт в конструктор  и выберите в списке самый вкусный!" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "section section_field" }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_small" }),
    /* @__PURE__ */ jsx("div", { className: "section section_constructor", children: /* @__PURE__ */ jsx("div", { className: "container container_constructor", children: /* @__PURE__ */ jsx(ShowCategoryList, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_small" }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_small" }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "buttons_row" }) }) })
  ] });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MenuBuilder$2
}, Symbol.toStringTag, { value: "Module" }));
function MenuBuilder$1({ menu, recipes }) {
  const [menuAll, setMenuAll] = useState(menu);
  const [menuList, setMenuList] = useState(menuAll);
  const [idDay, setIdDay] = useState(0);
  const [idRecipe, setIdRecipe] = useState(0);
  const [recipeId, setRecipeId] = useState("");
  const [newRecipeId, setNewRecipeId] = useState(recipeId);
  const [newRecipe, setNewRecipe] = useState({});
  const [dataDay, setDataDay] = useState("");
  const [show, setShow] = useState(false);
  const openModal = () => {
    document.body.setAttribute("style", "overflow-y:hidden");
    setShow(true);
  };
  const closeModal = () => {
    document.body.setAttribute("style", "overflow-y:scroll");
    setShow(false);
  };
  useEffect(() => {
    if (newRecipeId !== "") {
      menuList[idDay].menu_recipes[idRecipe] = newRecipeId;
    }
  });
  function handleUpdateRecipes(idE) {
    recipes.forEach((item) => {
      if (item.id == idE) {
        return setNewRecipeId(item);
      }
    });
    menuList.forEach((recipes2, index) => {
      if (recipes2.menu_id == dataDay) {
        setIdDay(index);
        recipes2.menu_recipes.forEach((recipe2, id) => {
          if (recipe2 == recipeId) {
            setIdRecipe(id);
            setRecipeId(newRecipeId);
          }
        });
      }
    });
    if (menuAll !== menuList) {
      setMenuAll(menuList);
    }
  }
  function handleRecipeId(id, category, day) {
    setNewRecipe(() => recipes.filter((recipe2) => recipe2.category_id == category));
    setDataDay(day);
    menuAll.map(function(recipes2, index) {
      if (recipes2.menu_id == day) {
        recipes2.menu_recipes.map((recipe2) => {
          if (recipe2.id == id) {
            return setRecipeId(recipe2);
          }
        });
      }
    });
  }
  function MenuList2() {
    return /* @__PURE__ */ jsxs("div", { className: "constructor", children: [
      /* @__PURE__ */ jsxs("div", { className: "cons_row cons_row0", children: [
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col0" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col1", children: "Завтрак" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col2", children: "Перекус" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col3", children: "Обед" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col4", children: "Перекус" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col5", children: "Ужин" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col5", children: "Итог дня" })
      ] }),
      menuAll.map((item) => /* @__PURE__ */ jsx("div", { className: "constructor", children: /* @__PURE__ */ jsxs("div", { className: "cons_row cons_row1", id: item.menu_id, children: [
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col0", style: { height: "233px" }, children: /* @__PURE__ */ jsxs("div", { className: "cons_day", children: [
          item.day_name,
          " "
        ] }) }),
        item.menu_recipes.map((menuRecipe) => /* @__PURE__ */ jsxs("div", { className: "cons_col cons_col1", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "cons_pic cons_add",
              style: { backgroundImage: `url(${image$1})`, cursor: "auto" },
              children: !show && /* @__PURE__ */ jsx(
                "button",
                {
                  className: "menu__btn",
                  onClick: () => {
                    openModal();
                    handleRecipeId(menuRecipe.id, menuRecipe.category_id, item.menu_id);
                  },
                  "data-day": item.menu_id,
                  id: menuRecipe.id,
                  "data-category": menuRecipe.category_id,
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "cons_pic_img",
                      src: plus,
                      title: "Добавить рецепт",
                      alt: "Добавить рецепт"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "cons_txt", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_title_menu", children: /* @__PURE__ */ jsx("a", { href: "/menu/builder/category/" + menuRecipe.category_id, children: menuRecipe.title }) }),
            /* @__PURE__ */ jsxs("div", { className: "cons_calorie", children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "cons_title_logo", src: logo3 }) }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "cons_title_calorie", children: "ККАЛОРИЙ: 521 " }) })
            ] })
          ] })
        ] })),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col1", children: /* @__PURE__ */ jsxs("div", { className: "cons_pic cons_itog", children: [
          /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "ККалории" }),
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: "0" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "Белки, г" }),
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: "0" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "Жиры, г" }),
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: "0" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "Углеводы, г" }),
            /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: "0" })
          ] })
        ] }) })
      ] }) }))
    ] });
  }
  function CategoryList(props) {
    const { show: show2, closeModal: closeModal2 } = props;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: show2 ? "overlay" : "hide", onClick: closeModal2 }),
      /* @__PURE__ */ jsxs("div", { className: show2 ? "modal" : "hide", children: [
        /* @__PURE__ */ jsx("div", { id: "element", className: "modal__box", children: newRecipe.map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "modal__card",
            "data-day": "1",
            "data-rectype": "1",
            id: "col-1-1",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "cons_pic cons_add",
                  style: { backgroundImage: `url(${image$1})`, cursor: "auto", width: "100%" },
                  "data-day": "1",
                  "data-rectype": "1",
                  "data-category": item.category_id,
                  id: item.id
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "cons_txt modal__text", children: [
                /* @__PURE__ */ jsx("div", { className: "cons_title_menu", children: /* @__PURE__ */ jsx("a", { href: "/recipe/", children: item.title }) }),
                /* @__PURE__ */ jsxs("div", { className: "cons_calorie", children: [
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "cons_title_logo", src: logo3 }) }),
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "cons_title_calorie", children: "ККАЛОРИЙ: 521 " }) })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    id: "btn",
                    className: "modal__btn",
                    "data-day": "1",
                    "data-rectype": "1",
                    "data-category": item.category_id,
                    id: item.id,
                    onClick: () => {
                      handleRecipeId(item.id, item.category_id, dataDay);
                      handleUpdateRecipes(item.id);
                    },
                    children: "Добавить рецепт"
                  }
                )
              ] })
            ]
          }
        )) }),
        /* @__PURE__ */ jsx("button", { className: "modal__button", onClick: closeModal2, children: "Х" })
      ] })
    ] });
  }
  console.log(newRecipe);
  function ShowCategoryList(props) {
    if (!show) {
      return /* @__PURE__ */ jsx(MenuList2, {});
    }
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(MenuList2, {}),
      /* @__PURE__ */ jsx(CategoryList, { closeModal, show })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "section section_grey section_submenu1 hidden nomobile", children: /* @__PURE__ */ jsx("div", { className: "container" }) }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_big" }),
    /* @__PURE__ */ jsx("div", { className: "section bg_hr_green", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "title_h1", children: /* @__PURE__ */ jsx("h1", { className: "title_main bg_white", children: "Конструктор меню" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "text_center", children: /* @__PURE__ */ jsx("div", { className: "simple_text_500", children: "Добавьте рецепт в конструктор  и выберите в списке самый вкусный!" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "section section_field" }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_small" }),
    /* @__PURE__ */ jsx("div", { className: "section section_constructor", children: /* @__PURE__ */ jsx("div", { className: "container container_constructor", children: /* @__PURE__ */ jsx(ShowCategoryList, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_small" }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_small" }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("div", { className: "buttons_row" }),
      /* @__PURE__ */ jsxs("div", { className: "buttons_row", children: [
        /* @__PURE__ */ jsx("div", { className: "buttons_row_button_wrap", children: /* @__PURE__ */ jsxs("div", { children: [
          " ",
          /* @__PURE__ */ jsx("button", { className: "buttons_row_button", children: "Вернуть первоначальное меню " })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "buttons_row_text_wrap", children: /* @__PURE__ */ jsxs("div", { className: "buttons_row_text", children: [
          /* @__PURE__ */ jsx("strong", { children: "Сбросить рецепты" }),
          ' в недельной сетке до "рекомендуемых".',
          /* @__PURE__ */ jsx("span", { className: "append_text" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "buttons_row", children: [
        /* @__PURE__ */ jsx("div", { className: "buttons_row_button_wrap", children: /* @__PURE__ */ jsxs("div", { children: [
          " ",
          /* @__PURE__ */ jsx("button", { className: "buttons_row_button", children: "Удалить все рецепты из списка" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "buttons_row_text_wrap", children: /* @__PURE__ */ jsxs("div", { className: "buttons_row_text", children: [
          /* @__PURE__ */ jsx("strong", { children: "Очистить все рецепты" }),
          ' из недельной сетки, чтобы самостоятельно заполнить её любимыми блюдами. Всегда можете вернуться к "рекомендуемому" набору рецептов - воспользуйтесь кнопкой "вернуть первоначальное меню".',
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "append_text"
            }
          )
        ] }) })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MenuBuilder$1
}, Symbol.toStringTag, { value: "Module" }));
const notfound = "";
const NotFound = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("section", { className: "space-ptb bg-overlay-black-70 slide-bg-19", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-6 col-md-10 text-center", children: /* @__PURE__ */ jsxs("div", { className: "error-404", children: [
    /* @__PURE__ */ jsxs("h1", { className: "error-text", children: [
      "4",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "0" }),
      "4"
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "text-primary", children: "Oops!" }),
    /* @__PURE__ */ jsx("h3", { className: "text-white mb-3", children: " Извините, мы не можем найти эту страницу." }),
    /* @__PURE__ */ jsx("p", { className: "lead text-white mb-4 mb-md-5", children: "Страница, которую вы ищете, могла быть удалена или временно недоступна." })
  ] }) }) }) }) }) }) });
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NotFound
}, Symbol.toStringTag, { value: "Module" }));
function PersonalAccount({ user }) {
  const gender = (value) => {
    if (value === "male") {
      return "мужской";
    } else if (value === "female") {
      return "Женский";
    }
  };
  const targetNum = (value) => {
    if (value === 1) {
      return "Похудение";
    } else if (value === 2) {
      return "Поддержание веса";
    } else if (value === 3) {
      return "Набор массы";
    }
  };
  const quotientNum = (value) => {
    if (value === 1) {
      return "1.2 - малоподвижиный образ жизни (тренировок мало или они отсутствуют)";
    } else if (value === 2) {
      return "1.38 - низкая активность (легкие тренировки 1-3 раза в неделю)";
    } else if (value === 3) {
      return "1.55 - умеренная активность (физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю)";
    } else if (value === 4) {
      return "1.73 - очень активный образ жизни (физическая работа полный день или интенсивные тренировки 6-7 раз в неделю)";
    } else if (value === 5) {
      return "2.2 - предельно активный образ жизни (физическая тяжелая физическая работа и интенсивные тренировки/занятия спортом.";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "account", children: [
    /* @__PURE__ */ jsxs("main", { className: "account__box", children: [
      user.map((item) => {
        return /* @__PURE__ */ jsxs("section", { className: "account__profile", children: [
          /* @__PURE__ */ jsx("h2", { children: "Персональные данные" }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Логин" }),
            /* @__PURE__ */ jsx("span", { children: item.username })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Имя" }),
            /* @__PURE__ */ jsx("span", { children: item.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Пол" }),
            /* @__PURE__ */ jsx("span", { children: gender(item.profile.gender) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Возраст" }),
            /* @__PURE__ */ jsx("span", { children: item.profile.age })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Телефон" }),
            /* @__PURE__ */ jsx("span", { children: item.phone })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Email" }),
            /* @__PURE__ */ jsx("span", { children: item.email })
          ] })
        ] });
      }),
      user.map((item) => {
        return /* @__PURE__ */ jsxs("section", { className: "account__profile", children: [
          /* @__PURE__ */ jsx("h2", { children: "Мои параметры" }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Вес (в кг)" }),
            /* @__PURE__ */ jsx("span", { children: item.profile.weight })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Рост (в см)" }),
            /* @__PURE__ */ jsx("span", { children: item.profile.height })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Коэфициент активности" }),
            /* @__PURE__ */ jsx("span", { children: quotientNum(item.profile.quotient) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            /* @__PURE__ */ jsx("p", { children: "Цель" }),
            /* @__PURE__ */ jsx("span", { children: targetNum(item.profile.target) })
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "account__btn", children: /* @__PURE__ */ jsx("a", { href: "/form", children: "Изменить" }) })
        ] });
      })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "account__menu", children: /* @__PURE__ */ jsx("nuv", { children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/account", children: "Мой профиль" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/advice", children: "Мои рекомендации" }) }),
      /* @__PURE__ */ jsx("li", { children: user.map((item) => {
        return /* @__PURE__ */ jsx("a", { href: "/menu/builder/" + item.menuWeek_id, children: "Мое меню на неделю" });
      }) })
    ] }) }) })
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PersonalAccount
}, Symbol.toStringTag, { value: "Module" }));
const Create = () => {
  const { data, setData, errors, post } = useForm$1({
    title: "",
    description: ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("posts.store"));
  }
  return /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsxs("div", { className: "container flex flex-col justify-center mx-auto", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "mb-8 text-3xl font-bold", children: [
      /* @__PURE__ */ jsx(
        InertiaLink,
        {
          href: route("posts.index"),
          className: "text-indigo-600 hover:text-indigo-700",
          children: "Posts"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "font-medium text-indigo-600", children: " / " }),
      "Create"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl p-8 bg-white rounded shadow", children: /* @__PURE__ */ jsxs("form", { name: "createForm", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: "", children: "Title" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "w-full px-4 py-2",
              label: "Title",
              name: "title",
              value: data.title,
              onChange: (e) => setData("title", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-0", children: [
          /* @__PURE__ */ jsx("label", { className: "", children: "Description" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              type: "text",
              className: "w-full rounded",
              label: "description",
              name: "description",
              errors: errors.description,
              value: data.description,
              onChange: (e) => setData("description", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: errors.description })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "px-6 py-2 font-bold text-white bg-green-500 rounded",
          children: "Save"
        }
      ) })
    ] }) })
  ] }) });
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const Edit = () => {
  const { post } = usePage$1().props;
  const { data, setData, put, errors } = useForm$1({
    title: post.title || "",
    description: post.description || ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    put(route("posts.update", post.id));
  }
  function destroy() {
    if (confirm("Are you sure you want to delete this user?")) {
      Inertia.delete(route("posts.destroy", post.id));
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsxs("div", { className: "container flex flex-col justify-center mx-auto", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "mb-8 text-3xl font-bold", children: [
      /* @__PURE__ */ jsx(
        InertiaLink,
        {
          href: route("posts.index"),
          className: "text-indigo-600 hover:text-indigo-700",
          children: "Posts"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "font-medium text-indigo-600", children: " /" }),
      "Edit"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl p-8 bg-white rounded shadow", children: /* @__PURE__ */ jsxs("form", { name: "createForm", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: "", children: "Title" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "w-full px-4 py-2",
              label: "Title",
              name: "title",
              value: data.title,
              onChange: (e) => setData("title", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: "", children: "Description" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              type: "text",
              className: "w-full rounded",
              label: "description",
              name: "description",
              errors: errors.description,
              value: data.description,
              onChange: (e) => setData("description", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: errors.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 text-white bg-green-500 rounded",
            children: "Update"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: destroy,
            tabIndex: "-1",
            type: "button",
            className: "px-4 py-2 text-white bg-red-500 rounded",
            children: "Delete"
          }
        )
      ] })
    ] }) })
  ] }) });
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function Layout$1({ children }) {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("header", { children: [
      "You are logged in as: ",
      auth.user.name
    ] }),
    /* @__PURE__ */ jsx("content", { children })
  ] });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout$1
}, Symbol.toStringTag, { value: "Module" }));
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link$1,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-green-600 text-gray-900 focus:border-green-700 " : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") + className,
      children
    }
  );
}
function Layout({ children, footer: footer2, header: header2 }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsx("nav", { className: "bg-white border-b border-gray-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link$1, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-9 w-auto fill-current text-blue-800" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex", children: [
        /* @__PURE__ */ jsx(NavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Конструктор питания" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("recipes"), active: route().current("recipes"), children: "Recipes" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("category"), active: route().current("category"), children: "Category" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("form.index"), active: route().current("form.index"), children: "Form" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("advice"), active: route().current("advice"), children: "Advice" })
      ] })
    ] }) }) }) }),
    header2 && /* @__PURE__ */ jsx("header", { className: "bg-grey-100 shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header2 }) }),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx(FooterList$1, { children: footer2 }) })
  ] });
}
function Test({ children }) {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsxs(Layout, { children: [
    "You are logged in as: ",
    auth.user.name,
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx(FooterList$1, {})
  ] });
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Test
}, Symbol.toStringTag, { value: "Module" }));
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function DangerButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent  font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-50"} ` + className,
      disabled,
      children
    }
  );
}
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, as: Fragment$1, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-75",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-75",
            children: /* @__PURE__ */ jsx(
              Dialog.Panel,
              {
                className: `mb-6 bg-white  overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
function SecondaryButton({ type = "button", className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      type,
      className: `inline-flex items-center px-4 py-2 bg-white border border-gray-300 font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && "opacity-50"} ` + className,
      disabled,
      children
    }
  );
}
function DeleteUserForm({ className }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Удалить Аккаунт" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Как только ваша учетная запись будет удалена, все ее ресурсы и данные будут удалены безвозвратно." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { onClick: confirmUserDeletion, children: "Удалить!" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Вы уверены, что хотите удалить свою учетную запись?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Пожалуйста введите свой пароль, чтобы подтвердить, что вы хотите окончательно удалить свою учетную запись." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password", className: "sr-only" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Пароль"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Отмена" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ml-3", disabled: processing, children: "Почикать!" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: () => {
        if (errors.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Редактировать пароль" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Убедитесь, что в вашей учетной записи используется длинный случайный пароль, чтобы оставаться в безопасности" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "current_password", value: "Текущий пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Новый пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            placeholder: "Новый пароль"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Подтвердите пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            placeholder: "Повторите новый пароль"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Сохранить" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({ mustVerifyEmail, status, className }) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Информация профиля" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Обновите информацию профиля вашей учетной записи и адрес электронной почты." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Имя" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800", children: [
          "Ваш адрес электронной почты не подтвержден.",
          /* @__PURE__ */ jsx(
            Link$1,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
              children: "Нажмите здесь, чтобы повторно отправить электронное письмо с подтверждением."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600", children: "На ваш адрес электронной почты была отправлена новая ссылка для подтверждения." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Сохранить" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Сохранен." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
const recipe = "";
const time = "/build/assets/time-ab3af3e3.svg";
const calories = "/build/assets/calories-d915d232.svg";
const image = "/build/assets/1-309347c3.jpg";
function Recipe({ recipeOne, recipeOneAdvice }) {
  function declOfNum(n) {
    n = Math.abs(n) % 100;
    const text_forms = ["МИНУТА", "МИНУТЫ", "МИНУТ"];
    var n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }
  declOfNum();
  console.log(recipeOne);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "reclist_main", children: /* @__PURE__ */ jsxs("div", { className: "reccard_wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "reccard_content", children: [
      recipeOne.map((recipe2) => {
        return /* @__PURE__ */ jsxs("div", { className: "reccard_main_title", children: [
          recipe2.title,
          /* @__PURE__ */ jsx("div", { className: "reccard_content_title", children: recipe2.category_title })
        ] });
      }),
      /* @__PURE__ */ jsxs("div", { className: "reccard_main_photo_wrap", style: { width: "100%" }, children: [
        /* @__PURE__ */ jsx("div", { className: "rec_item_plus_txt", children: /* @__PURE__ */ jsx("div", { className: "reccard_main_add", children: "+ добавить рецепт в меню на неделю" }) }),
        /* @__PURE__ */ jsx("img", { className: "reccard_main_photo", src: image, style: { width: "100%" } })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "reccard_main_info", children: [
        /* @__PURE__ */ jsxs("div", { className: "reccard_main_info1", children: [
          /* @__PURE__ */ jsx("div", { className: "reccard_main_time", children: recipeOne.map((recipe2) => {
            return /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "rec_time", children: [
                /* @__PURE__ */ jsx("img", { src: time }),
                "  ",
                recipe2.cooking_time,
                " ",
                declOfNum(recipe2.cooking_time)
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rec_time", children: [
                /* @__PURE__ */ jsx("img", { src: calories }),
                "  ",
                recipe2.portion,
                " ПОРЦИИ"
              ] })
            ] });
          }) }),
          recipeOne.map((recipe2) => {
            return /* @__PURE__ */ jsxs("div", { className: "reccard_main_kbzhu", children: [
              /* @__PURE__ */ jsx("div", { className: "rec_time", children: /* @__PURE__ */ jsx("strong", { children: "Пищевая ценность порции" }) }),
              /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: "Калории, г" }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: recipe2.calorie })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: "Белки, г." }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: recipe2.proteins })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: "Жиры, г." }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: recipe2.fats })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: "Углеводы, г." }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: recipe2.carbohydrates })
              ] })
            ] });
          })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "reccard_main_info3", children: [
          /* @__PURE__ */ jsx("div", { className: "ingredients_title", children: "Ингредиенты" }),
          recipeOne.map((recipe2) => {
            return /* @__PURE__ */ jsx("div", { className: "ingredients_content", children: recipe2.ingredients.map((ingredient) => {
              return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu_name", children: [
                  ingredient.title,
                  ", ",
                  ingredient.pivot.mass_unit
                ] }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_values reccard_ingr_values", "data-ingr-value": "250", children: ingredient.pivot.quantity_ingredient })
              ] }) });
            }) });
          })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "reccard_main_info4", children: recipeOne.map((recipe2) => {
          return /* @__PURE__ */ jsx("div", { children: recipe2.steps.map((step) => {
            return /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "poshag_title", children: [
                "ШАГ ",
                step.step_number,
                " из ",
                recipe2.count_steps
              ] }),
              /* @__PURE__ */ jsx("div", { className: "poshag_content", children: step.description })
            ] });
          }) });
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "reclist_wrap reclist_inda_reccard", children: recipeOneAdvice.map((recipeAdvice) => {
      return /* @__PURE__ */ jsxs("div", { className: "rec_item", children: [
        /* @__PURE__ */ jsx("div", { className: "rec_item_plus" }),
        /* @__PURE__ */ jsxs("div", { className: "rec_item_plus", children: [
          /* @__PURE__ */ jsx("img", { src: image, style: { width: "100%", height: "190px" }, className: "product-item" }),
          /* @__PURE__ */ jsx("a", { href: "/recipe/" + recipeAdvice.id, className: "but", children: "Перейти" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#", children: [
          /* @__PURE__ */ jsx("div", { className: "rec_img" }),
          /* @__PURE__ */ jsxs("div", { className: "rec_content", children: [
            /* @__PURE__ */ jsxs("div", { className: "product-title", children: [
              /* @__PURE__ */ jsx("a", { href: "/recipe/" + recipeAdvice.id, style: { fontSize: "20px" }, children: recipeAdvice.title }),
              /* @__PURE__ */ jsx("span", { className: "product-price", children: recipeAdvice.category_title }),
              /* @__PURE__ */ jsx("span", { className: "product-price img" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rec_time_kkal", children: [
              /* @__PURE__ */ jsxs("div", { className: "rec_time", children: [
                /* @__PURE__ */ jsx("img", { src: time }),
                "  ",
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    children: recipeAdvice.cooking_time
                  }
                ),
                " ",
                declOfNum(recipeAdvice.cooking_time)
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rec_kkal", children: [
                /* @__PURE__ */ jsx("img", { src: logo3 }),
                "  ",
                /* @__PURE__ */ jsxs(
                  "span",
                  {
                    children: [
                      "ККАЛОРИИ:",
                      recipeAdvice.calorie
                    ]
                  }
                ),
                " / 1 ПОРЦ."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rec_porc", children: [
                /* @__PURE__ */ jsx("img", { src: calories }),
                "  ",
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    children: recipeAdvice.portion
                  }
                ),
                " ПОРЦИИ"
              ] })
            ] })
          ] })
        ] })
      ] });
    }) })
  ] }) }) }) }) });
}
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Recipe
}, Symbol.toStringTag, { value: "Module" }));
const app = "";
const usePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;
  const changePage = (direction) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };
  const setPageSAFE = (num) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };
  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page
  };
};
const search = "/build/assets/search-magnifying-glass-svgrepo-com-3f7ccdaa.svg";
const Recipes = ({ recipes }) => {
  const [category, setCategory] = useState(recipes);
  const [categoryId, setCategoryId] = useState(category);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages
  } = usePagination({
    contentPerPage: 12,
    count: categoryId.length
  });
  useEffect(() => {
    if (category !== recipes) {
      setCategory(recipes);
    }
  }, [category]);
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const handleClickCategory = (event) => {
    if (event.target.id === "Завтрак") {
      setCategoryId(() => category.filter((recipe2) => recipe2.category_title === "Завтрак"));
    } else if (event.target.id === "Обед") {
      setCategoryId(() => category.filter((recipe2) => recipe2.category_title === "Обед"));
    } else if (event.target.id === "Перекус") {
      setCategoryId(() => category.filter((recipe2) => recipe2.category_title === "Перекус"));
    } else {
      setCategoryId(() => category.filter((recipe2) => recipe2.category_title === "Ужин"));
    }
  };
  const handleClickCalorie = (event) => {
    if (event.target.id === "100") {
      setCategoryId(() => category.filter((recipe2) => recipe2.calorie <= 100));
    } else if (event.target.id === "400") {
      setCategoryId(() => category.filter((recipe2) => recipe2.calorie >= 100).filter((recipe2) => recipe2.calorie <= 400));
    } else if (event.target.id === "700") {
      setCategoryId(() => category.filter((recipe2) => recipe2.calorie >= 400).filter((recipe2) => recipe2.calorie <= 700));
    } else {
      setCategoryId(() => category.filter((recipe2) => recipe2.calorie >= 700).filter((recipe2) => recipe2.calorie <= 1e3));
    }
    console.log(typeof event.target.id);
  };
  const handleClickCookingTime = (event) => {
    if (event.target.id === "5") {
      setCategoryId(() => category.filter((recipe2) => recipe2.cooking_time < 6));
    } else if (event.target.id === "15") {
      setCategoryId(() => category.filter((recipe2) => recipe2.cooking_time >= 5).filter((recipe2) => recipe2.cooking_time <= 15));
    } else if (event.target.id === "30") {
      setCategoryId(() => category.filter((recipe2) => recipe2.cooking_time >= 15).filter((recipe2) => recipe2.cooking_time <= 30));
    } else {
      setCategoryId(() => category.filter((recipe2) => recipe2.cooking_time >= 30).filter((recipe2) => recipe2.cooking_time <= 60));
    }
  };
  const img = img1;
  const [inputText, setInputText] = useState("");
  console.log("inputText: " + inputText);
  const handleSearch = (e) => {
    setCategoryId(() => category.filter((recipe2) => {
      if (e !== "") {
        return recipe2.title.toLowerCase().includes(e);
      } else {
        return recipe2;
      }
    }));
    console.log("e: " + e);
  };
  const Hightlight = (props) => {
    const { inputText: inputText2, str } = props;
    if (inputText2 === "")
      return str;
    const regexp = new RegExp(inputText2, "ig");
    const matchValue = str.match(regexp);
    if (matchValue) {
      return str.split(regexp).map((s, index, array) => {
        if (index < array.length - 1) {
          const c = matchValue.shift();
          console.log("s: " + s);
          return /* @__PURE__ */ jsxs(Fragment, { children: [
            s,
            /* @__PURE__ */ jsx("span", { className: "yellow", children: c })
          ] });
        }
        return s;
      });
    }
    return str;
  };
  const light = useCallback((str) => {
    return /* @__PURE__ */ jsx(Hightlight, { inputText, str });
  }, [inputText]);
  return /* @__PURE__ */ jsx("div", { className: "recipeListMain", children: /* @__PURE__ */ jsxs("div", { className: " recipes_main", children: [
    /* @__PURE__ */ jsxs("div", { className: "recipeList", children: [
      categoryId.slice(firstContentIndex, lastContentIndex).map((item, index) => /* @__PURE__ */ jsxs("div", { className: "product-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "product-item", children: [
          /* @__PURE__ */ jsx("div", { className: "product-buttons", children: /* @__PURE__ */ jsx("a", { href: "/recipe/" + item.id, className: "button", children: "Перейти" }) }),
          /* @__PURE__ */ jsx("img", { src: img, alt: "atata" })
        ] }, item.title),
        /* @__PURE__ */ jsxs("div", { className: "product-title", children: [
          /* @__PURE__ */ jsx("a", { id: "title", href: "/recipe/" + item.id, children: /* @__PURE__ */ jsx("p", { className: "title__inner", children: light(item.title) }) }),
          /* @__PURE__ */ jsx("span", { className: "product-price", children: item.category_title }),
          /* @__PURE__ */ jsxs("span", { className: "product-price img", children: [
            /* @__PURE__ */ jsx("img", { src: calories }),
            "Ккалории: ",
            item.calorie
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "product-price img", children: [
            /* @__PURE__ */ jsx("img", { src: time }),
            item.cooking_time,
            " мин."
          ] })
        ] })
      ] })),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("div", { className: "pagination", children: [
        /* @__PURE__ */ jsxs("p", { className: "text", children: [
          page,
          "/",
          totalPages
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: prevPage, className: "page", children: "←" }),
        [...Array(totalPages).keys()].map((el) => /* @__PURE__ */ jsx(
          Link$2,
          {
            className: `page ${page === el + 1 ? "active" : ""}`,
            style: { margin: "0 5px" },
            spy: true,
            smooth: true,
            offset: -70,
            duration: 500,
            onClick: scrollToTop(),
            children: /* @__PURE__ */ jsxs(
              "button",
              {
                className: `page ${page === el + 1 ? "active" : ""}`,
                onClick: () => setPage(el + 1),
                children: [
                  " ",
                  el + 1
                ]
              },
              el
            )
          }
        )),
        /* @__PURE__ */ jsx("button", { onClick: nextPage, className: "page", children: "→" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "navigation", children: [
      /* @__PURE__ */ jsxs("div", { className: "input__box", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "input__img",
            type: "text",
            onChange: (event) => {
              setInputText(event.target.value);
              handleSearch(event.target.value);
            },
            value: inputText,
            placeholder: "Введите название рецепта",
            className: "input__search"
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "input", children: /* @__PURE__ */ jsx("img", { className: "input__img", src: search }) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "navigation-list", children: [
        " ",
        /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " Рецепты по категориям " }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCategory,
            type: "button",
            id: "Завтрак",
            children: "Завтрак"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCategory,
            type: "button",
            id: "Обед",
            children: "Обед"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCategory,
            type: "button",
            id: "Перекус",
            children: "Перекус"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCategory,
            type: "button",
            id: "Ужин",
            children: "Ужин"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "navigation-list", children: [
        " ",
        /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " Рецепты блюд по калорийности " }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCalorie,
            type: "button",
            id: "100",
            children: "До 100ккал"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCalorie,
            type: "button",
            id: "400",
            children: "От 100 до 400ккал"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCalorie,
            type: "button",
            id: "700",
            children: "От 400 до 700ккал"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCalorie,
            type: "button",
            id: "1000",
            children: "От 700 до 1000ккал"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "navigation-list", children: [
        " ",
        /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " Рецепты по времени приготовления " }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCookingTime,
            type: "button",
            id: "5",
            children: "До 5 минут"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCookingTime,
            type: "button",
            id: "15",
            children: "От 5 до 15 минут"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCookingTime,
            type: "button",
            id: "30",
            children: "От 15 до 30 минут"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCookingTime,
            type: "button",
            id: "60",
            children: "От 30 до 60 минут"
          }
        ) })
      ] })
    ] })
  ] }) });
};
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Recipes
}, Symbol.toStringTag, { value: "Module" }));
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Это защищенная область приложения. Пожалуйста, подтвердите свой пароль, прежде чем продолжить." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: handleOnChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Подтвердить" }) })
    ] })
  ] });
}
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Забыли свой пароль? Без проблем. Просто сообщите нам свой адрес электронной почты, и мы вышлем вам по электронной почте ссылку для сброса пароля, которая позволит вам выбрать новый." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: onHandleChange
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Ссылка для сброса пароля электронной почты" }) })
    ] })
  ] });
}
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: handleOnChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: handleOnChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Checkbox, { name: "remember", value: data.remember, onChange: handleOnChange }),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600", children: "Запомнить меня" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link$1,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700",
            children: "Забыли свой пароль?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Залогиниться!" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Имя" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Подтверждение пароля" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: handleOnChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Link$1,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Уже зарегистрированы?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Зарегистрироваться" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Подтвердите пароль" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Reset Password" }) })
    ] })
  ] });
}
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Спасибо, что зарегистрировались! Прежде чем приступить, не могли бы вы подтвердить свой адрес электронной почты, перейдя по ссылке, которую мы только что отправили вам по электронной почте? Если вы не получили электронное письмо, мы с радостью отправим вам другое." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: "Новая ссылка для подтверждения была отправлена на адрес электронной почты, который вы указали при регистрации." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link$1,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gren-700",
          children: "Выйти"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: /* @__PURE__ */ jsx(Layout$2, {}),
      children: [
        {
          path: "/",
          element: /* @__PURE__ */ jsx(Home, {})
        },
        {
          path: "/recipe",
          element: /* @__PURE__ */ jsx(Recipe, {})
        },
        {
          path: "/recipes/*",
          element: /* @__PURE__ */ jsx(Recipes, {})
        },
        {
          path: "/builder",
          element: /* @__PURE__ */ jsx(MenuBuilder, {})
        },
        {
          path: "/form",
          element: /* @__PURE__ */ jsx(Form, {})
        },
        {
          path: "/advice",
          element: /* @__PURE__ */ jsx(Advice, {})
        },
        {
          path: "/menu"
        },
        {
          path: "/account",
          element: /* @__PURE__ */ jsx(PersonalAccount, {})
        },
        {
          path: "/recipes/:categoryId/*",
          element: /* @__PURE__ */ jsx(Recipes, {})
        }
      ]
    },
    //Страница 404 должна быть без Footer и Header
    {
      path: "/*",
      element: /* @__PURE__ */ jsx(NotFound, {})
    }
  ]);
  return /* @__PURE__ */ jsx("div", { className: "app", children: /* @__PURE__ */ jsx(RouterProvider, { router }) });
}
createInertiaApp({
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/Advice.jsx": __vite_glob_0_0, "./Pages/Auth/ConfirmPassword.jsx": __vite_glob_0_1, "./Pages/Auth/ForgotPassword.jsx": __vite_glob_0_2, "./Pages/Auth/Login.jsx": __vite_glob_0_3, "./Pages/Auth/Register.jsx": __vite_glob_0_4, "./Pages/Auth/ResetPassword.jsx": __vite_glob_0_5, "./Pages/Auth/VerifyEmail.jsx": __vite_glob_0_6, "./Pages/Category.jsx": __vite_glob_0_7, "./Pages/Dashboard.jsx": __vite_glob_0_8, "./Pages/Form.jsx": __vite_glob_0_9, "./Pages/Guest/About.jsx": __vite_glob_0_10, "./Pages/Guest/Contact.jsx": __vite_glob_0_11, "./Pages/Guest/Home.jsx": __vite_glob_0_12, "./Pages/Home.jsx": __vite_glob_0_13, "./Pages/Layout.jsx": __vite_glob_0_14, "./Pages/Main.jsx": __vite_glob_0_15, "./Pages/MenuBuilder.jsx": __vite_glob_0_16, "./Pages/MenuBuilder1.jsx": __vite_glob_0_17, "./Pages/NotFound.jsx": __vite_glob_0_18, "./Pages/PersonalAccount.jsx": __vite_glob_0_19, "./Pages/Post/Create.jsx": __vite_glob_0_20, "./Pages/Post/Edit.jsx": __vite_glob_0_21, "./Pages/Post/Index.jsx": __vite_glob_0_22, "./Pages/Post/Test.jsx": __vite_glob_0_23, "./Pages/Profile/Edit.jsx": __vite_glob_0_24, "./Pages/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_25, "./Pages/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_26, "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_27, "./Pages/Recipe.jsx": __vite_glob_0_28, "./Pages/Recipes.jsx": __vite_glob_0_29, "./Pages/mark/Auth/ConfirmPassword.jsx": __vite_glob_0_30, "./Pages/mark/Auth/ForgotPassword.jsx": __vite_glob_0_31, "./Pages/mark/Auth/Login.jsx": __vite_glob_0_32, "./Pages/mark/Auth/Register.jsx": __vite_glob_0_33, "./Pages/mark/Auth/ResetPassword.jsx": __vite_glob_0_34, "./Pages/mark/Auth/VerifyEmail.jsx": __vite_glob_0_35 });
    let page = pages[`./Pages/${name}.jsx`];
    page.default.layout = page.default.layout || ((page2) => /* @__PURE__ */ jsx(Layout$2, { children: page2 }));
    return page;
  },
  setup({ el, App: App2, props }) {
    createRoot(el).render(/* @__PURE__ */ jsx(App2, { ...props }));
  }
});
export {
  App as default
};