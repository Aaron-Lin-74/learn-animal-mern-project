import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardItem from '../CardItem'
import { BrowserRouter } from 'react-router-dom'

const mockProps = {
  class: 'animal',
  text: 'Animal Name',
  label: 'Mock Type',
  src: 'http://mock.image.jpg',
  path: '/animal/mockID',
}
const MockCardItem = () => {
  return (
    <BrowserRouter>
      <CardItem {...mockProps} />
    </BrowserRouter>
  )
}
describe('CardItem component', () => {
  it('should render the component', () => {
    render(<MockCardItem />)
    screen.getByText('Loading...')
    screen.getByAltText('loading')
    screen.getByAltText(mockProps.text)
    screen.getByRole('heading', { name: 'Animal Name' })
  })

  it('should render the loading image and text before the image is loaded', () => {
    render(<MockCardItem />)
    screen.getByText('Loading...')
    screen.getByAltText('loading')
  })

  it('should disappear the loading image and text after the image is loaded', () => {
    render(<MockCardItem />)
    fireEvent.load(screen.getByAltText(mockProps.text))
    expect(screen.queryByText('Loading...')).toBeNull()
    expect(screen.queryByAltText('loading')).toBeNull()
  })
})
