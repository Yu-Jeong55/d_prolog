import { useState } from 'react';
import styled from 'styled-components';

const TagsInput = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 40px;
  padding: 12px;
  width: ${(props) => props.width || '100%'};
  background-color: ${(props) => props.backgroundcolor || '#f5f5f5'};
  border-radius: 10px;

  > ul {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-right: 8px;

    > .tag {
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 10px;
      font-size: 14px;
      color: rgb(245, 245, 245);
      background: #7077a1;
      border-radius: 13px;

      > .tag-close-icon {
        display: block;
        width: 13px;
        height: 14px;
        line-height: 13px;
        text-align: center;
        font-size: 10px;
        margin-left: 5px;
        border-radius: 45%;
        color: rgb(54, 48, 98);
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    font-size: 13px;
    background-color: transparent;
    padding: 5px;

    &:focus {
      outline: none;
    }
  }
`;

function InputTag({ width, bgcolor, initialTags = [], onTagsChange }) {
  const [tags, setTags] = useState(initialTags);

  // 태그 삭제
  const removeTags = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    onTagsChange?.(newTags);
  };

  // 태그 추가
  const addTags = (event) => {
    if (event.key !== 'Enter') return;

    const value = event.target.value.trim();
    if (!value) return;

    // 중복 태그 방지
    if (tags.includes(value)) {
      event.target.value = '';
      return;
    }

    const newTags = [...tags, value];
    setTags(newTags);
    onTagsChange?.(newTags);
    event.target.value = '';
  };

  return (
    <TagsInput width={width} backgroundcolor={bgcolor}>
      <ul>
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-content" onClick={() => removeTags(index)}>
              {tag}
            </span>
          </li>
        ))}
      </ul>
      <input type="text" onKeyDown={addTags} placeholder="Press enter to add tags" />
    </TagsInput>
  );
}

export default InputTag;
