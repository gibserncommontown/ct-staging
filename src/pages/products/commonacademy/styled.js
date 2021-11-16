import styled from "styled-components"

export const Heading = styled.h1`
    color: #0073BB;
    font-size: 31.89px;
    font-weight: bold;
    text-align: center;
    `
export const BlockGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
    justify-content: space-between;
    `
export const BlockContent = styled.div`
    flex: 0 0 auto;
    width: calc(50% - 20px);
    display: flex;
    align-items: flex-start;
    padding-bottom: 40px;
    @media (max-width: 1000px) { width: 100% };
    @media (max-width: 600px) { padding-bottom: 28px; }
    `
export const BlockImg = styled.div`
    width: 113px;
    height: 84px;
    background-color: transparent !important;
    background-position: center center !important;
    background-repeat: no-repeat !important;
    background-size: contained !important;
    display: block;
    flex: 0 0 auto;
    margin-right: 20px;
    `
export const BlockTexts = styled.div`
    color: #023C61;
    line-height: 24px;
    `
export const BlockHeading = styled.div`
    font-size: 18px;
    font-weight: bold;
    `
export const BlockDescription = styled.div`
    font-size: 16px;
    `
export const ClickToACtion = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    `

const x = () => null;

export default x