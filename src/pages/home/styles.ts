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
  background-color: #FFA500;
  border-radius: 4px 0 0 4px;
  padding: 12px 0;

  h4 {
    margin-left: 16px;
    font-size: 13px;
    font-weight: 700;
    line-height: 25px;
    color: #fff;
    margin-bottom: 6px;
  }

  .content_itens {
    display: flex;
    align-items: center;
    gap: 24px;
    overflow-x: scroll;
    padding: 0 16px;

    .destaque_item {
      display: flex;
      flex-direction: column;

      p {
        font-size: 10px;
        font-weight: 400;
        color: #fff;
        margin-top: 7px;
      }

      img, svg {
        width: 120px;
        height: 96px;
        border-radius: 5px;
        
        background-position: center;
        background-size: cover;
      }

      .price_destaque {
        display: flex;
        align-items: center;
        gap: 8px;

        span:nth-child(1){
          color: #fff;
          font-size: 10px;
          font-weight: 500;
          text-decoration: line-through;
          opacity: .7;
        }

        span:nth-child(2){
          color: #fff;
          font-size: 10px;
          font-weight: 700;
        }
      }
    }
  }

`

export const Header = styled.div`
  width: 100%;
  background-color: #fff;
  /* background-color: ${({theme})=> theme.secondary[200]}; */
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  h4 {
    width: 63px;
    font-size: 13.13px;
    font-weight: 700;
    color: #333;
    font-family: 'Montserrat', sans-serif;
  }  
`
export const Logo = styled.div`
  height: 42px;
  width: 42px;
  background-color: #333;
  /* border-radius: 50%; */
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
    font-family: 'Montserrat', sans-serif;
  }
  

  p {
    font-size: 10px;
    line-height: 8px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    color: ${({theme})=> theme.secondary[700]};
  }
`

export const MenuTab = styled.div`
overflow-x: auto;
white-space: nowrap;
border-bottom: .5px solid #ccc;


ul {
  padding: 0 16px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 25px;
  padding-bottom: 25px;

  li {
    text-decoration: none;
    
    
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 52px;
      width: 52px;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }

    span {
      margin-top: 8px;
      font-size: 14px;
    }
  }
}
`
interface ILinkProps {
  isActive: boolean
}

export const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  
  border-radius: 50%;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  position: relative;

  .notification {
    position: absolute;
    top: 2px;
    right: 2px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #FF6B00;
  }

`

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

export const ContentItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  border: 1px solid #ccc;
  margin: 0 18px;
  border-radius: 8px;
  height: 100px;

 
  .content-image {
    border-radius: 7px;
    width: 150px;
    height: 100%;
    /* height: 96px; */
  
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: #ccc;
    }
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
    padding: 10px 10px;
    
    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 10.11px;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  
  }

  .border-right {
    background-color: ${ props => props.theme.primary[800]};
    /* background-color: red; */
    height: 100%;
    /* height: 100%; */
  
    width: 16px;
    border-radius: 0px 7px 7px 0px;
  }
`

export const TitleItem = styled.p`
  font-size: 12.93px;
  color: ${({theme})=> theme.secondary[700]};
  font-weight: 600;
  margin-bottom: 5px;
`

export const Description = styled.p`
  font-size: 12px;
  color: #595959;
  font-weight: 300;
  margin-bottom: 4.5px;
`

export const Price = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: 700;
`