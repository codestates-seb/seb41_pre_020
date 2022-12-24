import styled from "styled-components";

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 164px;
  flex-shrink: 0;

  border-right: 1px solid lightgrey;
`;

const SideBox = styled.div`
  margin: 0 0 8px;
  padding: 24px 0 0;
  position: sticky;
  overflow-y: auto;
  top: 50px;
  max-height: calc(100vh - 50px);
`;

const NavtoPages = styled.ol`
  padding: 0;
  margin: 0;

  > li {
    margin: 4px 4px 4px 8px;
    width: 164px;
    height: 34px;
    text-align: -moz-center;
  &:hover {
      background: #e3e6e8;
    }
    /* &:focus {
            outline: none;
            box-shadow: 0 0 0 3px #d3e5f2;
        } */
    &.is-selected {
      background: hsla(27, 90%, 55%, 1);
      color: #ffffff;
      &:hover {
        background: #da680b;
      }
    } 
  }
  .pageName p {
    padding-left: 20px;
  }
  cursor: pointer;
  }
`;

export default function SidebarLeft() {
  const OnClick = (e) => {
    if (e.target.classList.value === "is-selected") {
      e.target.classList.remove("is-selected");
    } else {
      e.target.classList.add("is-selected");
    }
  };

  return (
    <SideContainer>
      <SideBox>
        <nav>
          <NavtoPages>
            <li onClick={OnClick}>
              <a href="/">
                <p>Home</p>
              </a>
            </li>

            <li>
              <span>PUBLIC</span>
            </li>
            <li onClick={OnClick}>
              <a href="/question" className="pageName">
                <p>Questions</p>
              </a>
            </li>
            <li onClick={OnClick}>
              <a href="/tags" className="pageName">
                <p>Tags</p>
              </a>
            </li>
            <li href="/users" onClick={OnClick}>
              <a href="/users" className="pageName">
                <p>Users</p>
              </a>
            </li>
          </NavtoPages>
        </nav>
      </SideBox>
    </SideContainer>
  );
}
