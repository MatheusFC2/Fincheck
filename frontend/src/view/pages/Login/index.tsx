import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking[-1px]">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[0.5px]">Novo por aqui?</span>
          <Link
            to="/register"
            className="tracking-[0.5px] text-teal-900 font-medium"
          >
            Cadastre-se
          </Link>
        </p>
      </header>
      <form action="submit">
        <input type="email" />
        <input type="password" />
        <button type="submit" className="mt-2"></button>
      </form>
    </div>
  );
}
