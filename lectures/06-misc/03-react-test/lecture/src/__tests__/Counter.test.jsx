import Counter  from '../components/Counter.jsx'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('test Counter.jsx', () => {

  test('render initial text', () => {
    render(<Counter />);
  
    expect( 
      screen.getByText('Count: 0')
    ).toBeInTheDocument()
  })

  test('incremennt button increments by one', async () => {
    render(<Counter />)

    const user = userEvent.setup()

    await user.click(
      screen.getByRole('button', { name: /increment/i})
    );

    expect(
      screen.getByText(/count: 1/i)
    ).toBeInTheDocument()

  })

  
})
