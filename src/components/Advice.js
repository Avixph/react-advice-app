import "./css/Advice.css";

function Advice({ randAdvice, searchRandAdvice }) {
  return (
    <div className="advice-container">
      <p>{randAdvice}</p>
      <p>{searchRandAdvice}</p>
    </div>
  );
}

export default Advice;
