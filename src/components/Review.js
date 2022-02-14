import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import {
    LeftRightButton,
    RandomButton,
    ReviewContainer,
    ReviewDetails,
    ReviewImage,
} from '../styles/Elements.style';

export default function Review({
    name,
    title,
    image,
    description,
    clickToRight,
    clickToLeft,
    randomReview,
}) {
    return (
        <ReviewContainer>
            <ReviewImage>
                <img src={image} alt={name} />
                <span>
                    <FaQuoteRight />
                </span>
            </ReviewImage>
            <ReviewDetails>
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>{description}</p>
            </ReviewDetails>
            <LeftRightButton>
                <button onClick={clickToLeft}>
                    <FiChevronsLeft />
                </button>
                <button onClick={clickToRight}>
                    <FiChevronsRight />
                </button>
            </LeftRightButton>
            <RandomButton onClick={randomReview}>Surprise Me</RandomButton>
        </ReviewContainer>
    );
}
