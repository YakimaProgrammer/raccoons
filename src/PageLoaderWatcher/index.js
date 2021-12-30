import { Component } from "react";

export function PageLoadWatcher(C){
  return class extends Component {
    constructor(props) {
      super(props);
  
      this.state = {pageLoaded: false};
  
      if (document.readyState !== "complete") {
        window.addEventListener("load", () => this.setState({pageLoaded: true}));
      } else {
        this.setState({pageLoaded: true});
      }
  
      window.addEventListener("resize", () => {this.setState({pageLoaded: false}); this.setState({pageLoaded: true})});
    }
  
    render() {
      return <C pageLoaded={this.state.pageLoaded} {...this.props} />
    }
  }
}