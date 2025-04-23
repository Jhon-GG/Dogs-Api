import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import axios from 'axios'
import Details from '../views/details.vue'


vi.mock('axios')


vi.mock('../components/navbar.vue', () => ({
  default: {
    name: 'Navbar',
    template: '<div data-testid="navbar-mock"></div>'
  }
}))

vi.mock('../components/detailsContent.vue', () => ({
  default: {
    name: 'DetailsContent',
    props: ['breedData'],
    template: '<div data-testid="details-content-mock">{{ breedData ? breedData.name : "" }}</div>'
  }
}))


vi.stubEnv('VITE_DOG_API_KEY', 'test-api-key')

describe('Details.vue', () => {
  let router
  
  beforeEach(() => {

    vi.resetAllMocks()

    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/details/:breed',
          name: 'Details',
          component: Details
        }
      ]
    })
  })

  it('muestra el estado de carga inicialmente', async () => {

    axios.get.mockImplementationOnce(() => new Promise(resolve => setTimeout(() => {
      resolve({ data: { name: 'Labrador Retriever', id: 1 } })
    }, 100)))


    router.push('/details/Labrador%20Retriever?id=1')
    await router.isReady()
    
    const wrapper = mount(Details, {
      global: {
        plugins: [router]
      }
    })


    expect(wrapper.find('.loading').exists()).toBe(true)
    expect(wrapper.find('.loading').text()).toBe('Loading...')
  })

  it('busca detalles por ID cuando está presente en la URL', async () => {

    const mockBreed = {
      id: 1,
      name: 'Labrador Retriever',
      temperament: 'Friendly, Active'
    }
    axios.get.mockResolvedValueOnce({ data: mockBreed })


    router.push('/details/Labrador%20Retriever?id=1')
    await router.isReady()
    
    const wrapper = mount(Details, {
      global: {
        plugins: [router]
      }
    })


    await flushPromises()
    

    expect(axios.get).toHaveBeenCalledWith(`https://api.thedogapi.com/v1/breeds/1`, {
      headers: { 'x-api-key': 'test-api-key' }
    })
  })
})