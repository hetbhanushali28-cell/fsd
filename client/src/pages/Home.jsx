import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-100 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          Discover Amazing Events
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Find exciting events, connect with people, and register for experiences that interest you.
        </p>
        <Link to="/events" className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
          Explore Events
        </Link>
      </section>

      {/* Events Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Upcoming Events
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Tech Fest 2026"
              description="A technology event for students."
              date="2026-11-15"
              time="10:00"
              location="Mumbai"
            />
            <EventCard
              title="React Workshop"
              description="Learn React from basics to advanced."
              date="2026-11-20"
              time="14:00"
              location="Pune"
            />
            <EventCard
              title="AI Conference"
              description="Explore the latest AI developments."
              date="2026-11-25"
              time="09:30"
              location="Bengaluru"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
