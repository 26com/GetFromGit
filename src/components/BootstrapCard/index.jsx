import { React } from 'react';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';

function BootstrapCard({
  project, creator, stargazers, watchers, url,
}) {
  return (
    <Card style={{ width: '23rem' }}>
      <a href={url}>
        <Card.Body>
          <Card.Title>{project}</Card.Title>
          <Card.Text>
            Author :
            {' '}
            {creator}
          </Card.Text>
          <Card.Text>
            Stargazers :
            {' '}
            {stargazers}
          </Card.Text>
          <Card.Text>
            Watchers :
            {' '}
            {watchers}
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
}

BootstrapCard.propTypes = {
  project: PropTypes.string,
  creator: PropTypes.string,
  stargazers: PropTypes.number,
  watchers: PropTypes.number,
  url: PropTypes.string,
};
BootstrapCard.defaultProps = {
  project: 'project name',
  creator: 'owner',
  stargazers: 'stargazers',
  watchers: 'watchers',
  url: 'link',
};

export default BootstrapCard;
