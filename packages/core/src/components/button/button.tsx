import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'c-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  /**
   * The button label
   */
  @Prop() label: string;

  render() {
    return <button class="ripple">{this.label}</button>;
  }
}
