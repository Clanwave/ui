import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('c-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<c-button></c-button>',
    });
    expect(root).toEqualHtml(`
      <c-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </c-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<c-button first="Stencil" last="'Don't call me a framework' JS"></c-button>`,
    });
    expect(root).toEqualHtml(`
      <c-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </c-button>
    `);
  });
});
