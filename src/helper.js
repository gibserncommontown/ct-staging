import React, { Fragment } from 'react'
import algoliasearch from 'algoliasearch'

const client = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY);
export const algolia = client.initIndex(process.env.GATSBY_ALGOLIA_INDEX_NAME)

export const highlight = (rawDescription, rawText) => {
    let description = rawDescription.toLowerCase();
    let text = rawText.toLowerCase();

    let index = description.indexOf(text)
    if (index >= 0) {
        let part1 = rawDescription.substring(0, index),
            part2 = rawDescription.substring(index, index + text.length),
            part3 = rawDescription.substring(index + text.length, description.length)

        return <Fragment>{part1}<mark>{part2}</mark>{part3}</Fragment>;
    }
    return rawDescription;
}