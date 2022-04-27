import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/Map'


export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>

        {/* Header */}
        <Header>
          <Image height={28} width={28} alt="Uber logo here" src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
        </Header>

        {/* Action Buttons */}
        {/* Input Buttons */}
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col h-screen
`
const ActionItems = tw.div`
flex-1
`
const Header = tw.div`

`