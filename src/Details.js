import React from "react";

import Modal from "./Modal";
// const Details = () => {
//   const { id } = useParams();
//   return <h2>{id}</h2>;
// };

import { useNavigate, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();

    return <Component navigate={navigate} params={params} {...props} />;
  };

  return Wrapper;
};

class Details extends React.Component {
  id;
  constructor(props) {
    super(props);
    this.id = this.props.params.id;
    this.state = { loading: true, showModal: false };
  }

  async componentDidMount() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.id}`
    );
    const json = await response.json();
    this.setState((prevState) => ({
      ...prevState,
      loading: false,
      ...json.pets[0],
    }));
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    const { name, animal, breed, city, state, images } = this.state;

    if (this.state.loading) {
      return <h2>Loading ...</h2>;
    }

    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {city}, {state}
        </h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              onClick={this.toggleModal}
              style={{ backgroundColor: theme }}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <Carousel images={images} />
        {this.state.showModal ? (
          <Modal>
            <div>
              <h1> would you like to adopt {name} ?</h1>
              <div className="buttons">
                <button
                  style={{ backgroundColor: "green" }}
                  onClick={this.adopt}
                >
                  yes
                </button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

const DetailWithErrorBoundary = withRouter(Details);
export default function withErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailWithErrorBoundary {...props} />
    </ErrorBoundary>
  );
}
