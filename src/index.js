import React from "react"
import { render } from "react-dom"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import { Sugar } from "@roast-cms/react-sugar-styled"

//
// render everything!
render(
  <div>
    <ThemeProvider theme={Sugar}>
      <BrowserRouter>
        <div>
          hello
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </div>,
  window.document.getElementById("app")
)
