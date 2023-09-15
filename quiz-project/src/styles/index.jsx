import styled from 'styled-components';

export const Button = styled.button`
    color: #FFF;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    min-width: 16rem;
    width: min-content;
    padding: 1rem 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 1rem;
    background: #8375B5;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    transition: border-color 0.25s;
    &:hover {
        border-color: rgba(255, 255, 255, 0.8);
    }
`;

export const ButtonDarkTheme = styled.button`
    color: #FFF;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    min-width: 16rem;
    width: min-content;
    padding: 1rem 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    border: 2px solid #8375B5;
    background: #1F0E5E;
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
    background: linear-gradient(309deg, rgba(45, 27, 112, 0.80) 27.87%, rgba(0, 67, 168, 0.80) 94.35%);
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledModal = styled.main`
    position: relative;
    min-width: 20rem;
    max-width: 100%;
    height: fit-content;
    padding: 2.5rem 2rem;
    display: flex;
    border-radius: 1rem;
    border: 2px solid #8375B5;
    background: #1F0E5E;
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
    padding: 2rem 0;
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
    color: #4594F2;
    font-size: 2rem;
    font-weight: 900;
`;

export const SubTitle = styled.h2`
    color: #FFF;
    font-size: 1.2rem;
    font-weight: 700;
`;

export const Label = styled.label`
    width: 100%;
    padding: 0 1rem;
    text-align: start;
    color: #FFF;
    font-size: 1.1rem;
    font-weight: 700;
`;

export const Input = styled.input`
    min-width: 20rem;
    font-size: 1.2rem;
    padding: 1rem 1rem;
    border: none;
    border-radius: 1rem;
    background: rgba(131, 117, 181, 0.20);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const Span = styled.span`
    display: flex;
    flex-direction: column;
`;

export const Form = styled.form`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-direction: column;
`;

export const Link = styled.a`
    color: #FFF;
    text-decoration: none;
    width: fit-content;
    transition: 0.25s;
    &:hover {
        text-decoration: underline;
    }
`;

