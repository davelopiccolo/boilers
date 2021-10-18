import React from "react";

export default function Ratings(props) {
    const { rating } = props
    return (
        <div className="rating">
            <span className="star">
                <i className={
                    rating >= 1
                        ? "fa fa-star"
                        : "fa fa-star-o"}
                >

                </i>
            </span>
            <span className="star">
                <i className={
                    rating >= 2
                        ? "fa fa-star"
                        : "fa fa-star-o"}
                >

                </i>
            </span>
            <span className="star">
                <i className={
                    rating >= 3
                        ? "fa fa-star"
                        : "fa fa-star-o"}
                >

                </i>
            </span>
            <span className="star">
                <i className={
                    rating >= 4
                        ? "fa fa-star"
                        : "fa fa-star-o"}
                >

                </i>
            </span>
            <span className="star">
                <i className={
                    rating >= 5
                        ? "fa fa-star"
                        : "fa fa-star-o"}
                >

                </i>
            </span>


        </div>
    )
}