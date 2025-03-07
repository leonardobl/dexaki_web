import * as S from "./styles";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useMainMenu } from "./useMainMenu";
import { ComponentProps, useEffect } from "react";
import { IParserCategory } from "../../types/product";

interface IMainMenuProps extends ComponentProps<"div"> {
  categorys: IParserCategory[];
}

export const MainMenu = ({ categorys }: IMainMenuProps) => {
  const { activeNow, setActiveNow, navigate } = useMainMenu();

  useEffect(() => {
    categorys?.length && setActiveNow(categorys[0]?.name);
  }, [categorys]);

  return (
    <S.Container>
      <S.WrapperHeader>
        <S.Header>
          <S.ContentLogo>
            <S.Logo></S.Logo>
            <h4>Chicago Burguers</h4>
          </S.ContentLogo>

          <S.Notification onClick={() => navigate("/notification")}>
            <IoMdNotificationsOutline color="#333333" size={23} />
            <div className="notification"></div>
          </S.Notification>
        </S.Header>

        <S.WrapperInfo>
          <S.ContentInfo>
            <p>Aberto hoje às 17h30</p>
            <span></span>
            <p>Pedido min R$ 7,00</p>
          </S.ContentInfo>

          <p onClick={() => navigate("/profileCompany")}>Perfil da Loja</p>
        </S.WrapperInfo>

        <S.MenuTab>
          <ul>
            {categorys?.length > 0 &&
              categorys?.map((i) => (
                <S.Link
                  key={`${Math.random()}`}
                  data-status={activeNow === i?.name ? "active" : "inactive"}
                  onClick={() => setActiveNow(i?.name)}
                  href={`#${i.name}`}
                >
                  <li>
                    <div>{i.icon}</div>
                    <p>{i.name}</p>
                  </li>
                </S.Link>
              ))}
          </ul>
        </S.MenuTab>
      </S.WrapperHeader>
    </S.Container>
  );
};
