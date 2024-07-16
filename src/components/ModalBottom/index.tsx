import * as S from './styles'
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
              <S.Line />
            </S.HeaderModal>

            <S.ModalBody>
              {children}
            </S.ModalBody>
          </S.Modal>
          <div id='overlay-modal' onClick={() => onClose()}></div>
        </S.ContainerModal>
      )
      }
    </S.Wrapper>
  )
}

