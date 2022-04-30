import React from "react";
import { render } from "@testing-library/react-native";
import CommentCard from ".";
import { comment } from "./comment.mock";
import Comment from "./commentCard.component";
describe('Comment Card renders correctly', () => {
    it('renders correctly', () => {
        const renderedComponent = render(
            <CommentCard comment={comment}/>
        );
        const cCard = renderedComponent.getByTestId("comment-card");
        expect(cCard).toBeTruthy();
    })
})
describe('Comment Card View renders correctly', () => {
    it('renders correctly', () => {
        const renderedComponent = render(
            <Comment comment={comment}/>
        );
    })
})