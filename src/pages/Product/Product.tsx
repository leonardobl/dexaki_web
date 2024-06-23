import { useNavigate } from 'react-router-dom';
import * as S from './styles'
import { IoIosArrowBack } from "react-icons/io";
import ImageMock from '../../assets/image/pizza02.png'
import { useEffect, useState } from 'react';

export const Product = () => {
  const [price] = useState(15.00)
  const [total, setTotal] = useState(price ?? 0)
  const [quantity, setQuantity] = useState<number>(1)
  const navigate = useNavigate()

  function add() {
    setQuantity(quantity + 1)
  }

  function less() {
    if (quantity == 1) {
      return
    }

    setQuantity((prevState) => {
      if (prevState == 0) return 0;
      return prevState - 1
    })
    setTotal(quantity * price)
  }

  function goBack() {
    navigate('/')
  }

  useEffect(() => {
    setTotal(quantity * price)
  }, [quantity])


  return (
    <S.WrapperProduct>

      <div className="header-product-image">
        <img src={ImageMock} alt="" />

        <button type='button' onClick={goBack}>
          <IoIosArrowBack size={24} color='#FF6B00' />
        </button>

      </div>

      <div className="description-product">
        <h4>Nome of Product</h4>
        <span className='price'>R$ 15,00</span>
        <p className='description'>
          Pão de Brioche, 2 X Blend bovino 200g feito na churrasqueira, 4 fatias de queijo cheddar, cebola caramelizada, bacon em fatias e Requeijão cremoso.
        </p>
      </div>

      <div className='content-textarea'>
        <p>Observações</p>
        <textarea name="" id="" placeholder='Ex: Tiraa cebola, ovo, etc..'></textarea>
      </div>


      <div className="footer-price">
        <div className="quantity">
          <button onClick={less}> - </button>
          <span> {quantity} </span>
          <button type='button' onClick={add}>+</button>
        </div>
        <button className='button-add' onClick={() => navigate('/bag')}>
          Adicionar R$ {total}
        </button>
      </div>

    </S.WrapperProduct>
  )
}

