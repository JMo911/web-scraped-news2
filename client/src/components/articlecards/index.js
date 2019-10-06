import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const ArticleCard = (props) => {
  return (
    <div>
      <Card body className="text-center">
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.summary}</CardText>
        <Button href={props.href}>Read More</Button>
      </Card>
    </div>
  );
};

export default ArticleCard;