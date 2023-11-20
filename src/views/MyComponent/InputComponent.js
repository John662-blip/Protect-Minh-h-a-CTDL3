import React from "react";

class InputComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
    onChanngeInput = (Event) => {
        if (isFinite(Event.target.value) || (this.state.value === "" && Event.target.value === "-")) {
            this.setState({
                value: Event.target.value
            })
        }
    }
    handleClickAdd = () => {
        if (this.state.value === "") alert("Chua Dien Thong Tin");
        else {
            this.props.addData(this.state.value);
            this.setState({
                value: ""
            })
        }
    }
    handleClickDelete = () => {
        if (this.state.value === "") alert("Chua Dien Thong Tin");
        else {
            this.props.deleteData(this.state.value);
            this.setState({
                value: ""
            })
        }
    }
    handleClickHeight = () => {
        this.props.getHeightTree();
    }
    handleInputKeyDown = (Event) => {
        if (Event.key === 'Enter')
            this.handleClickAdd()
    }
    render() {
        return (
            <div className="center-outer" >
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="input-group mt-3">
                                <input type="text" className="form-control mb-3 mx-2" value={this.state.value} placeholder="Nhập dữ liệu"
                                    onChange={(Event) => this.onChanngeInput(Event)}
                                    onKeyDown={(Event) => this.handleInputKeyDown(Event)}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary mx-2" type="button"
                                        onClick={() => this.handleClickAdd()}
                                    >ADD</button>
                                    <button className="btn btn-secondary mx-2" type="button"
                                        onClick={() => this.handleClickDelete()}
                                    >Delete</button>
                                    <button className="btn btn-success mx-2" type="button"
                                        onClick={() => this.handleClickHeight()}
                                    >Height</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InputComponent