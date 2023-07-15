import getBillboards from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'

export const revalidate = 0; 

const Home = async() => {
  const products = await getProducts({ isFeatured : true})
  const billboard = await getBillboards("00edd5cf-8db4-445b-8c3b-292e25c75643")

  return (
      <Container>
          <div className='space-y-10 pb-10'>
            <Billboard data={billboard} />
          </div>
          <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
            <ProductList title='Featured' items={products} />
          </div>
      </Container>
  )
}

export default Home;