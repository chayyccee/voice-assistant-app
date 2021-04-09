import React from  'react';

import { Grid, Typography, Grow } from "@material-ui/core";

import useStyles from './styles';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
    { color: '#00838f', title: 'About This App', text: 'What does this app do or What can I do here' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Stay updated with the business news in the US', text: 'Give me the current business news from the US' },
    { color: '#283593', title: 'News by Sources', info: 'All news from BBC', text: 'Give me the news from BBC' },
  ];

const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();

    if(!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {infoCard.info
                                 ? (<Typography variant="h6">
                                     <strong>
                                         {infoCard.title.split(' ')[2]}:
                                     </strong>
                                     <br />
                                     {infoCard.info}
                                  </Typography>)
                                 : null}
                                 <Typography variant="h6">Try Saying: <br /><i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {articles.map((article, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                    <NewsCard article={article} activeArticle={activeArticle} i={i} />
                </Grid>
            ))}
            </Grid>
        </Grow>
    );
};

export default NewsCards;
