import { changeLanguage } from "i18next";
import styled from "styled-components";

const STForm = styled.form`
  select,
  option {
    font-size: 1.5rem;
    background-color: #000;
    padding: 0.5rem;
    color: #fffc;
    border-radius: 5px;
  }

  option {
    padding: 1rem;
  }
`;

export function LanguageBox() {
  return (
    <STForm onChange={e => changeLanguage(e.target.value)}>
      <select name="lang" id="lang">
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Español</option>
      </select>
    </STForm>
  );
}
