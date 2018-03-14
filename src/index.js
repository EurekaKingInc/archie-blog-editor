import React from "react"
import { render } from "react-dom"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import { Sugar } from "@roast-cms/react-sugar-styled"

import { FrenchPress, Wrapper, Picture } from "@roast-cms/french-press-editor"

//
// render everything!
render(
  <div>
    <ThemeProvider theme={Sugar}>
      <BrowserRouter>
        <Wrapper>
          <FrenchPress
            editorRef={ref => {}}
            components={{Picture}}
            options={{
              imageMaxSize: 10
            }}
          />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  </div>,
  window.document.getElementById("app")
)
