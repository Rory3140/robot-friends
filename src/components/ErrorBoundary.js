import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2 className="tc white">Oops. Not good</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
