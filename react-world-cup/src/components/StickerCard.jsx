import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';
import styles from "../app.sass"

 
const getPositionClassName = (position) => {
  return  styles["stickerPosition" + position]; 
}


const StickerCard = (props) => (
  <Card className="col-md-3">
    <CardTitle className="text-center align-middle mb-1">{props.sticker.name}</CardTitle>
    <CardBody className="mt-0">
      <CardImg top width="100%" className="mb-1" src={require(`assets/img/${props.sticker.img_url}`)} alt={props.sticker.name} 
      />
      <div style={{height:"100px"}} className="row">
        <CardImg className="d-inline col-md-4 h-25" src={require(`assets/img/${props.sticker.country_code}.svg`)} alt={props.sticker.country_code} />
        <span className={ `${styles.stickerDescription} h-100 m-0 p-0 d-inline align-top text-justify col-md-8 overflow-hidden`}>{props.sticker.description}</span>
      </div>
      <div style={{height: "50px"}} className="row m-2">
        <span className={`${styles.stickerPosition}  ${getPositionClassName(props.sticker.position)} + d-inline mr-1`}></span>
      <Button width="80%" style={{"fontSize":"1.5em"}} color="primary" className="d-inline w-75 col-md-offset-0 btn btn-primary
             text-center font-weight-light btn btn-primary">{props.buttonMessage}</Button>
      </div>
    </CardBody>
  </Card>
);

export default StickerCard;

