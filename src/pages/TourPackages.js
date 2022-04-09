import React, { useEffect, useState } from "react";
import { useGetPackages, useGetReviews } from "../api/get-resources";

function TourPackages() {
  const [packages, setPackages] = useState();
  const [reviews, setReviews] = useState();

  const { data: _reviews } = useGetReviews();
  const { data: _packages } = useGetPackages();

  useEffect(() => {
    if (_packages) {
      setPackages(_packages);
    }
  }, [_packages]);

  useEffect(() => {
    if (packages) {
      console.log(packages);
    }
  }, [packages]);

  useEffect(() => {
    if (_reviews) {
      setReviews(_reviews);
    }
  }, [_reviews]);

  useEffect(() => {
    if (reviews) {
      console.log(reviews);
    }
  }, [reviews]);

  return <div></div>;
}

export default TourPackages;
