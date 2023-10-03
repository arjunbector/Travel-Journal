import React from "react";
import styles from "./Card.module.css";
import { FaLocationDot } from "react-icons/fa6";

const Card = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div>
          <img
            className={styles.image}
            src={`${props.item.imageUrl}`}
            alt="image"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.locationDetails}>
            <FaLocationDot className={styles.locationIcon} />
            <span className={styles.location}>
              {props.item.location.toUpperCase()}
            </span>
            <a target="blank" href={`${props.item.googleMapsUrl}`}>
              View on Google Maps
            </a>
          </div>
          <div className={styles.title}>{props.item.title}</div>
          <div className={styles.date}>
            <span>{props.item.startDate}</span> -{" "}
            <span>{props.item.endDate}</span>
          </div>
          <div className={styles.description}>{props.item.description}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
