import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Регистрация</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          id="username"
          placeholder="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
          Зарегистрироваться
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Уже есть аккаунт?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Войти</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
