import { Component, h, Prop } from '@stencil/core';
import { colors } from '../../../../theme/src/lib/colors/colors';

@Component({
  tag: 'c-color',
  styleUrl: 'color.scss',
  shadow: true,
})
export class Color {
  /**
   * The color
   */
  @Prop() color: string;

  render() {
    return (
      <div>
        <div style={{ backgroundColor: colors[this.color].hexString() }} />
        <span>
          <span>{this.color}</span>
          {colors[this.color].hexString()}
        </span>
      </div>
    );
  }
}
