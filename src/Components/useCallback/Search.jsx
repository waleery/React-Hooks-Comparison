import { memo } from 'react'

const Search = ({onChange}) => {
    console.log("Search rendered")
  return (
    <input type='text' placeholder='Search users...' onChange={(e) => onChange(e.target.value)}/>
  )
}
//memo is a hoook used for performance reasons. It intercepts rerender when props are different form one render to the next

//in react functions are different on every render by default!
export default memo(Search)