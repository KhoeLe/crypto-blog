import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchCrypto } from '../actions/fetchData'
import { RootState } from '../types'

function Search() {

    const dispart  = useDispatch()

    const {searchResults, loading, error} = useSelector((state: RootState) => state.searchReducer)

    const [searchText, setSearchText] = useState('')

    const onchangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value.trim())
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        setSearchText('')

    }

    useEffect(() => {
        dispart(fetchSearchCrypto(searchText))
    }, [dispart])


    console.log(searchText)
  return (
    <form className='w-96  relative items-center ml-7 font-nunito' onSubmit={handleSubmit}>
        <input onChange={onchangeSearch}  value={searchText} type="text" name="search" className='w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required:outline-0 border border-transparent focus:border-cyan'
        placeholder='Searching here'  />
        <button className='absolute right-1 cursor-pointer' type='submit' ></button>

        {searchText.length > 0
        ?
            <ul className='absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>

            </ul>
        :
        null}
    </form>
  )
}

export default Search
