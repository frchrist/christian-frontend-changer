import { Component } from "react";

const Input = ({ cls, onchange, value, id }) => {
    return <input id={id} value={value} onChange={onchange} className={"w-10 h-10 px-3 " + cls + " text-xl focus:outline-none focus:border-indigo-600 apparence-none border-2 border-gray-400 rounded-md"} maxLength="1" placeholder="9" />;
};

class CodeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: "",
            num3: "",
            num4: "",
            num5: "",
            number: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let value = e.target.value;

        if (!isNaN(value)) {
            switch (e.target.getAttribute("id")) {
                case "num1":
                    this.setState({ ...this.state, num1: value });
                    if (value !== "") e.target.nextSibling.focus();
                    break;
                case "num2":
                    this.setState({ ...this.state, num2: value });
                    if (value !== "") e.target.nextSibling.focus();
                    break;
                case "num3":
                    this.setState({ ...this.state, num3: value });
                    if (value !== "") e.target.nextSibling.focus();
                    break;
                case "num4":
                    this.setState({ ...this.state, num4: value });
                    if (value !== "") e.target.nextSibling.focus();
                    break;
                case "num5":
                    this.setState({ ...this.state, num5: value });
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        if (this.state.num1 !== "" && this.state.num2 !== "" && this.state.num3 !== "" && this.state.num3 !== "" && this.state.num4 !== "" && this.state.num5 !== "") {
            this.props.func(true);
            let number = this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5;
            this.props.changeCode(number);
        } else {
            this.props.func(false);
        }
        return (
            <div className="flex w-96 ml-2">
                <Input onchange={this.handleChange} value={this.state.num1} id="num1" />
                <Input cls="mx-1" onchange={this.handleChange} value={this.state.num2} id="num2" />
                <Input cls="mx-1" onchange={this.handleChange} value={this.state.num3} id="num3" />
                <Input cls="mx-1" onchange={this.handleChange} value={this.state.num4} id="num4" />
                <Input onchange={this.handleChange} value={this.state.num5} id="num5" />
            </div>
        );
    }
}

export default CodeInput;
