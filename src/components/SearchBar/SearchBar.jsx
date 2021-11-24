import { useState } from "react"

const SearchBar = ({onSubmit}) => {

    const [query, setQuery] = useState('')

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        onSubmit(query)
        setQuery('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            value ={query} onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search citi"></input>
        </form>
    )
}

export default SearchBar