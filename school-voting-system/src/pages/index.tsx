import Link from "next/link";

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 text-center min-h-[70vh]">
      <div className="max-w-2xl">
        <h1 className="text-4xl text-bold md:text-5xl">Welcome to School Voting Platform!</h1>
        <p className="mt-4 text-lg">Sign in to access the platform.</p>
      </div>

      <div className="flex mt-8 gap-4">
        <Link href="/candidate"
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
          Candidate
        </Link>

        <Link href="/student"
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Student
        </Link>
      </div>
    </section>
  );
};

export default HomePage;