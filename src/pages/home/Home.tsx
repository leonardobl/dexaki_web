import { useState } from 'react';
import * as S from './styles'
import { Nav } from '../../components/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IconPlus } from '../../assets/icons/IconPlus';

import Pizza from '../../assets/image/pizza02.png'
import { IconPizza } from '../../assets/icons/IconPizza';

export const Home = () => {
  const [activeNow, setActiveNow] = useState("pizza");
  const navigate = useNavigate()


  function addProduct(item: number) {
    navigate(`/product/${item}`)
  }

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Header>
          <S.ContentLogo>
            <S.Logo>
            </S.Logo>
            <h4>Chicago Burguers</h4>
          </S.ContentLogo>

          <S.Notification>
            <IoMdNotificationsOutline color='#333333' size={23} />
            <div className="notification">
            </div>
          </S.Notification>
        </S.Header>

        <S.ContentInfo>
          <p>Aberto hoje às 17h30</p>
          <span></span>
          <p>Pedido min R$ 7,00</p>
        </S.ContentInfo>

        <S.MenuTab>
          <ul>
            <li>
              <div>
                <IconPizza />
              </div>
              <span>Pizzas</span>
            </li>
            <li>
              <div>
                <IconPizza />
              </div>
              <span>Hamburguer</span>
            </li>
            <li>

              <S.Link
                isActive={activeNow == "Bebidas" ? true : false}
                onClick={() => setActiveNow("Bebidas")}
                href="#Bebidas">Bebidas
              </S.Link>
            </li>
            <li>
              <S.Link
                isActive={activeNow == "Combos" ? true : false}
                onClick={() => setActiveNow("Combos")}
                href="#Combos">Combos
              </S.Link>
            </li>
            <li>

              <S.Link
                isActive={activeNow == "Batata Fritas" ? true : false}
                onClick={() => setActiveNow("BatataFritas")}
                href="#BatataFritas">Batata Fritas
              </S.Link>
            </li>
          </ul>
        </S.MenuTab>
      </S.WrapperHeader>

      <S.WrapperDestaques>
        <h4>Os mais pedidos</h4>
        <div className='content_itens'>
          <div className="destaque_item">
            <img src={Pizza} alt="" />
            <p>Porção de fritas P</p>
            <div className='price_destaque'>
              <span>R$ 36,00</span>
              <span>R$ 26,00</span>
            </div>
          </div>

          <div className="destaque_item">
            <img src={Pizza} alt="" />
            <p>Porção de fritas M</p>
            <div className='price_destaque'>
              <span>R$ 36,00</span>
              <span>R$ 26,00</span>
            </div>
          </div>

          <div className="destaque_item">
            <img src={Pizza} alt="" />
            <p>Porção de fritas M</p>
            <div className='price_destaque'>
              <span>R$ 36,00</span>
              <span>R$ 26,00</span>
            </div>
          </div>

          <div className="destaque_item">
            <img src={Pizza} alt="" />
            <p>Titulo do item</p>
            <div className='price_destaque'>
              <span>R$ 36,00</span>
              <span>R$ 26,00</span>
            </div>
          </div>

          <div className="destaque_item">
            <img src={Pizza} alt="" />
            <p>Titulo do item</p>
            <div className='price_destaque'>
              <span>R$ 36,00</span>
              <span>R$ 26,00</span>
            </div>
          </div>
        </div>
      </S.WrapperDestaques>

      <S.WrapperItens>

        <S.BodyItens id='pizza'>


          <S.ContentItens>
            <S.Item onClick={() => addProduct(1)}>
              <div className="content-image">
                <img src="" alt="" />
              </div>
              <div className='description'>
                <S.TitleItem>X-Tudo</S.TitleItem>
                <S.Description>
                  <p>Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar,</p>
                </S.Description>

                <div>
                  <S.Price>R$ 29,00</S.Price>
                  <IconPlus />
                </div>
              </div>

              <div className='border-right'></div>
            </S.Item>

            <S.Item>
              <div className="content-image">
                <img src="" alt="" />
              </div>
              <div className='description'>
                <S.TitleItem>X-Tudo</S.TitleItem>
                <S.Description>
                  <p>Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar,</p>
                </S.Description>
                <div>
                  <S.Price>R$ 29,00</S.Price>
                  <IconPlus />
                </div>
              </div>
              <div className='border-right'></div>
            </S.Item>

            <S.Item>
              <div className="content-image">
                <img src="" alt="" />
              </div>
              <div className='description'>
                <S.TitleItem>X-Tudo</S.TitleItem>
                <S.Description>
                  <p>Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar,</p>
                </S.Description>
                <div>
                  <S.Price>R$ 29,00</S.Price>
                  <IconPlus />
                </div>
              </div>
              <div className='border-right'></div>
            </S.Item>

            <S.Item>
              <div className="content-image">
                <img src="" alt="" />
              </div>
              <div className='description'>
                <S.TitleItem>X-Tudo</S.TitleItem>
                <S.Description>
                  <p>Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar,</p>
                </S.Description>
                <div>
                  <S.Price>R$ 29,00</S.Price>
                  <IconPlus />
                </div>
              </div>
              <div className='border-right'></div>
            </S.Item>

            <S.Item>
              <div className="content-image">
                <img src="" alt="" />
              </div>
              <div className='description'>
                <S.TitleItem>X-Tudo</S.TitleItem>
                <S.Description>
                  <p>Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar,</p>
                </S.Description>
                <div>
                  <S.Price>R$ 29,00</S.Price>
                  <IconPlus />
                </div>
                <div>

                </div>
              </div>
              <div className='border-right'></div>
            </S.Item>
          </S.ContentItens>
        </S.BodyItens>

        {/* <S.BodyItens id='hamburgueres'>
          <S.CategoryName >
            <p>Hamburgueres</p>
          </S.CategoryName>

          <S.Item>
            <div>
              <S.TitleItem>X-Tudo</S.TitleItem>
              <S.Description>
                Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar, molho bbq e muito bacon duas porções
              </S.Description>
              <S.Price>R$ 29,00</S.Price>
            </div>
            <img src="" alt="" />
          </S.Item>

          <S.Item>
            <div>
              <S.TitleItem>X-Tudo</S.TitleItem>
              <S.Description>
                Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar, molho bbq e muito bacon duas porções
              </S.Description>
              <S.Price>R$ 29,00</S.Price>
            </div>
            <img src="" alt="" />
          </S.Item>

          <S.Item>
            <div>
              <S.TitleItem>X-Tudo</S.TitleItem>
              <S.Description>
                Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar, molho bbq e muito bacon duas porções
              </S.Description>
              <S.Price>R$ 29,00</S.Price>
            </div>
            <img src="" alt="" />
          </S.Item>

          <S.Item>
            <div>
              <S.TitleItem>X-Tudo</S.TitleItem>
              <S.Description>
                Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar, molho bbq e muito bacon duas porções
              </S.Description>
              <S.Price>R$ 29,00</S.Price>
            </div>
            <img src="" alt="" />
          </S.Item>

          <S.Item>
            <div>
              <S.TitleItem>X-Tudo</S.TitleItem>
              <S.Description>
                Pão de batata com beterraba (vermelho), delicioso blend suíno 100g, queijo tipo cheddar, molho bbq e muito bacon duas porções
              </S.Description>
              <S.Price>R$ 29,00</S.Price>
            </div>
            <img src="" alt="" />
          </S.Item>
        </S.BodyItens> */}

      </S.WrapperItens>

      <Nav />
    </S.Wrapper>
  )
}

