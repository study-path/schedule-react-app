import { useState } from "react";
const NewAppointment = (props) => {
  const { appointments, onAdd } = props;
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("booked");

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    let slotId = appointments[appointments.length - 1].id;

    const newSlot = {
      id: slotId + 1,
      patientName: name,
      time: time,
      status: status,
    };
    onAdd(newSlot);

    setTime("");
    setName("");
    setStatus("booked");
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleAppointmentSubmit(e)}
        className="border border-black "
      >
        <input
          className="px-2 my-1 bg-gray-400 rounded-md w-80 placeholder-gray-800"
          placeholder="input time..."
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br></br>
        <input
          className="px-2 my-1  bg-gray-400 rounded-md w-80 placeholder-gray-800"
          type="text"
          placeholder="input name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <select
          id="status"
          className="px-2 my-1 rounded-md w-80"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="booked">Booked </option>
          <option value="open">Open</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <br></br>
        <button className="mx-2 px-2 border border-green-500 rounded-md hover:bg-green-500">
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewAppointment;
