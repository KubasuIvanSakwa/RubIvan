// eslint-disable-next-line react/prop-types
function Brief({dates, header}) {
 
  return (
    <div className="breifing">
      <h3>{header}</h3>
      <p>{dates}</p>
    </div>
  );
}

export default Brief;

