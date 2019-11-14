import React from 'react';
import routes, { Link } from '../../../routes';
import ProductsJson from '../../../mock/product-pages.json';
import SimpleParaImage from "../../molecules/SimpleParaImage";
import SlickSlide from "../../molecules/SlickSlider";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      currUrl: ''
    };
  }
  
  componentWillMount() {
    this.getURLData();
  }
  
  componentWillUpdate() {
  const slugRoute = routes.Router.router && routes.Router.router.query.slug;
    if (this.state.currUrl !== slugRoute) {
      this.getURLData()
    }
  }
  
  getURLData = () => {
    const slugRoute = routes.Router.router && routes.Router.router.query.slug;
    this.setState({currUrl: slugRoute}, ()=> {
      let currUrlWithoutdash, jsonTitleReplaceChar;
      for(var i = 0; i<ProductsJson.length; i++) {
        currUrlWithoutdash = this.state.currUrl && this.state.currUrl.split('-').join(' ').toLowerCase();
        jsonTitleReplaceChar = ProductsJson[i].title && ProductsJson[i].title.replace(/\& +/g, '').toLowerCase();
        
        if( currUrlWithoutdash === jsonTitleReplaceChar ) {
          this.setState({ data: ProductsJson[i] });
        }
      }
    });
  }
  
render() {
  const {data} = this.state;
  const headerText =`<h1>${data.title} -<br/>
            <span>${data.subTitle}</span></h1>
            <span class="page-title">Products</span>`;
            
  return (
    <>
     <SlickSlide className="container" headerText={headerText} />
      <SimpleParaImage data={data} />
    </>
    );
  }
}

export default Products;