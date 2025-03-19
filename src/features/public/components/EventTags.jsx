"use client";

import React from "react";
import EventTag from "./EventTag";

const EventTags = ({ activeStates, setActiveStates }) => {
  const handleTagClick = (tagKey) => {
    setActiveStates((prev) => ({
      ...prev,
      [tagKey]: !prev[tagKey],
    }));
  };

  return (
    <nav
      className="flex flex-wrap gap-3 items-start py-0 h-20 mt-10"
      role="region"
      aria-label="Event filters"
    >
      <EventTag
        label="Хурим найр"
        isActive={activeStates.wedding}
        onClick={() => handleTagClick("wedding")}
      />
      <EventTag
        label="Болзоо"
        isActive={activeStates.date}
        onClick={() => handleTagClick("date")}
      />
      <EventTag
        label="Шинэ жил"
        isActive={activeStates.newYear}
        onClick={() => handleTagClick("newYear")}
      />
      <EventTag
        label="Event"
        isActive={activeStates.event}
        onClick={() => handleTagClick("event")}
      />
    </nav>
  );
};

export default EventTags;
