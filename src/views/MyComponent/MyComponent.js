import React from "react";
import InputComponent from "./InputComponent";
import BSTree from "../Tree/Tree";
import BinarySearchTree from "../Logic/BinarySearchTree";
class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
        this.tree = new BinarySearchTree();

    }
    addData = (value) => {
        this.tree.insert(value)
        this.setState({
            data: this.tree.toObject()
        })
    }
    deleteData = (value) => {
        this.tree.delete(value)
        this.setState({
            data: this.tree.toObject()
        })
    }
    getHeightTree = () => {
        alert("Cay Cao : " + this.tree.getHeight());
    }
    render() {
        return (
            <>
                <InputComponent getHeightTree={this.getHeightTree} deleteData={this.deleteData} addData={this.addData} />
                <BSTree data={this.state.data} />
            </>
        )
    }
}
export default MyComponent