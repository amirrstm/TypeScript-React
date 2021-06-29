import { createGlobalStyle, css } from 'styled-components';

const SelectStyle = css`
  & .ant-select-selector {
    height: 40px !important;
    padding: 4px 11px !important;

    & .input {
      height: 100%;
    }
  }
`;

const FormLabelStyle = css`
  & .ant-form-item-label {
    & label {
      font-weight: 600;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const InputStyle = css`
  & .ant-form-item-explain-error {
    font-size: 0.8rem;
  }

  & .ant-input-rtl,
  & .ant-input-password {
    height: 40px;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  ${InputStyle}
  ${SelectStyle}
  ${FormLabelStyle}
`;

export default GlobalStyle;
