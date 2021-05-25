import React, { useState, useEffect } from 'react'


const SoccerContext = React.createContext()

const SoccerProvider =({children})=>{
    const [scheduled, setScheduled] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])
    const [search, setSearch] =useState('')
    //http://www.omdbapi.com/?i=tt3896198&apikey=c51f8947
    //http://api.tvmaze.com/search/shows?q=superman


useEffect(()=>{
    getData()
}, [search])

   const handleChange=(e)=>{
        setSearch(e.target.value)
    }
   
     const getData = async () =>{
    //     const res = await fetch(`http://www.omdbapi.com/?s=batman&page=1&apikey=c51f8947`,{
    //         "headers":{
              
    //         },
    //         "dataType":"json",
    //         "method":"GET"
    //     })


    //     const data = await res.json()



        const searchFetch= await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)

        let searchResult = await searchFetch.json()

        const home = await fetch(`https://api.tvmaze.com/search/shows?q=wam`, {
            "headers":{

            },
            "dataType" : "json",
            "method":"GET"
        })

        const homeData = await home.json()

        

        const homeFetch2 = await fetch(`https://api.tvmaze.com/search/shows?q=blac`, {
            "headers":{

            },
            "dataType" : "json",
            "method":"GET"
        })

        const homeData2 = await homeFetch2.json()

        const homeFetch3 = await fetch(`https://api.tvmaze.com/search/shows?q=tite`, {
            "headers":{

            },
            "dataType" : "json",
            "method":"GET"
        })

        const homeData3 = await homeFetch3.json()



        setScheduled([...homeData, ...homeData2, ...homeData3, ...searchResult])
        setSearchedMovies(searchResult)

    

       //console.log(data);
       //setScheduled(data)
    }


    const showDetails = (name) =>{
        const movie = scheduled.find(t=>t.show.name===name)
        return movie
    }
 

    return(
        
    <SoccerContext.Provider value={{
        search,
        scheduled,
        searchedMovies,
        handleChange,
        getData,
        showDetails,
      
    }}>
        {children}
    </SoccerContext.Provider>

    )
}

const SoccerConsumer = SoccerContext.Consumer

export {SoccerContext, SoccerProvider, SoccerConsumer}