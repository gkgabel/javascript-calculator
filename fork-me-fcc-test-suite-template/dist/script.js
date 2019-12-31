function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "input1",


    t => {
      var y = {
        new: (this.state.new + t).replace(/^0+/, ''),
        string: (this.state.string + t).replace(/^0+/, ''),
        string1: (this.state.string1 + t).replace(/^0+/, ''),
        op: 0 };

      if (y.new == '') y = {
        new: '0',
        string: this.state.string + '0',
        string1: this.state.string1 + '0',
        op: 0 };

      this.setState(y);
    });_defineProperty(this, "input2",

    (t) =>
    {if (this.state.op == 0 || this.state.op && t == '-')
      this.setState({
        new: "",
        string: this.state.string + t,
        string1: this.state.string1 + t,
        dec: 0,
        op: this.state.op + 1 });else


      this.setState({
        new: "",
        string: this.state.string.slice(0, this.state.string.length - this.state.op) + t,
        string1: this.state.string1 + t,
        dec: 0,
        op: this.state.op + 1 });
    });_defineProperty(this, "input3",

    () => {
      this.setState({
        string1: this.state.string1 + "=",
        new: eval(this.state.string).toString(),
        string: eval(this.state.string).toString(),
        dec: 0 });

    });_defineProperty(this, "input4",
    () => {
      if (this.state.dec == 0) {
        this.setState({
          new: this.state.new + ".",
          string: this.state.string + ".",
          string1: this.state.string1 + ".",
          dec: this.state.dec + 1 });

      }

    });this.state = { string: "0", new: "0", string1: "0", dec: 0, op: 0 };}
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", null,
      React.createElement("div", { id: "display" }, this.state.new),
      React.createElement("div", { id: "display" }, this.state.string1)),

      React.createElement("div", { id: "button" },
      React.createElement("button", {
        id: "one",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1(1) }, "1",

      " "),

      React.createElement("button", {
        id: "two",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1(2) }, "2"),



      React.createElement("button", {
        id: "three",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1(3) }, "3"),



      React.createElement("button", {
        id: "four",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1(4) }, "4"),



      React.createElement("button", {
        id: "five",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1(5) }, "5"),



      React.createElement("button", {
        id: "six",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1(6) }, "6",

      " "),

      React.createElement("button", {
        id: "seven",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1(7) }, "7",

      " "),

      React.createElement("button", {
        id: "eight",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1(8) }, "8",

      " "),

      React.createElement("button", {
        id: "nine",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1(9) }, "9",

      " "),

      React.createElement("button", {
        id: "zero",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input1("0") }, "0",

      " "),

      React.createElement("button", {
        id: "add",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input2("+") }, "+"),



      React.createElement("button", {
        id: "subtract",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input2("-") }, "-"),



      React.createElement("button", {
        id: "multiply",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input2("*") }, "*"),



      React.createElement("button", {
        id: "divide",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input2("/") }, "/"),



      React.createElement("button", {
        id: "equals",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input3() }, "="),



      React.createElement("button", {
        id: "decimal",
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        onClick: () => this.input4() }, "."),



      React.createElement("button", {
        type: "button",
        class: "btn btn-outline-primary waves-effect",
        id: "clear",
        onClick: () => this.setState({ new: '0', string: "", string1: "0" }) }, "AC"))));






  }}

ReactDOM.render(React.createElement(App, null), document.getElementById("main"));