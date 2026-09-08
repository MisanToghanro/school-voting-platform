
import AdminLayout from "./AdminLayout/AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <section className="p-6 md:p-8">

        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Admin Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-600 md:text-base">
            Welcome to the administration dashboard.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total Elections */}
          <div className="rounded-xl border bg-white p-5">
            <p className="text-sm text-gray-500">
              Total Elections
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              0
            </h2>
          </div>

          {/* Active Elections */}
          <div className="rounded-xl border bg-white p-5">
            <p className="text-sm text-gray-500">
              Active Elections
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              0
            </h2>
          </div>

          {/* Candidates */}
          <div className="rounded-xl border bg-white p-5">
            <p className="text-sm text-gray-500">
              Total Candidates
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              0
            </h2>
          </div>

          {/* Votes */}
          <div className="rounded-xl border bg-white p-5">
            <p className="text-sm text-gray-500">
              Total Votes
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              0
            </h2>
          </div>

        </div>

        {/* Dashboard Content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Current Election */}
          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Current Election
            </h2>

            <div className="mt-6">
              <p className="text-sm text-gray-500">
                No active election
              </p>

              <p className="mt-2 text-sm text-gray-600">
                Create an election to begin managing candidates and votes.
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>

            <div className="mt-6">
              <p className="text-sm text-gray-500">
                No recent activity
              </p>
            </div>
          </div>

        </div>

      </section>
    </AdminLayout>
  );
};

export default AdminDashboard;