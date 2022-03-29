import { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  activeImageHandler(e) {
    this.setState((prev) => ({
      ...prev,
      activeIndex: +e.target.dataset.active,
    }));
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="carousel">
        <img src={this.props.images[activeIndex]} alt="animal" />
        <div className="carousel-smaller">
          {this.props.images.map((image, index) => (
            <img
              className={activeIndex === index ? "active" : ""}
              src={image}
              alt="animal thumbnail"
              key={image}
              onClick={this.activeImageHandler}
              data-active={activeIndex}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
