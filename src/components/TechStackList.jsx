import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { Icon } from "./shared/Icon";
const STIconListItem = styled.li`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  font-size: 1.3rem;

  padding: 1rem;
  margin: 0.3rem;

  background-color: var(--secondary-color);
  border-radius: 10px;
`;

export function TechStackList({ items }) {
  return (
    <ul>
      {items.map(tech => (
        <STIconListItem key={uuid()}>
          <Icon title={tech} />
          {tech.toUpperCase()}
        </STIconListItem>
      ))}
    </ul>
  );
}
