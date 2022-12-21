import {
  IconArrowUpDown,
  IconAchievements,
  IconTags,
  IconSpeechBubbleQuestion,
} from '@stackoverflow/stacks-icons';
import { Icon } from '../../Util/convertor';
const SignupText = () => {
  return (
    <>
      <div>
        <div>Join the Stack Overflow community</div>

        <div>
          <div>{Icon(IconSpeechBubbleQuestion)}</div>
          <div>Get unstuck — ask a question</div>
        </div>
        <div>
          <div>{Icon(IconArrowUpDown)}</div>
          <div>Unlock new privileges like voting and commenting</div>
        </div>
        <div>
          <div>{Icon(IconTags)}</div>
          <div>Save your favorite tags, filters, and jobs</div>
        </div>
        <div>
          <div>{Icon(IconAchievements)}</div>
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
