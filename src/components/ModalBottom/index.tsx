import * as S from './styles'
import { GrFormClose } from 'react-icons/gr'

interface IModalProps {
  onClose: () => void
  isOpen: boolean
  children: React.ReactNode
}

export const ModalBottom = ({ onClose, isOpen, children }: IModalProps) => {
  return (
    <S.Wrapper>
      {isOpen && (
        <S.ContainerModal>
          <S.Modal>
            <S.HeaderModal>
              <GrFormClose size={30} onClick={() => onClose()} />
            </S.HeaderModal>

            <S.ModalBody>
              {children}
            </S.ModalBody>
          </S.Modal>
          {/* <S.OverleayModal /> */}
        </S.ContainerModal>
      )
      }
    </S.Wrapper>
  )
}

