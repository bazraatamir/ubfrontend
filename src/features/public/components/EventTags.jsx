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

  const tags = [
    { label: "Хурим найр", key: "wedding" },
    { label: "Болзоо", key: "date" },
    { label: "Шинэ жил", key: "newYear" },
    { label: "Event", key: "event" },
  ];

  return (
    <nav
      className="flex flex-nowrap md:flex-wrap gap-2 sm:gap-3 items-start py-0 mt-6 sm:mt-10 w-full max-w-full overflow-x-auto md:overflow-x-visible whitespace-nowrap md:whitespace-normal"
      role="region"
      aria-label="Event filters"
    >
      {tags.map((tag) => (
        <EventTag
          key={tag.key}
          label={tag.label}
          isActive={activeStates[tag.key]}
          onClick={() => handleTagClick(tag.key)}
        />
      ))}
    </nav>
  );
};

export default EventTags;