import React from "react";
import "./Blogpost.css";

import detox from "../assets/detox.png";
import rebeccalee from "../assets/rebeccalee.png";

const newsData = [
  {
    image: detox, // Update this path as needed
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    author: {
      name: "Rebecca Lee",
      avatar: rebeccalee, // Update this path as needed
    },
  },
  {
    image: detox,
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    author: {
      name: "Rebecca Lee",
      avatar: rebeccalee,
    },
  },
  {
    image: detox,
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    author: {
      name: "Rebecca Lee",
      avatar: rebeccalee,
    },
  },
];

export default function Blogpost() {
  return (
    <div className="latest-news-container">
      <p className="latest-news-subtitle">Blog & News</p>
      <h2 className="latest-news-title">Read Our Latest News</h2>
      <div className="latest-news-grid">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <img src={news.image} alt="News" className="news-card-image" />
            <div className="news-card-content">
              <p className="news-meta">
                {news.category} | {news.date}
              </p>
              <h3 className="news-title">{news.title}</h3>
              <div className="news-author">
                <img
                  src={news.author.avatar}
                  alt={news.author.name}
                  className="author-avatar"
                />
                <span className="author-name">{news.author.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
