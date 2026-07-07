import { useGuest } from "./GuestContext/GuestContext";

export default function SelectedGuest() {
  const { selectedGuest, setSelectedGuest } = useGuest();
  if (selectedGuest) {
    const allGuestInfo = [];
    for (const [key, value] of Object.entries(selectedGuest)) {
      allGuestInfo.push(key);
      allGuestInfo.push(value);
    }

    return (
      <div className="selectedGuest">
        <p>This is more info on current guest:</p>
        {allGuestInfo.map((guestInfo) => {
          if (allGuestInfo.indexOf(guestInfo) % 2 == 0) {
            return <p key={allGuestInfo.indexOf(guestInfo)}>{guestInfo}: </p>;
          } else {
            return <p key={allGuestInfo.indexOf(guestInfo)}>{guestInfo}</p>;
          }
        })}
        <button onClick={() => setSelectedGuest()}>Go Back</button>
      </div>
    );
  }
}
