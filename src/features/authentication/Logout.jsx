import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <div className=" mt-10">
      <button
        className=" bg-slate-100 rounded-full p-2 font-thin hover:bg-black hover:text-white w-full"
        disabled={isLoading}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
