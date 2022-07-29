import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 375px;
    height: 1184px;
    padding: 48px 32px 48px 32px;
    background: #FFFFFF;

    .newsletter {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 311px;
        height: 187px;

    }

    .titleTrends {
        width: 290px;
        height: 80px;
        font-family: 'Merriweather', serif;
        font-style: normal;
        font-weight: 300;
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -0.3px;
        color: #121212;
        margin-bottom: 16px;

    }

    .textTrends {
        width: 290px;
        height: 50px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: rgba(112, 100, 88, 0.9);
        margin-bottom: 16px;
    }


    .button {
        margin-bottom: 64px;
    }


    .inspirations {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 311px;
        height: 690px;

    }

    .titleInspirations {
        width: 311px;
        height: 40px;
        font-family: 'Merriweather', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -0.3px;
        color: #534B42;
        margin-bottom: 20px;
    }
    
    .paragraph {
        width: 311px;
        height: 150px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: rgba(112, 100, 88, 0.9);
        margin-bottom: 40px;
    }

    .gallery {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 311px;
        height: 440px;

    }

    .lineOne, .line {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 311px;
        height: 210px;
 
    }

    .lineOne {
        margin-bottom: 20px;
    }

    .boxImage, .boxImageChair, .boxImageRoom {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 145.5px;
        height: 210px;

    }

    .boxImageChair, .boxImageRoom {
        margin-right: 20px;
    }

    .titleImage {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #121212;
        margin-top: 15px;
    }

    .imageChair {
        width: 145.5px;
        height: 175px;
        background: linear-gradient(135deg, rgba(245, 245, 245, 0.01), 
            rgba(204, 240, 240, 0)), url("/images/chairGallery.png");
        border-radius: 1px;

    }

    .imageCooked {
        width: 145.5px;
        height: 175px;
        background: linear-gradient(135deg, rgba(245, 245, 245, 0.01), 
            rgba(204, 240, 240, 0)), url("/images/cookedGallery.png");
        border-radius: 1px;

    }

    .imageRoom {
        width: 145.5px;
        height: 175px;
        background: linear-gradient(135deg, rgba(245, 245, 245, 0.01), 
            rgba(204, 240, 240, 0)), url("/images/roomGallery.png");
        border-radius: 1px;

    }

    .imageTables {
        width: 145.5px;
        height: 175px;
        background: linear-gradient(135deg, rgba(245, 245, 245, 0.01), 
            rgba(204, 240, 240, 0)), url("/images/tablesGallery.png");
        border-radius: 1px;

    }
`