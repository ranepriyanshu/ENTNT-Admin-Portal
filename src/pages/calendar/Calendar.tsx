import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

function Cal(): JSX.Element {
  const [date, setDate] = useState<Date>(new Date());
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<{ [key: string]: string }>({});
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const onChangeDate = (date: Date): void => {
    setDate(date);
    setNote(notes[date.toDateString()] || "");
    setShowCalendar(false);
  };

  const handleNoteChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNote(event.target.value);
  };

  const addNote = (): void => {
    if (!note) return; // Ignore adding empty notes
    setNotes({
      ...notes,
      [date.toDateString()]: note,
    });
    setNote("");
  };

  const onLowerCalendarChange = (date: Date): void => {
    setDate(date);
    setNote(notes[date.toDateString()] || "");
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold">Calendar Notes App</h1>
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="grid grid-cols-7 gap-1">
          <div className="col-span-7 grid grid-cols-7">
            <div className="col-span-1 text-center">Sun</div>
            <div className="col-span-1 text-center">Mon</div>
            <div className="col-span-1 text-center">Tue</div>
            <div className="col-span-1 text-center">Wed</div>
            <div className="col-span-1 text-center">Thu</div>
            <div className="col-span-1 text-center">Fri</div>
            <div className="col-span-1 text-center">Sat</div>
          </div>
          <div className="col-span-7 grid grid-cols-7">
            <div className="col-span-7 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                Select Date
              </button>
              {showCalendar && (
                <div className="absolute z-10 mt-2">
                  <Calendar
                    value={date}
                    onChange={onChangeDate}
                    className="rounded-lg border border-gray-300 shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-span-7 grid grid-cols-7">
            {Array.from({ length: 42 }, (_, i) => {
              const currentDate = new Date(
                date.getFullYear(),
                date.getMonth(),
                i - date.getDay() + 1
              );
              const currentDateString = currentDate.toDateString();
              return (
                <div
                  key={i}
                  className="w-32 h-32 relative cursor-pointer"
                  onClick={() => setDate(currentDate)}
                >
                  <div className="absolute top-0 right-0 left-0">
                    {currentDate.getDate()}
                  </div>
                  {date.toDateString() === currentDateString && (
                    <div className="absolute bottom-0 right-0 left-0">
                      <textarea
                        className="w-full h-full bg-gray-100 border border-gray-300 rounded p-1 resize-none"
                        value={note}
                        onChange={handleNoteChange}
                        placeholder={
                          !notes[currentDateString] ? "Enter note..." : ""
                        }
                      />
                    </div>
                  )}
                  {notes[currentDateString] && (
                    <div className="absolute bottom-0 right-0 left-0 mt-2 p-2 bg-gray-100 rounded">
                      {notes[currentDateString]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addNote}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default Cal;
