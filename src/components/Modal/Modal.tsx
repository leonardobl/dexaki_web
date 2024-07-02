import * as S from './styles'
import { GrFormClose } from 'react-icons/gr'


interface IModalProps {
  onClose: () => void
  isOpen: boolean
  title: string
  children: React.ReactNode
}

export const Modal = ({ onClose, isOpen, title, children }: IModalProps) => {

  return (
    <S.Wrapper>
      {isOpen && (
        <S.ContainerModal>

          <S.Modal>
            <S.HeaderModal>
              <span></span>
              <h1>{title}</h1>
              <GrFormClose size={22} onClick={() => onClose()} />
            </S.HeaderModal>

            <S.ModalBody>
              {children}
            </S.ModalBody>
          </S.Modal>


        </S.ContainerModal>
      )
      }
    </S.Wrapper>
  )
}
