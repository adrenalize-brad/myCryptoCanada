import styled from 'styled-components';
   
export const StyledToggle = styled.button`

flex-direction: column;
justify-content: space-around;
width: 1.8rem;
height: 1.8rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
    outline: none;
  }

div {
    width: 1.8rem;
    height: 0.25rem;
    border-radius: 2px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 0.5px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        background: white;
      }
  
      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'scale(0.1)' : 'scale(1)'};
        background: white;
      }
  
      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        background: white;
    }
  }

`;

export const StyledMenu = styled.div`
  display:flex;
  transition: 0.3s ease;

  @media screen and (min-width:1025px){
    flex-direction:row;
    align-items:center;
  }

  @media screen and (max-width:1024px){
    flex-direction:column;
    width:100vw;
    top:70px;
    left:${({ open }) => open ? '0' : '-100vw'};
  }



`;


export const StyledNav = styled.nav`
  height:70px;
  transition: 0.3s ease;
  @media screen and (min-width:1024px){
  height:100px!important;
  }
`;



