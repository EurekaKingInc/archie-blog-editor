import React from "react"
import { render } from "react-dom"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import styled, { css } from "styled-components"
import { Sugar } from "@roast-cms/react-sugar-styled"

import { FrenchPress, Wrapper, Picture } from "@roast-cms/french-press-editor"
//
// button component
import { TinyButton as TinyButtonInit } from "@roast-cms/react-button-beans"
import Link from "@roast-cms/react-link-filter"

//
const TinyButton = props =>
  <TinyButtonInit linkComponent={Link} {...props}>
    {props.children}
  </TinyButtonInit>
const ImageButton = styled(TinyButton)`
  max-width: 3em;
  ${props => props.theme.size.breakpoint.max.m`
    right: -${props => props.theme.size.block.spacing}em;
  `};
`

// customize theme
const CustomTheme = {
  ...Sugar,
  color: {
    ...Sugar.color,
    brand:
      "rgb(55, 64, 98)"
  }
}
//
// render everything!
render(
  <div>
    <ThemeProvider theme={CustomTheme}>
      <BrowserRouter>
        <Wrapper>
          <FrenchPress
            editorRef={ref => {}}
            components={{
              Picture,
              ImageButton: props => {
                return (
                  <ImageButton
                    branded
                    followComposerCursor
                    style={props.style}
                    onMouseDown={event => props.click(event)}
                  >
                    {props.children}
                  </ImageButton>
                )
              }
            }}
            options={{
              imageMaxSize: 10
            }}
            controls={{
              //
              // button that converts the text block into a header
              MakeHeader: () =>
                <small
                  style={{
                    height: "1.25em",
                    overflow: "hidden",
                    display: "block"
                  }}
                >
                  H<sub>1</sub>
                </small>,
              //
              // button that converts header block back into paragraph
              CancelHeader: () => <small>p</small>,
              //
              // button that converts text block into a quote
              MakeQuote: () => <small>»</small>,
              //
              // button that lets user add a link URL to selected text
              MakeLink: () => <u>link</u>,
              //
              // button that marks selected text as bold (and the reverse)
              MakeBold: () => <strong>bold</strong>,
              //
              // button that marks selected text as italic (and the reverse)
              MakeItalic: () => <em>italic</em>,
              //
              UploadImage: () => <span>img</span>
            }}
          />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  </div>,
  window.document.getElementById("app")
)
