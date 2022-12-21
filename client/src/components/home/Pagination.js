import { useState } from 'react';

const Pagination = () => {
  let [num, setNum] = useState(1);
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  const numPages = Math.ceil(num / pages.length);
  return (
    <div>
      <button onClick={() => setNum(num - 1)} disabled={num === 1}>
        Prev
      </button>
      {pages.map((pg, i) => (
        <button
          key={i + 1}
          onClick={() => setNum(i + 1)}
          aria-current={num === i + 1 ? 'page' : null}
        >
          {pg.page}
        </button>
      ))}
      <button onClick={() => setNum(num + 1)} disabled={num === numPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
