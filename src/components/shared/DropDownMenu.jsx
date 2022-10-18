import styled from "styled-components";

const DROPDOWN_MENU_ID = "drop-down-menu";

const STWrapper = styled.div`
  position: relative;

  z-index: 100;
  padding: 1rem;

  background-color: steelblue;

  &:hover div#${DROPDOWN_MENU_ID} {
    top: 100%;
    padding: 1rem;
    bottom: 100%;
  }
`;

const STMenu = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 100%;

  width: 90%;
  z-index: 50;

  padding: 1rem;

  background-color: slateblue;
  transition: top 0.6s;
`;

export function DropDownMenu({ menuConfig }) {
  return (
    <>
      {/* <button>Open</button> */}
      <STWrapper>
        {/* <div id={DROPDOWN_MENU_ID}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ipsa
        esse dolores ipsum et doloribus aut voluptatibus nemo labore
        exercitationem. Eos consectetur beatae cupiditate. Necessitatibus
        provident totam ea hic quae.
      </div> */}
        <STMenu id={DROPDOWN_MENU_ID}>
          {menuConfig.map(item => (
            <a>{item}</a>
          ))}
        </STMenu>
      </STWrapper>
    </>
  );
}
