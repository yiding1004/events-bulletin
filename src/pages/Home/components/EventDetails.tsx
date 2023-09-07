import { Layout, Row, Typography } from 'antd';

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

const EventDetails: React.FC<EventDetailsProps> = ({ details }) => {
  return (
    <Layout>
      <Row>
        <Typography.Title level={3}>
          <strong>{details.title}</strong>
        </Typography.Title>
      </Row>
      <Row>
        <Typography.Paragraph>{details.description}</Typography.Paragraph>
      </Row>
    </Layout>
  );
};

export default EventDetails;
