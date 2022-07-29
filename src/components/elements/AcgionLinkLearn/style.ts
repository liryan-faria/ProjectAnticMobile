import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 114px;
    height: 25px;
    
    
    

    .link {
        font-family: 'Karla', sans-serif;
        font-size: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 25px;
        letter-spacing: 0.3px;
        color: #A06056;
        padding-top: 3px;

    }

    .icon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        
        width: 20px;
        height: 23px;

    }

    .iconRight {
        width: 6px;
        height: 10px;
        margin-left: calc(30% - 6px/2);
        color: #A06056;

    }
`