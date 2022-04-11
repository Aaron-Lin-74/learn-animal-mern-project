import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../Footer'

function MockFooter() {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
}

beforeEach(() => render(<MockFooter />))
describe('Footer component', () => {
  it('should render the component', () => {
    screen.getByRole('link', { name: /contact/i })
    screen.getByRole('link', { name: /about us/i })
    screen.getByRole('link', { name: /faq/i })
    screen.getByRole('link', { name: /terms of use/i })
    screen.getByRole('link', { name: /learn animals/i })
    screen.getByText(/learn animals © 2021/i)
    screen.getByRole('link', { name: /facebook/i })
    screen.getByRole('link', { name: /instagram/i })
    screen.getByRole('link', { name: /twitter/i })
    screen.getByRole('link', { name: /youtube/i })
  })

  it('should have href attribute for relative buttons', () => {
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/contact'
    )
    expect(screen.getByRole('link', { name: /about us/i })).toHaveAttribute(
      'href',
      '/about'
    )
    expect(screen.getByRole('link', { name: /faq/i })).toHaveAttribute(
      'href',
      '/faq'
    )
    expect(screen.getByRole('link', { name: /terms of use/i })).toHaveAttribute(
      'href',
      '/terms-of-use'
    )
    expect(
      screen.getByRole('link', { name: /learn animals/i })
    ).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute(
      'href',
      'https://www.facebook.com/'
    )
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute(
      'href',
      'https://www.instagram.com/'
    )
    expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute(
      'href',
      'https://twitter.com/'
    )
    expect(screen.getByRole('link', { name: /youtube/i })).toHaveAttribute(
      'href',
      'https://www.youtube.com/'
    )
  })
})
