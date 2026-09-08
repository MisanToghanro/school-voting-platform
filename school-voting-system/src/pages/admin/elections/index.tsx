
import AdminLayout from "../AdminLayout/AdminLayout";

import CreateElectionForm from "../../../../Components/CreateElectionForm";


interface Election {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "draft" | "scheduled" | "active" | "ended" | "cancelled";
  candidateCount: number;
  voteCount: number;
}


const ElectionsPage = () => {
  return (
    <AdminLayout>
      <section className="p-6 md:p-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Elections
        </h1>

        <p className="mt-1 text-gray-600">
          Create, schedule, and manage school elections.
        </p>

		<CreateElectionForm/>
      </section>
    </AdminLayout>
  );
};

export default ElectionsPage;
