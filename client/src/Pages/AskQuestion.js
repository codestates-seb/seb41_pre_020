// import { showToast } from '../components/toast/Toast';
import { Editor } from '../components/editor/Editor';

const AskQuestion = () => {
  return (
    <div>
      <h1>Ask a public question</h1>
      <div>
        <h2>Writing a good question</h2>
        <p>
          You’re ready to{' '}
          <a href='https://stackoverflow.com/help/how-to-ask'>ask</a> a{' '}
          <a href='https://stackoverflow.com/help/on-topic'>
            programming-related question
          </a>{' '}
          and this form will help guide you through the process.
        </p>
        <p>
          Looking to ask a non-programming question? See{' '}
          <a href='https://stackexchange.com/sites#technology-traffic'>
            the topics here
          </a>{' '}
          to find a relevant site.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <div>
        <h5>Title</h5>
        <p>
          Be specific and imagine you’re asking a question to another person.
        </p>
        <div>
          <input
            id='title'
            name='title'
            type='text'
            maxLength='300'
            placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
            data-min-length='15'
            data-max-length='150'
            // onChange={onChangeTitle}
          />
        </div>
      </div>
      <div>
        <h5>What are the details of your problem?</h5>
        <p>
          Introduce the problem and expand on what you put in the title. Minimum
          50 characters.
        </p>
        <Editor height={'300px'} />
      </div>
      <div>
        <button
          type='button'
          autoComplete='off'
          // onClick={onClickSubmit}
        >
          Review your question
        </button>

        <div>
          <button
            type='button'
            // onClick={onClickDiscard}
          >
            Discard draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
