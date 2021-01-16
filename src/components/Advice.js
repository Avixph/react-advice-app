import "./css/Advice.css";

function Advice({ randAdvice, searchRandAdvice }) {
  console.log(searchRandAdvice);
  console.log(searchRandAdvice);
  return (
    <div className="advice-container">
      <p>
        {randAdvice}
        {searchRandAdvice}
      </p>
    </div>
  );
}

export default Advice;
