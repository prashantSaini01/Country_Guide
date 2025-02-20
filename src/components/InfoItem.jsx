// InfoItem Component for CountryDetails
const InfoItem = ({ label, value }) => (
    <p className="text-white">
      <span className="text-gray-400 font-semibold">{label}: </span>
      {value}
    </p>
  );



  export default InfoItem;