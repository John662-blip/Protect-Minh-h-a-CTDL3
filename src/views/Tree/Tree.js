import Tree from 'react-d3-tree';
import React from 'react';

const containerStyles = {
    width: "100vw",
    height: "1000vh"
};
class BSTree extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            translate: {}
        }

    }
    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: dimensions.width / 2,
                y: 75
            }
        });
    }
    render() {
        let treeData = this.props.data
        return (
            <div style={containerStyles} ref={(tc) => (this.treeContainer = tc)}>
                <Tree
                    data={treeData}
                    orientation="vertical"
                    translate={this.state.translate}
                />
            </ div>
        )
    }
}
export default BSTree;
