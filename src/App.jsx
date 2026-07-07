import GuestList from "./GuestList";
import SelectedGuest from "./SelectedGuest";

export default function App() {
  return (
    <>
      <h1>Guest List</h1>
      <main>
        <GuestList />
        <SelectedGuest />
      </main>
    </>
  );
}
