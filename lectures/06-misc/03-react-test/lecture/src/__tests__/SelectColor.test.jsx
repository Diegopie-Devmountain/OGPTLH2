import { render } from "@testing-library/react"
import SelectColor from "../components/SelectColor"

import { fireEvent, screen } from "@testing-library/react"

test('changes color', () => {

  render(<SelectColor />)

  fireEvent.change(
    screen.getByRole('combobox', { name: /select a color/i}),
    { target: { value: 'green'}}
  )

  expect(
    screen.getByText(/green/i, { selector: 'span'}) 
  ).toBeInTheDocument();

})