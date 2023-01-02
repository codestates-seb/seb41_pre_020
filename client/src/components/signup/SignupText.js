import { ReactComponent as SpeechBubble } from '../../image/SpeechBubbleQuestion.svg';
import { ReactComponent as ArrowUpDown } from '../../image/ArrowUpDown.svg';
import { ReactComponent as Tags } from '../../image/Tags.svg';
import { ReactComponent as Achievements } from '../../image/Achievements.svg';
import './SignupText.css';

const SignupText = () => {
  return (
    <>
      <div className='signupInfoWrap'>
        <h1>Join the Stack Overflow community</h1>

        <div className='signupInfoItem'>
          <SpeechBubble className='signupIcon' />
          <span>Get unstuck — ask a question</span>
        </div>

        <div className='signupInfoItem'>
          <ArrowUpDown className='signupIcon' />
          <span>Unlock new privileges like voting and commenting</span>
        </div>

        <div className='signupInfoItem'>
          <Tags className='signupIcon' />
          <span>Save your favorite tags, filters, and jobs</span>
        </div>

        <div className='signupInfoItem'>
          <Achievements className='signupIcon' />
          <span>Earn reputation and badges</span>
        </div>

        <p>
          Collaborate and share knowledge with a private group for FREE.
          <br></br>
          Get Stack Overflow for Teams free for up to 50 users.
        </p>
      </div>
    </>
  );
};

export default SignupText;
