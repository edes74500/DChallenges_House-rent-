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

  html {
    /* scrollbar-width: thin; */
  }

  /* Style de la poignée (la partie que vous faites glisser) pour Firefox */
  html::-moz-scrollbar-thumb {
    background-color: #4caf50; /* Couleur de fond de la poignée */
    border-radius: 6px; /* Coins arrondis de la poignée */
  }

  /* Style de la piste (la partie sur laquelle la poignée se déplace) pour Firefox */
  html::-moz-scrollbar-track {
    background-color: #f1f1f1; /* Couleur de fond de la piste */
  }
  html {
    overflow-y: scroll;
    scrollbar-width: thin;
    /* Largeur de la barre de défilement */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Style de la poignée (la partie que vous faites glisser) */
    ::-webkit-scrollbar-thumb {
      background-color: #2961d8; /* Couleur de fond de la poignée */
      border-radius: 2px; /* Coins arrondis de la poignée */
    }

    /* Style de la piste (la partie sur laquelle la poignée se déplace) */
    ::-webkit-scrollbar-track {
      background-color: #0f2c68; /* Couleur de fond de la piste */
    }
  }
  body {
    scrollbar-gutter: stable;
  }

  /* Changer la couleur de fond lors de la sélection */
  ::selection {
    background-color: #3498db62; /* Couleur de fond lors de la sélection */
    color: #fff; /* Couleur du texte lors de la sélection */
  }

  /* Changer la couleur de fond pour Firefox */
  ::-moz-selection {
    background-color: #3498db80;
    color: #fff;
  }
`;
