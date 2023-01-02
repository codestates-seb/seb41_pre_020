import { useState } from 'react';
import styled from 'styled-components';

export const TagsInput = styled.div`
  margin: 4px 0;
  display: flex;
  padding: 0 2px;
  padding-right: 9.1px;
  cursor: text;
  overflow: hidden;
  height: auto;
  min-height: 37px;
  background-color: white;
  width: 100%;
  border: 1px solid #babfc4;
  border-radius: 3px;
  align-items: center;

  & input {
    display: inline-block;
    width: 19px;
    min-width: 100%;
    padding-left: calc(0.7em - 2px) !important;
    height: 29px;
    box-sizing: content-box;
    border: none;
    box-shadow: none;
    outline: 0;
  }

  & #tags {
    display: flex;
    padding-left: 2px;

    & .tag {
      display: inline-flex;
      align-items: center;
      margin: 2px;
      font-size: 12px;
      line-height: 22px;
      padding: 0 4px;
      background: #e1ecf4;
      border-radius: 3px;
      color: #39739d;
      cursor: default;
    }

    & .tag-close-icon {
      display: flex; 
      align-items: center;
      cursor: pointer;
      margin-left: 4px;
      padding: 1px;
      border-radius: 3px;
      background-color: transparent;

      &:hover {
        background-color: #39739d;

        & path {
          fill: #e1ecf4 !important;
        }
      }
    }
  }

  &:focus-within {
    outline: none;
    border-color: #6bbbf7;
    box-shadow: 0 0 0 3px #dae5f1;
  }
`;

export const Tag = () => {
  // const selectedTags = (tags) => console.log(tags);
  const initialTags = ['CodeStates', 'kimcoding'];

  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    const filtered = tags.filter((el) => el === event.target.value);
    if (event.target.value !== '' && filtered.length === 0) {
      setTags([...tags, event.target.value]);
      // selectedTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  return (
    <TagsInput>
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            {tag}
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              <svg
                xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon iconClearSm pe-none"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"
                  fill="#39739D"
                ></path>
              </svg>
            </span>
          </li>
        ))}
      </ul>
      <input
        className="tag-input"
        type="text"
        onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
        placeholder="e.g. (css sql-server asp.net-mvc)"
      />
    </TagsInput>
  );
};
