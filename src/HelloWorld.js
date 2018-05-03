import React from "react";
import BigText from "./BigText";

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LazyComponent: null
        };
    }

    componentDidMount() {
        import(/* webpackChunkName: "async" */ "./Lazy").then(({ default: LazyComponent }) => {
            this.setState({ LazyComponent });
        });
    }

    render() {
        const { LazyComponent } = this.state;
        return <div>
            <BigText>Hello World</BigText>
            { LazyComponent ? <LazyComponent /> : <span>Loading...</span> }
        </div>;
    }
}