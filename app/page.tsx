'use client'

import { useEffect, useState } from "react";
import {Card, Footer, Grid, Header} from "./components";


// function expression
export default function Home() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
     const fetchCountries = async () => {
        const response = await fetch ("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setCountries(data)
     }

     fetchCountries()
  }, []) 

  return (
    <>
      <Header />
      <main className="flex-1">
        <Grid>
          {countries.map(({id, country, capital, region, population}) => {
            return (
              <Card 
                key={id}
                country={country} 
                capital={capital} 
                region={region} 
                population={population} 
              />
            )
          })}    
        </Grid>      
      </main>
      <Footer />
    </>
  );
}
