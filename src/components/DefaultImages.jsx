import React, { useState, useEffect } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import Loader from './Loader'
import axios from 'axios'

function DefaultImages() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const apiKey = '23058860-80b9b774fec03682e432692b3'
  const apiUrl = 'https://pixabay.com/api/'

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `${apiUrl}/?key=${apiKey}&image_type=photo&per_page=10&safesearch=true&order=popular`,
      )
      .then((res) => {
        if (res.status === 200) {
          setImages(res.data.hits)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (err.request) {
          console.log(err.request)
        }
        if (err.response) {
          console.log(err.response)
        }
      })
  }, [])

  let defaultImages;
  let randomImages = Math.random({ images }* 20)

  if (randomImages) {
    defaultImages = (
      <div>
        
      <GridList cols={3}>
        {images.map((img) => (
          <GridTile
            title={img.tags}
            key={img.id}
            subtitle={
              <span>
                by <strong>{img.user}</strong>{' '}
              </span>
            }
          >
            <img src={img.largeImageURL} alt="" />
          </GridTile>
        ))}
        </GridList>
       
      </div>
      
    )
  } else {
    defaultImages = null
  }

  return <div>{!loading ? (
    <div>
      {defaultImages}
    
    </div>
  ) : <Loader />}</div>
  
}

export default DefaultImages;
