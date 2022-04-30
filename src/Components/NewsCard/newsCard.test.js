import React from "react";
import { render } from "@testing-library/react-native";
import NewsCard from "./";
import { story } from "./story.mock";
describe('News Card renders correctly', () => {
    it('renders correctly', () => {
        const renderedComponent = render(
            <NewsCard story={story}/>
        );
    })
})