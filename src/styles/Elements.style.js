import styled from 'styled-components';

// App Component
export const Title = styled.h2`
    font-size: 35px;
    color: var(--black-dark);
    position: relative;
    text-align: center;
    margin-top: 50px;
    &::after {
        content: '';
        position: absolute;
        width: 80px;
        height: 4px;
        left: 50%;
        bottom: -3px;
        background-color: var(--main-color);
        transform: translateX(-50%);
    }
`;

// Reviews Component
export const ReviewsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90vw;
    height: 90vh;
`;

// Review Component
export const ReviewContainer = styled.article`
    width: 650px;
    min-height: 355px;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0 0 10px #22222236;
    background-color: var(--white-color);
    padding: 20px 25px;
`;

export const ReviewImage = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 auto;
    position: relative;

    img {
        text-align: center;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
    }

    &::before {
        content: '';
        position: absolute;
        top: -5px;
        right: -8px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--main-color);
    }

    span {
        position: absolute;
        left: 0;
        width: 40px;
        height: 40px;
        line-height: 45px;
        border-radius: 50%;
        text-align: center;
        color: var(--white-color);
        background-color: var(--main-color);
        z-index: 3;
    }
`;

export const ReviewDetails = styled.div`
    padding-top: 15px;

    h3 {
        font-size: 15px;
        color: var(--black-dark);
    }

    h4 {
        text-transform: uppercase;
        color: var(--main-color);
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
    }

    p {
        font-size: 15px;
        color: var(--light-black);
    }
`;

export const LeftRightButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    margin-bottom: 10px;

    button {
        font-size: 25px;
        border: none;
        background-color: inherit;
        color: var(--main-color);
        cursor: pointer;
    }
`;

export const RandomButton = styled.button`
    padding: 5px 15px;
    font-weight: 600;
    border: 2px solid var(--main-color);
    color: var(--main-color);
    background-color: var(--white-color);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: var(--white-color);
        background-color: var(--main-color);
    }
`;
