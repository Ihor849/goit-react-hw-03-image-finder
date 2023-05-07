import PropTypes from 'prop-types';
import { UpTop } from './ButtonUpTop.styled';
import { ReactComponent as Up } from '../icons/rocket_icon_187836 (1).svg';

export const ButtonUpTop = ({ onClick }) => {
  return (
    <UpTop type="button" className="up-top" onClick={onClick}>
      <Up />
    </UpTop>
  );
};

ButtonUpTop.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
