import React from "react";

export default function CommentPost({item}) {

  return (
    <li className="readnews__item">
      <div className="readnews__item-left">
        <button className="readnews__item-btn">
          <i className='bx bx-plus'></i>
        </button>
        <p>12</p>
        <button className="readnews__item-btn">
          <i className='bx bx-minus'></i>
        </button>
      </div>
      <div className="readnews__item-right">
        <div className="readnews__item-header">
          <div className="readnews__item-imgbox">
            <img className="readnews__item-img" src="https://picsum.photos/id/22/35" alt="avatar" />
          </div>
          <h3 className="readnews__item-name">{item.userAgent}</h3>
          <p className="readnews__item-date">1 oy avval</p>
        </div>
        <p className="readnews__item-text">{item.description}</p>
      </div>
    </li>
  )
}