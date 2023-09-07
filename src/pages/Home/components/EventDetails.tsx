import { Image, Layout, Row, Typography } from 'antd';

export type EventInfo = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

type EventDetailsProps = {
  details: EventInfo;
};

function formatDate(inputDateStr: string) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const inputDate = new Date(inputDateStr);
  return inputDate.toLocaleDateString(undefined, options);
}

const EventDetails: React.FC<EventDetailsProps> = ({ details }) => {
  return (
    <Layout>
      <Row>
        <Typography.Title level={3}>{details.title}</Typography.Title>
      </Row>
      <Row>
        <Typography.Paragraph italic strong>
          {details.location}&nbsp; &nbsp; {formatDate(details.date)}
        </Typography.Paragraph>
      </Row>
      <Row>
        <Image width={500} src={details.image} />
      </Row>
      <Row>
        <Typography.Paragraph>{details.description}</Typography.Paragraph>
      </Row>
    </Layout>
  );
};

export default EventDetails;
