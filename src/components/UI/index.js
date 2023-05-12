import styled from "styled-components";

export const Btn = styled.button`
    color: #fff;
    font-size: 21px;
    font-weight: 600;
    padding: 13px 25px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: rgba(42, 122, 228, 1);
`

export const BtnLimpia=styled(Btn)`
    margin-left: 40px;
    background-color: rgba(158, 158, 158, 1);
`

export const ContentInput =styled.div`
    position: relative;
    width: 100%;
    margin-top: 40px;
`
export const Input = styled.input`
    width: 100%;
    font-size: 18px;
    padding: 28px 10px;
    outline: none;
    border: none;
    background: rgba(83, 88, 93, 1);
    color: #fff;
    &:valid ~span ,
    &:focus ~span  {
        font-size: 14px; 
        top: 8px;
        transition: all .4s ease-in-out;
    }
    &[type="color"]{
        padding: 22px 10px 0px;
        height: 50px;
    }
`
export const Span =styled.span`
    position: absolute;
    top: 30px;
    left: 10px;
    color: #fff;
    font-size: 18px;
    transition: all .3s ease-in-out;
    user-select: none;
`


export const Section = styled.section`
    background-color: rgba(0,0,0,.9);
    padding: 50px 40px 100px;
    height: 100%;
`

export const Form = styled.form`
    max-width:95%;
    width: 100%;
    margin: auto;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 60px;
    font-weight: 400;
    text-align: center;
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

export const ContentBtns = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
`

// table
export const Td = styled.td`
    padding: 10px;
    border: ${({Bdnegro})=> Bdnegro? "4px solid #000": "none"};
`

export const Th = styled.th`
    padding: 10px;
    border: ${({Bdnegro})=> Bdnegro? "none": "4px solid #fff"};
`

// --------------------------

export const DivImg = styled.div`
border-radius: 4px;
border: 4px solid #6BD1FF;
`

export const P = styled.p`
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
`
export const Img =styled.img`
    width: 100%;
    height: 100%;
`

export const TitiloCategoria =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6BD1FF;
    width: 250px;
    height: 70px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 45px;
    & h1{
        font-size: 40px;
        font-weight: 400;
        font-style: normal;
        text-align: center;
        line-height: 70px;
    }
`