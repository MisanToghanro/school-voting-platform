
import AdminForm from "../../../Components/AdminForm";


const AdminLogin = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-12 min-h-[70hv]">
        <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Admin Login</h1>
        <p className="mt-2 text-gray-600">Sign in to access the administration dashboard.</p>
        </div>
      
      <AdminForm/>
      
    </section>
  );
};
export default AdminLogin;