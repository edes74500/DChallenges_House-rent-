import { css } from "styled-components";

export const globalStyles = css`
  :root {
    --dark-grey-1: #121826; // Exem
    --dark-grey-2: #20293af2; // Exem
    --dark-grey-3: #20293a;
    --light-grey-1: #4a5567; // Exem
    --light-grey-2: #97a3b6; // Exem
    --blue-1: #4e80ee; // Exem
    --orange-1: #f6c768; // Exem
    --white-1: #f2f9fe; // Exem
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--dark-grey-1);
    font-family: "Outfit Variable", sans-serif;
  }
`;
