import styled from 'styled-components'

export const Overwrite = styled.div`
    .evolve-with-us.section {
        background: white;

        .containedContent {
            display: none;
        }
    }`;

export const HeadingIcon = styled.div`
    padding-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        max-height: 170px;
        width: auto;
        max-width: 100%;
    }

    & + h1{
        text-align: center;
    }
    `

export const HeroBanner = styled.div`
    img{
        max-width: 100%;
        height: auto;
    }

    padding-bottom: 3em;
    `