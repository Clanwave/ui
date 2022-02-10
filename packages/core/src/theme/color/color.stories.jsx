import { h } from '@stencil/core';

export default {
  title: 'Theme / Colors',
};
const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '5vw 0',
};
export const ColorScheme = (args) => {
  return (
    <div>
      <div style={rowStyle}>
        <c-color color="primary" />
        <c-color color="secondary" />
        <c-color color="tertiary" />
      </div>
      <div style={rowStyle}>
        <c-color color="success" />
        <c-color color="warning" />
        <c-color color="danger" />
      </div>
      <div style={rowStyle}>
        <c-color color="dark" />
        <c-color color="medium" />
        <c-color color="light" />
      </div>
    </div>
  );
};
