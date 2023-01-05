import styled from "styled-components";
import { v4 as uuid } from "uuid";

const STWrapper = styled.div`
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .tabs {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
  }

  .tab {
    font-size: 1.4rem;
    width: 100%;
    color: white;
    overflow: hidden;
  }

  .tab-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: #2c3e50;
    font-weight: bold;
    cursor: pointer;
  }

  .tab-label:hover {
    background: #1a252f;
  }

  .tab-label::after {
    content: "❯";
    width: 1em;
    height: 1em;
    text-align: center;
    transition: all 0.35s;
  }

  .tab-content {
    max-height: 0;
    padding: 0 1em;
    color: #2c3e50;
    background: white;
    transition: all 0.35s;
    line-height: 1.7;
  }

  .tab-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: #2c3e50;
    cursor: pointer;
  }

  .tab-close:hover {
    background: #1a252f;
  }

  input:checked + .tab-label {
    background: #1a252f;
  }

  input:checked + .tab-label::after {
    transform: rotate(90deg);
  }

  input:checked ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
`;

const STLabel = styled.label`
  color: #bbb;
  transition: 0.3s color ease-out;

  &:hover {
    color: #fff;
  }
`;

const AccordionTab = ({
  title,
  content,
  id,
  multiple,
  style,
  radioInputName
}) => {
  return (
    <div className="tab">
      <input
        type={multiple ? "checkbox" : "radio"}
        id={id}
        name={multiple ? "" : radioInputName}
      />
      <STLabel className="tab-label" htmlFor={id}>
        {title}
      </STLabel>
      <div style={style} className="tab-content">
        {content}
      </div>
    </div>
  );
};

export function Accordion({ multiple = false, data = [], style = {} }) {
  const radioInputName = uuid();

  return (
    <STWrapper>
      <div className="tabs">
        {data.map(item => (
          <AccordionTab
            {...item}
            id={uuid()}
            multiple={multiple}
            key={uuid()}
            style={style}
            radioInputName={radioInputName}
          />
        ))}
      </div>
    </STWrapper>
  );
}
