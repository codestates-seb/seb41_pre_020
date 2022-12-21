// const QuestionMain = () => {
//   const themeState = useSelector((state) => state.themeSlice).theme;

import Main from '../components/home/Main';
import SidebarLeft from '../components/aside/SidebarLeft';
import SidebarRight from '../components/aside/SidebarRight';

//   const [page, setPage] = useState(1);
//   const [size, setSize] = useState(15);

// useEffect(() => {
//     axios
//       .get(`/questions?size=${size}&page=${page}`)
//       .then((res) => {
//         //pagination
//         setTotal(Number(res.data.pageInfo.totalElements));
//         setPage(page);
//         setSize(size);
//         //card에 뿌릴 data
//         setData(res.data.data.sort((a, b) => b.questionId - a.questionId));

//         localStorage.setItem(
//           'data',
//           JSON.stringify(
//             res.data.data.filter((el) => delete el.questionWriter.userPassword)
//           )
//         );
//       })
//       .catch((err) => err);
//   }, [page, size]);

const Home = () => {
  return (
    <div>
      <div>
        <SidebarLeft />
        <div>
          <div>
            <div>
              <Main />
            </div>
          </div>
        </div>
        <SidebarRight />
      </div>
    </div>
  );
};

export default Home;
