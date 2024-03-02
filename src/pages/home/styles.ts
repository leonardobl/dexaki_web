import styled from "styled-components";

export const Wrapper = styled.div``


export const WrapperHeader = styled.div`
  
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
overflow-x: scroll;
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

`

export const BodyItens = styled.div`
  margin-top: 20px;
`

export const CategoryName = styled.div`
width: 100%;
padding: 0 16px;
border-bottom: 1px solid #ccc;
  p{
    font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
  }
`

export const Item = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-bottom: 1px solid #ccc;

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