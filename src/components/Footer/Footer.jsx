import Logo from "../../assets/img/LogoMain.png"
import styled from "styled-components"

const Footer = styled.footer`
    width: 100%;
    background-color: rgba(0,0,0,1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 60px 0;
    border-top: 3px solid rgba(42, 122, 228, 1);
`


export default ()=>{
    return(
        <Footer>
            <img  src={Logo} />
        </Footer>
    )
}