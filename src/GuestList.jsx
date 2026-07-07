import { useGuest } from "./GuestContext/GuestContext";

export default function GuestList() {
  const { guestList, setSelectedGuest } = useGuest();
  //const security = guestList.map((guest) => ({ ...guest, id: guestList.indexOf(guest) }));

  return (
    <div className="allGuests">
      <div key="0" className="guestRow">
        <p>Guest Name</p>
        <p>Guest Email</p>
        <p>Guest Phone Number</p>
      </div>
      {guestList.map((guest) => {
        return (
          <div key={guest.id} className="guestRow" onClick={() => setSelectedGuest(guest)}>
            <p className="guestNames">{guest.name}</p>
            <p className="guestEmails">{guest.email}</p>
            <p className="guestPhones">{guest.phone}</p>
          </div>
        );
      })}
    </div>
  );
}
