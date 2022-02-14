import React, { Component } from 'react';
import people from '../data';
import { ReviewsContainer } from '../styles/Elements.style';
import Review from './Review';

export default class Reviews extends Component {
    state = { index: 0 };

    checkLength = (num) => {
        if (num > people.length - 1) {
            return (num = 0);
        }

        if (num < 0) {
            return (num = people.length - 1);
        }

        return num;
    };

    clickToRight = () => {
        this.setState(({ index }) => {
            const newIndex = index + 1;

            return {
                index: this.checkLength(newIndex),
            };
        });
    };

    clickToLeft = () => {
        this.setState(({ index }) => {
            const newIndex = index - 1;

            return {
                index: this.checkLength(newIndex),
            };
        });
    };

    randomReview = () => {
        const randomNumber = Math.floor(Math.random() * people.length);

        if (randomNumber === this.state.index) {
            this.setState({
                index: this.checkLength(randomNumber + 1),
            });
        } else {
            this.setState({
                index: this.checkLength(randomNumber),
            });
        }
    };

    render() {
        const { index } = this.state;

        return (
            <ReviewsContainer>
                <Review
                    {...people[index]}
                    clickToRight={this.clickToRight}
                    clickToLeft={this.clickToLeft}
                    randomReview={this.randomReview}
                />
            </ReviewsContainer>
        );
    }
}
