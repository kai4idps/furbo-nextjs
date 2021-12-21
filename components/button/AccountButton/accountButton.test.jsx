import { render, mockNextUseRouter } from 'src/testUtils';
import AccountButton from './AccountButton';

describe('Account Button', () => {
  let testProps;
  beforeEach(() => {
    testProps = {
      text: 'Sign Up',
    };
  });

  mockNextUseRouter({
    route: '/us',
    pathname: '/us',
    query: { region: 'us' },
    asPath: `/us`,
  });

  test('render text', () => {
    const { getByText } = render(<AccountButton {...testProps} />);
    const text = getByText(testProps.text);
    expect(text).toBeVisible();
  });
});
