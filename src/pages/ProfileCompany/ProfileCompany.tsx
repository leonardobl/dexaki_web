import * as S from './styles'
import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
import { useNavigate } from 'react-router-dom'
import { FiCreditCard } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { RiBuilding3Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";

export const ProfileCompany = () => {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate('/')}>
        <IconArrowLeft />
        <h1>Sobre o estabelecimento</h1>
      </S.Header>

      <header>
        <div>
          <RiBuilding3Line size={22} />
          <p>Nome: <span>Chicago burguer</span> </p>
        </div>
        <div>
          <IoLocationOutline size={32} />
          <p>Endereço: <span>Rua Desembargador Filho, 2345; próximo ao atacadão</span> </p>
        </div>

        <div>
          <FiCreditCard size={32} />
          <p>
            Forma de Pagamentos:
            <span> Dinheiro, Pix, Cartões: visa, mastercard, elo, hipercard, AmericanExpress</span>
          </p>
        </div>

        <div className='hour'>
          <div>
            <FaRegClock size={18} />
            <p> Horários de Atendimento:</p>
          </div>
          <ul>
            <li>Domingo 18: às 22h45m</li>
            <li>Terça-feira 18: às 22h45m</li>
            <li>Quarta-feira 18: às 22h45m</li>
            <li>Quinta-feira 18: às 22h45m</li>
            <li>Sexta-feira 18: às 22h45m</li>
            <li>Sábado 18: às 22h45m</li>
          </ul>
        </div>
      </header>
    </S.Wrapper>
  )
}
