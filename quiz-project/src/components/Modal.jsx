import { StyledModal, StyledExitButtonSvg, BgModal } from '../styles'

export default function Modal({isOpen, closeModal, children}) {
    if (isOpen) {
        return (
            <BgModal>
                <StyledModal>
                    <StyledExitButtonSvg onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 36.25C28.9746 36.25 36.25 28.9746 36.25 20C36.25 11.0254 28.9746 3.75 20 3.75C11.0254 3.75 3.75 11.0254 3.75 20C3.75 28.9746 11.0254 36.25 20 36.25Z" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.5 16.5L23.5 23.5" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.5 23.5L23.5 16.5" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </StyledExitButtonSvg>
                    <section>
                        {children}
                    </section>
                </StyledModal>
            </BgModal>
        );
    }

    return null;
}