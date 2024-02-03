import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'

export default function Hero() {
  return (
    <section className="w-full py-20">
      <Container> 
        <div className="w-full">
            <div className="w-[60%]">
                <h1 className="uppercase text-5xl leading-[70px]">ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</h1>
                <p className="text-base text-left mt-8 leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod veniam, quis nostrud exercitation
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button href="/" type="outline">Кнопка</Button>
            </div>
        </div>
      </Container>
    </section>
  )
}
