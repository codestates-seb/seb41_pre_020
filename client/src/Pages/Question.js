import SidebarLeft from '../components/aside/SidebarLeft';
import SidebarRight from '../components/aside/SidebarRight';

const Question = () => {
  return (
    <div>
      <nav>
        <SidebarLeft />
      </nav>
      <div>
        Body
        <div>
          Subject
          <div>
            <h2>question title</h2>
            <span>Asked</span>
            <span>today</span>
            <span>Viewed</span>
            <span>13 times</span>
          </div>
          <div>
            <div href='/question'>
              <button type='button' color='blue'>
                Ask Question
              </button>
            </div>
          </div>
        </div>
        <section>
          main section
          <div>
            left side main
            <div>
              count vote
              <button aria-label='vote up'>
                <svg width='36' height='36' viewBox='0 0 36 36'>
                  <path d='M2 25h32L18 9 2 25Z'></path>
                </svg>
              </button>
              <div>0</div>
              <button aria-label='vote down'>
                <svg width='36' height='36' viewBox='0 0 36 36'>
                  <path d='M2 11h32L18 27 2 11Z'></path>
                </svg>
              </button>
            </div>
          </div>
          <div>Question body</div>
          <div>Tags</div>
          <div>
            author info
            <div>author pic</div>
            <div>author name</div>
          </div>
          <div>Add a commnet</div>
        </section>
        <div>
          <SidebarRight />
        </div>
      </div>
    </div>
  );
};

export default Question;
