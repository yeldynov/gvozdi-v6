import { useEffect, useState } from 'react';
import moment from 'moment';
import { useSessions } from '../context/SessionContext';

const useStats = () => {
  const { sessions, fetchSessions } = useSessions();
  const [isLoading, setIsLoading] = useState(true);
  const [durationsByDate, setDurationsByDate] = useState({});

  useEffect(() => {
    fetchSessions().then(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const calculateStats = () => {
      const durationsByDate = sessions.reduce((acc, item) => {
        const date = moment(item.date).format('DD/MM');

        if (acc[date]) {
          acc[date] += moment.duration(item.duration).asMinutes();
        } else {
          acc[date] = moment.duration(item.duration).asMinutes();
        }

        return acc;
      }, {});

      setDurationsByDate(durationsByDate);
    };

    calculateStats();
  }, [sessions]);

  const getTotalTime = () => {
    return sessions.reduce((acc, curr) => curr.duration + acc, 0);
  };

  const getAverage = () => {
    const totalTime = getTotalTime();
    return (moment.duration(totalTime).asMinutes() / sessions.length).toFixed(
      0
    );
  };

  const getAverageDuration = () => {
    const durations = Object.values(durationsByDate);
    return (
      durations.reduce((sum, duration) => sum + duration, 0) / durations.length
    ).toFixed();
  };

  return {
    isLoading,
    sessions,
    durationsByDate,
    getTotalTime,
    getAverage,
    getAverageDuration,
  };
};

export default useStats;
