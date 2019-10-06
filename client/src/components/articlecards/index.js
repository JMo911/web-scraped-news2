import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const ArticleCard = (props) => {
  return (
    <div>
      <Card body className="text-center col-sm-10 offset-sm-1">
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.summary}</CardText>
        <Button href={'https://na.leagueoflegends.com' + props.href} target='_blank'>Read More</Button>
      </Card>
    </div>
  );
};

export default ArticleCard;