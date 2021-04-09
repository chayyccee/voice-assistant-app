import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

import useStyles from './styles';
import classNames from 'classnames';

const NewsCard = ({ article : { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {

    const classes = useStyles();

    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offSetTop - 50);

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, f) => refs[f] || createRef()));
    },[]);

    useEffect(() => {
        if(i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    },[i, activeArticle, elRefs]);

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={ urlToImage || 'https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1024/p:16x9/news_1920x1080.webp' } />
                <div className={classes.details}>
                    <Typography variant="2" color="textSecondary" component="h2">{( new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5" >{title}</Typography>
                <CardContent>
                    <Typography variant="body2" component="p" color="textSecondary">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    );
};

export default NewsCard;
