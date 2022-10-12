import { Col, Row } from 'react-grid-system';

const MatchHeader = (props) => {
  const { league } = props.match;
  const { name, image_url, url } = league;

  return (
    <Row>
      <Col sm={image_url ? 9 : 12}>
        <h3 className="m-0">
          {url ? (
            <a
              href={`${url}`}
              target="_blank"
              rel="noreferrer"
              className="hover:no-underline hover:text-gray-600"
              title="See information about League"
            >
              League: {name}
            </a>
          ) : (
            <>League: ${name}</>
          )}
        </h3>
      </Col>
      {image_url && (
        <Col className="text-right">
          <img
            src={`${image_url}`}
            alt={`${name}`}
            // height={30}
            className="w-auto max-w-full max-h-8"
          />
        </Col>
      )}
    </Row>
  );
};

export default MatchHeader;
