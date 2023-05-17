import styled from "styled-components"
import Logo from "../../assets/img/LogoMain.png"
import { Btn, LogoImg } from "../UI"

import { Link } from "react-router-dom";

const Head = styled.header`
    position: relative;
    width: 100%;
    padding:20px 40px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 1);
    border-bottom:3px solid rgba(42, 122, 228, 1); 
    z-index: 1;
    @media screen and (max-width: 768px){
        padding:  15px 20px;
    }
`


const BtnHeader = styled(Btn)`
    background-color: transparent;
    border:2px solid #fff ;
    transition: all .3s ease-in-out;

    &:hover{
        transition: all .4s ease-in-out;
        background-color: #fff;
        color: #000;
    }
    @media screen and (max-width:768px) {
        font-size: 16px;
        padding: 10px 15px;
    }
`

const Header =()=>{
    return(
        <Head>
            <div>
                <Link to={"/"} ><LogoImg  src={Logo}  /></Link>
            </div>
            <nav>
                <Link to="/NuevoVideo " >
                    <BtnHeader>Nuevo Video</BtnHeader>
                </Link>
            </nav>
        </Head>
    )
}


export default Header