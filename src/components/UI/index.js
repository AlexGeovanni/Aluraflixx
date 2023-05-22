import styled from "styled-components";

export const LogoImg=styled.img`
    width: 170px;
    @media screen and (max-width: 768px){
        width: 100px;
    }
`

export const Section = styled.section`
    background-color: rgba(0,0,0,.9);
    padding: 50px 40px 100px;
    height: 100%;
    @media screen and (max-width: 768px){
        padding:  30px 12px 100px;
    }
`
export const ContentBtns = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: baseline;
        justify-content: none;
        gap:10px;
    }
`
export const Btn = styled.button`
    color: #fff;
    font-size: 21px;
    font-weight: 600;
    padding: 17px 50px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    :hover{
        transform: scale(1.1);
        transition: all .4s ease-in-out;
    }
    background-color: rgba(42, 122, 228, 1);
    @media screen and (max-width: 768px){
        padding: 18px 35px;
    }
`

export const BtnLimpia=styled.input`
    color: #fff;
    font-size: 21px;
    font-weight: 600;
    padding: 17px 50px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    margin-left: 40px;
    :hover{
        transform: scale(1.1);
        transition: all .4s ease-in-out;
    }
    background-color: rgba(158, 158, 158, 1);
    @media screen and (max-width: 768px){
        padding: 18px 35px;
    }
`


export const ContentInput =styled.div`
    position: relative;
    width: 100%;
    margin-top: 40px;
`
export const Input = styled.input`
    width: 100%;
    font-size: 18px;
    padding: 25px 10px;
    outline: none;
    border: none;
    background: rgba(83, 88, 93, 1);
    color: #fff;
    &:valid ~span ,
    &:focus ~span  {
        font-size: 14px; 
        top: 5px;
        transition: all .4s ease-in-out;
        @media screen and (max-width: 768px){
        font-size: 12px;
        top: 2px
    }
    }
    &[type="color"]{
        padding: 22px 10px 0px;
        height: 50px;
    }
    @media screen and (max-width: 768px){
        font-size: 16px;
        padding: 18px 4px 8px;
    }
`

export const Span =styled.span`
    position: absolute;
    top: 25px;
    left: 10px;
    color: #fff;
    font-size: 18px;
    transition: all .3s ease-in-out;
    user-select: none;
    pointer-events: none;
    
    @media screen and (max-width: 768px){
        font-size: 16px;
        top: 18px;
        left: 4px;
    }
`



export const Form = styled.form`
    max-width:95%;
    width: 100%;
    margin: auto;
    margin-bottom: 10px;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 60px;
    font-weight: 400;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 30px;
        line-height: 41px;
    }
`
export const Textarea = styled.textarea`
    width: 100%;
    font-size: 17px;
    padding: 28px 10px;
    outline: none;
    border: none;
    background: rgba(83, 88, 93, 1);
    color: #fff;
    resize: none;
    &:valid ~span ,
    &:focus ~span  {
        font-size: 12px; 
        top: 8px;
        transition: all .4s ease-in-out;
    }
`



// table
export const Td = styled.td`
    padding: 10px;
    @media screen and (max-width: 1100px){
        padding: 7px;
    }
    @media screen and (max-width: 768px){
        padding: 5px;
    }
`

export const Th = styled.th`
    padding: 10px;
    border:  4px solid #fff;
    @media screen and (max-width: 1100px){
        padding: 7px;
        border:  2px solid #fff;
    }
    @media screen and (max-width: 768px){
        padding: 5px;
        border:  2px solid #fff;
    }
    
`

// --------------------------

export const DivImg = styled.div`
    border-radius: 4px;
    border: 4px solid #6BD1FF;
    height: 255px;
    @media screen and (max-width: 1100px){
        height: 230px;
    }
    @media (max-width:768px){
        height: 170px;
    }
`

export const P = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    @media screen and (max-width: 1100px){
        font-size: 16px;
    }
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`
export const Img =styled.img`
    width: 100%;
    height: 100%;
`

export const TituloCategoria =styled.div`
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 45px;
    padding: 0 25px;
    & h1{
        font-size: 40px;
        font-weight: 400;
        font-style: normal;
        text-align: center;
        line-height: 70px;
    }
    @media screen and (max-width:1100px) {
        h1{
            font-size: 25px;
        }
    }
    @media (max-width:768px){
        margin-bottom: 20px;
        h1{
            font-size: 16px;
            line-height: 40px;
        }
    }
`