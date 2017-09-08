import MainPage from '../../src/components/MainPage'

describe('MainPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MainPage />
    )
  })

  it('should render a MainPage component that has a <h2> with welcome text', () => {
    expect(wrapper.find('h2')).toBePresent()
    expect(wrapper.text()).toMatch('Welcome to BY-Campers!')
  })

})
