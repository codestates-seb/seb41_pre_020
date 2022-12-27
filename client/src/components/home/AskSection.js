const AskSection = () => {
  return (
    <div>
      <div>
        <span>All Questions</span>
        <div href="/question">
            <button type='button'
            color='blue'>Ask Question</button>
        </div>
      </div>
      <div>
        <button type='button'>Newest</button>
        <button type='button'>Vote</button>
      </div>
    </div>
  );
};

export default AskSection;
