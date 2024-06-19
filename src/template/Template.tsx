import React from 'react'
import * as S from './styles'

import { useState } from 'react';

import { Nav } from '../components/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IconPlus } from '../assets/icons/IconPlus';

import { CiPizza } from "react-icons/ci";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDrink } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";

export const Template = () => {

  const [activeNow, setActiveNow] = useState("Pizzas");
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

          <S.Notification onClick={() => navigate('/notification')}>
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
            <S.Link
              isActive={activeNow == "Pizzas" ? true : false}
              onClick={() => setActiveNow("Pizzas")}
              href="#Pizzas"
            >
              <li>
                <div>
                  <CiPizza size={22} />
                </div>
                <p>Pizzas</p>
              </li>
            </S.Link>

            <S.Link
              isActive={activeNow == "Hamburguer" ? true : false}
              onClick={() => setActiveNow("Hamburguer")}
              href="#Hamburguer"
            >
              <li>
                <div>
                  <LiaHamburgerSolid size={22} />
                </div>
                <p>Hamburguer</p>
              </li>
            </S.Link>

            <S.Link
              isActive={activeNow == "Bebidas" ? true : false}
              onClick={() => setActiveNow("Bebidas")}
              href="#Bebidas"
            >
              <li>
                <div>
                  <BiDrink size={22} />
                </div>
                <p>Bebidas</p>
              </li>
            </S.Link>

            <S.Link
              isActive={activeNow == "Combos" ? true : false}
              onClick={() => setActiveNow("Combos")}
              href="#Combos"
            >
              <li>
                <div>
                  <IoFastFoodOutline size={22} />
                </div>
                <p>Combos</p>
              </li>
            </S.Link>

          </ul>
        </S.MenuTab>
      </S.WrapperHeader>



      <S.WrapperItens>
        <S.BodyItens id='Pizzas'>
          <S.ContentItens>
            <S.Item onClick={() => addProduct(1)}>
              <div className="content-image">
                <img src="" alt="" />
              </div>
              <div className='description'>
                <S.TitleItem>Pizza 01</S.TitleItem>
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

            <S.Item onClick={() => addProduct(1)}>
              <div className="content-image">
                <img src="" alt="" />
              </div>
              <div className='description'>
                <S.TitleItem>Pizza 01</S.TitleItem>
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

            <S.Item onClick={() => addProduct(1)}>
              <div className="content-image">
                <img src="" alt="" />
              </div>
              <div className='description'>
                <S.TitleItem>Pizza 01</S.TitleItem>
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

            <S.Item onClick={() => addProduct(1)}>
              <div className="content-image">
                <img src="" alt="" />
              </div>
              <div className='description'>
                <S.TitleItem>Pizza 01</S.TitleItem>
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


          </S.ContentItens>
        </S.BodyItens>

        <S.BodyItens id='Hamburguer'>
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


      </S.WrapperItens>

      <Nav />
    </S.Wrapper>
  )
}

