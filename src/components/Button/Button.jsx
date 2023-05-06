import { ButtonLoad } from './Button.styled';
export const Button = ({ btnLoadMore }) => {
  return (
    <ButtonLoad type="button" className="button" onClick={btnLoadMore}>
      Load More
    </ButtonLoad>
  );
};
