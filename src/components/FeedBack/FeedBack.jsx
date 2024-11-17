import moment from "moment";
import React from "react";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const FeedBack = ({ feedbackData }) => {
  console.dir(new Date());
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
      {feedbackData.map((feed) => (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={feed.userImg}
                  alt=""
                />
                <h2 className="text-2xl font-bold">{feed.name}</h2>
              </div>
              <span>{new Date().toLocaleDateString()}</span>
              {/* <p>{moment().format("dddd, MMMM Do YYYY")}</p> */}
            </div>

            <p>{feed.review}</p>
            <div className="card-actions justify-between items-center">
              <div className="flex items-center gap-2">
                {/* <ReactStars
                  count={feed.rating}
                  // onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                /> */}
                <Rating
                  initialRating={feed.rating}
                  readonly
                  emptySymbol={<CiStar />}
                  fullSymbol={<FaStar />}
                  fractions={2}
                />
                <p className="font-bold">{feed.rating}</p>
              </div>

              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;
