import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import "./Reviews.css";

import React from "react";

const Reviews = ({ getMovieData, food, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const foodId = params.foodId;

  useEffect(() => {
    getMovieData(foodId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: foodId,
      });

      const updatedReviews = [...reviews, { body: rev.value }];

      rev.value = "";

      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <div className="foodreview">
      <h3 ><span>Food</span> Reviews</h3><br/>
    <hr/>
          <h2>{food?.title}</h2>
    </div>
      <Container>
        <Row>
          {/* <Col></Col> */}
          <br />
        </Row>
        {/* <Row className="mt-2"> */}
        <Row>
          {/* <Col> */}
          <img className="imageReview" src={food?.poster} alt="" />
          {/* </Col> */}
          <Col>
            {
              <>
                <Row>
                  <Col>
                    <ReviewForm
                      handleSubmit={addReview}
                      revText={revText}
                      labelText="Write a Review?"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            }
            {reviews?.map((r) => {
              return (
                <>
                  <Row>
                    <Col>{r.body}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr />
                    </Col>
                  </Row>
                </>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reviews;
