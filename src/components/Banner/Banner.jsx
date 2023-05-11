import styled from "styled-components";
import banner from "../../assets/img/banner.png"


const Div = styled.div`
    position: absolute;
    top: -115px;
    left: 0;
    width: 100%;
    height: 880px;
    background-image:linear-gradient(to top,rgba(0, 0, 0, 1) -4% , rgba(42, 122, 228, .2) 100%),url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
`

const Banner = ()=>{
    return(
        <Div />
    )
}

export default Banner