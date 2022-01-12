import React, { Component } from 'react'
import axios from 'axios'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import ReactPaginate from 'react-paginate'
import Images from './Images'
import DefaultImages from './DefaultImages'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

class search extends Component {
  state = {
    text: '',
    apiKey: '23058860-80b9b774fec03682e432692b3',
    apiUrl: 'https://pixabay.com/api/',
    amount: 100,
    pageNumber: 0,
    images: [],

    open: false,
    currentImage: '',
  }

  handleOPen = (img) => {
    this.setState({ open: true, currentImage: img })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  onTextChange = (e) => {
    this.setState({ text: e.target.value }, () => {
      if (this.state.text === '') {
        this.setState({ images: [] })
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.text}&image_type=photo&per_page=${this.state.amount}&safesearch=true&order=popular`,
          )
          .then((res) => {
            if (res.status === 200) {
              this.setState({ images: res.data.hits })
              console.log(this.state.images)
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
      }
    })
  }

  render() {
    const imagesPerPage = 10
    const pageVisited = this.state.pageNumber * imagesPerPage
    const imageDisplay = this.state.images.slice(
      pageVisited,
      pageVisited + imagesPerPage,
    )

    let imageList

    if (imageDisplay) {
      imageList = (
        <GridList rows={3}>
          {imageDisplay.map((img) => (
            <GridTile
              cols={1}
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>{' '}
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.handleOPen(img.largeImageURL)}>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      )
    } else {
      imageList = null
    }

    const pageCount = Math.ceil(this.state.images.length / imagesPerPage)

    const changePage = ({ selected }) => {
      this.setState({ pageNumber: selected })
    }

    const actions = [
      <FlatButton label="Close" secondary={true} onClick={this.handleClose} />,
    ]

    const dialog = (
      <Dialog
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        <img src={this.state.currentImage} alt="" style={{ width: '100%' }} />
      </Dialog>
    )

    return (
      <>
        <div className="searchArea">
          <div className="search-content">
            <div className="intro text-break text-center text-capitalize">
              <h1 className="heading">Amazing free images.</h1>
              <h4 className="heading">Get access to high quality images.</h4>
            </div>

            <div className="form-group">
              <div className="input d-flex justify-content-center">
                <input
                  type="text"
                  placeholder="search images"
                  name="text"
                  className="form-control w-50 mt-2"
                  value={this.state.text}
                  onChange={this.onTextChange}
                />
              </div>
            </div>
            <p className="text-center text-capitalize text-break p-2">
              <small>
                Popular images:Nature,Dogs,wallpapers,cat,flowers,love...
              </small>
            </p>
          </div>
        </div>

        {this.state.images.length > 0 ? (
          <div>
            <Images images={imageList} />
            {dialog}
            <ReactPaginate
              previousLabel={<FcPrevious />}
              nextLabel={<FcNext />}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={
                'paginationContainer  mt-4 d-flex justify-content-center container p-3'
              }
              previousClassName={'previousBtn'}
              nextClassName={'nextBtn'}
              disabledClassName={'disabledBtn'}
              activeClassName={'activeBtn text-white'}
            />
          </div>
        ) : (
          <div>
            <DefaultImages />
          </div>
        )}
      </>
    )
  }
}



export default search
