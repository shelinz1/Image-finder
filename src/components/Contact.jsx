import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className="m-3 text-center">
      <p className="text-secondary fs-3 fw-bolder">Contact us!</p>

      <p>You can reach me on any of the social media platform below</p>

      <div className="social-links">
        <a href="https://github.com/shelinz1" className="fs-3 m-3">
          <AiFillGithub />
        </a>
        <a href="https://www.facebook.com/itodo.shadrach" className="fs-3 m-3">
          <AiFillFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/itodo-shadrach-894a7521b/"
          className="fs-3 m-3"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/shelinz10/" className="m-3 fs-3"><AiFillInstagram/></a>
      </div>
    </div>
  )
}

export default Contact
