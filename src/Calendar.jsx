import React, { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameDay,
  isSameMonth,
  isToday
} from 'date-fns';
import { Button } from '@/components/ui/button';

const Calendar = ({ events = [], onDateClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => (
    <div className="flex justify-between items-center px-6 py-4 bg-[#1A2440] text-white rounded-t-lg">
      <Button className="bg-transparent text-white hover:text-yellow-400" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        &#8592;
      </Button>
      <h2 className="text-2xl font-bold">{format(currentMonth, 'MMMM yyyy')}</h2>
      <Button className="bg-transparent text-white hover:text-yellow-400" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        &#8594;
      </Button>
    </div>
  );

  const renderDays = () => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return (
      <div className="grid grid-cols-7 text-center text-sm text-white bg-[#1A2440] border-t border-[#2D3B5C]">
        {days.map((day) => (
          <div key={day} className="py-2 font-medium">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const dayEvents = events.filter(event => isSameDay(event.date, day));
        const isCurrentMonth = isSameMonth(day, monthStart);
        const today = isToday(day);

        days.push(
          <div
            key={day.toISOString()}
            className={`h-24 p-2 text-sm border border-[#2D3B5C] cursor-pointer transition duration-150 ease-in-out 
              ${!isCurrentMonth ? 'bg-[#1E2B4D] text-[#66789E]' : 'bg-[#24345D] text-white'} 
              ${today ? 'ring-2 ring-yellow-400 ring-offset-2' : ''}`}
            onClick={() => onDateClick?.(day)}
          >
            <div className="font-semibold text-right">{format(day, 'd')}</div>
            <div className="mt-1 space-y-1">
              {dayEvents.map((event, index) => (
                <div
                  key={index}
                  className="text-xs truncate bg-yellow-100 text-yellow-800 px-1 rounded"
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toISOString()} className="grid grid-cols-7">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-4xl mx-auto bg-[#24345D]">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
