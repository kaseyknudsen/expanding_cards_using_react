import { Card, CardBody, CardImg, CardText, CardHeader } from "reactstrap"

function RiderCard( {rider, image} ) {
  return (
    <>
    <Card className="card-class">
    <CardImg src={image} className='card-img' />
        <CardHeader>
            <h1>{rider}</h1>
        </CardHeader>
       
        <CardBody>
            
        </CardBody>
    </Card>
    </>
  )
}

export default RiderCard;