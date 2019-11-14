import React from "react";
import PropTypes from "prop-types";
import Clients from '../../organisms/Clients';
import SlickSlide from "../../molecules/SlickSlider";

class Client extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.state = {  }
  }

  render() {
    const headerText =`<h1>Clients we work for<br/>
            <span>See the Product of<br/> our Lasting Partnerships</span></h1>`;
    return (
      <div className="container">
        <SlickSlide headerText={headerText} />
        <Clients />
      </div>
    );
  };
};

Client.propTypes = {};

Client.defaultProps = {};

export default Client;