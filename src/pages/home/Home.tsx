import { useState } from 'react';
import * as S from './styles'
import { Nav } from '../../components/Nav/Nav';

export const Home = () => {
  const [activeNow, setActiveNow] = useState("pizza");


  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Header>
          <S.ContentLogo>
            <S.Logo>
            </S.Logo>
            <h4>NOME - delivery</h4>
          </S.ContentLogo>
        </S.Header>

        <S.ContentInfo>
          <p>Aberto hoje às 17h30</p>
          <span></span>
          <p>Pedido min R$ 7,00</p>
        </S.ContentInfo>

        <S.MenuTab>
          <ul>
            <li>
              <S.Link
                isActive={activeNow == "pizza" ? true : false}
                onClick={() => setActiveNow("pizza")}
                href="#pizza"
              >
                Pizzas
              </S.Link>
            </li>
            <li>
              <S.Link
                isActive={activeNow == "hamburgueres" ? true : false}
                onClick={() => setActiveNow("hamburgueres")}
                href="#hamburgueres">Hamburguers
              </S.Link>
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
        <h4>Destaques</h4>
        <div className='content_itens'>
          <div className="destaque_item">
            <img src="" alt="" />
            <p>Titulo do item</p>
            <div className='price_destaque'>
              <span>R$ 36,00</span>
              <span>R$ 26,00</span>
            </div>
          </div>

          <div className="destaque_item">
            <img src="" alt="" />
            <p>Titulo do item</p>
            <div className='price_destaque'>
              <span>R$ 36,00</span>
              <span>R$ 26,00</span>
            </div>
          </div>

          <div className="destaque_item">
            <img src="" alt="" />
            <p>Titulo do item</p>
            <div className='price_destaque'>
              <span>R$ 36,00</span>
              <span>R$ 26,00</span>
            </div>
          </div>

          <div className="destaque_item">
            <img src="" alt="" />
            <p>Titulo do item</p>
            <div className='price_destaque'>
              <span>R$ 36,00</span>
              <span>R$ 26,00</span>
            </div>
          </div>

          <div className="destaque_item">
            <img src="" alt="" />
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
          <S.CategoryName>
            <p>Pizzas</p>
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


        </S.BodyItens>

        <S.BodyItens id='hamburgueres'>
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
        </S.BodyItens>

      </S.WrapperItens>

      <Nav />
    </S.Wrapper>
  )
}

