import { css } from 'linaria'
import { modularScale } from 'polished'

export default css`
  :global() {
    html {
      max-width: 100%;
      background: #f1f1f1;
    }

    body {
      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont,
        'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', system-ui, sans-serif;
      background: linear-gradient(315deg, #f1f1f1 0%, #e7e7e7 100%);
    }

    h1 {
      font-size: ${modularScale(2.5)};

      &:hover {
        color: blue;
      }
    }
  }
`
