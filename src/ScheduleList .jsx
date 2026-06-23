import AppointmentSlot from "./AppointmentSlot";
import { useState, useEffect } from "react";
import NewAppointment from "./NewAppointment";
import axios from "axios";

const ScheduleList = () => {
  const [activeFilterStatus, setActiveFilterStatus] = useState("All");
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const times = [
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
        ];
        const statuses = ["booked", "open", "cancelled"];

        const mapped = response.data.map((user, index) => ({
          id: user.id,
          patientName: user.name,
          time: times[index] || `${index} :00`,
          status: statuses[index % 3],
        }));
        setAppointments(mapped);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log("appointments:", appointments);
  }, [appointments]);

  useEffect(() => {
    getUsers();
  }, []);

  const filteredSlots = appointments.filter((item) => {
    if (activeFilterStatus === "All") return true;
    return item.status === activeFilterStatus;
  });

  const slotsList = filteredSlots.map((appointment) => (
    <AppointmentSlot
      key={appointment.id}
      patientName={appointment.patientName}
      time={appointment.time}
      status={appointment.status}
    />
  ));

  return (
    <div>
      <h3>Status tracker:</h3>
      <button
        className="mx-2 border border-black  rounded-md w-24 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={() => setActiveFilterStatus("booked")}
      >
        Booked
      </button>
      <button
        className="mx-2 border border-black  rounded-md w-24 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={() => setActiveFilterStatus("open")}
      >
        Open
      </button>
      <button
        className="mx-2 border border-black  rounded-md w-24 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={() => setActiveFilterStatus("cancelled")}
      >
        Cancelled
      </button>
      <button
        className="mx-2 border border-black  rounded-md w-24 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={() => setActiveFilterStatus("All")}
      >
        All
      </button>

      {isLoading ? <div>loading... </div> : <div>{slotsList}</div>}
      <div>Add new appointment</div>
      <NewAppointment
        appointments={appointments}
        onAdd={(newSlot) => setAppointments([...appointments, newSlot])}
      />
    </div>
  );
};
export default ScheduleList;
