const AppointmentSlot = (props) => {
  const { time, patientName, status } = props;

  const bgStatus = {
    booked: "bg-green-400 rounded-b-md",
    cancelled: "bg-red-400 rounded-b-md",
    open: "bg-gray-400 rounded-b-md",
  };
  return (
    <div className="m-2 border-2 border-gray-500 rounded-md pt-1">
      <div>
        {time} - {status == "open" ? "Available" : patientName}
        <div className={`${bgStatus[status]}`}>{status}</div>
      </div>
    </div>
  );
};
export default AppointmentSlot;
