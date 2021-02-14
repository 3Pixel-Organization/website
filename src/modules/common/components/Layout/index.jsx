import * as Grid from 'react-grid-system';

export const Container = ({ children, ...props }) => (
  <Grid.Container {...props}>{children}</Grid.Container>
);
export const Row = ({ children, ...props }) => <Grid.Row {...props}>{children}</Grid.Row>;
export const Col = ({ children, ...props }) => <Grid.Col {...props}>{children}</Grid.Col>;

export { Flex } from 'modules/common/components/Layout/Flex';
