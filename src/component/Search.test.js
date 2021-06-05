import React from 'react'
import { render } from '@testing-library/react'
import SearchBox from './SearchBox'
import '@testing-library/jest-dom/extend-expect'





  test("renders component", () => {
    const { getByTestId } = render(<SearchBox />)
    expect(getByTestId('search')).toBeInTheDocument();

    // userEvent.type(inputEl, "test@mail.com");

  });


  