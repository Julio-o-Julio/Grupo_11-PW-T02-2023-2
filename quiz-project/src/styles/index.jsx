import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  min-width: 16rem;
  width: fit-content;
  padding: 1rem 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid transparent;
  border-radius: 1rem;
  background: #8375b5;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  transition: border-color 0.25s;
  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
  }
  &:disabled {
    opacity: 0.7;
  }
`;

export const ButtonDarkTheme = styled.button`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  min-width: 16rem;
  width: fit-content;
  padding: 1rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid #8375b5;
  background: #1f0e5e;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  transition: border-color 0.25s;
  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(
    309deg,
    rgba(45, 27, 112, 0.8) 27.87%,
    rgba(0, 67, 168, 0.8) 94.35%
  );
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledModal = styled.main`
  position: relative;
  min-width: 20rem;
  max-width: 40rem;
  height: fit-content;
  padding: 2.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid #8375b5;
  background: #1f0e5e;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const BgModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 2rem 0.5rem;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledExitButtonSvg = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  border: none;
  border-radius: 50%;
  background: transparent;
`;

export const Title = styled.h1`
  color: #4594f2;
  font-size: 2rem;
  font-weight: 900;
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const TextCenter = styled.article`
  text-align: center;
`;

export const Label = styled.label`
  width: 100%;
  padding: 0 1rem;
  text-align: start;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const Input = styled.input`
  min-width: 20rem;
  font-size: 1.2rem;
  padding: 1rem 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(131, 117, 181, 0.2);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContainerForm = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentForm = styled.section`
  position: relative;
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
`;

export const StyledProfile = styled.button`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  width: fit-content;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8rem;
  border: 2px solid #8375b5;
  background: #1f0e5e;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  transition: border-color 0.25s;
  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
  }
`;

export const StyledYourRanking = styled.article`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  min-width: 18rem;
  width: fit-content;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  border: 2px solid #8375b5;
  background: #1f0e5e;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const Center = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CenterInLine = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpanError = styled.span`
  position: absolute;
  left: 1rem;
  bottom: 0;
  color: rgba(255, 0, 0, 0.5);
  font-size: 0.7rem;
  font-weight: 500;
`;

export const SectionData = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 20rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(131, 117, 181, 0.2);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledConteinerRating = styled.section`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: start;
  min-width: 20rem;
  max-height: 25rem;
  overflow: auto;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(131, 117, 181, 0.2);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledContentRating = styled.section`
  display: flex;
  gap: 0.5rem;
  align-items: start;
  min-width: 20rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(131, 117, 181, 0.2);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledConteinerAchievements = styled.section`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: start;
  min-width: 20rem;
  max-height: 25rem;
  overflow: auto;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(131, 117, 181, 0.2);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledContentAchievements = styled.section`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 20rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background: rgba(131, 117, 181, 0.2);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;