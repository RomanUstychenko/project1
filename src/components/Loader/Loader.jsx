import { ColorRing } from  'react-loader-spinner'
// import scss from "./Loader.module.scss"
import {LoaderWrapper} from "./Loader.styled"
const Loader = () => {
    return (
      <><LoaderWrapper>
            <ColorRing
            visible={true}
            height="150"
            width="150"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            </LoaderWrapper>
      </>
    );
  };
  
  export default Loader;