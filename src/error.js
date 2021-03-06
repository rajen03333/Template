import React from "react";
class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      console.log(this.state.errorInfo);
      return (
        <div >
            {this.state.error && this.state.error.toString()}
           
          </div>
        
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
export default Error;
