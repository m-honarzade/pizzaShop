const Footer = (props) => {
  const isOpen = props.hour >= props.openHour && props.hour <= props.closeHour;
  return (
    <footer className="mt-16 mb-16 text-center">
      {isOpen ? (
        <>
          <p>
            {` we are open from ${props.openHour}:00 to ${props.closeHour}:00. Come visit us or order
        online.`}
          </p>
          <button className="mt-4 bg-[#edc84b] py-2 px-8">Order now</button>
        </>
      ) : (
        <p>{`we are happy to welcome you between ${props.openHour}:00 and ${props.closeHour}:00`}</p>
      )}
    </footer>
  );
};

export default Footer;
