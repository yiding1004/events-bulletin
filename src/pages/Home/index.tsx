import { ModalForm, ProCard } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { request } from 'umi';
import EventDetails, { EventInfo } from './components/EventDetails';

const HomePage: React.FC = () => {
  const [modalVisit, setModalVisit] = useState(false);
  const [events, setEvents] = useState<EventInfo[]>([]);
  const [eventDetails, setEventDetails] = useState(undefined);

  const getEventList = () => {
    request('/api/v1/queryEventList').then((res) => {
      setEvents(res.data.list);
    });
  };

  useEffect(() => {
    getEventList();
  }, []);

  return (
    <>
      <ProCard
        ghost
        gutter={[16, 16]}
        title="Events List"
        wrap
        style={{ marginBlockStart: 20 }}
      >
        {events &&
          events.map((event) => (
            <ProCard
              key={event.id}
              colSpan={6}
              layout="center"
              hoverable
              bordered
              onClick={() => {
                setModalVisit(true);
                setEventDetails(events[event.id]);
              }}
            >
              {event.title}
            </ProCard>
          ))}
      </ProCard>
      
      <ModalForm
        open={modalVisit}
        title="Event Details"
        onFinish={async () => {
          return true;
        }}
        onOpenChange={setModalVisit}
      >
        {eventDetails && (
          <EventDetails details={eventDetails}></EventDetails>
        )}
      </ModalForm>
    </>
  );
};

export default HomePage;
