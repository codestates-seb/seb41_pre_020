import { ReactComponent as SpeechBubble } from '../../image/SpeechBubbleQuestion.svg';
import { ReactComponent as ArrowUpDown } from '../../image/ArrowUpDown.svg';
import { ReactComponent as Tags } from '../../image/Tags.svg';
import { ReactComponent as Achievements } from '../../image/Achievements.svg';

const SignupText = () => {
  return (
    <>
      <div>
        <div>Join the Stack Overflow community</div>

        <div>
          <SpeechBubble />
          <div>Get unstuck — ask a question</div>
        </div>
        <div>
          <ArrowUpDown />
          <div>Unlock new privileges like voting and commenting</div>
        </div>
        <div>
          <Tags />
          <div>Save your favorite tags, filters, and jobs</div>
        </div>
        <div>
          <Achievements />
          <div>Earn reputation and badges</div>
        </div>

        <div>
          Collaborate and share knowledge with a private group for FREE.
          <br></br>
          Get Stack Overflow for Teams free for up to 50 users.
        </div>
      </div>
    </>
  );
};

export default SignupText;
