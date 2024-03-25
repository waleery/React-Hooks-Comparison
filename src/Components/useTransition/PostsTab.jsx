
const SlowPost = ({index}) => {
    let startTime = performance.now()
    while(performance.now() - startTime <3){
        //Do nothing for 3ms per item to emulate extremly slow code
    }

    return(
        <li className="item">
            Post #{index+1}
        </li>
    )
}

const PostsTab = () => {

    console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />')

    let items = []
    for(let i = 0 ; i<500; i++){
        items.push(<SlowPost key ={i} index = {i} />)
    }
  return (
    <div style={{overflowY:'scroll', maxHeight:"20%"}}>
            <div>{items}</div>

    </div>
  )
}
export default PostsTab