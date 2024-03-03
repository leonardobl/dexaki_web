import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 100px;
`

export const WrapperHeader = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
`

export const WrapperItens = styled.div``

export const WrapperDestaques= styled.div`
  margin-top: 140px;
  
  margin-bottom: 16px;

  h4 {
    margin-left: 16px;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    color: ${({theme})=> theme.secondary[700]};
    margin-bottom: 6px;
  }

  .content_itens {
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: scroll;
    padding: 0 16px;

    .destaque_item {
      display: flex;
      flex-direction: column;

      p {
        font-size: 14px;
        font-weight: 600;
        margin-top: 4px;
      }

      img, svg {
        height: 130px;
        width: 130px;
        border-radius: 5px;
      }

      .price_destaque {
        display: flex;
        align-items: center;
        gap: 8px;

        span:nth-child(1){
          color: #5a5a5a;
          font-size: 12px;
          font-weight: 500;
          text-decoration: line-through;
        }

        span:nth-child(2){
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
  }

`

export const Header = styled.div`
  width: 100%;
  background-color: ${({theme})=> theme.secondary[200]};
  padding: 8px 16px;
`

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h4 {
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }  
`
export const Logo = styled.div`
  height: 36px;
  width: 36px;
  background-color: #fff;
  border-radius: 50%;
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: .5px solid #ccc;

  span {
    height: 4px;
    width: 4px;
    background-color: #333;
    border-radius: 50%;
  }
  

  p {
    font-size: 10px;
    line-height: 8px;
    font-weight: 500;
    color: ${({theme})=> theme.secondary[700]};
  }
`

export const MenuTab = styled.div`
overflow-x: auto;
white-space: nowrap;
border-bottom: .5px solid #ccc;


ul {
  padding: 0 16px;
  height: 40px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 16px;

  li {
    text-decoration: none;
    
  }
}
`


interface ILinkProps {
  isActive: boolean
}

export const Link = styled.a<ILinkProps>`
  color: ${(props) => props.isActive ? props.theme.Tertiary[700] : props.theme.secondary[700] };
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom:  ${(props) => props.isActive ? `1px solid ${props.theme.Tertiary[700]}` : '' };
  transition: all 0.2s ease-in-out;

  &:hover {

  }

`

export const BodyItens = styled.div`
  
`

export const CategoryName = styled.div`

width: 100%;
padding: 0 16px;
border-bottom: 1px solid #ccc;

p{
  margin-top: 16px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
}
`

export const Item = styled.div`
  padding: 16px;
  display: flex;
  border-bottom: 1px solid #ccc;

  div {
    width: 100%;
   
    display: flex;
    flex-direction: column;
    gap: 5px;
  
  }

  img {
    width: 70px;
    height: 60px;
    border-radius: 4px;
    background-color: #ccc;
  }

`

export const TitleItem = styled.p`
  font-size: 14px;
  color: ${({theme})=> theme.secondary[700]};
  font-weight: 600;
  
`

export const Description = styled.p`
  font-size: 12px;
  color: #595959;
  font-weight: 400;
`

export const Price = styled.p`
  font-size: 14px;
  color: #069;
  font-weight: 700;
`