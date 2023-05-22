import styled from "styled-components";

const Content = styled.div`
    min-height: 100vh;
    padding-top:15px ;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(0,0,0,.9);
    @media screen and (max-width:1024px) {
        min-height: 70vh;
    }
`


const Loading = styled.div`
    width: 100px;
    height: 100px;
    border: solid 5px #064555;
    border-top:solid 5px #7cd6ec ;
    border-radius: 50%;
    animation: loader .8s linear infinite;
    @keyframes loader {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`

const Message =styled.p`
    position: absolute;
    color: #7cd6ec;
    font-size: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    animation: message 1s alternate infinite ease-in-out;
    @keyframes message {
        0%{
            /* transform: scale(1); */
            opacity: 1;
            font-size: 16px;

        }
        100%{
            /* transform: scale(1.1); */
            opacity: .5;
            font-size: 18px;
        }
    }
`

const Loader =()=>{
    return (
        <Content>
                <Loading></Loading>
                <Message>Loading...</Message>
        </Content>
    )
}

export default Loader;