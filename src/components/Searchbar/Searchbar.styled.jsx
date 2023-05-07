import styled from 'styled-components';
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;
export const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 0;

  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;
export const ButtonLabel = styled.span`
  width: 30px;
  height: 30px;
  padding: 15px;
`;
export const FormInput = styled.input`
  display: inline-block;
  width: 600px;
  font: inherit;
  font-size: 30px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
