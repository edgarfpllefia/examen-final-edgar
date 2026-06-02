import eventos from "../data/eventos";
import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <div>
      <h1>Página eventos</h1>
      <main>
        {eventos.map((e) => (
          <EventCard key={e.id} evento={e}></EventCard>
        ))}
      </main>
    </div>
  );
}
