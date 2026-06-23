const AppointmentSlot = (props) => {
  const { time, patientName, status } = props;

  const bgStatus = {
    booked: "bg-green-500",
    cancelled: "bg-red-500",
    open: "bg-gray-400",
  };
  return (
    <div className="m-2 border border-black">
      <div>
        {time} - {status == "open" ? "Available" : patientName}
        <div className={`${bgStatus[status]}`}>{status}</div>
      </div>
    </div>
  );
};
export default AppointmentSlot;
