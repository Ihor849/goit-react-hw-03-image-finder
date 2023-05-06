import PropTypes from 'prop-types';

import { ContainerBox } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerBox classNames="container">{children}</ContainerBox>;
};
export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
